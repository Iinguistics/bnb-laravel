<template>
  <div>
   <div v-if="loading" class="text-center"><Loader /></div>
     <div v-else>
      <div class="row">
       <div class="col-md-8 pb-4">
        <div class="card">
          <div class="card-body">
            <h2>{{ bookable.title }}</h2>
            <hr />
            <article>{{ bookable.description }}</article>
          </div>
        </div>
      </div>
     <ReviewList />
    </div>
    <div class="col-md-4 pb-4">
    <Availability />
    </div>
  </div>
</div>
</template>



<script>
import Loader from '../components/Helpers/Loader';
import Availability from './Availability';
import ReviewList from './ReviewList';

    export default {
        components:{
           Loader,
           Availability,
           ReviewList

        },
        data: function(){
            return {
                loading: true,
                bookable: null
    
            }
        },
        props: {
            
        },
        computed:{
          
            
        },
        created(){
           this.fetchBookable();
        },
        methods:{
           async fetchBookable(){
                const res = await axios.get(`/api/bookables/${this.$route.params.id}`);
                this.bookable = res.data.data;
                this.loading = false;
            },
       
        
       
    }
    }    
        
    
</script>


<style scoped>


</style>