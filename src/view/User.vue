<template>
  <body>

      <img src="../images/personalL.png" alt="" class="img0">
      <div class="ent">ENTER</div>
      <div id="content">
      	<router-link to="/ucon">
      		<el-button round style="width: 250px;height: 100px;"></el-button>
      	</router-link>
      </div>
      <!-- <div id="button"></div> -->
      <img src="../images/personalR.png" alt="" class="img2">
      <div class="r" id="te"> Welcome to your personal page. <br>
          Click to enter the page to view your message.</div>
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
  </body>
</template>

<script>
</script>

<style>
	#content{
    position: absolute;
		top: 326px;
    left: 550px;
    opacity: 0;
    background-color: #000000;
	}
  .ent {
    position: absolute;
    width: 248px;
    height: 105px;
    top: 332px;
    left: 550px;
    /* opacity: .3; */
    background: #2f9aa1;
    border-radius: 26px;
    line-height: 105px;
    color: #FF8532;
    font-weight: 700;
    font-size: 40px;
  }
          .img0 {
              position: absolute;
              left: 0;
              top: 60px;
              height: 680px;
          }

          .img2 {
              float: right;
              width: 680px;
              margin-top: 50px;
          }

          .r {
              float: right;
              width: 500px;
              margin-right: -650px;
              margin-top: 550px;
              font-size: 15px;
              font-weight: 400;
              color: #2d3d8b;
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
          #button {
              position: fixed;
              top: 325px;
              left: 555px;
              width: 240px;
              height: 105px;
          }
</style>
