<template>
	<div>
		<header>
			<div class="head">
				<div class="logo">
					<img src="../images/logo.png" alt="" picT>
				</div>

				<div id="we">
					<h2> Epidemic Surveillance</h2>
				</div>
				<nav style="background-color: ; height: 50px; margin-right: 30px;">
					<router-link class="item" v-for="item in nvaList" :key="item.id" :to=item.url>{{item.name}}
					</router-link>
					<div id="loginUser">
						<div id="loginAndRegister" v-show="!isLogin">
							<router-link class="item" to="/login_index">
							Login_Register
							</router-link>
<!-- 							<div class="person">
								<a href="User"><img src="../images/person.png" alt=""></a>
							</div> -->
						</div>
						<div id="userHome" v-show="isLogin">
							<!-- <router-link class="item" :to="{name:'main',path:'/main/:name'}"> -->

              <router-link class="item" :to="'/main/'+ userName" style="float: left;">
              Subscribe
              </router-link>
							<router-link style="float: left;" class="item" to="/login_index" >
							[exit]
							</router-link>
              <div class="person">
              	<router-link class="item" to="/user"><img src="../images/person.png" alt=""></router-link>
              </div>


						</div>
					</div>


				</nav>
			</div>
			<router-view class="main"></router-view>
		</header>
		</body>
	</div>
</template>
<script>
	export default {
		data() {
			return {
        userName:'',
				nvaList: [{
						name: 'Home',
						id: 0,
						url: '/'
					},
					{
						name: 'Epidemic distribution',
						id: 1,
						url: '/epidemicMap'
					},
					{
						name: 'Epidemic trend',
						url: '/epidemicTrend',
						id: 3,
					},
					{
						name: 'RealTimeNews',
						url: '/RealTimeNews',
						id: 2,
					},

					// {
					// 	name: 'Login_Register',
					// 	url: '/login_index',
					// 	id: 4
					// },
					// {
					// 	name: 'Register',
					// 	url: '/Register',
					// 	id: 5
					// }
				]
			}
		},
		computed:{
			 isLogin(){
         this.userName=sessionStorage.getItem("userName");
			      console.log("in app name" + sessionStorage.getItem("userName"));
			//      console.log("in app name" + sessionStorage.getItem("userName"));
			      console.log("in app name" + sessionStorage.getItem("userName"));


			      //通过sessionstorage获取vuex里islogin的状态
			      if (sessionStorage.getItem("userName") && sessionStorage.getItem("userToken")){
			        this.$store.commit("userStatus",sessionStorage.getItem("userName"));
			      } else {
			        this.$store.commit("userStatus",null);
			      }
			      return this.$store.getters.isLogin;
			    },
		},

	}
</script>
<style scoped>
	header {
		margin: 0;
		padding: 0;
	}

	.head {
    white-space:nowrap;
		position: relative;
		height: 49px;
		line-height: 49px;
		margin-top: -50px;
		border-bottom: 1px solid #000;
    width: 1510px;
	}

	nav {
    /* background-color: #000000; */
    margin-left: -200px;
    white-space:nowrap;
		display: flex;
		justify-content: flex-end;
		/*margin-right: 30px; */
		font-size: 18px;
		font-weight: bolder;
	}

	.item {
    /* background-color: #000000; */
		color: #000000;
		/* margin: 20px; */
    margin-left: 50px;
		text-decoration-line: none;
		transition: 0.3s;
		font-weight: 545;
		font-size: 18px;
	}

	.item:hover {
		/* color: pink; */
    color: #E2762D;
		/* font-size: 20px; */
	}

	.main {
		background-color: #fff;
	}

	.logo {
		float: left;
		margin-left: .5%;
    white-space:nowrap;
	}

	.person {
		/* position: absolute; */
		float: left;
		width: 50px;
		height: 50px;
    margin-right: 20px;
	}

	#we {
    white-space:nowrap;
		color: #000000;
		float: left;
		margin-left: 1.5%;
		font-style: italic;
		font-size: 1.25rem;
		font-family: Raleway, 'Times New Roman', serif;
		line-height: 2px;
	}
  @media screen and (max-width: 960px) {
    #we {
      /* font-size: 0.625rem; */
    }
    .item {
      /* font-size: 0.625rem; */
    }
    .person {
     /* width: 0.3125rem;
      height: 0.3125rem; */
    }
  }
</style>
