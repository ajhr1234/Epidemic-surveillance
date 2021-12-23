<template>
  <body>

  <div>
    <div class="block">
        <el-timeline>
          <el-timeline-item v-for="item in newsList" :key="item.id" size="large">
            <div class="newsitem">
              <p>
                {{item.pubDate}}（{{ item.pubDateStr }}）
              </p>
              <el-card>
                <p style="font-weight:bold">
                  {{item.title}}
                </p>
                <p class="newscontent">{{ item.summary }}</p>
                <div class="newsfooter">
                  <p></p>
                  <p>
                    来源:<span class="origin">{{ item.infoSource }}</span>
                  </p>
                </div>
              </el-card>
            </div>
          </el-timeline-item>
        </el-timeline>
    </div>

  </div>
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

import axios from 'axios'
import dayjs from 'dayjs'
const APIKEY = '964dc226dd5b57e892e6199735b6c55f'

export default{
  data(){
    return{
      newsList : []
    }
  },
  methods:{
    getData(){
      axios({
        method: 'get',
        url: `http://api.tianapi.com/txapi/ncov/index?key=${APIKEY}`
      }).then(res=>{
        console.log(res);

        if (res.status === 200) {
        const { news } = res.data.newslist[0]
        news.forEach((item) => {
          item.pubDate = dayjs(item.pubDate).format('YYYY.MM.DD. HH:mm')
        })
        this.newsList = news
        console.log(this.newsList);

      }

      })
    }
  },
  mounted(){
    this.getData();
  }
}

</script>
<style scoped>
.block{
  margin-left: 20px;
  margin-top: 20px;
}
.newsitem{
    /* margin-top: 30px; */
    width: 100%;
    background-color: #fff;
}
.newscontent{
    overflow: hidden;
}
.newsfooter{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
.origin{
    color: #6C63FF;
    padding-left: 5px;
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
