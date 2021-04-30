<template>
    <div>
    <div v-if="loading">Data is loading...</div>
    <div v-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div
          class="col d-flex align-items-stretch"
          v-for="(item, column) in bookablesInRow(row)"
          :key="'row' + row + column"
        >
          <BookableListItem :title= item.title 
             :description= item.description 
             />
        </div>

        <div class="col" v-for="p in placeholdersInRow(row)" :key="'placeholder' + row + p"></div>
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