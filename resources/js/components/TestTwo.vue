<template>
    <div>
      <h3>Click to view all users</h3>
      <button class="submit-btn" @click="fetchUsers">Submit</button>
      <h5 v-if="error">{{error}}</h5>
      <div v-if="users">
          <h1>Users:</h1>
          <div class="flex-container">
              <div v-for="user in users" :key="user.id" class="flex-item">
              <h3>Name: {{ user.name }}</h3>
              <p>Company: {{ user.company.name }}</p>
              <span>Website: </span> <a :href="user.website" target="_blank">{{ user.website }}</a>
            </div>
          </div>
      </div>
    </div>
</template>

<script>

export default {
    components:{
      
    },
     data: function(){
            return {
                loading: false,
                users: null,
                error: ""
            }
        },

        methods:{
            fetchUsers: async function(){
                try{
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.users = data;
                this.error = "";
                console.log(this.users);

                }catch(error){
                this.error = error;
                }
            }
        },

        created() {
            // this.fetchUsers();
        },
        computed:{
            
        },
        //watch:{
            // users:function(){
            //     if(this.users[0].address.city === 'Gwenborough'){
            //         this.$router.push('/')
            //     }else{
            //     console.log(this.users[0].address.city);
            //     }
            //}
        //}
        
}
</script>


<style scoped>
.submit-btn{
    background: #151515;
    color: #fff;
    border-radius: 4px;
}

.flex-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

.flex-item{
    width: 33%;
    margin-top: 2rem;
}

h1, h5{
    margin: 1rem 0 1rem;
}



@media only screen and (max-width: 600px) {
  .flex-container{
      flex-direction: column;
  }

  .flex-item{
    width: 90%;
    margin: auto;
}
}
</style>
    
