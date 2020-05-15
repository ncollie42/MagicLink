<template>
<div >
    <h1>Sign up / Log in</h1>
    <form @submit="$emit('email', email)" >
        <input type="email" v-model=email placeholder="Hello@world.com">
        <div id="space"></div>
        <input class="btn" type="submit" value="Sign up / Log in" >
    </form>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name:"login_enter",
    data(){
        return {
            email:"",
        }
    },
})
</script>

<style scoped>

#space {
    height: 1pc;
}

#btn:hover {
    transform: scale(1.05);
}


</style>