<template>
	<div id="main">
    <img src="../../images/personalL2.png" alt="" class="img0">
    <img src="../../images/personalR.png" alt="" class="img1">
    <a href="../MPI" class="pers">Modify Personal Information</a>
    <a href="../MV" class="mess">Message View</a>
    <a href="../about" class="volu">About Volunteers</a>
		<div id="Content" style="overflow:auto; height: 500px;">
      <div id="header">
      	<h1>Modify Personal Information</h1>
      </div>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="Username" prop="user" class="use">
					<el-input v-model="ruleForm.user" class="useR"></el-input>
				</el-form-item>
				<el-form-item label="Name" prop="name" class="nam">
					<el-input v-model="ruleForm.name" class="namR"></el-input>
				</el-form-item>
				<el-form-item label="Sex" prop="sex" class="se">
					<el-radio-group v-model="ruleForm.sex" class="seR">
						<el-radio label=1 id="sex1">male</el-radio>
						<el-radio label=2 id="sex1">female</el-radio>
						<el-radio label=3 id="sex1">secret</el-radio>
					</el-radio-group>
				</el-form-item>
        <!-- //////////////////////////////////////////////////////////// 性别之下-->
				<el-form-item label="Address" prop="address" class="addr">
					<el-input v-model="ruleForm.address" class="addrR"></el-input>
				</el-form-item>
				<el-form-item   class="pho" label="Phone" prop="pnumber" :rules="[
			        { required: true, message: 'Phone number cannot be empty'},
			        { type: 'number', message: 'Phone number must be numbers'}
			      ]">
					<el-input type="number" v-model.number="ruleForm.pnumber" autocomplete="off" class="phoR"></el-input>
				</el-form-item>
				<el-form-item label="Type of ID" prop="region" class="tid">
					<el-select v-model="ruleForm.region" placeholder="Enter the type of ID" class="tidR">
						<el-option label="People's Republic of China resident identity card" value="1"></el-option>
						<el-option label="Other" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item   class="idn" label="ID number" prop="unumber" :rules="[
				    { required: true, message: 'ID number cannot be empty'},
				    { type: 'number', message: 'ID number must be numbers'}
				  ]">
					<el-input type="number" v-model.number="ruleForm.unumber" autocomplete="off" class="idnR"></el-input>
				</el-form-item>
				<el-form-item class="ema" prop="email" label="E-mail" :rules="[
				      { required: true, message: 'Please input your email', trigger: 'blur' },
				      { type: 'email', message: 'Please enter your vaild email', trigger: ['blur', 'change'] }
				    ]">
					<el-input v-model="ruleForm.email" class="emaR"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button class="sub" type="primary" @click="submitForm('ruleForm')">Create now</el-button>
					<el-button class="res" @click="resetForm('ruleForm')">Reset</el-button>
				</el-form-item>
			</el-form>
		</div>
    <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br>
    <div class="bot"></div> -->
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
					// tokenName:'',
					// tokenValue:'',
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
					region: [{
						required: true,
						message: 'Please select the type of your ID',
						trigger: 'change'
					}],
					unumber: [{
							required: true,
							message: 'Please enter unumber',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '3 to 25 characters in length',
							trigger: 'blur'
						}
					],
					email: [{
							required: true,
							message: 'Please enter email',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 25,
							message: '3 to 25 characters in length',
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
				// this.ruleForm.tokenName=sessionStorage.getItem("userToken")
				// this.ruleForm.tokenValue=sessionStorage.getItem("userTokenValue")
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
									upass:sessionStorage.getItem("userPass"),
								}
							}).then(result => {
								console.log(result.data.msg)
								this.msg = result.data.msg
								if (this.msg == 1) {
									alert('Personal information changed successfully');
									this.$router.push("/ucon");
								} else {
									alert('Failed to change personal information!!');
									console.log(this.ruleForm.user)
									console.log('Failed to change personal information!!');
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
  a {
  	text-decoration: none;
  	/* color: #000000; */
  }
  .img0 {
        position: absolute;
        left: 0;
        top: 60px;
        height: 660px;
        animation: .1s linear forwards;
    }
  @keyframes rotate01{
       	0%{
       		transform: rotate(0deg);
       	}
       	100%{
       		transform: rotate(-30deg);
       	}
       }
  .img1 {
        position: absolute;
        right: 0;
        top: 100px;
        height: 200px;
    }
  .img1:hover {
      animation: rotate01 .2s linear forwards;
  }
  .pers {
      position: absolute;
      width: 260px;
      height: 55px;
      top: 146px;
      left: 73px;
      background-color: #2D3D8B;
      border-radius: 12px;
  /*    opacity: .3; */
      text-align: center;
      line-height: 55px;
      color: #FFFFFF;
      font-weight: 700;
    }
    .mess {
        position: absolute;
        width: 260px;
        height: 55px;
        top: 249px;
        left: 73px;
        background-color: #6bc7cd;
        /* background-color: pink; */
        border-radius: 12px;
       /* opacity: .3; */
        text-align: center;
        line-height: 55px;
        color: #2e408c;
        font-weight: 700;
      }
      .volu {
          position: absolute;
          width: 260px;
          height: 55px;
          top: 351px;
          left: 73px;
          background-color: #6bc7cd;
          /* background-color: pink; */
          border-radius: 12px;
         /* opacity: .3; */
          text-align: center;
          line-height: 55px;
          color: #2e408c;
          font-weight: 700;
        }
	#header {
		  font-family: Raleway, 'Times New Roman', serif;
      float: right;
      font-size: 10px;
      width: 300px;
      background-color: #2D3D8B;
      color: #FFFFFF;
      text-align: center;
      margin-top: -2px;
      margin-right: 0px;
      border-top-right-radius: 20px;

	}

	#Content {
    position: absolute;
		margin-left: 30%;
    margin-top: 50px;
		width: 650px;
    border: 2px solid #2D3D8B;
    border-radius: 20px;
    background-color: #FFFFFF;
	}
  .el-form-item__label {
    color: #2D3D8B;
    font-weight: 700;
  }
  .demo-ruleForm input.el-input__inner {
    border-color: #2D3D8B;
    width: 400px;
  }
  .use {
    margin-top: 90px;
    margin-left: 55px;
  }
  .useR {
    /* width: 400px; */
    margin-left: -100px;
  }
  .nam {
    margin-left: 25px;
  }
  .namR {
    /* width: 400px; */
    margin-left: -70px;
  }
  .se {
    margin-left: 10px;
  }
  #sex1 {
    color: #2D3D8B;
    font-weight: 700;
  }
  .seR {
    margin-left: -70px;
  }
  .addr {
    margin-left: 40px;
  }
  .addrR {
    margin-left: -80px;
  }
  .pho {
    margin-left: 25px;
  }
  .phoR {
    margin-left: -70px;
  }
  .tid {
    margin-left: 45px;
  }
  .tidR {
    margin-left: -90px;
  }
  .idn {
    margin-left: 50px;
  }
  .idnR {
    margin-left: -95px;
  }
  .ema {
    margin-left: 20px;
  }
  .emaR {
    margin-left: -65px;
  }
  .sub {
    background-color: #2D3D8B;
    margin-left: -100px;
  }
  .res {
    background-color: #2D3D8B;
    color: #F2F2F2;
  }
  .bot {
    position: absolute;
    background-color: #F2F2F2;
    width: 100%;
    height: 100px;
    z-index: -1;
  }
</style>
