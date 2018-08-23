<template>
    <div class="container">
        <div :class="{'selectedBackground': isSelected }">
            <ul class="list-group {'selectedBackground': isSelected}">
                <li class="list-group-item list-group-item-primary"><h2 style="text-align:center;">{{movie.title}}</h2></li>
                <li class="list-group-item list-group-item-secondary">director: <p>{{movie.director}}</p></li>
                <li class="list-group-item list-group-item-secondary">img: <p>{{movie.imageUrl}}</p></li>
                <li class="list-group-item list-group-item-secondary">year: <p>{{movie.releaseDate}}</p></li>
                <li class="list-group-item list-group-item-secondary">genre: <p>{{movie.genre}}</p></li>
                <button v-if="!isSelected" class="btn btn-success" @click="movieSelected">Select</button>
                <button v-else disabled="disabled" class="btn btn-success">Selected</button>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
     props: ['movie'],

    data() {
        return {
            isSelected: false
        }
    },

    methods: {
        movieSelected(){
            this.isSelected = true
            this.$emit("selectedMovie", this.movie)
        }
    }
}
</script>
<style>

.selectedBackground {
    border: 3px solid green;
}
</style>


