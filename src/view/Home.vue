<template>
	<div>
		<header>
			<div id="we">
				<h2> Epidemic Surveillance</h2>
			</div>
			<nav>
				<router-link class="item" v-for="item in nvaList" :key="item.id" :to=item.url>{{item.name}}
				</router-link>
			</nav>
		</header>

		<router-view class="main"></router-view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				nvaList: [{
						name: '首页',
						id: 0,
						url: '/content'
					},
					{
						name: '疫情分布',
						id: 1,
						url: '/chinaMap'
					},
					{
						name: 'RealTimeNews',
						url: '/RealTimeNews',
						id: 2,
					},
					{
						name: '疫情趋势',
						url: '/chinaTrend',
						id: 3,
					},
					{
						name: '登陆',
						url: '/Login',
						id: 4
					},
					{
						name: '注册',
						url: '/Register',
						id: 5
					}
				]
			}
		},
	}
</script>
<style scoped>
	header {
		background-color: #4d4c7d;
		height: 6rem;
		line-height: 6rem;
		margin-top: -50px;
	}

	nav {
		display: flex;
		justify-content: flex-end;
		/*margin-right: 30px; */
		font-size: 1rem;
		font-weight: bolder;
		height: 1rem;
	}

	.item {
		color: #fff;
		margin: auto;
		text-decoration-line: none;
		transition: 0.3s;
		font-weight: 545;
		font-size: 1.1em;
	}

	.item:hover {
		color: #b1bdf5;

	}

	.main {
		background-color: #fff;
	}

	#we {
		color: #fff;
		float: left;
		margin-left: 30px;
		font-style: italic;
		font-size: 1.5em;
		font-family: Raleway, 'Times New Roman', serif;
		margin-top: -30px;

	}
</style>
