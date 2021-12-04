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
			<h1>预约成功</h1>
			<p>您可以在我的预约中查询预约信息<br>现场购买时请出示以下二维码</p>
			<img src="../../images/1628581253.png" style="width:50%;">
			<br>
			<el-button type="primary" style="margin-top:30px ;" @click.native="send">
				<router-link to="/my_book" id="guide">查看预约</router-link>
			</el-button>
			<br>
			<el-button plain style="margin-top:10px ;">
				<router-link to="/main" id="guide1">返回首页</router-link>
			</el-button>
		</div>
	</div>
</template>

<script>
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
				id: ""
			}
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
		width:400px;
		margin-left: 38%;
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
