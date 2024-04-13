import express from 'express';
import compression from 'compression';
import cors from 'cors';
import ejs from 'ejs';
import config from './config.js';
import extendExpressMiddleware from './helpers/express_middleware.js';
import HomeController from './controllers/home.js';
import ComponentsDataController from './controllers/components_data.js';
import FileUploaderController from './controllers/fileuploader.js';
import S3UploaderController from './controllers/s3uploader.js';
import AdminController from  './controllers/admin.js';
import CertificateController from  './controllers/certificate.js';
import CourseController from  './controllers/course.js';
import CourseResourceController from  './controllers/courseresource.js';
import MistakeBookController from  './controllers/mistakebook.js';
import PurchaseRecordController from  './controllers/purchaserecord.js';
import ReviewController from  './controllers/review.js';
import StudentController from  './controllers/student.js';
import TeacherController from  './controllers/teacher.js';


const app = express();

//set view engine use to return Html
app.set('views', 'views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
// compress all responses
app.use(compression({ threshold: 0 }));
//allow cors on localhost
app.use(cors()); // disable when deploy to production
app.use(express.static(config.app.publicDir))
app.use(express.json()) // Parses json, multi-part (file), url-encoded
app.use(express.urlencoded({ extended:true, limit:'50mb' }));
extendExpressMiddleware(app);

//bind page route to the controllers
app.use('/api/', HomeController);
app.use('/api/admin', AdminController);
app.use('/api/certificate', CertificateController);
app.use('/api/course', CourseController);
app.use('/api/courseresource', CourseResourceController);
app.use('/api/mistakebook', MistakeBookController);
app.use('/api/purchaserecord', PurchaseRecordController);
app.use('/api/review', ReviewController);
app.use('/api/student', StudentController);
app.use('/api/teacher', TeacherController);
app.use('/api/components_data', ComponentsDataController);
app.use('/api/fileuploader', FileUploaderController);
app.use('/api/s3uploader', S3UploaderController);
app.get('*', function(req, res){
    res.status(404).json("Page not found");
});

let port = 8060;
//start app
app.listen(port, () => {
    console.log('Server is up and running on port: ' + port);
});