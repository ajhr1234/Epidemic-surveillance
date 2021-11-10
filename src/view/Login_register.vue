<template>
  <body>
  <div class="box">
          <div class="left">
              <div>
                  <img src="../images/left.png" alt="">
              </div>
              <div class="signIn"><a href="/Login">Sign in</a></div>
              <div class="leftP"><a href="/Login">I have already get an account</a></div>
          </div>
          <div class="right">
              <div><img src="../images/right.gif" alt=""></div>
              <div class="signUp"><a href="/Register">Sign up</a></div>
              <div class="rightP"><a href="/Register">I haven't an account yet</a></div>
          </div>
      </div>
      <br><br><br><br><br><br><br>
  <div class="bottom">
      <div class="gray"></div>
      <div class="pink">
        <div class="pinkLeft">
          <img src="../images/logo.png" alt="">
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
  </body>
</template>

<script>
</script>

<style scoped>
  a {
      text-decoration: none;
  }
/* 中央部分 */
.box {
    height: 550px;
    width: 1200px;
    margin: auto;
     /* background-color: pink; */
     margin-top: 100px;
}
.left {
    float: left;
    margin: 0 0 0 100px;
    height: 500px;
    width: 500px;
    /* background-color: purple; */
}
.left img {
    width: 408px;
    height: 312px;
}
.right {
    float: right;
    margin: 0 100px 0 0;
    width: 500px;
    height: 500px;
    /* background-color: blue; */
}
.right img {
    width: 408px;
    height: 312px;
}

.signIn {
    margin: 10px 0 0 90px;
    background-color: #e08b82;
    border-radius: 80px;
    width: 250px;
    height: 80px;
}
.signIn a {
    display: block;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-size: 30px;
}
.leftP {
    margin: 20px 0 0 100px;
    text-align: left;
    text-indent: 1em;
}
.leftP a {
    color: #898888;
}

.signUp {
    margin: 10px 0 0 90px;
    background-color: #e08b82;
    border-radius: 80px;
    width: 250px;
    height: 80px;
}
.signUp a {
    display: block;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-size: 30px;
}
.rightP {
    margin: 20px 0 0 120px;
    text-align: left;
    text-indent: 1em;
}
.rightP a {
    color: #898888;
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
