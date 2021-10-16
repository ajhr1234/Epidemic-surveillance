<template>

  <div id="Content">
    <h1>内容页</h1>
    <ul>
      <li>name:{{message}} num: {{num}} value: {{value}} total: {{total}}</li>
      <li>name:{{message1}} num: {{num1}} value: {{value1}} total: {{total1}}</li>
      <li>name:{{message2}} num: {{num2}} value: {{value2}} total: {{total2}}</li>
      <li>name:{{message3}} num: {{num3}} value: {{value3}} total: {{total3}}</li>
      <li>name:{{message4}} num: {{num4}} value: {{value4}} total: {{total4}}</li>
      <li>name:{{message5}} num: {{num5}} value: {{value5}} total: {{total5}}</li>
      <li>all:{{totalall}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Content",
  data(){
    return{
      message:'hello',
      num:10,
      value:2210,
      message1: 'Hello1',
      num1:10,
      value1:210,
      message2: 'Hello2',
      num2:30,
      value2:20,
      message3: 'Hello3',
      num3:230,
      value3:20,
      message4: 'Hello4',
      num4:10,
      value4:20,
      message5: 'Hello5',
      num5:120,
      value5:20
    }
  },
  computed: {

    // 计算属性的 getter
    total () {
      // `this` 指向 vm 实例
      return this.num*this.value;
    },
    total1() {
      // `this` 指向 vm 实例
      return this.num1*this.value1;
    },
    total2() {
      // `this` 指向 vm 实例
      return this.num2*this.value2;
    },
    total3() {
      // `this` 指向 vm 实例
      return this.num3*this.value3;
    },
    total4() {
      // `this` 指向 vm 实例
      return this.num4*this.value4;
    },
    total5 () {
      // `this` 指向 vm 实例
      return this.num5*this.value5;
    },
    totalall () {
      // `this` 指向 vm 实例
      return this.total+this.total1+this.total2+this.total3+this.total4+this.total5;
    }
  }

}

</script>

<style scoped>

</style>
