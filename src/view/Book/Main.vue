<template>

	<div id="main">
		<span style="position: absolute; top: 100px; right: 1300px; width: 150px;">Username: {{name}}</span>
    <!-- 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。-->
        <div class="center">
        <div class="left">
            <img src="../../images/right2.png" alt="">
        </div>
        <ul class="right">
            <li>
              <div id="online">
              		<router-link :to="'/online_book/'+userName" id="online_book">
                         <img src="../../images/mask02.png" alt="">
                         <p>Medical Mask</p>
                         <div class="service"><p>service</p></div>
                         <div class="buy">You can make an appointment to buy masks here.</div>
                         <div class="daily">Daily Use</div>
                  </router-link>
              </div>
            </li>
            <li class="li2">
              <div id="Nucleic_acid">
              		<router-link :to="'/Nucleic_acid/'+userName" id="Nucleic_acid">
                    <img src="../../images/acid2.png" alt="">
                    <p>Nucleic acid</p>
                    <div class="detection"><p>detection</p></div>
                    <div class="nucleic">You can make an appointment for a nucleic acid test here.</div>
                    <div class="cross">Cross-regional flow</div>
              		</router-link>
              </div>
            </li>
            <li class="li3">
              <div id="vaccination">
              		<router-link :to="'/vaccination/'+userName" id="vaccination">
                    <img src="../../images/vaccine2.png" alt="">
                    <p>Vaccination</p>
                    <div class="service2"><p>service</p></div>
                    <div class="vaccinations">You can make an appointment for vaccinations here.</div>
                    <div class="better">Better Prevention</div>
              		</router-link>
              </div>
            </li>
        </ul>
        </div>
<!-- .。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。 -->






				<!-- <div id="my">
						<router-link :to="'/my_book/'+userName" id="my_book"
							style="text-decoration: none;color: #000000;">我的预约
						</router-link>
				</div> -->
        <!-- <button type="button" class="guide">
        	<router-link to="/guide" id="guide" style="color: #f0f0f0;">Operation guide</router-link>
        </button> -->
				<!-- <p style="float: left;font-weight: bold;">预约规则</p>
				<br>
				<br>
				<p style="text-align: left;">&nbsp &nbsp 每天上午9点起可预约次日现场购买时间段，次日早上8点到晚上22点可提货。每人每三天内只能预约一次, 一人一证一次仅购5个口罩。
				</p> -->
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue from 'vue';
	var Event = new Vue(); //定义一个空的Vue实例
	export default {
		props: ['name'],
		name: "Main",
		data() {
			return {
				userName: ''
			}
		},
		mounted() {
			this.userName = sessionStorage.getItem("userName");
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		// created() {
		// 	axios.get('http://4485357db8.zicp.vip/ess_team11/login').then(res=>{
		// 		// this.options=res.data.user
		// 		console.log(res)
		// 	})
		// }
	}
</script>

<style scoped>
  * {
      margin: 0;
      padding: 0;
  }
  a {
      text-decoration: none;
  }
  li {
      list-style: none;
    }
.left {
    /* float: left; */
    position: absolute;
    /* margin: 160px 20px 0 -350px; */
    top: 200px;
    left: 50px;
}
.left img {
    width: 450px;
    height: 300px;
}
.right {
    /* float: left; */
    position: absolute;
    /* margin: 140px 10px 0 0; */
    top: 180px;
    left: 500px;
    width: 1000px;
    height: 350px;
}
.right li {
    float: left;
    width: 260px;
    height: 120px;
}
/* .right .pic1 {
    margin: 10px 20px 0 50px;
    width: 160px;
    height: 160px;
} */
.right li img {
    border: 2px #afafaf solid;
    border-radius: 30px;
    margin: 10px 20px 0 70px;
    width: 130px;
    height: 130px;
}
.right li p {
    color: #707070;
    font-weight:normal;
    font-size:25px;
    font-family: Impact;
}
.right .service {
    float: right;
    background-color: #2F9AA1;
    border-radius: 60px;
    height: 40px;
    width: 120px;
}
.right .service p {
    font-size: 25px;
    color: #fefdfd;
    line-height: 40px;
    text-align: center;
    font-family: Impact;
}
.buy {
    float: left;
    margin-top: 20px;
    font-size: 20px;
    color: #a2a2a2;
}
.daily {
    float: left;
    margin: 20px 0 0 20px;
    border: 0 #f0f0f0 solid;
    border-radius: 30px;
    background-color: #f0f0f0;
    width: 100px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    color: #a2a2a2;
}
/* ///// */
.li2 {
    margin-left: 70px;
}
.right .detection {
    float: right;
    background-color: #2F9AA1;
    border-radius: 60px;
    height: 40px;
    width: 120px;
}
.right .detection p {
    font-size: 25px;
    color: #fefdfd;
    line-height: 40px;
    text-align: center;
    font-family: Impact;
}
.nucleic {
    float: left;
    margin-top: 20px;
    font-size: 20px;
    color: #a2a2a2;
}
.cross {
    float: left;
    margin: 20px 0 0 20px;
    border: 0 #f0f0f0 solid;
    border-radius: 30px;
    background-color: #f0f0f0;
    width: 200px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    color: #a2a2a2;
}
/* ///// */
.li3 {
    margin-left: 70px;
}
.right .service2 {
    float: right;
    background-color: #2F9AA1;
    border-radius: 60px;
    height: 40px;
    width: 120px;
}
.right .service2 p {
    font-size: 25px;
    color: #fefdfd;
    line-height: 40px;
    text-align: center;
    font-family: Impact;
}
.vaccinations {
    float: left;
    margin-top: 20px;
    font-size: 20px;
    color: #a2a2a2;
}
.better {
    float: left;
    margin: 20px 0 0 20px;
    border: 0 #f0f0f0 solid;
    border-radius: 30px;
    background-color: #f0f0f0;
    width: 200px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    color: #a2a2a2;
}
.guide {
  position: absolute;
  top: 580px;
  left: 520px;
  width: 150px;
  height: 30px;
  background-color: #e3bdb5;
  border-radius: 10px;
  border: none;
  font-weight: 700;
}
</style>
