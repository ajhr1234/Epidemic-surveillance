<template>
	<div id="main">
		<div id="header">
			<el-button type="text" icon="el-icon-caret-left" style="float: left;display: inline-block"><router-link to="/main" id="main1">返回</router-link></el-button>
			<p style="display: inline-block;">操作指南</p>
			<el-divider></el-divider>
		</div>
		<div id="content" class="content">
			<h1>操作指南</h1>
			<h2>一、点击在线预约</h2>
			<p>&nbsp &nbsp就近选择预约购买网点。</p>
			<img src="../../images/u13.png" style="width: 300px;" >
			<h2>二、选择预约网点</h2>
			<p>&nbsp &nbsp根据需要选择需要预约网点及时间。</p>
			<img src="../../images/u6.png" style="width: 300px;">
			<h2>三、预约成功</h2>
			<p>&nbsp &nbsp 查看预约记录，在网点购买时出示二维码。</p>
			<img src="../../images/u10.png" style="width: 300px;">
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style scoped>
	#main{
		width:400px;
		margin-left: 38%;
	}
	h2{
		text-align: left;
		color: red;
	}
	#content p{
		text-align: left;
		color: red;
	}
	#main1{
		color: blue;
		text-decoration: none;
	}
</style>
