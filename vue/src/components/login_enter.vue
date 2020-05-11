<template>
<div >
    <form @submit="$emit('email', email)">
        <input type="text" v-model=email placeholder="Hello@world.com">
        <input type="submit">
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
