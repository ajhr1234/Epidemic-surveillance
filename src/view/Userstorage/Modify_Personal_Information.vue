<template>
	<div id="main">
		<div id="header">
			<h1>Modify Personal Information</h1>
		</div>
		<div id="Content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="Username" prop="user">
					<el-input v-model="ruleForm.user"></el-input>
				</el-form-item>
				<el-form-item label="Name" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="Sex" prop="sex">
					<el-radio-group v-model="ruleForm.sex">
						<el-radio label=1>male</el-radio>
						<el-radio label=2>female</el-radio>
						<el-radio label=3>secret</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="Address" prop="address">
					<el-input v-model="ruleForm.address"></el-input>
				</el-form-item>
				<el-form-item label="Phone" prop="pnumber" :rules="[
			        { required: true, message: 'Phone number cannot be empty'},
			        { type: 'number', message: 'Phone number must be numbers'}
			      ]">
					<el-input type="number" v-model.number="ruleForm.pnumber" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="Type of ID" prop="region">
					<el-select v-model="ruleForm.region" placeholder="Enter the type of ID">
						<el-option label="People's Republic of China resident identity card" value="1"></el-option>
						<el-option label="Other" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="ID number" prop="unumber" :rules="[
				    { required: true, message: 'ID number cannot be empty'},
				    { type: 'number', message: 'ID number must be numbers'}
				  ]">
					<el-input type="number" v-model.number="ruleForm.unumber" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item prop="email" label="Email" :rules="[
				      { required: true, message: 'Please input your email', trigger: 'blur' },
				      { type: 'email', message: 'Please enter your vaild email', trigger: ['blur', 'change'] }
				    ]">
					<el-input v-model="ruleForm.email"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">Create now</el-button>
					<el-button @click="resetForm('ruleForm')">Reset</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>


</template>

<script>
	import axios from 'axios';
	import Qs from 'qs'
	export default {
		data() {
			return {
				formData: null,
				ruleForm: {
					name: '',
					user: '',
					sex: 0,
					address: '',
					pnumber: '',
					email: '',
					unumber: '',
					region: '',
					uid:'',
					tokenName:'',
					tokenValue:'',
				},
				rules: {
					name: [{
							required: true,
							message: 'Please enter your name',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 20,
							message: '2 to 20 characters in length',
							trigger: 'blur'
						}
					],
					user: [{
							required: true,
							message: 'Please enter user name',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 15,
							message: '3 to 15 characters in length',
							trigger: 'blur'
						}
					],
					sex: [{
						required: true,
						message: 'Please select gender',
						trigger: 'change'
					}],
					address: [{
							required: true,
							message: 'Please enter the address',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '3 to 25 characters in length',
							trigger: 'blur'
						}
					],
					pnumber: [{
							required: true,
							message: '请输入pnumber',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '长度在 3 到 25 个字符',
							trigger: 'blur'
						}
					],
					region: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change'
					}],
					unumber: [{
							required: true,
							message: '请输入unumber',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '长度在 3 到 25 个字符',
							trigger: 'blur'
						}
					],
					email: [{
							required: true,
							message: '请输入email',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '长度在 3 到 25 个字符',
							trigger: 'blur'
						}
					]
				}
			};
		},
		created() {
			this.getNewsList()
		},
		methods: {
			getNewsList() {
				this.ruleForm.name = sessionStorage.getItem("name")
				this.ruleForm.user = sessionStorage.getItem("userName")
				this.ruleForm.sex = sessionStorage.getItem("sex")
				this.ruleForm.address = sessionStorage.getItem("address")
				this.ruleForm.pnumber = sessionStorage.getItem("pnumber")
				this.ruleForm.email = sessionStorage.getItem("email")
				this.ruleForm.unumber = sessionStorage.getItem("unumber")
				this.ruleForm.region = sessionStorage.getItem("region")
				this.ruleForm.formData = sessionStorage.getItem('data')
				this.ruleForm.uid=sessionStorage.getItem("uid")
				this.ruleForm.tokenName=sessionStorage.getItem("userToken")
				this.ruleForm.tokenValue=sessionStorage.getItem("userTokenValue")
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {

					if (valid) {
						sessionStorage.setItem("name", this.ruleForm.name)
						sessionStorage.setItem("userName", this.ruleForm.user)
						sessionStorage.setItem("sex", this.ruleForm.sex)
						sessionStorage.setItem("address", this.ruleForm.address)
						sessionStorage.setItem("pnumber", this.ruleForm.pnumber)
						sessionStorage.setItem("email", this.ruleForm.email)
						sessionStorage.setItem("unumber", this.ruleForm.unumber)
						sessionStorage.setItem("region", this.ruleForm.region)
						sessionStorage.setItem("data", JSON.stringify(this.ruleForm))
						console.log(this.ruleForm.name)
						axios({
								url: 'http://4485357db8.zicp.vip/messageUpdate',
								method: 'post',
								transformRequest: [function(data) {
									// 对 data 进行任意转换处理
									return Qs.stringify(data)
								}],
								headers: {
									'deviceCode': 'A95ZEF1-47B5-AC90BF3',
									'satoken':sessionStorage.getItem("userTokenValue")
								},
								data: {
									uname: this.ruleForm.user,
									truename: this.ruleForm.name,
									sex: this.ruleForm.sex,
									utel: this.ruleForm.pnumber,
									email: this.ruleForm.email,
									pnumber: this.ruleForm.unumber,
									identity: this.ruleForm.region,
									country: this.ruleForm.address,
									uid:this.ruleForm.uid,
								}
							}).then(result => {
								console.log("success")
								console.log(result.data)
								this.msg = result.data.msg
								if (this.msg == 1) {
									alert('submit!');
									this.$router.push("/main/" + this.ruleForm.user);
								} else {
									console.log(this.ruleForm.user)
									console.log('error submit!!');
									return false;
								}

							})
							.catch(err => {
								console.log(err)
							})


					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				sessionStorage.clear();
				this.ruleForm.name= '',
				this.ruleForm.user= '',
				this.ruleForm.sex= 0,
				this.ruleForm.address= '',
				this.ruleForm.pnumber= '',
				this.ruleForm.email= '',
				this.ruleForm.unumber= '',
				this.ruleForm.region= '',
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
	#header {
		font-family: Raleway, 'Times New Roman', serif;
	}

	#Content {
		margin-left: 27%;
		width: 620px;
	}
</style>
