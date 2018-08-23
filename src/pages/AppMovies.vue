<template>
<div>
    <MovieSearch @searchMovies="search"/>
    <p>Number of selected movies: {{ selectedMovies.length }}</p>
    <p v-if="filteredMovies.length === 0">Movie you looking for is not on the list...</p>
    <MovieRow v-for="movie in filteredMovies" :key="movie.id" 
    :movie="movie" @selectedMovie="selected"/>

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
            title: '',
            selectedMovies: []
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
        },
        selected(movie){
            this.selectedMovies.push(movie)
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

