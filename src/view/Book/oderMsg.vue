<template>
  <div>
      <h1>订单信息</h1>
    <el-form label-width="80px" :model="data">
      <el-form-item label="姓名">
        <el-input disabled v-model="data.uname"></el-input>
      </el-form-item>
      <el-form-item label="订单号">
        <el-input disabled v-model="data.mid"></el-input>
      </el-form-item>
      <el-form-item label="医院地址">
        <el-input disabled v-model="data.saddress"></el-input>
      </el-form-item>
      <el-form-item label="口罩数量">
        <el-input disabled v-model="data.mnumber"></el-input>
      </el-form-item>
      <el-form-item label="下单时间">
        <el-input disabled v-model="data.ordertime"></el-input>
      </el-form-item>
      <el-form-item label="送达时间">
        <el-input disabled v-model="data.atime"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    var mid = location.href.split("=")[1];

    axios.get(`http://192.168.2.183:8080/getOderByMid/${mid}`).then((res) => {
      console.log(res);
      if (res.data.code == 200) {
        this.data = res.data.data;
        this.data.ordertime = this.dateFormat(new Date(this.data.ordertime));
        this.data.atime =this.dateFormat( new Date(this.data.atime));
      }
    });
  },
  data() {
    return {
      data: {
        mid: null,
        uname: "",
        saddress: "",
        ordertime: "",
        atime: "",
        mnumber: null,
      },
    };
  },
  methods:{
      dateFormat(dateTime) {
				var y = dateTime.getFullYear();
				var m = (dateTime.getMonth() + 1).toString().padStart(2, '0');
				var d = (dateTime.getDate() + 1).toString().padStart(2, '0');
				return y + '-' + m + '-' + d
			},
  }
};
</script>

<style>
</style>