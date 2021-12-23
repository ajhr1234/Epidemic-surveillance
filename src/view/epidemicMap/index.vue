<template>
  <body>
  <div class="box">
    <div class="pic">
      <img src="../../images/right2.png" >
    </div>
      <div class='dataOne'>
        <div class="first">
        <router-link to='/chinaMap' tag='div' class='china'>
          <img src="../../images/china.png">
        </router-link>
        </div>
        <p>China Distribution</p>
      </div>

      <div class='dataTwo'>
        <div class="sec">
          <router-link to='/worldMap' tag='div' class='world'>
            <img src="../../images/world.png" >
          </router-link>
        </div>
        <p>World Distribution</p>
      </div>

      <div class="dataThree">
        <div class="third">
          <router-link to='/fuJianMap' tag='div' class='fj'>
            <img src="../../images/fujian.png" >
          </router-link>
        </div>
        <p>Fujian Distribution</p>
      </div>
    <!-- </div> -->
    <router-view></router-view>

  </div>
  <div class="bottom">
      <div class="gray"></div>
      <div class="pink">
        <div class="pinkLeft">
          <img src="../../images/logo.png" alt="">
        </div>
        <!-- <div class="pinkMid">Epidemic Surveillance</div> -->
         <div class="pinkMid">Team11</div>
        <div class="pinkRight">
          <ul>
            <li><img src="../../images/1.png" alt=""></img> Jiang Haoran、 Zhang Wei、Lin Boying、Liu Siyuan、Huang Zhiyi、Huang Yuying</li>
            <li><img src="../../images/2.png" alt=""> Fuzhou University</li>
            <li><img src="../../images/3.png" alt=""> 1888-6618-2316</li>
            <li><img src="../../images/4.png" alt=""> CS353 - Team Project</li>
          </ul>
        </div>
      </div>
  </div>
  </body>
</template>

<script>

</script>
<style scoped>

 p {
   font-size: 30px;
   color: #707070;
 }
 .pic {
   margin-top: 150px;
   margin-left: -100px;
   float: left;
   width: 500px;
   height: 500px;
 }
 .pic img {
   width: 408px;
   height: 312px;
 }
 .first:hover {
   border: 10px #66B0B5 solid;
 }
 .sec:hover {
   border: 10px #66B0B5 solid;
 }
 .third:hover {
   border: 10px #66B0B5 solid;
 }
 .dataOne {
   float: left;
   margin: 150px 50px 0 -20px;
   width: 300px;
   height: 312px;
 }
 .first {
   width: 300px;
  border-radius: 100px;
   height: 250px;
   border: 3px #66B0B5 solid;

 }
 .china img {
   width: 250px;
   height: 192px;
   margin-top: 30px;
 }
 .dataTwo {
   float: left;
   margin: 150px 50px 0 5px;
   width: 300px;
   height: 312px;
 }
 .sec {
   width: 300px;
  border-radius: 100px;
   height: 250px;
   border: 3px #66B0B5 solid;

 }
 .world img {
   width: 280px;
   height: 164px;
   margin-top: 50px;
 }
 .dataThree {
   float: right;
   margin: 150px 50px 0 -30px;
   width: 300px;
   height: 312px;
 }
 .third {
   width: 300px;
  border-radius: 100px;
   height: 250px;
   border: 3px #66B0B5 solid;

 }
 .fj img {
   width: 205px;
   height: 250px;
 }
.bottom {
  position: relative;
  height: 130px;
  width: 100%;
  float: left;
  margin-top: 120px;
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
