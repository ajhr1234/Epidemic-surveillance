<template>
  <body>
    <img src="../../images/personalL2.png" alt="" class="img0">
    <img src="../../images/personalR.png" alt="" class="img1">
    <a href="../MPI" class="pers">Modify Personal Information</a>
    <a href="../MV" class="mess">Message View</a>
    <a href="../about" class="volu">About Volunteers</a>
    <img src="../../images/mask02.png" alt="" class="mask">
    <div class="maskR">Medical mask information</div>
    <div class="maskR2">You haven't make a medical mask appointment yet!</div>
    <router-link :to="'/my_book/'+userName" class="maskR3">Click here to make an appointment</router-link>
    <img src="../../images/acid2.png" alt="" class="acid">
    <div class="acidR">Nucleic acid information</div>
    <div class="acidR2">You haven't make a nucleic acid appointment yet!</div>
    <router-link :to="'/Nucleic_result/'+userName" class="acidR3">Click here to make an appointment</router-link>
    <img src="../../images/vaccine2.png" alt="" class="vacc">
    <div class="vaccR">Vaccination information</div>
    <div class="vaccR2">You haven't make a vaccination appointment yet!</div>
    <router-link :to="'/vaccination_result/'+userName" class="vaccR3">Click here to make an appointment</router-link>
  </body>
</template>

<script>
  export default {
    data() {
      return {
        userName:''
      }
    },
    mounted(){
      this.userName=sessionStorage.getItem("userName")
    }
  }
</script>

<style>
  a {
    text-decoration: none;
    /* color: #000000; */
  }

  .img0 {
    position: absolute;
    left: 0;
    top: 60px;
    height: 660px;
    animation: .1s linear forwards;
  }

  @keyframes rotate01 {
    0% {
      transform: rotate(0deg);
    }

    100% {
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
    background-color: #2D3D8B;
    /* background-color: pink; */
    border-radius: 12px;
    /* opacity: .3; */
    text-align: center;
    line-height: 55px;
    color: #F2F2F2;
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
    color: #2D3D8B;
    font-weight: 700;
  }

  .mask {
    position: absolute;
    width: 60px;
    left: 550px;
    top: 120px;
  }

  .maskR {
    height: 35px;
    position: absolute;
    width: 220px;
    left: 630px;
    top: 130px;
    text-align: center;
    line-height: 35px;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: #6BC7CD;
  }

  .maskR2 {
    position: absolute;
    left: 640px;
    top: 180px;
    height: 35px;
  }

  .maskR3 {
    position: absolute;
    left: 640px;
    top: 220px;
    height: 35px;
    width: 300px;
    text-align: center;
    line-height: 35px;
    background-color: #6BC7CD;
    border-radius: 10px;
    color: #ffffff;
  }

  /*  */
  .acid {
    position: absolute;
    width: 60px;
    left: 550px;
    top: 300px;
  }

  .acidR {
    height: 35px;
    position: absolute;
    width: 220px;
    left: 630px;
    top: 310px;
    text-align: center;
    line-height: 35px;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: #6BC7CD;
  }

  .acidR2 {
    position: absolute;
    left: 640px;
    top: 360px;
    height: 35px;
  }

  .acidR3 {
    position: absolute;
    left: 640px;
    top: 400px;
    height: 35px;
    width: 300px;
    text-align: center;
    line-height: 35px;
    background-color: #6BC7CD;
    border-radius: 10px;
    color: #ffffff;
  }

  /*  */
  .vacc {
    position: absolute;
    width: 60px;
    left: 550px;
    top: 480px;
  }

  .vaccR {
    height: 35px;
    position: absolute;
    width: 220px;
    left: 630px;
    top: 490px;
    text-align: center;
    line-height: 35px;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: #6BC7CD;
  }

  .vaccR2 {
    position: absolute;
    left: 650px;
    top: 540px;
    height: 35px;
  }

  .vaccR3 {
    position: absolute;
    left: 640px;
    top: 580px;
    height: 35px;
    width: 300px;
    text-align: center;
    line-height: 35px;
    background-color: #6BC7CD;
    border-radius: 10px;
    color: #ffffff;
  }
</style>
