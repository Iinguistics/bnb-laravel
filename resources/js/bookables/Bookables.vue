<template>
    <div>
     <BookableListItem :test= test  :price= price />
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
    
            }
        },
    }
</script>