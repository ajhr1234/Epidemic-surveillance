<template>
	<div id="main" style="    color:#000000;">
		<div id="header">
			<el-button type="text" icon="el-icon-caret-left" style="float: left;display: inline-block; margin-left: -400px; margin-top: 30px;">
				<router-link to='/MV' id="main1">BACK</router-link>
			</el-button>
      <img src="../../images/mask02.png" style="width: 50px; float: left; margin-left: 100px;"/>
			<p style="display: inline-block; float: left; margin-left: 20px;">Medical mask information</p>
			<el-divider></el-divider>
		</div>
		<div id="content">
			<div id="no">
				<div id="title">
					<h3 style="float: left;margin-left: 20px;" v-model="name">{{name}}</h3>
					<h3 style="float: right;color: blue;">not purchased<i class="el-icon-arrow-down"></i></h3>
				</div>
        <el-divider></el-divider>
				<div id="left">
					How to get
				</div>
				<div id="right">
					{{method}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Reservation outlets
				</div>
				<div id="right">
					{{place}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Appointment time
				</div>
				<div id="right">
					{{check}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Number of masks reserved
				</div>
				<div id="right">
					{{num}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Whether to buy
				</div>
				<div id="right">
					{{purchase}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Appointment number
				</div>
				<div id="right">
					{{id}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					QR code for redemption
				</div>
				<div id="right">

				</div>
				<el-divider></el-divider>
				<div id="right" style="margin-left: -50px;">
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
				method: "Buy on site",
				name:"Longyan Xinlianxin Pharmacy",
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
    background-color: #66b0b5;
    height: 850px;
    width: 500px;
    border: 3px solid #7fbbca;
    border-top: none;
    border-radius: 10px;
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
   .el-divider--horizontal{
       /* margin: 8px 10px; */
       background: 0 0;
       border-top: 3px solid white;
   }
</style>
