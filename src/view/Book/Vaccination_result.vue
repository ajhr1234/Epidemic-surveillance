<template>
	<div id="main" style="color:#000000;">
		<div id="header">
			<el-button type="text" icon="el-icon-caret-left" style="float: left;display: inline-block; margin-left: -400px; margin-top: 30px;">
				<router-link to='/MV' id="main1">BACK</router-link>
			</el-button>
      <img src="../../images/mask02.png" style="width: 50px; float: left; margin-left: 100px;"/>
			<p style="display: inline-block; float: left; margin-left: 20px;">Vaccination information</p>
			<el-divider></el-divider>
		</div>
		<div id="content">
			<div id="no">
				<div id="title">
					<h3 style="float: left;margin-left: 10px;" v-model="name">{{name}}</h3>
					<h3 style="float: right;color: blue;">not purchased<i class="el-icon-arrow-down"></i></h3>
				</div>
         <el-divider></el-divider>
				<div id="left">
					Name
				</div>
				<div id="right">
					{{Name}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					ID Type
				</div>
				<div id="right">
					{{Type}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					ID Number
				</div>
				<div id="right">
					{{INumber}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Phone
				</div>
				<div id="right">
					{{Phone}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Address
				</div>
				<div id="right">
					{{Address}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Hospital
				</div>
				<div id="right">
					{{Hospital}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Times
				</div>
				<div id="right">
					{{num}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Brand
				</div>
				<div id="right">
					{{brand}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Date
				</div>
				<div id="right">
					{{VDate}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Appointment number
				</div>
				<div id="right">
					{{Vid}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					QR code for redemption
				</div>
				<div id="right">

				</div>
				<el-divider></el-divider>
				<div id="right" style="margin-left: -30px;">
					<!-- <img src="../../images/1628581253.png" style="width: 80%;"> -->
					<qrCode :mid="mid"></qrCode>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
	import Event from '../../components/Event.js';
	import qrCode from './qrCode'
	export default {
		data() {
			return {
				Name: "",
				Type: "",
				INumber: "",
				Phone:"",
				Address:"",
				Hospital:"",
				VDate:"",
				userName:"",
				Vid:"",
				num:"",
				brand:"",
				formData: null,
				mid: 0
			}
		},
		components:{
			qrCode
		},
		created() {
			var mid=location.href.split("=")[1]
			this.mid = mid;
			this.userName = sessionStorage.getItem("userName")
			this.getNewsList()
		},
		methods:{
			getNewsList(){
				this.Name=sessionStorage.getItem("name")
				this.Type=sessionStorage.getItem("region")
				this.INumber=sessionStorage.getItem("unumber")
				this.Phone = sessionStorage.getItem("pnumber");
				this.Address=sessionStorage.getItem("VaccinationAddress")
				this.Hospital=sessionStorage.getItem("VaccinationHospital")
				this.VDate=sessionStorage.getItem("VaccinationDate")
				this.Vid = sessionStorage.getItem("Vid");
				this.num = sessionStorage.getItem("Vtimes");
				this.brand=sessionStorage.getItem("Vbrand");
				this.Address=sessionStorage.getItem("address")
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
		height: 1150px;
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
