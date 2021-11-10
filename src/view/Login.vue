<template>
	<div class="input">
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<div class="in">
				<el-form-item label="USERNAME" prop="user">
					<el-input type="username" v-model="ruleForm.user" autocomplete="off" style="width: 550px;">
					</el-input>
				</el-form-item>
			</div>
			<el-form-item label="PASSWORD " prop="pass">
				<el-input type="password" v-model="ruleForm.pass" autocomplete="off" style="width: 550px;"></el-input>
			</el-form-item>
			<br><br><br>
			<div class="keep">
				<input type="checkbox" name="check" id="" value="" />
				keep me signed in
			</div>
			<br><br><br>
			<el-button type="primary" @click="submitForm('ruleForm')">submit</el-button>
			<el-button @click="resetForm('ruleForm')">remark</el-button>
			</el-form-item>
		</el-form>
		<div class="bottom">
			<a href="#">Forget your password ?</a>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Qs from 'qs'
	export default {
		name: "Login",
		data() {
			var validateUser = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Please enter user name'));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Please enter the password'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			return {
				msg: -1,
				ruleForm: {
					user: '',
					pass: '',
				},
				rules: {
					user: [{
						validator: validateUser,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
				}
			};
		},
		methods: {
			submitForm(formName) {

				this.$refs[formName].validate((valid) => {
					if (valid) {
						axios({
								url: 'http://4485357db8.zicp.vip/ess_team11/login',
								method: 'post',
								transformRequest: [function(data) {
									// 对 data 进行任意转换处理
									return Qs.stringify(data)
								}],
								headers: {
									'deviceCode': 'A95ZEF1-47B5-AC90BF3'
								},
								data: {
									account: this.ruleForm.user,
									upass: this.ruleForm.pass,
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
				this.$refs[formName].resetFields();

			},

		}
	}
</script>


<style scoped>
	.input {
		margin-top: 200px;
		float: left;
	}

	.keep {
		text-decoration: underline;
		font-family: "arial black";
		font-style: italic;
	}

	.bottom {
		width: 120%;
		height: 100px;
		border: 2px 0 0 0;
		border-top-style: dotted;
		margin-top: 90px;
		margin-left: -20px;
		padding-top: 20px;
	}

	a {
		text-decoration: none;
		color: #908e8e;
		font-size: 20px;
		float: left;
		margin-left: 250px;
	}
</style>
