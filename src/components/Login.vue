<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email..." name="email" v-model="email">
                <p class="alert alert-danger" v-if="errors">{{ errors }}</p>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password..." v-model="password" name="password">
                <p class="alert alert-danger" v-if="errors">{{ errors }}</p>  
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>
 <script>
 
    import { authService } from '../services/auth'
    import { eventBus } from '../main'

    export default {
    data(){
        return {
            email: '',
            password: '',
            errors:''
        }
    },
    methods: {
         onSubmit(){
            authService.login(this.email, this.password)
                .then((response) => {
                    eventBus.$emit('changeState', true)
                    this.$router.push('/movies')
                })
                .catch((error) => {
                this.errors = error.response.data.error
            })
        }
    }
}
</script>