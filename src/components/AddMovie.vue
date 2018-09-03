<template>
    <div class="form-group">
        <h1>ADD MOVIE</h1>
        <form>
           <label>title</label> 
           <input class="form-control" v-model="newMovie.title" type="text" placeholder="title..."><br> 

           <label>director</label> 
           <input class="form-control" v-model="newMovie.director" type="text" placeholder="director..."><br> 

           <label>image</label> 
           <input class="form-control" v-model="newMovie.imageUrl" type="text" placeholder="image..."><br>

           <label>duration</label> 
           <input class="form-control" v-model="newMovie.duration" type="number" placeholder="duration..."><br> 

           <label>release date</label> 
           <input class="form-control" v-model="newMovie.releaseDate" type="text" placeholder="release date..."><br>

           <label>genre</label> 
           <input class="form-control" v-model="newMovie.genre" type="text" placeholder="genre..."><br> 

           <button @click="addNewMovie()" type="button">Add movie</button>
       </form>
    </div>
</template>
<script>
import { movies } from '../services/movies.js'

export default {
    name: 'add-movie',
    data(){
        return {
            newMovie: {}
        }
    },
    methods: {
        addNewMovie(){
           movies.add(this.newMovie)
           .then(response => {this.$router.push('/movies')})
           .catch(err => console.log(err))
        }
    }
}
</script>

