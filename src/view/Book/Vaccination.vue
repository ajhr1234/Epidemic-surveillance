<template>
	<div id="main">
		<div class="topBox" style="position: relative;">
			<div class="topL">
				<el-button type="text" icon="el-icon-caret-left" style="float: left;display: inline-block">
					<router-link :to="'/main/'+ ruleForm.userName" id="main1" style="text-decoration: none;">BACK
					</router-link>
				</el-button>
				<img src="../../images/right2.png" class="pic" />
				<div class="mas3">
					<img src="../../images/acid2.png" class="pic23" />
					Vaccine
				</div>
				<div class="med">Vaccination</div>
				<div class="ser" style="background-color: #2F9AA1;">service</div>
				<div class="pre">
					Prevention and control of the COVID-19 epidemic
				</div>
			</div>
			<div class="topR" style="position: absolute;left: 700px; height: 700px;">
				<div class="ple">Please fill in your appointment information:</div>

				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<div class="name11">
						<el-form-item label="Name" prop="name" style="width: 600px; margin-top: 20px;">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
					</div>
					<el-form-item label="ID Type" prop="region" style="width: 600px; margin-left: 10px;">
						<el-select v-model="ruleForm.region" placeholder="Please choose the type">
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
								value="Fujian Union Medical College Hospital">
							</el-option>
							<el-option label="Fujian Provincial Hospital" value="Fujian Provincial Hospital">
							</el-option>
							<el-option label="The First Affiliated Hospital of Fujian Medical University"
								value="The First Affiliated Hospital of Fujian Medical University"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="Times" style="width: 600px; margin-left: 10px;">
						<el-input-number v-model="ruleForm.num" @change="handleChange" :min="1" :max="3"
							label="Number of vaccination"></el-input-number>
					</el-form-item>
					<el-form-item label="Brand" prop="brand" style="width: 600px; margin-left: 10px;">
						<el-select v-model="ruleForm.brand" placeholder="Please choose the type">
							<el-option label="Sinovac" value="sinovac"></el-option>
							<el-option label="Bio-Beijing" value="Bio-Beijing"></el-option>
							<el-option label="Other" value="Other"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="Date&time" required style="width: 600px;margin-left: 30px;">
						<el-date-picker v-model="ruleForm.date1" style="margin-left: -45px;" type="datetime"
							default-time="12:00:00" value-format="yyyy-MM-dd HH:mm:ss"
							placeholder="Select date and time">
						</el-date-picker>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')"
							style="margin-left: -150px; background-color: #273BC2;">Reservation now</el-button>
						<el-button @click="resetForm('ruleForm')">reset</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="botBox">
			<div class="useG">
				<div class="gra"></div>
				<div class="pin"></div>
				<div style="margin-top: -30px; margin-left: 30px; font-family: Bahnschrift, Bahnschrift-Regular; font-weight: 400; color: #707070;
           font-size: 20px; width: 500px;">Precautions for COVID-19 vaccination</div>
			</div>
			<div style="float: left; margin-left: 20px; margin-top: 60px; background-color: white;">
				<div id="tri"></div>
				<div style="margin-top: -20px; margin-left: 30px;">Before vaccination</div>
			</div>
			<div
				style="padding: 20px; width: 100%; height: 80px; background-color: #f9f1f0; float: left; margin-top: 40px; text-align: left;">

				It's important to know your health before getting vaccinated against COVID-19. If you are not sure
				whether you
				belong to the banned group, you should provide a health certificate at the time of vaccination, and the
				doctor
				at the vaccination site will judge whether you can be vaccinated. At the same time, we should also pay
				attention
				to have a good rest, it is best not to have an empty stomach inoculation, so that the body keeps in a
				better
				physiological state. In addition, as the Novel Coronavirus vaccine is administered to the deltoid muscle
				of the
				upper arm, loose clothing that is easy to put on and take off is recommended.

			</div>
			<div style="float: left; margin-left: 20px; margin-top: 40px; background-color: white;">
				<div id="tri"></div>
				<div style="margin-top: -20px; margin-left: 30px;">During vaccination</div>
			</div>
			<div
				style="text-align: left; padding: 20px; width: 100%; height: 80px; background-color: #e8e8e8; float: left; margin-top: 40px;">
				Masks should be worn at all times during COVID-19 vaccination; Line up according to the mark of
				inoculation site
				and keep at least one meter of social distance. And to voluntarily provide doctors with their health
				status,
				recent medication information; And fill out the informed consent truthfully. If there is a wound at the
				vaccination site, try to avoid the wound and choose the other side for vaccination. In addition, on the
				day of
				inoculation, the injection site should be kept dry and pay attention to personal hygiene.

			</div>
			<div style="float: left; margin-left: 20px; margin-top: 40px; background-color: white;">
				<div id="tri"></div>
				<div style="margin-top: -20px; margin-left: 30px;">After vaccination</div>
			</div>
			<div
				style="text-align: left; padding: 20px; width: 100%; height: 80px; background-color: #faf2f0; float: left; margin-top: 40px;">
				After inoculation, observe for 30 minutes at the inoculation site; Place a hemostatic swab in a medical
				trash
				can or yellow medical waste bag. After vaccination, pay attention to the physical signs. If there is a
				persistent fever, go to the nearest hospital for medical treatment and report to the vaccination unit.
				Avoid
				contact with previously known allergens and common allergens within one week after inoculation. Avoid
				drinking
				alcohol, spicy or seafood food, and eat a light diet and drink more water.
			</div>
			<div style="float: left; margin-left: 20px; margin-top: 40px; background-color: white;">
				<div id="tri"></div>
				<div style="margin-top: -20px; margin-left: 30px;">Adverse reactions</div>
			</div>
			<div
				style="text-align: left; padding: 20px; width: 100%; height: 80px; background-color: #e8e8e8; float: left; margin-top: 40px;">
				Based on the results of preliminary clinical trials and information on emergency use of vaccines, common
				reactions to COVID-19 vaccines are not significantly different from those of other inactivated vaccines.
				The
				most common adverse reactions are fever and headache, redness, lumps and cough at the vaccination site,
				as well
				as loss of appetite, vomiting and diarrhea. These adverse reactions usually resolve spontaneously within
				two to
				three days and generally do not require special treatment. If symptoms are severe or you cannot assess
				the
				severity of your symptoms, seek medical attention immediately.
			</div>
			<br><br>
			<div style="width: 100%; height: 50px; float: left;"> </div>
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
					userName: '',
					id: '',
					num: 1,
					brand:'',
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
					],
					// times: [{
					// 		required: true,
					// 		// message: '请输入times',
					// 		trigger: 'blur'
					// 	},
					// ],
					brand: [{
							required: true,
							message: 'Please enter brand',
							trigger: 'blur'
						},
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
			this.ruleForm.userName = sessionStorage.getItem("userName")
		},
		methods: {
			handleChange(value) {
				console.log(value);
			},
			submitForm(formName) {
				this.ruleForm.id = Math.round(Math.random() * 50000)
				console.log(this.ruleForm.region)
				this.$refs[formName].validate((valid) => {
					if (valid) {
						sessionStorage.setItem("name", this.ruleForm.name)
						sessionStorage.setItem("region", this.ruleForm.region)
						sessionStorage.setItem("VaccinationDate", this.ruleForm.date1)
						sessionStorage.setItem("unumber", this.ruleForm.IDnumber)
						sessionStorage.setItem("pnumber", this.ruleForm.pnumber)
						sessionStorage.setItem("address", this.ruleForm.address)
						sessionStorage.setItem("VaccinationHospital", this.ruleForm.hospital)
						sessionStorage.setItem("Vid", this.ruleForm.id)
						sessionStorage.setItem("Vtimes", this.ruleForm.num)
						sessionStorage.setItem("Vbrand", this.ruleForm.brand)
						sessionStorage.setItem("data", JSON.stringify(this.ruleForm))
						console.log(this.ruleForm.name)
						axios({
								url: 'http://4485357db8.zicp.vip/saveVaccine',
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
									truename: this.ruleForm.name,
									ptype: this.ruleForm.region,
									pnumber: this.ruleForm.IDnumber,
									tel: this.ruleForm.pnumber,
									address: this.ruleForm.address,
									saddress: this.ruleForm.hospital,
									vtime: this.ruleForm.date1,
									vtimes:this.ruleForm.num,
									vtype:this.ruleForm.brand
								}
							}).then(result => {
								console.log("success")
								console.log(result.data)
								this.msg = result.data
								if (this.msg == 1) {
									alert('Vaccine reservation successful!!');
									this.$router.push("/vaccination_success/" + this.ruleForm.userName);
								} else {
									alert('Vaccine appointment failed!!')
									console.log(this.ruleForm.userName)
									console.log('Vaccine appointment failed!!');
									return false;
								}

							})
							.catch(err => {
								console.log(err)
							})


					} else {
						console.log('Vaccine appointment failed!!');
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
	* {
		padding: 0;
	}

	li {
		list-style: none;
	}

	.topBox {

		width: 100%;
		height: 750px;
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

	.mas3 {
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

	.pic23 {
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
		height: 750px;
		/* background-color: lightgoldenrodyellow; */
		border: #2F9AA1 3px solid;
		border-radius: 70px;
	}

	.ple {
		width: 350px;
		height: 20px;
		margin-top: 30px;
		margin-left: 150px;
		border: #2F9AA1 2px solid;
		border-top: none;
		border-left: none;
		border-right: none;
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

	.botBox {
		position: relative;
		width: 80%;
		height: 900px;
		/* background-color: pink; */
		margin-left: 150px;
		margin-top: 100px;
	}

	.useG {
		position: relative;
		width: 500px;
		height: 64px;
		border-bottom: #ddada3 1px solid;
		/* background-color: #000000; */
	}

	.gra {
		position: absolute;
		top: 19px;
		width: 45px;
		height: 44px;
		opacity: 0.51;
		background: #747274;
	}

	.pin {
		width: 61px;
		height: 64px;
		background: #2F9AA1;
		margin-left: 15px;
	}

	#tri {
		width: 0;
		height: 0;
		border-top: 20px solid #ddada3;
		border-left: 12px solid transparent;
		border-right: 12px solid transparent;
	}
</style>
