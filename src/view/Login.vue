<template>
  <div class="input">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="Username" prop="user">
        <el-input type="username" v-model="ruleForm.user" autocomplete="off" style="width: 550px;"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" style="width: 550px;"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">submit</el-button>
      <el-button @click="resetForm('ruleForm')">remark</el-button>
      </el-form-item>
    </el-form>

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
            		console.log(this.msg)
            	})
            	.catch(err => {
            		console.log(err)
            	})
            
            if (this.msg == 1) {
              alert('submit!');
              this.$router.push("/main/" + this.ruleForm.user);
            } else {
              console.log(this.ruleForm.user)
              console.log('error submit!!');
              return false;
            }

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
    margin-top: 100px;
    float: left;
  }
</style>