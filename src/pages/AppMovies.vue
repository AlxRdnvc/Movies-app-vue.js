<template>
<div>
    <MovieRow :movies="movies"/>
</div>
</template>
<script>

import {movies} from '../services/movies.js'
import MovieRow from '../components/MovieRow.vue'

export default {
    name: 'AppMovies',
    components: {
        MovieRow
    },
    data() {
        return {
            movies: []
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

