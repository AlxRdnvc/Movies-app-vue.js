<template>
<div>
    <MovieSearch @searchMovies="search"/>
    <MovieRow :movies="filteredMovies"/><br>
</div>
</template>
<script>

import {movies} from '../services/movies.js'
import MovieRow from '../components/MovieRow.vue'
import MovieSearch from '../components/MovieSearch.vue'

export default {
    name: 'AppMovies',
    components: {
        MovieRow,
        MovieSearch
    },

    data() {
        return {
            movies: [],
            title: ''
        }
    },

    computed: {
        filteredMovies(){
            this.title = this.title.toLowerCase()
            return this.movies.filter(movie => movie.title.toLowerCase().indexOf(this.title) >= 0)
        }
    },

    methods: {
        search(title){
            this.title = title
        }
    },

    beforeRouteEnter (to, from, next) {
        movies.getAll()
        .then((response) => {
            next((vm) => {
                vm.movies = response.data
            })
        })
    }
}
</script>

