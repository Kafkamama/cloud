import { Router } from 'express';
import { body } from 'express-validator';
import validateFormData from '../helpers/validate_form.js';
import DB from '../models/db.js';


const router = Router();




/**
 * Route to list mistakebook records
 * @GET /mistakebook/index/{fieldname}/{fieldvalue}
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
			let searchFields = DB.MistakeBook.searchFields();
			where[DB.op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		if(queryFilters.length){
			where[DB.op.and] = queryFilters;
		}
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = DB.getOrderBy(req, 'mistake_id', 'desc');
		query.attributes = DB.MistakeBook.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 10;
		let result = await DB.MistakeBook.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view MistakeBook record
 * @GET /mistakebook/view/{recid}
 */
router.get('/view/:recid', async (req, res) => {
	try{
		const recid = req.params.recid || null;
		const query = {}
		const where = {}
		where['mistake_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.MistakeBook.viewFields();
		let record = await DB.MistakeBook.findOne(query);
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
 * Route to insert MistakeBook record
 * @POST /mistakebook/add
 */
router.post('/add/', 
	[
		body('student_id').optional({nullable: true, checkFalsy: true}),
		body('question_type').not().isEmpty(),
		body('question_content').not().isEmpty(),
		body('wrong_answer').optional({nullable: true, checkFalsy: true}),
		body('solution').optional({nullable: true, checkFalsy: true}),
	], validateFormData
, async function (req, res) {
	try{
		let modeldata = req.getValidFormData();
		
		//save MistakeBook record
		let record = await DB.MistakeBook.create(modeldata);
		//await record.reload(); //reload the record from database
		const recid =  record['mistake_id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  MistakeBook record for edit
 * @GET /mistakebook/edit/{recid}
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		const recid = req.params.recid;
		const query = {};
		const where = {};
		where['mistake_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.MistakeBook.editFields();
		let record = await DB.MistakeBook.findOne(query);
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
 * Route to update  MistakeBook record
 * @POST /mistakebook/edit/{recid}
 */
router.post('/edit/:recid', 
	[
		body('student_id').optional({nullable: true, checkFalsy: true}),
		body('question_type').optional({nullable: true}).not().isEmpty(),
		body('question_content').optional({nullable: true}).not().isEmpty(),
		body('wrong_answer').optional({nullable: true, checkFalsy: true}),
		body('solution').optional({nullable: true, checkFalsy: true}),
	], validateFormData
, async (req, res) => {
	try{
		const recid = req.params.recid;
		let modeldata = req.getValidFormData({ includeOptionals: true });
		const query = {};
		const where = {};
		where['mistake_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.MistakeBook.editFields();
		let record = await DB.MistakeBook.findOne(query);
		if(!record){
			return res.notFound();
		}
		await DB.MistakeBook.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete MistakeBook record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @GET /mistakebook/delete/{recid}
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = {};
		const where = {};
		where['mistake_id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await DB.MistakeBook.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await DB.MistakeBook.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
