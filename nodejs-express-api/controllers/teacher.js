import { Router } from 'express';
import { body } from 'express-validator';
import validateFormData from '../helpers/validate_form.js';
import DB from '../models/db.js';


const router = Router();




/**
 * Route to list teacher records
 * @GET /teacher/index/{fieldname}/{fieldvalue}
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
			let searchFields = DB.Teacher.searchFields();
			where[DB.op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		if(queryFilters.length){
			where[DB.op.and] = queryFilters;
		}
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = DB.getOrderBy(req, 'teacher_id', 'desc');
		query.attributes = DB.Teacher.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 10;
		let result = await DB.Teacher.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Teacher record
 * @GET /teacher/view/{recid}
 */
router.get('/view/:recid', async (req, res) => {
	try{
		const recid = req.params.recid || null;
		const query = {}
		const where = {}
		where['teacher_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Teacher.viewFields();
		let record = await DB.Teacher.findOne(query);
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
 * Route to insert Teacher record
 * @POST /teacher/add
 */
router.post('/add/', 
	[
		body('name').not().isEmpty(),
		body('email').not().isEmpty().isEmail(),
	], validateFormData
, async function (req, res) {
	try{
		let modeldata = req.getValidFormData();
		
		// check if name already exist.
		let nameCount = await DB.Teacher.count({ where:{ 'name': modeldata.name } });
		if(nameCount > 0){
			return res.badRequest(`${modeldata.name} already exist.`);
		}
		
		// check if email already exist.
		let emailCount = await DB.Teacher.count({ where:{ 'email': modeldata.email } });
		if(emailCount > 0){
			return res.badRequest(`${modeldata.email} already exist.`);
		}
		
		//save Teacher record
		let record = await DB.Teacher.create(modeldata);
		//await record.reload(); //reload the record from database
		const recid =  record['teacher_id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Teacher record for edit
 * @GET /teacher/edit/{recid}
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		const recid = req.params.recid;
		const query = {};
		const where = {};
		where['teacher_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Teacher.editFields();
		let record = await DB.Teacher.findOne(query);
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
 * Route to update  Teacher record
 * @POST /teacher/edit/{recid}
 */
router.post('/edit/:recid', 
	[
		body('name').optional({nullable: true}).not().isEmpty(),
	], validateFormData
, async (req, res) => {
	try{
		const recid = req.params.recid;
		let modeldata = req.getValidFormData({ includeOptionals: true });
		
		// check if name already exist.
		let nameCount = await DB.Teacher.count({where:{'name': modeldata.name, 'teacher_id': {[DB.op.ne]: recid} }});
		if(nameCount > 0){
			return res.badRequest(`${modeldata.name} already exist.`);
		}
		const query = {};
		const where = {};
		where['teacher_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Teacher.editFields();
		let record = await DB.Teacher.findOne(query);
		if(!record){
			return res.notFound();
		}
		await DB.Teacher.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Teacher record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @GET /teacher/delete/{recid}
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = {};
		const where = {};
		where['teacher_id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await DB.Teacher.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await DB.Teacher.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
