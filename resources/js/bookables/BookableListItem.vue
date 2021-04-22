<template>
    <div>
        <h1>{{test}}: {{ price }}</h1>
    </div>
</template>



<script>

    export default {
        components:{
           
        },
        data: function(){
            return {
               
    
            }
        },
        props: {
            test: String,
            price: Number
        }
    }
</script>