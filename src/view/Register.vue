<template>
	<div class="input">
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="user">
				<el-input type="username" v-model="ruleForm.user" autocomplete="off" style="width: 550px;"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm.pass" autocomplete="off" style="width: 550px;"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
				<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" style="width: 550px;">
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>

<script>
	import axios from 'axios';
	import Qs from 'qs'
	export default {
		name: "Register",
		data() {
			var validateUser = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入用户名'));
				} else {
					callback();
				}
			};

			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				msg: -1,
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
				},
				ruleForm: {
					user: '',
					pass: '',
					checkPass: '',
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
					checkPass: [{
						validator: validatePass2,
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
								url: 'http://4485357db8.zicp.vip/ess_team11/register',
								method: 'post',
								transformRequest: [function(data) {
									// 对 data 进行任意转换处理
									return Qs.stringify(data)
								}],
								headers: {
									'deviceCode': 'A95ZEF1-47B5-AC90BF3'
								},
								data: {
									uname: this.ruleForm.user,
									upass: this.ruleForm.pass,
								}
							}).then(result => {
								console.log(result.data)
								this.msg = result.data
								if (this.msg == 1) {
									alert('submit!');
									this.$router.push("/main/" + this.ruleForm.user);
								} else {
									console.log(this.msg);
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
			}
		}
	}
</script>


<style scoped>
	.input {
		margin-top: 100px;
		float: left;
	}
</style>
