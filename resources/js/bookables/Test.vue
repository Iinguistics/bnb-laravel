<template>
    <div>
    <div v-if="loading" class="text-center"><Loader /></div>
    <div v-else>
       <div class="row row-cols-auto row-cols-md-4">

       
        <div 
          v-for="item in bookables" :key="item.id"
        >
          
               <div class="col my-2 md-my-0">
             <BookableListItem :title= item.title 
             :description= item.description 
             />
      </div>
      
      
  </div>

       </div>
    </div>

  
  </div>

</template>




<script>
import BookableListItem from './BookableListItem';
import Loader from '../components/Helpers/Loader';


    export default {
        components:{
            BookableListItem,
            Loader
        },
        data: function(){
            return {
                test: 'Airpods',
                price: 89.99,
                bookables: null,
                loading: true,
                columns: 3
    
            }
        },
        computed: {
            rows(){
            return this.bookables === null ? 0 : Math.ceil(this.bookables.length / this.columns);
            }
        },
        created(){
            
           this.fetchData();
           console.log(this.data)
        },
        methods:{
           async fetchData(){
                const res = await axios.get('api/bookables');
                this.bookables = res.data;
                this.loading = false;
            },
            bookablesInRow(row) {
            return this.bookables.slice((row - 1) * this.columns, row * this.columns);
            },
            placeholdersInRow(row) {
            return this.columns - this.bookablesInRow(row).length;
            }
        }
    }
</script>