<template>
    <div>
        <H1>TEST</H1>
        <p>{{data}}</p>
    </div>
</template>
 
<script>
    import axis from 'axios';
    export default {
        name: 'Test',
        data() {
            return {
                data: {},
            };
        },
        methods: {
            getData() {
                axis.get('/api/xhr/search/queryHotKeyWord.json')//axis后面的.get可以省略；
                    .then(
                        (response) => {
                            console.log(response);
                            this.data = response;
                        })
                    .catch(
                        (error) => {
                            console.log(error);
                });
            },
        },
        mounted() {
            this.getData();
        },
    };
</script>
 
<style scoped>
 #main{
 	width:400px;
 	margin-left: 38%;
 }
</style>