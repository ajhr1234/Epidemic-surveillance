<template>
  <body>

  <div class="box">
    <div class="pic">
      <img src="../../images/right.gif" >
    </div>
  <div>

      <div class='dataOne'>
        <div class="first">
          <router-link to='/chinaTrend' tag='div' class='china'>
            <img src="../../images/china.png">
          </router-link>
        </div>
            <p>China Trend</p>
      </div>

      <div class='dataTwo'>
        <div class="sec">
          <router-link to='/worldTrend' tag='div' class='world'>
            <img src="../../images/world.png" >
          </router-link>
        </div>
        <p>World Trend</p>
      </div>
    <router-view></router-view>
  </div>
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
export default {

}
</script>
<style scoped>

p {
  font-size: 30px;
  color: #707070;
}
.pic {
  margin-top: 100px;
  margin-left: -30px;
  float: left;
  width: 500px;
  height: 500px;
}
.pic img {
  width: 508px;
  height: 412px;
}
.first:hover {
  border: 10px #efc4bf solid;
}
.sec:hover {
  border: 10px #efc4bf solid;
}
.dataOne {
  float: left;
  margin: 150px 50px 0 120px;
  width: 300px;
  height: 312px;
}
.first {
  width: 300px;
 border-radius: 100px;
  height: 250px;
  border: 3px #efc4bf solid;

}
.china img {
  width: 250px;
  height: 192px;
  margin-top: 30px;
}
.dataTwo {
  float: right;
  margin: 150px 150px 0 40px;
  width: 300px;
  height: 312px;
}
.sec {
  width: 300px;
 border-radius: 100px;
  height: 250px;
  border: 3px #efc4bf solid;

}
.world img {
  width: 280px;
  height: 164px;
  margin-top: 50px;
}

.bottom {
  position: relative;
  height: 130px;
  width: 100%;
  float: left;
  margin-top: 170px;
  }
  .pink {
  position: absolute;
  width: 80%;
  height: 250px;
  background-color: #efc4bf;
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
