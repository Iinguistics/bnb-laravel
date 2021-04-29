<template>
    <div>
        <h1>{{test}} {{ price }}</h1>
        <div v-if="myArr">
             <ul>
                 <li v-for="item in myArr" :key="item.id">{{ item }}</li>
          </ul>
        </div>
       
        

    </div>
</template>



<script>

    export default {
        components:{
           
        },
        data: function(){
            return {
               myArr: [556,55,'testing'],
               myString: 'its a h1'
    
            }
        },
        props: {
            test: String,
            price: Number
        },
        computed:{
             alpha: function(){
                    return this.myArr[0] + ' ' + this.myString 
                  
            }

            
        },
        methods:{
           
        },
       
    }
        
        
    
</script>