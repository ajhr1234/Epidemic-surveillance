<template>
	<div>
		<header>
			<div class="head">
				<div class="logo">
					<img src="../images/logo.png" alt="">
				</div>
				<div class="person">
					<img src="../images/person.png" alt="">
				</div>
				<div id="we">
					<h2> Epidemic Surveillance</h2>
				</div>
				<nav>
					<router-link class="item" v-for="item in nvaList" :key="item.id" :to=item.url>{{item.name}}
					</router-link>
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

					{
						name: 'Login_Register',
						url: '/login_index',
						id: 4
					},
					// {
					// 	name: 'Register',
					// 	url: '/Register',
					// 	id: 5
					// }
				]
			}
		},
	}
</script>
<style scoped>
	header {
		margin: 0;
		padding: 0;
	}

	.head {
		position: relative;
		height: 49px;
		line-height: 49px;
		margin-top: -50px;
		border-bottom: 1px solid #000;
	}

	nav {
		display: flex;
		justify-content: flex-end;
		/*margin-right: 30px; */
		font-size: 18px;
		font-weight: bolder;
	}

	.item {
		color: #000000;
		margin: auto;
		text-decoration-line: none;
		transition: 0.3s;
		font-weight: 545;
		font-size: 18px;
	}

	.item:hover {
		color: pink;
    font-size: 25px;
	}

	.main {
		background-color: #fff;
	}

	.logo {
		float: left;
		margin-left: 10px;
	}

	.person {
		/* position: absolute; */
		float: right;
		right: 10px;
		width: 50px;
		height: 50px;
		margin-right: 10px;
	}

	#we {
		color: #000000;
		float: left;
		margin-left: 30px;
		font-style: italic;
		font-size: 20px;
		font-family: Raleway, 'Times New Roman', serif;
		line-height: 2px;
	}


</style>
