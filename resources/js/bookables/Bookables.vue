<template>
    <div>
     <div v-if="data">
         <div v-for="item in data" :key="item.id">
             <BookableListItem :title= item.title 
             :description= item.description 
             />
         </div>
     </div>
    </div>
</template>




<script>
import BookableListItem from './BookableListItem';



    export default {
        components:{
            BookableListItem
        },
        data: function(){
            return {
                test: 'Airpods',
                price: 89.99,
                data: []
    
            }
        },
        created(){
        
           this.fetchData();
           console.log(this.data)
        },
        methods:{
           async fetchData(){
                const res = await axios.get('api/bookables');
                this.data = res.data;
            }
        }
    }
</script>