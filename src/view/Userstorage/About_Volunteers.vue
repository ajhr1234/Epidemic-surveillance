<template>
	<div id="main">
    <img src="../../images/personalL2.png" alt="" class="img0">
    <img src="../../images/personalR.png" alt="" class="img1">
    <a href="#" class="pers">Modify Personal Information</a>
    <a href="#" class="mess">Message View</a>
    <a href="#" class="volu">About Volunteers</a>
    <div class="box">
      <div id="header">
      	<h1>About Volunteers</h1>
      </div>
      <div id="body">
      	<el-card class="box-card" shadow="hover">
      		<div slot="header" class="clearfix">
      			<span class="vol">Volunteer1</span>
      		</div>
      		<div class="text item">
      			<span class="n">Name: </span> <span class="name">HaoranJiang</span>
             <br> <br>
      			Email:
      			<el-button type="primary" plain>
      			<a href="mailto:jhr13950850032@163.com?body=I need your help!!! You can through this email to connect with me!!!">jhr13950850032@163.com</a>
      			</el-button>
            <br><br>
      			<span>Phone Number: </span> <span class="tel">18760195037</span>
      		</div>
      	</el-card>
      </div>
    </div>

	</div>

</template>

<script>
</script>

<style>
  .pers {
    position: absolute;
    width: 260px;
    height: 55px;
    top: 146px;
    left: 73px;
    background-color: #6bc7cd;
    border-radius: 12px;
/*    opacity: .3; */
    text-align: center;
    line-height: 55px;
    color: #2e408c;
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
  .box {
      position: absolute;
      left: 500px;
      top: 150px;
      width: 650px;
      height: 400px;
      border: 2px solid #e2762d;
      border-radius: 20px;
    }
  #header {
    float: right;
    font-size: 10px;
    width: 250px;
    background-color: #e2762d;
    text-align: center;
    margin-right: -2px;
    border-top-right-radius: 20px;
  }
	#body {
		text-align: left;
		margin-left: 80px;
    margin-top: 80px;
	}

  .vol {
    font-weight: 700;
    color: #e2762d;
  }
  .n {
    float: left;
  }
  .tel {
    border: 2px solid #e2762d;
    border-radius: 7px;
    margin-left: 16px;
    margin-top: -5px;
    padding: 5px;
    color: #000000;
  }

  .name {
    float: left;
    border: 2px solid #e2762d;
    border-radius: 7px;
    margin-left: 16px;
    margin-top: -5px;
    padding: 5px;
    color: #000000;
  }
	a {
		text-decoration: none;
		color: #000000;
	}

	.text {
		font-size: 14px;
    color: #e2762d;
    font-weight: 700;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 480px;
	}
</style>
