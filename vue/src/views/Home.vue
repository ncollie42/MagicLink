<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <home_main msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { grpc } from "@improbable-eng/grpc-web";
import { Login } from "../logingRPC/login_pb_service"; //service
import { jwt } from "../logingRPC/login_pb"; //type
import home_main from '@/components/home_main.vue'
import router from "../router"

export default {
  name: 'Home',
  components: {
    home_main
  },
  created() {
    this.isLoggedIn()
  },
  methods:{
    isLoggedIn: function() {
      let localJWT = localStorage.getItem("jwt")

            const req = new jwt()
            req.setJwt(localJWT)
            grpc.unary(Login.isLoggedIn, {
                request: req,
                host: this.$hostname,
                onEnd: res => {
                    const { status, statusMessage, headers, message, trailers } = res;
                    if (status === grpc.Code.OK && message) {
                        console.log("")
                    } else {
                       console.log("status:", status, statusMessage, headers, message, trailers)
                       router.push({path: '/login'})
                    }
                }
            })
        },
  }
}
</script>


<style scoped>
.home {
  text-align: center;
}
</style>