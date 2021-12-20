<template>
	<div id="main">
		<div class="topBox" style="position: relative;">
			<div class="topL">
				<el-button type="text" icon="el-icon-caret-left" style="float: left;display: inline-block">
					<router-link :to="'/main/'+ userName" id="main1" style="text-decoration: none;">BACK</router-link>
				</el-button>
				<img src="../../images/right2.png" class="pic" />
				<div class="mas">
					<img src="../../images/mask02.png" class="pic21" />
					Mask
				</div>
				<div class="med">Medical Mask</div>
				<div class="ser">service</div>
				<div class="pre">
					Prevention and control of the COVID-19 epidemic
				</div>
			</div>
			<div class="topR" style="position: absolute;left: 700px;">
				<div class="ple">Please fill in your appointment information:</div>
				<div class="place">
					Choose a location：
					<!-- <el-cascader :options="list" :show-all-levels="false"></el-cascader> -->
					<el-cascader :options="formData.options" :show-all-levels="false" style="color: #000000;"
						v-model="formData.place"></el-cascader>
				</div>
				<div class="time">
					<div class="ct">Choose an appointment time：
						<el-button type="primary" style="width: 100px;">
							tomorrow<br>{{ formData.dateTime | dateFormat_to}}</el-button>
						<!-- <el-button type="info" style="width: 170px;">the day after tomorrow<br>{{ formData.dateTime | dateFormat_af}}</el-button> -->
						<div id="specific">
							<el-button type="primary" plain id="time1" v-model="formData.check"
								v-for="(item,index) in formData.times" :key="index + '-only'"
								@click="getTime(index,item)" style="">
								{{item}}
							</el-button>
						</div>
					</div>
				</div>
				<!-- ////////////////////////////////////////////// -->
				<div style="float: left; margin-left: 115px; margin-top: 20px;">Reserved items:</div>
				<!-- <el-divider direction="vertical"></el-divider> -->
				<div style="float: left; margin-left: 100px; margin-top: 20px;" v-model="formData.goods">
					{{formData.goods}}</div>
				<div style="float: left; margin-left: -304px; margin-top: 60px;">Quantity(Number):</div>
				<el-input-number style="margin-left: -350px; margin-top: 50px;" v-model="formData.num"
					@change="handleChange" :min="1" :max="10" label="描述文字">
				</el-input-number>
				<div style="margin-left: -55px; margin-top: 20px;">
					How to purchase: &nbsp &nbsp&nbsp&nbsp &nbsp<el-button round v-model="formData.method">
						{{formData.method}}</el-button>
				</div>
				<el-button type="primary" style="margin-left: -80px; margin-top: 50px;" class="sub">
					<div style="color: white;text-decoration: none;" @click="submit">Reservation Now</div>
				</el-button>
			</div>
		</div>
		<div class="botBox">
			<div class="useG">
				<div class="gra"></div>
				<div class="pin"></div>
				<div style="margin-top: -30px; margin-left: 30px; font-family: Bahnschrift, Bahnschrift-Regular; font-weight: 400; color: #707070;
           font-size: 20px;">Masks Use Guide</div>
			</div>
			<div class="htu" style="background-color: white; height: 50px; width: 300px;">
				<div id="tri"></div>
				<div style="margin-top: -20px; margin-left: 10px;">How should you choose a mask?</div>
			</div>
			<ul>
				<li>
					<img src="../../images/mask1.png" style="height: 180px; float: left; text-align: left;">
					<div style=" font-weight: 700; color: #273bc2; margin-top: 20px;">Disposable medical masks</div>
					<div style="font-weight: 400; color: #707070; margin-top: 20px;">The public can use disposable
						medical masks in non-densely populated public places.</div>
				</li>
				<li>
					<img src="../../images/mask2.png" style="height: 180px; width: 180px; float: left;">
					<div style=" font-weight: 700; color: #273bc2; margin-top: 20px;">Surgical mask</div>
					<div
						style="font-weight: 400; color: #707070; margin-top: 20px;text-align: left; text-indent: 2em; font-size: 15px;">
						Recommend suspected cases, public transport department passengers, taxi drivers, sanitation
						workers, service personnel in public places to wear during on-duty.</div>
				</li>
				<li>
					<img src="../../images/mask3.png" style="height: 180px; width: 180px; float: left;">
					<div style=" font-weight: 700; color: #273bc2; margin-top: 20px;">K95/N95 and above particulate
						Protective mask</div>
					<div
						style="font-weight: 400; color: #707070; margin-top: 20px;text-align: left; text-indent: 2em; font-size: 15px;">
						It is recommended for site investigation, sampling and testing personnel, and can be worn by the
						public in highly crowded places or closed public places.</div>
				</li>
				<li>
					<img src="../../images/mask4.png" style="height: 180px; width: 180px; float: left;">
					<div style=" font-weight: 700; color: #273bc2; margin-top: 20px;">Medical protective masks</div>
					<div
						style="font-weight: 400; color: #707070; margin-top: 20px;text-align: left; text-indent: 2em; font-size: 15px;">
						It is recommended to wear the fever clinic, isolation ward medical staff and confirmed patients
						when transferring.</div>
				</li>
			</ul>
			<div style="float: left; margin-left: 20px; margin-top: 60px; background-color: white;">
				<div id="tri"></div>
				<div style="margin-top: -20px; margin-left: 30px;">How to wear a mask correctly?</div>
			</div>
			<div style="width: 100%; height: 300px; background-color: #e8e8e8; float: left; margin-top: 40px;">
				<ul class="ul1">
					<li>Choose the appropriate size mask.</li>
					<li>When wearing, keep the mask close to the face, and squeeze the aluminum slices on both sides of
						the nose with the fingers of the left and right hands to reduce the air leakage around.</li>
					<li>Disposable medical masks have inside and outside, light color surface has moisture absorption
						function, should be affixed to the mouth and nose, dark face outside.</li>
					<li>Take the N95 mask as an example, the mask has one logo outward and one side of the metal upward.
					</li>
					<li>After wearing a mask, avoid touching the mask.If you touch a mask, wash your hands before and
						after touching it.When taking off the mask, avoid touching the mask and wash your hands
						immediately.</li>
				</ul>
			</div>
			<div style="float: left; margin-left: 20px; margin-top: 40px; background-color: white;">
				<div id="tri"></div>
				<div style="margin-top: -20px; margin-left: 30px;">When does the mask need to be replaced?</div>
			</div>
			<div style="width: 100%; height: 200px; background-color: #faf2f0; float: left; margin-top: 40px;">
				<ul class="ul1">
					<li>Medical masks are mainly divided into medical protective masks, medical surgical masks and
						disposable medical masks.</li>
					<li style="height: 60px;">Medical surgical masks are recommended to wear suspected cases and service
						personnel in public places when on duty. Disposable medical masks are recommended to the public
						in non-densely populated public places. There is no time limit for use in the relevant standards
						of medical surgical masks and disposable medical masks. Generally speaking, if there is no
						obvious dirt or deformation, it is not necessary to change them in four hours.</li>
					<li style="height: 60px;">According to the national health commission issued on January 26, the
						novel coronavirus pneumonia prevention and control of common medical protective equipment use
						scope guidelines (trial), medical protective masks in principle in fever outpatient department,
						isolation ward (room) and isolation intensive care ward (room) area use, generally 4 hours
						change, change at the time pollution or wet at any time.</li>
				</ul>
			</div>
			<div style="float: left; margin-left: 20px; margin-top: 40px; background-color: white;">
				<div id="tri"></div>
				<div style="margin-top: -20px; margin-left: 30px;">How to deal with the used masks?</div>
			</div>
			<div style="width: 100%; height: 150px; background-color: #e8e8e8; float: left; margin-top: 40px;">
				<ul class="ul1">
					<li>Masks worn by healthy people have no risk of novel coronavirus transmission. Masks after use can
						be treated with according to the requirements of household garbage classification.</li>
					<li style="height: 60px;">Masks worn by suspected cases or confirmed patients shall not be discarded
						at will, shall be regarded as medical waste, shall be treated strictly in accordance with
						relevant medical waste procedures, and shall not enter the circulation market.</li>
				</ul>
			</div>
			<div style="float: left; margin-left: 20px; margin-top: 40px; background-color: white;">
				<div id="tri"></div>
				<div style="margin-top: -20px; margin-left: 30px;">What should children pay attention to when wearing
					masks?</div>
			</div>
			<div style="width: 100%; height: 130px; background-color: #faf2f0; float: left; margin-top: 40px;">
				<ul class="ul1">
					<li>It is recommended that children choose products that meet the national standard GB2626-2006
						KN95, and are marked with particulate matter protective masks for children or adolescents.</li>
					<li>Parents should pay close attention to the wearing of children's masks at any time. If children
						feel uncomfortable in the process of wearing masks, they should adjust or stop their use in
						time.</li>
				</ul>
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
	var Event = new Vue(); //定义一个空的Vue实例
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
					goods: "Mouth mask",
					method: "Purchase at designated locations",
					id: "",
					purchase: "",
					//list:[],
					options: [{
						value: 'Gulou District, Fuzhou Union Medical store',
						label: 'Gulou District, Fuzhou Union Medical store'
					}, {
						value: 'Yi Mintang Pharmacy (Tai He Plaza, East 2nd Ring Store)',
						label: 'Yi Mintang Pharmacy (Tai He Plaza, East 2nd Ring Store)'
					}, {
						value: 'Tongrentang Drugstore (Wanda Plaza Fuzhou Financial Street Store)',
						label: 'Tongrentang Drugstore (Wanda Plaza Fuzhou Financial Street Store)'
					}, {
						value: 'Guoda Pharmacy',
						label: 'Guoda Pharmacy'
					}, {
						value: 'Fuzhou Jingwei Pharmacy Co. LTD',
						label: 'Fuzhou Jingwei Pharmacy Co. LTD'
					}],
					times: ['8:00', '9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
					dateTime: new Date(),
					msg: -1,
					id: '',
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
				this.formData.id = Math.round(Math.random() * 50000) // 生成0~50000的随机整数
				// this.$router.push('/my_book/'+ this.userName)
				sessionStorage.setItem("num", this.formData.num)
				sessionStorage.setItem("check", this.formData.check)
				sessionStorage.setItem("place", this.formData.place[0])
				sessionStorage.setItem("id", this.formData.id)
				sessionStorage.setItem("data", JSON.stringify(this.formData))
				console.log(this.formData.check)
				axios({
						url: 'http://4485357db8.zicp.vip/saveMaskOrder',
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
							saddress: this.formData.place[0],
							atime: this.formData.check,
							uid: sessionStorage.getItem("uid"),
							mnumber: this.formData.num,
							rid:this.formData.id,
							// uname: sessionStorage.getItem("userName"),
							// truename: this.ruleForm.name,
							// sex: this.ruleForm.sex,
							// utel: this.ruleForm.pnumber,
							// email: this.ruleForm.email,
							// pnumber: this.ruleForm.unumber,
							// identity: this.ruleForm.region,
							// country: this.ruleForm.address,
							// uid:this.ruleForm.uid,
							//    upass:sessionStorage.getItem("userPass"),
						}
					}).then(result => {
						console.log("Mask reservation successful!!")
						console.log(result.data)
						this.formData.msg = result.data
						if (this.formData.msg == 1) {
							alert('submit!');
							this.$router.push("/success/" + sessionStorage.getItem("userName"));
						} else {
							console.log(this.formData.data)
							console.log('Mask reservation failed!!');
							return false;
						}

					})
					.catch(err => {
						console.log(err)
					})
			},

		},
		filters: {
			dateFormat_to: function(dateTime) {
				var y = dateTime.getFullYear();
				var m = (dateTime.getMonth() + 1).toString().padStart(2, '0');
				var d = (dateTime.getDate() + 1).toString().padStart(2, '0');
				return y + '/' + m + '/' + d
			},
			dateFormat_af: function(dateTime) {
				var y = dateTime.getFullYear();
				var m = (dateTime.getMonth() + 1).toString().padStart(2, '0');
				var d = (dateTime.getDate() + 2).toString().padStart(2, '0');
				return y + '/' + m + '/' + d
			}
		},
	};
</script>

<style scoped>
	* {
		padding: 0;
	}

	li {
		list-style: none;
	}

	.topBox {

		width: 100%;
		height: 500px;
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

	.mas {
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

	.pic21 {
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
		background-color: #2F9AA1;
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
		height: 490px;
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
		margin-left: -145px;
	}

	#specific {
		margin-top: 25px;
		margin-left: 200px;
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

	/* //////////////////////////////////////////// */
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
		width: 300px;
		height: 64px;
		border-bottom: #2F9AA1 1px solid;
		/* background-color: #000000; */
	}

	.gra {
		position: absolute;
		top: 20px;
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

	.htu {
		margin-top: 50px;
		margin-left: 20px;
	}

	ul li {
		width: 500px;
		height: 180px;
		/* background-color: #f7ebe9; */
		float: left;
		margin-left: 50px;
	}

	/* ///////////////////////////////////////// */
	.ul1 li {
		margin-left: 30px;
		width: 90%;
		height: 50px;
		list-style-type: disc;
		text-align: left;
	}
</style>
