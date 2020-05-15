<template>
    <div>
        <p>You're logged in</p>
        <h1>{{email}} </h1>
        <input class="btn" @click="logOut" type="submit" value="Logout"/>
    </div>
</template>

<script>
import Vue from 'vue'
import router from "@/router"
export default {
    data() {
        return {
            email: Vue.prototype.$user
        }
    },
    methods: {
        logOut: function () {
            localStorage.removeItem("jwt")
            router.push({path: '/login'})
        }
    }
}
</script>
