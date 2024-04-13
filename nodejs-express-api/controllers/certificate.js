import { Router } from 'express';
import { body } from 'express-validator';
import validateFormData from '../helpers/validate_form.js';
import DB from '../models/db.js';


const router = Router();




/**
 * Route to list certificate records
 * @GET /certificate/index/{fieldname}/{fieldvalue}
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
			let searchFields = DB.Certificate.searchFields();
			where[DB.op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		if(queryFilters.length){
			where[DB.op.and] = queryFilters;
		}
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = DB.getOrderBy(req, 'certificate_id', 'desc');
		query.attributes = DB.Certificate.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 10;
		let result = await DB.Certificate.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Certificate record
 * @GET /certificate/view/{recid}
 */
router.get('/view/:recid', async (req, res) => {
	try{
		const recid = req.params.recid || null;
		const query = {}
		const where = {}
		where['certificate_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Certificate.viewFields();
		let record = await DB.Certificate.findOne(query);
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
 * Route to insert Certificate record
 * @POST /certificate/add
 */
router.post('/add/', 
	[
		body('student_id').optional({nullable: true, checkFalsy: true}),
		body('course_id').optional({nullable: true, checkFalsy: true}),
		body('issue_date').not().isEmpty(),
	], validateFormData
, async function (req, res) {
	try{
		let modeldata = req.getValidFormData();
		
		//save Certificate record
		let record = await DB.Certificate.create(modeldata);
		//await record.reload(); //reload the record from database
		const recid =  record['certificate_id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Certificate record for edit
 * @GET /certificate/edit/{recid}
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		const recid = req.params.recid;
		const query = {};
		const where = {};
		where['certificate_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Certificate.editFields();
		let record = await DB.Certificate.findOne(query);
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
 * Route to update  Certificate record
 * @POST /certificate/edit/{recid}
 */
router.post('/edit/:recid', 
	[
		body('student_id').optional({nullable: true, checkFalsy: true}),
		body('course_id').optional({nullable: true, checkFalsy: true}),
		body('issue_date').optional({nullable: true}).not().isEmpty(),
	], validateFormData
, async (req, res) => {
	try{
		const recid = req.params.recid;
		let modeldata = req.getValidFormData({ includeOptionals: true });
		const query = {};
		const where = {};
		where['certificate_id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Certificate.editFields();
		let record = await DB.Certificate.findOne(query);
		if(!record){
			return res.notFound();
		}
		await DB.Certificate.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Certificate record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @GET /certificate/delete/{recid}
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = {};
		const where = {};
		where['certificate_id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await DB.Certificate.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await DB.Certificate.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
