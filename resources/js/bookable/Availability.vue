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
                 />
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
                 />
            </div>
        </div>
        <button class="btn btn-secondary btn-block" @click="check">Check</button>
    </div>
</template>


<script>


export default {
        components:{
          
        },
        data: function(){
            return {
                from: null,
                to: null
    
            }
        },
        methods:{
            check(){
                console.log('ran')
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

</style>