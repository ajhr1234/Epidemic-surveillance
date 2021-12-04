import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from "../view/Content.vue";
import Main from "../view/Book/Main";
import Login from "../view/Login"
import NotFound from "../view/NotFound"
import Home from "../view/Home.vue"
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
import Guide from "../view/Book/guide";
import Online_book from "../view/Book/online_book.vue";
import My_book from "../view/Book/my_book.vue";
import Success from "../view/Book/success.vue"
import Test from "../view/Book/test.vue";
import User from "../view/User.vue"
import Ucon from "../view/User_content.vue"
import MPI from "../view/Userstorage/Modify_Personal_Information.vue"
import MV from "../view/Userstorage/Message_View.vue"
import about from "../view/Userstorage/About_Volunteers.vue"
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
				{
					//路由路径
					path: '/guide',
					name: 'guide',
					//跳转的组件
					component: Guide
				
				},
				{
					//路由路径
					path: '/online_book/:name',
					name: 'online_book',
					//跳转的组件
					component: Online_book
				
				},
				{
					//路由路径
					path: '/my_book/:name',
					name: 'my_book',
					//跳转的组件
					component: My_book
				
				},
				{
					//路由路径
					path: '/success/:name',
					name: 'success',
					//跳转的组件
					component: Success
				},
				{
					//路由路径
					path: '/test',
					name: 'test',
					//跳转的组件
					component: Test
				},
				{
					//路由路径
					path: '/user',
					name: 'user',
					//跳转的组件
					component: User
				},
				{
					//路由路径
					path: '/ucon',
					name: 'ucon',
					//跳转的组件
					component: Ucon
				},
				{
					//路由路径
					path: '/MPI',
					name: 'MPI',
					//跳转的组件
					component: MPI
				},
				{
					//路由路径
					path: '/MV',
					name: 'MV',
					//跳转的组件
					component: MV
				},
				{
					//路由路径
					path: '/about',
					name: 'about',
					//跳转的组件
					component: about
				}
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
