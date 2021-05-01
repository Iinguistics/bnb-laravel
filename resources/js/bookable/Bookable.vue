<template>
     <div>
     <div v-if="loading" class="text-center"><Loader /></div>
      <div v-else>
       <div>{{ bookable.title }}</div>
    </div>
  </div>
</template>



<script>
import Loader from '../components/Helpers/Loader';

    export default {
        components:{
           Loader,

        },
        data: function(){
            return {
                loading: true,
                bookable: null
    
            }
        },
        props: {
            title: String,
            description: String
        },
        computed:{
          
            
        },
        created(){
           this.fetchBookable();
        },
        methods:{
           async fetchBookable(){
                const res = await axios.get(`/api/bookables/${this.$route.params.id}`);
                this.bookable = res.data;
                this.loading = false;
            },
       
        
       
    }
    }    
        
    
</script>
