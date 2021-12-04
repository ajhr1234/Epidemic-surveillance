<template>

	<div id="main">
		<h1>首页</h1>
		<span style="float: right;margin-right: 400px">Username: {{name}}</span>
		<div id="header" class="header">
			<h1>口罩预约平台</h1>
			<button type="button" class="guide">
				<router-link to="/guide" id="guide">操作指南</router-link>
			</button>

			<div id="book">
				<div id="online" @click="send()">
					<img src="../../images/u79.png" style="float: left;">
					<p style="float: left;">
						<router-link :to="'/online_book/'+userName" id="online_book" style="text-decoration: none;color: #000000;">
							在线预约</router-link>
					</p>
				</div>
				<div id="my">
					<img src="../../images/u80.png" style="float: left;">
					<p style="float: left;">
						<router-link :to="'/my_book/'+userName" id="my_book" style="text-decoration: none;color: #000000;">我的预约
						</router-link>
					</p>
				</div>
			</div>
			<div id="rule">
				<p style="float: left;font-weight: bold;">预约规则</p>
				<br>
				<br>
				<p style="text-align: left;">&nbsp &nbsp 每天上午9点起可预约次日现场购买时间段，次日早上8点到晚上22点可提货。每人每三天内只能预约一次, 一人一证一次仅购5个口罩。
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue from 'vue';
	var Event = new Vue();//定义一个空的Vue实例
	export default {
		props: ['name'],
		name: "Main",
		data(){
			return{
				userName:''
			}
		},
		mounted() {
			this.userName=sessionStorage.getItem("userName");
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		// created() {
		// 	axios.get('http://4485357db8.zicp.vip/ess_team11/login').then(res=>{
		// 		// this.options=res.data.user
		// 		console.log(res)
		// 	})
		// }
	}
</script>

<style scoped>
	h1 {
		font-size: 20px;
		color: white;
		padding-top: 40px;
	}

	#main {
		width: 400px;
		margin-left: 38%;
		margin-top: -50px;
	}


	.header {
		height: 150px;
		width: 100%;
		background: url(../../images/u13.jpg) no-repeat;
	}

	.guide {
		border-radius: 20px;
		margin-top: 20px;
		background-color: #5dbeff;
		text-decoration: none;
		height: 30px;
		width: 90px;
		border-color: #42adff;
	}

	#guide {
		color: white;
		text-decoration: none;
	}

	#book {
		margin-top: 35px;
		height: 80px;
	}

	#online {
		float: left;
		height: 80px;
		width: 150px;
	}

	#rule {
		width: 100%;

	}

	#my {
		float: left;
		padding-left: 30px;
		height: 80px;
		width: 150px;
	}
</style>
