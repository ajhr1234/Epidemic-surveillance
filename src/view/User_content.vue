<template>
	<body>
		<!-- <div id="fir"> -->
		<!-- <transition name="fade"> -->
		<img src="../images/personalL2.png" alt="" class="img0">
		<div class="pers">Modify Personal Information</div>
		<div class="mess">Message View</div>
		<div class="volu">About Volunteers</div>
		<!-- </transition> -->
		<!-- </div> -->
		<img src="../images/personalL.png" alt="" class="img0000">
		<img src="../images/personalR.png" alt="" class="img2">
		<div class="r" id="te0"> Welcome to your personal page. <br>
			Click to enter the page to view your message.</div>
		<div class="r2" id="te0"> Welcome to your personal page. <br>
			Now you can view your messages, wish you a happy use.</div>
		<div class="bot0">Team11</div>
		<div class="bot1">
			<img src="../images/bot1.png" alt="" class="pic1">
			<div class="na1">Zhang Wei</div>
			<div class="na1">Lin Boying</div>
			<div class="na1">Jiang Haoran</div>
			<br><br>
			<div class="na1">Liu Siyuan</div>
			<div class="na1"> Huang Zhiyi</div>
			<div class="na2"> Huang Yuying</div>
			<br>
			<img src="../images/bot2.png" alt="" class="pic2">
			<div class="na3">Fuzhou University</div>
		</div>
		<div id="Content">
			<router-link to="/MPI">
				<!-- <div id="botton"> -->
				<el-button round style="width: 250px;" class="button1">Modify Personal Information</el-button>
				<!-- </div> -->
			</router-link>
			<router-link to="/MV">
				<!-- <div id="botton"> -->
				<el-button round style="width: 250px;" class="button2">Message View</el-button>
				<!-- </div> -->
			</router-link>
			<router-link to="/about">
				<!-- <div id="botton"> -->
				<el-button round style="width: 250px;" class="button3">About Volunteers</el-button>
				<!-- </div> -->
			</router-link>
		</div>
	</body>
</template>

<style>
	a {
		text-decoration: none;
	}

	/* 	#botton{
		margin-top: 40px;
		text-align: left;

	} */
	.pers {
		position: absolute;
		width: 263px;
		height: 55px;
		top: 148px;
		left: 75px;
		background-color: #6bc7cd;
		/* background-color: pink; */
		border-radius: 12px;
		/* opacity: .3; */
		text-align: center;
		line-height: 55px;
		color: #2e408c;
		font-weight: 700;
	}

	.mess {
		position: absolute;
		width: 263px;
		height: 55px;
		top: 254px;
		left: 75px;
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
		width: 263px;
		height: 55px;
		top: 360px;
		left: 75px;
		background-color: #6bc7cd;
		/* background-color: pink; */
		border-radius: 12px;
		/* opacity: .3; */
		text-align: center;
		line-height: 55px;
		color: #2e408c;
		font-weight: 700;
	}

	.button1 {
		position: absolute;
		left: 80px;
		top: 150px;
		height: 55px;
		opacity: 0;
	}

	.button2 {
		position: absolute;
		left: 80px;
		top: 255px;
		height: 55px;
		opacity: 0;
	}

	.button3 {
		position: absolute;
		left: 80px;
		top: 360px;
		height: 55px;
		opacity: 0;
	}

	/* #Content{
    position: absolute;
    left: 180px;
    top: 100px;
	} */
	@keyframes img00 {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	/* content: url(../images/personalL2.png); */
	.img0 {
		position: absolute;
		/*      display: block; */
		left: 0;
		top: 60px;
		height: 680px;
		animation: img00 2s linear forwards;
	}

	/* //////////////////////////////////////////////////////////// */
	.img0000 {
		position: absolute;
		left: 0px;
		top: 60px;
		height: 680px;
		animation: img00000 2s linear forwards;
	}

	@keyframes img00000 {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}

	/* @keyframes img01{
       	from{
          opacity: 0;
       	}
       	to{
         opacity: 1;
       	}
       }

 .img1 {
      opacity: 0;
      position: absolute;
      left: 0px;
      top: 60px;
      height: 645px;
     animation-delay: 1s;
     animation: img01 1s linear forwards;
  } */
	/* ///////////////////////////////////////////////////////////////////// */
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(-30deg);
		}
	}

	.img2 {
		float: right;
		width: 680px;
		margin-top: 50px;
		animation: rotate 2s linear forwards;
	}

	/* //////////////////////////////////////////////////////////// */
	@keyframes rotate2 {
		0% {
			transform: rotate(0deg);
			opacity: 1;
		}

		100% {
			transform: rotate(-10deg);
			opacity: 0;
		}
	}

	.r {
		float: right;
		width: 500px;
		margin-right: -650px;
		margin-top: 550px;
		font-size: 15px;
		font-weight: 400;
		color: #2d3d8b;
		animation: rotate2 2s linear forwards;
	}

	@keyframes rotate3 {
		0% {
			transform: rotate(0deg);
			opacity: 0;
		}

		100% {
			transform: rotate(-10deg);
			opacity: 1;
		}
	}

	.r2 {
		opacity: 0;
		float: right;
		width: 500px;
		margin-right: -650px;
		margin-top: 550px;
		font-size: 15px;
		font-weight: 400;
		color: #2d3d8b;
		animation: rotate3 2s linear forwards;
	}

	.bot0 {
		float: right;
		margin-right: -50px;
		margin-top: 750px;
		font-size: 15px;
		font-weight: 400;
		color: #2d3d8b;
	}

	.bot1 {
		margin-top: 800px;
		width: 700px;
		height: 100px;
		float: right;
		margin-right: -700px;
		font-size: 15px;
		font-weight: 400;
		color: #2d3d8b;
	}

	.pic1 {
		float: left;
		width: 40px;
	}

	.na1 {
		float: left;
		margin-left: 50px;
	}

	.na2 {
		float: left;
		margin-left: 40px;
	}

	.pic2 {
		float: left;
		width: 40px;
		margin-top: 40px;
	}

	.na3 {
		float: left;
		margin-left: 50px;
		margin-top: 50px;
	}

	/*  #button {
      position: fixed;
      top: 325px;
      left: 555px;
      width: 240px;
      height: 105px;
  } */
</style>


<script>
	export default {
		data() {
			return{
				userName: '',
			}
			
		},
		mounted(){
			this.userName=sessionStorage.getItem("userName");
		}
	}
</script>
