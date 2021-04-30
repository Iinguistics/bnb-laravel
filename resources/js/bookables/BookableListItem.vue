<template>
    <div class="card w-100">
        <div class="card-body">
         <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ description }}</p>
        </div>
         
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
            title: String,
            description: String
        },
        computed:{

            
        },
        methods:{
           
        },
       
    }
        
        
    
</script>