<template>
	<div id="main" style=" color:#000000;">
		<div id="header">
			<el-button type="text" icon="el-icon-caret-left"
				style="float: left;display: inline-block; margin-left: -400px; margin-top: 30px;">
				<router-link to='/MV' id="main1">BACK</router-link>
			</el-button>
			<img src="../../images/acid2.png" style="width: 50px; float: left; margin-left: 100px;" />
			<p style="display: inline-block; float: left; margin-left: 20px;">Nucleic acid information</p>
			<el-divider></el-divider>
		</div>
		<div id="content">
			<div id="no">
				<div id="title">
					<h3 style="float: left;margin-left: 10px;" v-model="Name">{{Name}}</h3>
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
					Date
				</div>
				<div id="right">
					{{NDate}}
				</div>
				<el-divider></el-divider>
				<div id="left">
					Appointment number
				</div>
				<div id="right">
					{{Nid}}
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
	import qrCode from './qrCode';
	export default {
		data() {
			return {
				Name: "",
				Type: "",
				INumber: "",
				Phone: "",
				Address: "",
				Hospital: "",
				NDate: "",
				userName: "",
				Nid: "",
				formData: null,
				mid: 0,
			}
		},
		components: {
			qrCode
		},
		created() {
			var mid = location.href.split("=")[1]
			this.mid = mid;
			this.userName = sessionStorage.getItem("userName")
			this.getNewsList()
		},
		methods: {
			getNewsList() {
				this.Name = sessionStorage.getItem("name")
				this.Type = sessionStorage.getItem("region")
				this.INumber = sessionStorage.getItem("unumber")
				this.Phone = sessionStorage.getItem("pnumber");
				this.Address = sessionStorage.getItem("address")
				this.Hospital = sessionStorage.getItem("NucleicHospital")
				this.NDate = sessionStorage.getItem("NucleicDate")
				this.Nid = sessionStorage.getItem("Nid");

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
	#main {
		width: 400px;
		margin-left: 38%;
		background-color: #66b0b5;
		height: 1010px;
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

	#left,
	#right {
		width: 45%;
		display: inline-block;
	}

	#left {
		margin-left: 10px;
		text-align: left;
	}

	#right {
		margin-right: 10px;
		text-align: right;
	}

	.el-divider--horizontal {
		/* margin: 8px 10px; */
		background: 0 0;
		border-top: 3px solid white;
	}
</style>
