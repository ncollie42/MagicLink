<template>
    <div class="container">
        <div class="containerInner">
        <login_enter v-on:email="login" v-if="currentState == State.Idle"/>
        <login_waiting v-bind:email=email v-if="currentState == State.Waiting"/>
        <p v-if="currentState == State.Idle">{{responce}}</p>
        </div>
    </div>
</template>

<script>
import login_enter from "@/components/login_enter.vue"
import login_waiting from "@/components/login_waiting.vue"
import { grpc } from "@improbable-eng/grpc-web";
import { Login } from "../logingRPC/login_pb_service"; //service
import { loginInfo, jwt} from "../logingRPC/login_pb"; //type
import router from "../router"
import Vue from "vue"
const State = {
    Idle: 1,
    Waiting: 2,
}
export default {
    name: "login",
    components: {
        login_enter,
        login_waiting,
    },
    created() {
        this.isLoggedIn();
    },
    data() {
        return {
            currentState: State.Idle,
            State,
            responce:"",
            email:"",
        }
    },
    methods: {
        login(passedEmail) {
            this.email = passedEmail
            const sendingEmail = new loginInfo();
            sendingEmail.setEmail(passedEmail);
            sendingEmail.setKey(1);

            this.currentState = State.Waiting;
            grpc.unary(Login.login, {
                request: sendingEmail,
                host: this.$hostname,
                onEnd: res => {
                    const { status, statusMessage, headers, message, trailers } = res;
                    if (status === grpc.Code.OK && message) {
                        localStorage.setItem("jwt", message.toObject().jwt);
                        Vue.prototype.$user = this.email
                        router.push({path: '/'})
                    } else {
                    console.log("status:", status, statusMessage, headers, message, trailers)
                        this.responce = "You're link is expired try again"
                        this.currentState = State.Idle;
                    }
                }
            })
        },
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
                        router.push({path: '/'})
                    } else {
                       console.log("status:", status, statusMessage, headers, message, trailers)
                    }
                }
            })
        }
    },
}
</script>


