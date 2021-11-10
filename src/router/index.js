import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from "../view/Content.vue";
import Main from "../view/Main";
import Test from "../view/user/Test.vue"
import Login from "../view/Login"
import NotFound from "../view/NotFound"
import Home from "../view/Home.vue"
import UserProfile from "../view/user/Profile"
import UserList from "../view/user/list"
import Register from "../view/Register.vue"
import RealTimeNews from "../view/realTimeNews.vue"
import epidemicMap from "../view/epidemicMap/index.vue"
import chinaMap from "../view/epidemicMap/chinaMap.vue"
import fuJianMap from "../view/epidemicMap/fuJianMap.vue"
import worldMap from "../view/epidemicMap/worldMap.vue"
import epidemicTrend from '../view/epidemicTrend/index.vue';
import chinaTrend from '../view/epidemicTrend/chinaTrend.vue';
import worldTrend from '../view/epidemicTrend/worldTrend.vue';
import lo_re from '../view/Login_register.vue'
//安装路由
Vue.use(VueRouter);

//配置导出
export default new VueRouter({
	mode: "history",
	routes: [{
			path: "/", // path 设置为 “/” ，默认显示该页面
			component: Home,
			name: "Home",
			children: [{
					//路由路径
					path: "/",
					name: 'content',
					//跳转的组件
					component: Content
				}, {
					//路由路径
					props: true,
					path: '/main/:name',
					name: 'main',
					//跳转的组件
					component: Main, //嵌套路由
					children: [{
						path: '/user/profile/:id',
						name: 'UserProfile',
						props: true,
						component: UserProfile
					}, {
						path: '/user/list',
						component: UserList
					}, {
						path: '/goHome',
						redirect: '/main'
					}]
				}, {
					//路由路径
					path: '/test',
					name: 'main',
					//跳转的组件
					component: Test
				},
				{
					//路由路径
					path: '/realTimeNews',
					name: 'realTimeNews',
					//跳转的组件
					component: RealTimeNews
				},
				{
					//路由路径
					path: '/login_index',
					name: 'login_index',
					//跳转的组件
					component: lo_re
				},
				{
					//路由路径
					path: '/login',
					name: 'login',
					//跳转的组件
					component: Login
				},
				{
					//路由路径
					path: '/register',
					name: 'register',
					//跳转的组件
					component: Register
				},
				{
					name: 'epidemicMap',
					path: '/epidemicMap',
					component: epidemicMap,
				},
				{
					path: '/fuJianMap',
					component: fuJianMap,
				},
				{
					path: '/chinaMap',
					component: chinaMap,
				},
				{
					path: '/worldMap',
					component: worldMap,
				},
				{
					name: 'epidemicTrend',
					path: '/epidemicTrend',
					component: epidemicTrend,
				},
				{
					path: '/chinaTrend',
					component: chinaTrend,
				},
				{
					path: '/worldTrend',
					component: worldTrend,
				},
			],
		},
		{
			//路由路径
			path: '*',
			//跳转的组件
			component: NotFound
		}
	]
});
