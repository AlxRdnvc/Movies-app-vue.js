<template>
    <div>
        <ul class="list-group" v-for="(movie, index) in movies" :key="index">
            <li class="list-group-item list-group-item-primary">title: <h2>{{movie.title}}</h2></li>
            <li class="list-group-item list-group-item-secondary">director: <p>{{movie.director}}</p></li>
            <li class="list-group-item list-group-item-secondary">img: <p>{{movie.imageUrl}}</p></li>
            <li class="list-group-item list-group-item-secondary">year: <p>{{movie.releaseDate}}</p></li>
            <li class="list-group-item list-group-item-secondary">genre: <p>{{movie.genre}}</p></li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['movies']
}
</script>

