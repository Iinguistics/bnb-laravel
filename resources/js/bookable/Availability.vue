<template>
    <div>
        <h5 class="text-secondary font-weight-bolder">Check Availabilty</h5>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="from">From</label>
                <input 
                 v-model="from"
                 @keyup.enter="check"
                 type="text" 
                 name="from" 
                 class="form-control form-control-sm"
                 placeholder="Start Date"
                 :class="[{'is-invalid' : this.errorFor('from')}]"
                 />
              <div class="invalid-feedback" v-for="(error, index) in this.errorFor('from')" :key="'from' + index">{{ error }}</div>
            </div>

            <div class="form-group col-md-6">
                <label for="to">To</label>
                <input 
                 v-model="to"
                 @keyup.enter="check"
                 type="text" 
                 name="to" 
                 class="form-control form-control-sm"
                 placeholder="End Date"
                 :class="[{'is-invalid' : this.errorFor('to')}]"
                 />
                 <div class="invalid-feedback" v-for="(error, index) in this.errorFor('to')" :key="'to' + index">{{ error }}</div>
            </div>
        </div>
        <button class="btn btn-secondary btn-block" @click="check" :disabled="loading">Check</button>
    </div>
</template>


<script>


export default {
        components:{
          
        },
        data: function(){
            return {
                from: null,
                to: null,
                loading: false,
                status: null,
                errors: null
            }
        },
        methods:{
           async check(){
               this.loading = true;
               this.errors = null;
                try{
                const res = await 
                axios.get(`/api/bookables/${this.$route.params.id}/availability?from=${this.from}&to=${this.to}`);
                this.status = res.status;
                this.loading = false;
                }catch(error){
                    if(422 === error.response.status){
                        this.errors = error.response.data.errors;
                    }
                    this.status = error.response.status;
                    this.loading = false;
                }
            },
            errorFor(field){
                return this.hasErrors && this.errors[field] ? this.errors[field] : null;
            }
        },
        computed:{
            hasErrors(){
                return 422 === this.status && this.errors !== null;
            },
            hasAvailability(){
                return 200 === this.status;
            },
            noAvailability(){
                return 400 === this.status;
            }
        }
}      
</script>



<style scoped>

label{
font-size: 0.7rem;
font-weight: bolder;
color: #353535;
text-transform: uppercase;
}


.is-invalid{
    border-color: red;
    background-image: none;
}

.invalid-feedback{
    color: red;
}

</style>