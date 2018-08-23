<template>
    <div style="margin-top: 30px;" class="form-group col-md-6">
        <input class="form-control" type="text" placeholder="Search movies..." 
         @input="searchTermUpdated"
         v-model="movie">
    </div>
</template>

<script>

export default {
    data(){
        return {
            movie: ''
        }
    },

    methods: {
        searchTermUpdated(){
            this.$emit('searchMovies', this.movie)
        }
    }   
}

</script>


