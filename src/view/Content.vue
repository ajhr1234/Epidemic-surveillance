<template>

  <div id="Content">
    <body>
      <div id="purC" style="width: 800px; height: 800px;"></div>
      <div id="greC" style="width: 450px; height: 450px;"></div>
    <div class="big">
      <div class="center" style="color: rgb(99, 100, 105);">
                  <div class="firbox">Welcome to the epidemic
                      <br>surveillance and convenience
                        <br>service system!
                  </div>
                  <div class="secbox">
                  Our products are specially designed for the epidemic, and it is available to all people.<br>
                  Through our products,users can know the situation of the epidemic in each region inreal time, <br>
                  consult questions related to the epidemic online, and buy some protective  equipment<br>
                  and disinfection tools through our product.
                  </div>
                  <div class="start">
                  <a href="Login">Let's start!</a>
              </div>
              <!-- 中央元素结束 -->
              <div class="picR">
                  <img src="../images/content0.png" alt="">
              </div>
              <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
              <div class="bottom">
                  <div class="gray"></div>
                  <div class="pink">
                    <div class="pinkLeft">
                      <!-- <img src="../images/logo.png" alt=""> -->
                    </div>
                    <!-- <div class="pinkMid">Epidemic Surveillance</div> -->
                     <div class="pinkMid">Team11</div>
                    <div class="pinkRight">
                      <ul>
                        <li><img src="../images/1.png" alt=""></img> Jiang Haoran、 Zhang Wei、Lin Boying、Liu Siyuan、Huang Zhiyi、Huang Yuying</li>
                        <li><img src="../images/2.png" alt=""> Fuzhou University</li>
                        <li><img src="../images/3.png" alt=""> 1888-6618-2316</li>
                        <li><img src="../images/4.png" alt=""> CS353 - Team Project</li>
                      </ul>
                    </div>
                  </div>
              </div>

      </div>


    </div>
    </body>
  </div>
</template>

<script>
</script>

<style scoped>
  #purC {
    position: absolute;
    z-index: 100;
    top: -130px;
    left: -130px;
    opacity: 0.13;
    background-color: #2d3d8b;
    border-radius: 50%;
  }
  #greC {
      position: absolute;
      z-index: 90;
      top: 330px;
      left: -50px;
      opacity: 0.21;
      background-color: #2f9aa1;
      border-radius: 50%;
  }
body {
    /* background-image: url(../images/bac.png); */
        /* background-size: 100%; */
  }
  .big {
     width: 100%;
  }
  a {
      text-decoration: none;
  }
  li {
    list-style: none;
  }
.firbox {
      margin: 120px 0 0 150px;
      text-indent: 1em;
      text-align: left;
      font-size: 55px;
  }
  .secbox {
      margin: 60px 0 0 120px;
      text-indent: 2em;
      text-align: left;
  }
  .start {
      position: absolute;
      z-index: 200;
      margin: 10px 0 0 240px;
      background-color: rgb(226, 118, 45);
      border-radius: 80px;
      width: 250px;
      height: 80px;
  }
  .start a {
      display: block;
      line-height: 80px;
      text-align: center;
      color: #fff;
      font-size: 30px;
  }
  .start a:hover {
    font-size: 35px;
    font-weight: bold;

  }

  .picR {
      position: absolute;
      top: 100px;
      left: 900px;
  }
  .picR img {
  width: 600px;
  height: 600px;
  }
  .bottom {
  position: relative;
  height: 130px;
  width: 100%;
  }
  .pink {
  position: absolute;
  width: 80%;
  height: 250px;
  background-color: rgb(144, 195, 216, 0.97);
  bottom: 0;
  right: 0;
  }
  .gray {
  position: absolute;
  width: 90%;
  height: 150px;
  background-color:#ccc;
  bottom: 0;
  right: 0;
  }
  .pinkLeft {
    margin-top: 50px;
    float: left;
    width: 150px;
  }
  .pinkLeft img {
    width: 89px;
    height: 80px;
  }
  .pinkMid {
    margin-top: 80px;
    float: left;
    width: 90px;
    font-size: 70px;
    font-style: italic;
    font-family: Raleway, 'Times New Roman', serif;
  }
  .pinkRight {
    float: right;
    width: 66%;
    height: 250px;
    text-align: left;
  }
  .pinkRight ul li {
    margin: 30px 0 30px 0;
    font-size: 18px;
  }
</style>
