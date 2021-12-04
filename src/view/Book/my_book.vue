<template>
	<div id="main">
		<div id="header">
			<el-button type="text" icon="el-icon-caret-left" style="float: left;display: inline-block">
				<router-link :to="'/main/'+ userName" id="main1">返回</router-link>
			</el-button>
			<p style="display: inline-block;">预约结果</p>
			<el-divider></el-divider>
		</div>
		<div id="content">
			<div id="no">
				<div id="title">
					<h3 style="float: left;margin-left: 10px;" v-model="name">{{name}}</h3>
					<h3 style="float: right;color: blue;">未购买<i class="el-icon-arrow-down"></i></h3>
				</div>
				<div id="left">
					领取方式
				</div>
				<div id="right">
					{{method}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					预约网点
				</div>
				<div id="right">
					{{place}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					预约时间
				</div>
				<div id="right">
					{{check}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					预约数量（个）
				</div>
				<div id="right">
					{{num}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					是否购买
				</div>
				<div id="right">
					{{purchase}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					预约编号
				</div>
				<div id="right">
					{{id}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					兑换二维码
				</div>
				<div id="right">
					
				</div>
				<el-divider></el-divider>
				<div id="right">
					<img src="../../images/1628581253.png" style="width: 80%;">
				</div>

			</div>

		</div>
	</div>
</template>

<script>
	import Event from '../../components/Event.js';
	export default {
		data() {
			return {
				userName: "",
				place: "",
				method: "现场购买",
				name:"龙岩心连心药房",
				check:"",
				num:0,
				purchase:"Yes",
				id:"",
				
				formData: null,
			}
		},
		created() {
			this.userName = sessionStorage.getItem("userName")
			this.getNewsList()
		},
		methods:{
			getNewsList(){
				this.num=sessionStorage.getItem("num")
				this.check=sessionStorage.getItem("check")
				console.log(sessionStorage.getItem("hello"))
				console.log("data,"+sessionStorage.getItem("data"))
				this.place=sessionStorage.getItem("place")
				this.formData = sessionStorage.getItem('data');
				this.id = sessionStorage.getItem("id");
				console.log(name);
			},
			
			
		},
		mounted() { //在模板编译完成后执行
			// Event.$on('data-name', name => {
			// 	this.name = name; //箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
			// 	console.log(this.name);
			// 	console.log(name);
			// })
			// // Event.$on('data-method', method => {
			// // 	this.method = method;
			// // })
			// Event.$on('data-place',place => {
			// 	this.place = place; 
				
			// })
			// Event.$on('data-check',check => {
			// 	this.check = check; 
			// })
			// Event.$on('data-purchase',purchase => {
			// 	this.purchase = purchase; 
			// })
			// Event.$on('data-id',id => {
			// 	this.id = id; 
			// })
			// Event.$on('data-num',num => {
			// 	this.num = num; 
			// })
		}
	}
</script>

<style scoped>
	#main{
		width:400px;
		margin-left: 38%;
	}
	#main1 {
		color: blue;
		text-decoration: none;
	}

	#no {
		height: 500px;
	}

	#title {
		height: 50px;
	}

	#left,#right {
		width:45%;
		display: inline-block;
	}
	#left{
		margin-left: 10px;
		text-align: left;
	}
	#right{
		margin-right: 10px;
		text-align: right;
	}
</style>
