
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */


function passRouteToProps(route){
	return {
		queryParams: route.query,
		fieldName: route.params.fieldName, 
		fieldValue: route.params.fieldValue
	}
}


let routes = [{
	name: 'main',
	path: '/',
	component: () => import('layouts/MainLayout.vue'),
	children: [
		
		{ 
			path: '/home',
			name: 'home', 
			component: () => import('pages/home/home.vue'), 
			props: true 
		},//Dashboard routes


//admin routes
		{
			path: '/admin/:fieldName?/:fieldValue?',
			name: 'adminlist',
			component: () => import('pages/admin/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/admin/view/:id', 
			name: 'adminview', 
			component: () => import('pages/admin/view.vue'), 
			props: true 
		},
		{ 
			path: '/admin/add', 
			name: 'adminadd', 
			component: () => import('pages/admin/add.vue'), 
			props: true 
		},
		{ 
			path: '/admin/edit/:id', 
			name: 'adminedit', 
			component: () => import('pages/admin/edit.vue'), 
			props: true 
		},

//certificate routes
		{
			path: '/certificate/:fieldName?/:fieldValue?',
			name: 'certificatelist',
			component: () => import('pages/certificate/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/certificate/view/:id', 
			name: 'certificateview', 
			component: () => import('pages/certificate/view.vue'), 
			props: true 
		},
		{ 
			path: '/certificate/add', 
			name: 'certificateadd', 
			component: () => import('pages/certificate/add.vue'), 
			props: true 
		},
		{ 
			path: '/certificate/edit/:id', 
			name: 'certificateedit', 
			component: () => import('pages/certificate/edit.vue'), 
			props: true 
		},

//course routes
		{
			path: '/course/:fieldName?/:fieldValue?',
			name: 'courselist',
			component: () => import('pages/course/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/course/view/:id', 
			name: 'courseview', 
			component: () => import('pages/course/view.vue'), 
			props: true 
		},
		{ 
			path: '/course/add', 
			name: 'courseadd', 
			component: () => import('pages/course/add.vue'), 
			props: true 
		},
		{ 
			path: '/course/edit/:id', 
			name: 'courseedit', 
			component: () => import('pages/course/edit.vue'), 
			props: true 
		},

//courseresource routes
		{
			path: '/courseresource/:fieldName?/:fieldValue?',
			name: 'courseresourcelist',
			component: () => import('pages/courseresource/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/courseresource/view/:id', 
			name: 'courseresourceview', 
			component: () => import('pages/courseresource/view.vue'), 
			props: true 
		},
		{ 
			path: '/courseresource/add', 
			name: 'courseresourceadd', 
			component: () => import('pages/courseresource/add.vue'), 
			props: true 
		},
		{ 
			path: '/courseresource/edit/:id', 
			name: 'courseresourceedit', 
			component: () => import('pages/courseresource/edit.vue'), 
			props: true 
		},

//mistakebook routes
		{
			path: '/mistakebook/:fieldName?/:fieldValue?',
			name: 'mistakebooklist',
			component: () => import('pages/mistakebook/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/mistakebook/view/:id', 
			name: 'mistakebookview', 
			component: () => import('pages/mistakebook/view.vue'), 
			props: true 
		},
		{ 
			path: '/mistakebook/add', 
			name: 'mistakebookadd', 
			component: () => import('pages/mistakebook/add.vue'), 
			props: true 
		},
		{ 
			path: '/mistakebook/edit/:id', 
			name: 'mistakebookedit', 
			component: () => import('pages/mistakebook/edit.vue'), 
			props: true 
		},

//purchaserecord routes
		{
			path: '/purchaserecord/:fieldName?/:fieldValue?',
			name: 'purchaserecordlist',
			component: () => import('pages/purchaserecord/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/purchaserecord/view/:id', 
			name: 'purchaserecordview', 
			component: () => import('pages/purchaserecord/view.vue'), 
			props: true 
		},
		{ 
			path: '/purchaserecord/add', 
			name: 'purchaserecordadd', 
			component: () => import('pages/purchaserecord/add.vue'), 
			props: true 
		},
		{ 
			path: '/purchaserecord/edit/:id', 
			name: 'purchaserecordedit', 
			component: () => import('pages/purchaserecord/edit.vue'), 
			props: true 
		},

//review routes
		{
			path: '/review/:fieldName?/:fieldValue?',
			name: 'reviewlist',
			component: () => import('pages/review/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/review/view/:id', 
			name: 'reviewview', 
			component: () => import('pages/review/view.vue'), 
			props: true 
		},
		{ 
			path: '/review/add', 
			name: 'reviewadd', 
			component: () => import('pages/review/add.vue'), 
			props: true 
		},
		{ 
			path: '/review/edit/:id', 
			name: 'reviewedit', 
			component: () => import('pages/review/edit.vue'), 
			props: true 
		},

//student routes
		{
			path: '/student/:fieldName?/:fieldValue?',
			name: 'studentlist',
			component: () => import('pages/student/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/student/view/:id', 
			name: 'studentview', 
			component: () => import('pages/student/view.vue'), 
			props: true 
		},
		{ 
			path: '/student/add', 
			name: 'studentadd', 
			component: () => import('pages/student/add.vue'), 
			props: true 
		},
		{ 
			path: '/student/edit/:id', 
			name: 'studentedit', 
			component: () => import('pages/student/edit.vue'), 
			props: true 
		},

//teacher routes
		{
			path: '/teacher/:fieldName?/:fieldValue?',
			name: 'teacherlist',
			component: () => import('pages/teacher/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/teacher/view/:id', 
			name: 'teacherview', 
			component: () => import('pages/teacher/view.vue'), 
			props: true 
		},
		{ 
			path: '/index/register', 
			name: 'teacheruserregister', 
			component: () => import('pages/index/userregister.vue'), 
			props: true 
		},
		{ 
			path: '/account/edit', 
			name: 'teacheraccountedit', 
			component: () => import('pages/account/accountedit.vue'), 
			props: true 
		},
		{ 
			path: '/account', 
			name: 'teacheraccountview', 
			component: () => import('pages/account/accountview.vue'), 
			props: true 
		},
		{ 
			path: '/teacher/add', 
			name: 'teacheradd', 
			component: () => import('pages/teacher/add.vue'), 
			props: true 
		},
		{ 
			path: '/teacher/edit/:id', 
			name: 'teacheredit', 
			component: () => import('pages/teacher/edit.vue'), 
			props: true 
		},

		
		
		
		

		//Error pages
		{ path:  '/error/forbidden', name: 'forbidden',  component: () => import('pages/errors/forbidden.vue') },
		{ path: '/error/notfound',  name: 'notfound', component: () => import('pages/errors/pagenotfound.vue') }
	],
	
	},
	{ path: '/:catchAll(.*)*', component: () => import('pages/errors/pagenotfound.vue') }
];

export default route(async function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE == 'history' ? createWebHistory : createWebHashHistory)
	
	const mainRoute = routes.find(x => x.name = "main");
	
	
	const Router = createRouter({
	scrollBehavior(to, from, savedPostion){
		if(savedPostion) return savedPostion;
		return { top:0 }
	},
    routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  return Router
})

