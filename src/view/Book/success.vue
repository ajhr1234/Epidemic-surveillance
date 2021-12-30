<template>
  <body style=" padding: 0; margin-top: -29px; height: 650px;">
	<div id="main">
		<div id="header">
			<!-- <el-button type="text" icon="el-icon-caret-left" style="float: left; margin-left: -400px; margin-top: 30px;">
				<router-link :to="'/main/'+ userName" id="main1">BACK</router-link>
			</el-button> -->
			<p style="display: inline-block; margin-top: 20px; font-size: 20px; color: #FFFFFF;">Congratulations!</p>
			<!-- <el-divider></el-divider> -->
		</div>
		<div id="content">
			<h1>The appointment is submitted.</h1>
			<p>You can check the appointment information in my appointment.<br>Please show the following QR code when purchasing on site.</p>
			<!-- <img src="../../images/1628581253.png" style="width:50%;"> -->
			<qrCode :mid="mid"></qrCode>
			<br>
			<el-button type="primary" style="margin-top:30px; background-color: #E2762D; border-radius: 40px;" @click.native="send">
				<router-link  :to="'/my_book/'+userName" id="guide">Check result</router-link>
			</el-button>
			<br>
			<el-button plain style="margin-top:10px; border-radius: 40px;">
				<router-link :to="'/main/'+userName" id="guide1">BACK</router-link>
			</el-button>
		</div>
	</div>
  </body>
</template>

<script>
    import qrCode from './qrCode'
	import Event from '../../components/Event.js';
	export default {
		data() {
			return{
				userName: "",
				place: "",
				method: "现场购买",
				name: "龙岩心连心药房",
				check: "",
				num: 0,
				purchase: "",
				id: "",
				mid: 0
			}
		},
		components:{
			qrCode
		},
		methods: {
			send() {
				Event.$emit('data-name', this.name);
				Event.$emit('data-num', this.num);
				Event.$emit('data-check', this.check);
				// Event.$emit('data-method', this.method);
				Event.$emit('data-purchase', this.purchase);
				Event.$emit('data-id', this.id);
				Event.$emit('data-place', this.place);
			},
		},
		created() {
			var mid=location.href.split("=")[1]
			this.mid = mid;
		},
		mounted() {
			this.userName = sessionStorage.getItem("userName")
			//在模板编译完成后执行
			Event.$on('data-name', name => {
				this.name = name; //箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
				console.log(this.name);
				console.log(name);
			})
			// Event.$on('data-method', method => {
			// 	this.method = method;
			// })
			Event.$on('data-place',place => {
				this.place = place;

			})
			Event.$on('data-check',check => {
				this.check = check;
			})
			Event.$on('data-purchase',purchase => {
				this.purchase = purchase;
			})
			Event.$on('data-id',id => {
				this.id = id;
			})
			Event.$on('data-num',num => {
				this.num = num;
			})
		}
	}
</script>

<style scoped>
	#main{
		width:500px;
    height: 600px;
		margin-left: 38%;
    margin-top: 40px;
    background-color: #66B0B5;
    border: 2px #FFFFFF solid;
    border-radius: 40px;
	}
	#main1 {
		color: blue;
		text-decoration: none;
	}

	#guide {
		color: white;
		text-decoration: none;
	}

	#guide1 {
		color: skyblue;
		text-decoration: none;
	}
</style>
