<template>
<div>
    <!-- <div>
        <ul v-for="(movie, index) in movies" :key="index"><li><h2>{{movie.title}}</h2></li></ul>
    </div> -->
</div>
</template>
<script>

import {movies} from '../services/movies.js'

export default {
    name: 'AppMovies',
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

