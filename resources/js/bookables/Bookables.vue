<template>
    <div>
     <div v-if="loading" class="text-center"><Loader /></div>
      <div v-else>
       <div class="row row-cols-auto row-cols-md-3">
        <div v-for="item in bookables" :key="item.id">
            <router-link :to="{ name: 'bookable', params: { id: item.id } }">
             <div class="col my-2 md-my-0">
             <BookableListItem 
             :title= item.title 
             :description= item.description 
             />
          </div>
            </router-link>
              
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
                bookables: null,
                loading: true,
    
            }
        },
        computed: {
            
        },
        created(){
           this.fetchBookables();
        },
        methods:{
           async fetchBookables(){
                const res = await axios.get('/api/bookables');
                this.bookables = res.data;
                this.loading = false;
            },
        }
    }
</script>



<style scoped>

 a{
     text-decoration: none;
 }

</style>