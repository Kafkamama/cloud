import { Router } from 'express';
import { body } from 'express-validator';
import validateFormData from '../helpers/validate_form.js';
import DB from '../models/db.js';


const router = Router();




/**
 * Route to list course records
 * @GET /course/index/{fieldname}/{fieldvalue}
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
			let searchFields = DB.Course.searchFields();
			where[DB.op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		if(queryFilters.length){
			where[DB.op.and] = queryFilters;
		}
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = DB.getOrderBy(req, 'course_id', 'desc');
		query.attributes = DB.Course.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 10;
		let result = await DB.Course.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Course record
 * @GET /course/view/{recid}
 */
router.get('/view/:recid', async (req, res) => {
	try{
		const recid = req.params.recid || null;
		const query = {}
		const where = {}
		where['course_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Course.viewFields();
		let record = await DB.Course.findOne(query);
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
 * Route to insert Course record
 * @POST /course/add
 */
router.post('/add/', 
	[
		body('teacher_id').optional({nullable: true, checkFalsy: true}),
		body('title').not().isEmpty(),
		body('description').optional({nullable: true, checkFalsy: true}),
		body('learning_objectives').optional({nullable: true, checkFalsy: true}),
		body('target_audience').optional({nullable: true, checkFalsy: true}),
		body('estimated_duration').optional({nullable: true, checkFalsy: true}).isNumeric(),
	], validateFormData
, async function (req, res) {
	try{
		let modeldata = req.getValidFormData();
		
		//save Course record
		let record = await DB.Course.create(modeldata);
		//await record.reload(); //reload the record from database
		const recid =  record['course_id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Course record for edit
 * @GET /course/edit/{recid}
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		const recid = req.params.recid;
		const query = {};
		const where = {};
		where['course_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Course.editFields();
		let record = await DB.Course.findOne(query);
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
 * Route to update  Course record
 * @POST /course/edit/{recid}
 */
router.post('/edit/:recid', 
	[
		body('teacher_id').optional({nullable: true, checkFalsy: true}),
		body('title').optional({nullable: true}).not().isEmpty(),
		body('description').optional({nullable: true, checkFalsy: true}),
		body('learning_objectives').optional({nullable: true, checkFalsy: true}),
		body('target_audience').optional({nullable: true, checkFalsy: true}),
		body('estimated_duration').optional({nullable: true, checkFalsy: true}).isNumeric(),
	], validateFormData
, async (req, res) => {
	try{
		const recid = req.params.recid;
		let modeldata = req.getValidFormData({ includeOptionals: true });
		const query = {};
		const where = {};
		where['course_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Course.editFields();
		let record = await DB.Course.findOne(query);
		if(!record){
			return res.notFound();
		}
		await DB.Course.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Course record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @GET /course/delete/{recid}
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = {};
		const where = {};
		where['course_id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await DB.Course.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await DB.Course.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
