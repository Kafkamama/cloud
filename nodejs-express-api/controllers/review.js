import { Router } from 'express';
import { body } from 'express-validator';
import validateFormData from '../helpers/validate_form.js';
import DB from '../models/db.js';


const router = Router();




/**
 * Route to list review records
 * @GET /review/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req, res) => {  
	try{
		const query = {};
		let queryFilters = [];
		let where = {};
		let replacements = {};
		let fieldName = req.params.fieldname;
		let fieldValue = req.params.fieldvalue;
		
		if (fieldName){
			queryFilters.push(DB.filterBy(fieldName, fieldValue));
		}
		let search = req.query.search;
		if(search){
			let searchFields = DB.Review.searchFields();
			where[DB.op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		if(queryFilters.length){
			where[DB.op.and] = queryFilters;
		}
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = DB.getOrderBy(req, 'review_id', 'desc');
		query.attributes = DB.Review.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 10;
		let result = await DB.Review.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Review record
 * @GET /review/view/{recid}
 */
router.get('/view/:recid', async (req, res) => {
	try{
		const recid = req.params.recid || null;
		const query = {}
		const where = {}
		where['review_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Review.viewFields();
		let record = await DB.Review.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to insert Review record
 * @POST /review/add
 */
router.post('/add/', 
	[
		body('student_id').optional({nullable: true, checkFalsy: true}),
		body('course_id').optional({nullable: true, checkFalsy: true}),
		body('rating').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('comment').optional({nullable: true, checkFalsy: true}),
	], validateFormData
, async function (req, res) {
	try{
		let modeldata = req.getValidFormData();
		
		//save Review record
		let record = await DB.Review.create(modeldata);
		//await record.reload(); //reload the record from database
		const recid =  record['review_id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Review record for edit
 * @GET /review/edit/{recid}
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		const recid = req.params.recid;
		const query = {};
		const where = {};
		where['review_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Review.editFields();
		let record = await DB.Review.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  Review record
 * @POST /review/edit/{recid}
 */
router.post('/edit/:recid', 
	[
		body('student_id').optional({nullable: true, checkFalsy: true}),
		body('course_id').optional({nullable: true, checkFalsy: true}),
		body('rating').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('comment').optional({nullable: true, checkFalsy: true}),
	], validateFormData
, async (req, res) => {
	try{
		const recid = req.params.recid;
		let modeldata = req.getValidFormData({ includeOptionals: true });
		const query = {};
		const where = {};
		where['review_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Review.editFields();
		let record = await DB.Review.findOne(query);
		if(!record){
			return res.notFound();
		}
		await DB.Review.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Review record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @GET /review/delete/{recid}
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = {};
		const where = {};
		where['review_id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await DB.Review.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await DB.Review.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
