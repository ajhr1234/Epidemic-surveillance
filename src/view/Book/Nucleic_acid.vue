<template>
	<div id="main">
		<div class="topBox" style="position: relative;">
			<div class="topL">
				<el-button type="text" icon="el-icon-caret-left" style="float: left;display: inline-block">
					<router-link :to="'/main/'+ ruleForm.user" id="main1" style="text-decoration: none;">BACK</router-link>
				</el-button>
				<img src="../../images/right2.png" class="pic" />
				<div class="mas2">
					<img src="../../images/acid2.png" class="pic22" />
					Nucleic acid
				</div>
				<div class="med">Nucleic acid</div>
				<div class="ser" style="background-color: #2F9AA1;">Detection</div>
				<div class="pre">
					Prevention and control of the COVID-19 epidemic
				</div>
			</div>
			<div class="topR" style="position: absolute;left: 700px; height: 600px; border: #2F9AA1 3px solid;">
				<div class="ple" style="    border: #2F9AA1 2px solid;
    border-top: none;
    border-left: none;
    border-right: none;">Please fill in your appointment information:</div>

				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<div class="name11">
						<el-form-item label="Name" prop="name" style="width: 600px; margin-top: 20px;">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
					</div>
					<el-form-item label="ID Type" prop="region" style="width: 600px; margin-left: 10px;">
						<el-select v-model="ruleForm.region" placeholder="Please choose the type" style="width: 350px" >
							<el-option label="People's Republic of China resident identity card" value="1"></el-option>
							<el-option label="Other" value="2"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item style="width: 600px; margin-left: 30px;" label="ID Number" prop="IDnumber" :rules="[
		      { required: true, message: 'ID number cannot be empty'},
		      { type: 'number', message: 'ID number must be numbers'}
		    ]">
						<el-input type="number" v-model.number="ruleForm.IDnumber" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item style="width: 600px; margin-left: 5px; margin-top: 10px;" label="Phone" prop="pnumber"
						:rules="[
		      { required: true, message: 'Phone number cannot be empty'},
		      { type: 'number', message: 'Phone number must be numbers'}
		    ]">
						<el-input type="number" v-model.number="ruleForm.pnumber" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="Address" prop="address" style="width: 600px; margin-left: 10px;">
						<el-input v-model="ruleForm.address"></el-input>
					</el-form-item>
					<el-form-item label="hospital" prop="hospital" style="width: 600px; margin-left: 10px;">
						<el-select v-model="ruleForm.hospital" placeholder="Please select a hospital">
							<el-option label="Fujian Union Medical College Hospital"
								value="Fujian Union Medical College Hospital"></el-option>
							<el-option label="Fujian Provincial Hospital" value="Fujian Provincial Hospital">
							</el-option>
							<el-option label="The First Affiliated Hospital of Fujian Medical University"
								value="The First Affiliated Hospital of Fujian Medical University"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="Date&time" required style="width: 600px;margin-left: 30px;">
					 <el-date-picker
					      v-model="ruleForm.date1"
						  style="margin-left: -45px;"
					      type="datetime"
						  default-time="12:00:00"
						  value-format="yyyy-MM-dd HH:mm:ss"
					      placeholder="Select date and time">
					    </el-date-picker>
						</el-form-item>
					<!-- <el-form-item label="Date" required style="width: 600px;">
						<el-form-item prop="date1">
							<el-date-picker type="date" placeholder="Select date" v-model="ruleForm.date1"
								style="width: 100%;"></el-date-picker>
						</el-form-item>
					</el-form-item> -->
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')"
							style="margin-left: -150px; background-color: #273BC2;">Reservation now</el-button>
						<el-button @click="resetForm('ruleForm')">reset</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue from 'vue';
	import Qs from 'qs'
	export default {
		data() {
			return {
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					IDnumber: '',
					pnumber: '',
					address: '',
					hospital: '',
					user: '',
					Nid: '',
				},
				rules: {
					name: [{
							required: true,
							message: 'Input Name',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 30,
							message: '2 to 30 characters in length',
							trigger: 'blur'
						}
					],
					region: [{
						required: true,
						message: 'please choose the ID type',
						trigger: 'change'
					}],
					IDnumber: [{
							required: true,
							message: 'Please enter IDnumber',
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
							message: 'Please enter pnumber',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '3 to 25 characters in length',
							trigger: 'blur'
						}
					],
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
					hospital: [{
							required: true,
							message: 'Please enter hospital',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '3 to 25 characters in length',
							trigger: 'blur'
						}
					],
					date1: [{
						type: 'date',
						required: true,
						message: 'please choose a date',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: 'Please choose time',
						trigger: 'change'
					}],
					type: [{
						type: 'array',
						required: true,
						message: 'Please select at least one activity type',
						trigger: 'change'
					}],
					resource: [{
						required: true,
						message: 'Please select activity resource',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: 'Please fill in the activity form',
						trigger: 'blur'
					}]
				}
			};
		},
		mounted() {
			this.ruleForm.user = sessionStorage.getItem("userName")
		},
		methods: {
			submitForm(formName) {
				this.ruleForm.id = Math.round(Math.random() * 50000)
				console.log(this.ruleForm.date1)
				this.$refs[formName].validate((valid) => {
					if (valid) {
						sessionStorage.setItem("name", this.ruleForm.name)
						sessionStorage.setItem("region", this.ruleForm.region)
						sessionStorage.setItem("NucleicDate", this.ruleForm.date1)
						sessionStorage.setItem("unumber", this.ruleForm.IDnumber)
						sessionStorage.setItem("pnumber", this.ruleForm.pnumber)
						sessionStorage.setItem("address", this.ruleForm.address)
						sessionStorage.setItem("NucleicHospital", this.ruleForm.hospital)
						sessionStorage.setItem("Nid", this.ruleForm.Nid)
						sessionStorage.setItem("data", JSON.stringify(this.ruleForm))
						console.log(this.ruleForm.name)
						axios({
								url: 'http://4485357db8.zicp.vip/saveNucleicAcid',
								method: 'post',
								transformRequest: [function(data) {
									// 对 data 进行任意转换处理
									return Qs.stringify(data)
								}],
								headers: {
									'deviceCode': 'A95ZEF1-47B5-AC90BF3',
									'satoken': sessionStorage.getItem("userTokenValue")
								},
								data: {
									uid: sessionStorage.getItem("uid"),
									ptype:this.ruleForm.region,
									truename:this.ruleForm.name,
									pnumber:this.ruleForm.IDnumber,
									tel:this.ruleForm.pnumber,
									ntime:this.ruleForm.date1,
									address:this.ruleForm.address,
									saddress:this.ruleForm.hospital,
									nucleicid:this.ruleForm.Nid,
									// sessionStorage.setItem("name", this.ruleForm.name)
									// sessionStorage.setItem("region", this.ruleForm.region)
									// sessionStorage.setItem("NucleicDate", this.ruleForm.date1)
									// sessionStorage.setItem("unumber", this.ruleForm.IDnumber)
									// sessionStorage.setItem("pnumber", this.ruleForm.pnumber)
									// sessionStorage.setItem("NucleicAddress", this.ruleForm.address)
									// sessionStorage.setItem("NucleicHospital", this.ruleForm.hospital)
									// sessionStorage.setItem("Nid", this.ruleForm.Nid)
									// sessionStorage.setItem("data", JSON.stringify(this.ruleForm))
								}
							}).then(result => {
								console.log("Nucleic acid reservation successfully!!")
								console.log(result.data)
								this.msg = result.data
								if (this.msg == 1) {
									alert('Nucleic acid reservation successfully!!');
									this.$router.push("/Nucleic_success/" + this.ruleForm.user);
								} else {
									alert('Nucleic acid reservation failed!!')
									console.log(this.ruleForm.user)
									console.log('Nucleic acid reservation failed!!');
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

<style>
	/* 	#main{
		width: 80%px;
		margin-left: 20%;
		margin-top: 5%;
	} */
	* {
		padding: 0;
	}

	li {
		list-style: none;
	}

	.topBox {

		width: 100%;
		height: 650px;
		margin: 50px 0 0 0;
		/* background-color: pink; */
	}

	.topL {
		position: relative;
		float: left;
		margin-left: 20px;
		width: 700px;
		height: 480px;
		/* background-color: lightblue; */
	}

	.pic {
		position: absolute;
		width: 450px;
		top: 70px;
		left: 10px;
	}

	.mas2 {
		position: absolute;
		width: 150px;
		height: 150px;
		top: 70px;
		left: 420px;
		/* background-color: #000000; */
		border: #bdbdbd 2px solid;
		border-radius: 38px;
		color: #bdbdbd;
	}

	.pic22 {
		width: 120px;
		height: 120spx;
	}

	.med {
		position: absolute;
		top: 280px;
		left: 380px;
		font-weight: 400;
		font-family: Impact, Impact-Regular;
	}

	.ser {
		position: absolute;
		top: 280px;
		left: 500px;
		width: 100px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		background-color: #DDADA3;
		font-family: Impact, Impact-Regular;
		font-weight: 400;
		color: #F2F2F2;
		border-radius: 30px;
		font-size: 18px;
	}

	.pre {
		position: absolute;
		top: 320px;
		left: 380px;
		width: 200px;
		/* background-color: #2F9AA1; */
		font-family: Agency FB, Agency FB-Regular;
		font-weight: 400;
		color: #707070;
	}

	/* ////////////////////// */
	.topR {
		position: relative;
		float: left;
		margin-left: 20px;
		width: 700px;
		height: 650px;
		/* background-color: lightgoldenrodyellow; */
		border: #DDADA3 3px solid;
		border-radius: 70px;
	}

	.ple {
		width: 350px;
		height: 20px;
		margin-top: 30px;
		margin-left: 150px;

	}

	.place {
		margin-top: 20px;
		margin-left: -100px;
	}

	.ct {
		margin-top: 20px;
		margin-left: -20px;
	}

	#specific {
		margin-top: 25px;
		margin-left: -10px;
	}

	#main {
		width: 100%;
		/* margin-left: 38%; */
	}

	.sub {
		width: 180px;
		height: 40px;
		background-color: #273bc2;
		border-radius: 15px;
		font-family: Berlin Sans FB, Berlin Sans FB-Regular;
		font-weight: 400;
		color: #ffffff;
	}

	/* ///////////////////////////////////// */
</style>
