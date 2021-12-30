<template>
  <div ref="qrcode">
  </div>
</template>

<script>

import qrCode from 'easyqrcodejs'

export default {
    props:["mid"],
    created(){
        this.$nextTick(()=>{
            var qrcode = this.$refs.qrcode;
            new qrCode(qrcode,{
                text:`http://192.168.2.183:8081/oderMsg?mid=${this.mid}`,
                width:200,
                height:200
            })
        })
    }
}
</script>

<style>

</style>