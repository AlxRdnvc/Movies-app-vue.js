<template>
    <div class="form-group">
        <h1>ADD MOVIE</h1>
        <form>
           <label>title</label> 
           <input class="form-control" v-model="newMovie.title" type="text" placeholder="title..."><br>
           <p class="alert alert-warning" v-if="errors.title">{{ errors.title[0] }}</p><br>

           <label>director</label> 
           <input class="form-control" v-model="newMovie.director" type="text" placeholder="director..."><br>
           <p class="alert alert-warning" v-if="errors.director">{{ errors.director[0] }}</p><br> 

           <label>image</label> 
           <input class="form-control" v-model="newMovie.imageUrl" type="text" placeholder="image..."><br>
           <p class="alert alert-warning" v-if="errors.imageUrl">{{ errors.imageUrl[0] }}</p><br>

           <label>duration</label> 
           <input class="form-control" v-model="newMovie.duration" type="number" placeholder="duration..."><br>
           <p class="alert alert-warning" v-if="errors.duration">{{ errors.duration[0] }}</p><br> 

           <label>release date</label> 
           <input class="form-control" v-model="newMovie.releaseDate" type="text" placeholder="release date..."><br>
           <p class="alert alert-warning" v-if="errors.releaseDate">{{ errors.releaseDate[0] }}</p><br>

           <label>genre</label> 
           <input class="form-control" v-model="newMovie.genre" type="text" placeholder="genre..."><br>
           <p class="alert alert-warning" v-if="errors.genre">{{ errors.genre[0] }}</p><br> 

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
            newMovie: {},
            errors: []
        }
    },
    methods: {
        addNewMovie(){
           movies.add(this.newMovie)
           .then(() => {this.$router.push('/movies')})
           .catch((error) => {
                this.errors = error.response.data.error
            })
        }
    }
}
</script>

