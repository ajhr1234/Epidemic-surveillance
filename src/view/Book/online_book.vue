<template>
	<div id="main">
		<div id="header">
			<el-button type="text" icon="el-icon-caret-left" style="float: left;display: inline-block">
				<router-link :to="'/main/'+ userName" id="main1">返回</router-link>
			</el-button>
			<p style="display: inline-block;">预约界面</p>
			<el-divider></el-divider>
		</div>
		选择网点
		<!-- <el-cascader :options="list" :show-all-levels="false"></el-cascader> -->
		<el-cascader :options="formData.options" :show-all-levels="false" style="color: #000000;" v-model="formData.place"></el-cascader>
		<br>
		<div id="time">
			<p style="text-align: left;">预约时间</p>
			<el-button type="primary" style="float: left;">明天<br>{{ formData.dateTime | dateFormat_to}}</el-button>
			<el-button type="info" style="float: right;">后天<br>{{ formData.dateTime | dateFormat_af}}</el-button>
			<div id="specific">
				<el-button type="primary" plain id="time1" v-model="formData.check"
					v-for="(item,index) in formData.times" :key="index + '-only'" @click="getTime(index,item)" style="">
					{{item}}</el-button>
			</div>

		</div>
		<div id="book">
			<span style="float: left;">预约物品</span>
			<el-divider direction="vertical"></el-divider>
			<span v-model="formData.goods">&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp{{formData.goods}}</span>
			<el-divider></el-divider>
			<span style="float: left;">预约数量（个）&nbsp &nbsp&nbsp&nbsp &nbsp</span>
			<el-divider direction="vertical"></el-divider>
			<el-input-number v-model="formData.num" @change="handleChange" :min="1" :max="10" label="描述文字">
			</el-input-number>
			<el-divider></el-divider>
		</div>
		<div id="">
			领取方式 &nbsp &nbsp&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp &nbsp<el-button round
				v-model="formData.method">{{formData.method}}</el-button>
		</div>
		<div id="footer">
			<!-- <el-button type="primary" @click.native="send">
			<router-link to="/my_book" id="success" style="color: white;text-decoration: none;">立即预约</router-link> 
			</el-button> -->
			<el-button type="primary">
				<div style="color: white;text-decoration: none;" @click="submit">立即预约</div>
			</el-button>

		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue from 'vue';
	var Event = new Vue();//定义一个空的Vue实例
	export default {
		props: ['name'],
		data() {	
			return {
				userName: "",
				formData: {
					num: '',
					date: "",
					check: '',
					place: "",
					goods: "口罩",
					method: "网点购买",
					id: "",
					purchase: "",
					//list:[],
					options: [{
						value: 'place1',
						label: 'place1'
					},{
						value: 'place2',
						label: 'place2'
					}
					],
					times: ['8:00', '9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
					dateTime: new Date(),
					msg: -1,
					id:'',
				},

			};
		},
		created() {
			this.getNewsList(),
			this.getAreaList()
		},

		mounted() {
			this.userName = sessionStorage.getItem("userName")
		},

		methods: {
			// send() {
			// 	// Event.$emit('data-name', this.name);
			// 	Event.$emit('data-num', this.num);
			// 	// Event.$emit('data-check', this.check);
			// 	// Event.$emit('data-method', this.method);
			// 	// Event.$emit('data-purchase', this.purchase);
			// 	// Event.$emit('data-id', this.id);
			// 	// Event.$emit('data-place', this.place);
			// },
			handleChange(value) {
				console.log(value);
			},
			getTime(value, item) {
				this.formData.check = item;
				console.log(value);
				console.log(item);
				console.log(this.formData.place[0])
			},
			getNewsList() {
				console.log(this.$props)
				//  axios.get('/api/get/news').then(res=>{
				//  	this.list=res.data.list
				// this.num=res.data.list[0].num
				// this.check=res.data.list[0].time
				// this.method=res.data.list[0].method
				// this.name=res.data.list[0].name
				// this.id=res.data.list[0].id
				// this.purchase=res.data.list[0].purchase
				// this.place=res.data.list[0].place
				// console.log(res)
				//  })
				// this.$axios.post('/ess_team11/login', {
				// 		uname: this.formData.num,
				// 		upass: this.formData.check
				// 	})
				// 	.then(result => {
				// 		console.log(result.data)
				// 		this.formData.msg = result.data.msg
				// 	})
				// 	.catch(err => {
				// 		console.log(err)
				// 	})
			},
			getAreaList() {
				// axios.get('/api/get/area').then(res => {
				// 	this.formData.options = res.data.list
				// 	console.log(res)
				// })
			},

			submit() {
				this.formData.id=Math.round(Math.random()*50000)   // 生成0~50000的随机整数
				this.$router.push('/my_book/'+ this.userName)
				sessionStorage.setItem("num", this.formData.num)
				sessionStorage.setItem("check", this.formData.check)
				sessionStorage.setItem("place", this.formData.place[0])
				sessionStorage.setItem("id", this.formData.id)
				sessionStorage.setItem("data", JSON.stringify(this.formData))
				
			},

		},
		filters: {
			dateFormat_to: function(dateTime) {
				var y = dateTime.getFullYear();
				var m = (dateTime.getMonth() + 1).toString().padStart(2, '0');
				var d = (dateTime.getDate() + 1).toString().padStart(2, '0');
				return y + '年' + m + '月' + d + '日'
			},
			dateFormat_af: function(dateTime) {
				var y = dateTime.getFullYear();
				var m = (dateTime.getMonth() + 1).toString().padStart(2, '0');
				var d = (dateTime.getDate() + 2).toString().padStart(2, '0');
				return y + '年' + m + '月' + d + '日'
			}
		},
	};
</script>

<style scoped>
	#main {
		width: 400px;
		margin-left: 38%;
	}

	#main1 {
		color: blue;
		text-decoration: none;
	}

	#time {
		width: 100%;
	}

	#time1 {
		float: left;
		text-align: left;
		width: 65px;
		height: 10px;
		margin-left: 10px;
		margin-top: 10px;
		font-size: 1px;
	}

	#specific {
		margin-top: 75px;
		height: 150px;
	}

	#book {
		float: left;
		margin-left: 30px;
		width: 100%;
	}

	ul {
		list-style: none;
		margin-top: 75px;
	}

	pre {
		font-size: 15px;
	}

	#footer {
		margin-top: 250px;
	}
</style>
