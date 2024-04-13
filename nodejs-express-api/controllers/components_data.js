import { Router } from 'express';
import DB from '../models/db.js';


const router = Router();


 /**
 * Route to get student_id_option_list records
 * @GET /components_data/student_id_option_list
 */
router.get('/student_id_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT student_id as value, name as label FROM student` ;
		
		let records = await DB.rawQueryList(sqltext);
		return res.ok(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get course_id_option_list records
 * @GET /components_data/course_id_option_list
 */
router.get('/course_id_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT course_id as value, title as label FROM course` ;
		
		let records = await DB.rawQueryList(sqltext);
		return res.ok(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get teacher_id_option_list records
 * @GET /components_data/teacher_id_option_list
 */
router.get('/teacher_id_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT teacher_id as value, name as label FROM teacher` ;
		
		let records = await DB.rawQueryList(sqltext);
		return res.ok(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Teacher table
 * @GET /components_data/teacher_name_exist/{fieldvalue}
 */
router.get('/teacher_name_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await DB.Teacher.count({ where:{ 'name': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Teacher table
 * @GET /components_data/teacher_email_exist/{fieldvalue}
 */
router.get('/teacher_email_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await DB.Teacher.count({ where:{ 'email': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to getcount_certificate value
 * @GET /components_data/getcount_certificate
 */
router.get('/getcount_certificate', async (req, res) => {
	try{
		let sqltext = `SELECT COUNT(*) AS num FROM certificate` ;
		
		let value = await DB.rawQueryValue(sqltext);
		return res.ok(value.toString());
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to getcount_course value
 * @GET /components_data/getcount_course
 */
router.get('/getcount_course', async (req, res) => {
	try{
		let sqltext = `SELECT COUNT(*) AS num FROM course` ;
		
		let value = await DB.rawQueryValue(sqltext);
		return res.ok(value.toString());
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to getcount_courseresource value
 * @GET /components_data/getcount_courseresource
 */
router.get('/getcount_courseresource', async (req, res) => {
	try{
		let sqltext = `SELECT COUNT(*) AS num FROM course_resource` ;
		
		let value = await DB.rawQueryValue(sqltext);
		return res.ok(value.toString());
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to getcount_mistakebook value
 * @GET /components_data/getcount_mistakebook
 */
router.get('/getcount_mistakebook', async (req, res) => {
	try{
		let sqltext = `SELECT COUNT(*) AS num FROM mistake_book` ;
		
		let value = await DB.rawQueryValue(sqltext);
		return res.ok(value.toString());
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to getcount_purchaserecord value
 * @GET /components_data/getcount_purchaserecord
 */
router.get('/getcount_purchaserecord', async (req, res) => {
	try{
		let sqltext = `SELECT COUNT(*) AS num FROM purchase_record` ;
		
		let value = await DB.rawQueryValue(sqltext);
		return res.ok(value.toString());
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to getcount_review value
 * @GET /components_data/getcount_review
 */
router.get('/getcount_review', async (req, res) => {
	try{
		let sqltext = `SELECT COUNT(*) AS num FROM review` ;
		
		let value = await DB.rawQueryValue(sqltext);
		return res.ok(value.toString());
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to getcount_teacher value
 * @GET /components_data/getcount_teacher
 */
router.get('/getcount_teacher', async (req, res) => {
	try{
		let sqltext = `SELECT COUNT(*) AS num FROM teacher` ;
		
		let value = await DB.rawQueryValue(sqltext);
		return res.ok(value.toString());
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to getcount_student value
 * @GET /components_data/getcount_student
 */
router.get('/getcount_student', async (req, res) => {
	try{
		let sqltext = `SELECT COUNT(*) AS num FROM student` ;
		
		let value = await DB.rawQueryValue(sqltext);
		return res.ok(value.toString());
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
