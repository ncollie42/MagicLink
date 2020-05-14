<template>
    <div class="container">
        <login_enter v-on:email="call" v-if="currentState == State.Idle"/>
        <h1 v-if="currentState == State.Waiting">Waiting</h1>
        <h1>{{responce}}</h1>
    </div>
</template>



<script>
import login_enter from "@/components/login_enter.vue"
import { grpc } from "@improbable-eng/grpc-web";
import { Login } from "../logingRPC/login_pb_service"; //service
import { loginInfo, jwt } from "../logingRPC/login_pb"; //type

const State = {
    Idle: 1,
    Waiting: 2,
}
export default {
    name: "login",
    components: {
        login_enter,
    },
    created() {
        this.isLoggedIn();
        console.log("created now!")
    },
    data() {
        return {
            currentState: State.Idle,
            State,
            responce:"",
        }
    },
    methods: {
        call(passedEmail) {
            
            // e.preventDefault();
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
                    // console.log("All good it worked: ", message.toObject());
                        // this.responce = message.toObject().jwt;
                        localStorage.setItem("jwt", message.toObject().jwt);
                        this.currentState = State.Idle;
                    } else {
                    console.log("status:", status, statusMessage, headers, message, trailers)
                        this.responce = "failed"
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
                        console.log("We good -> forward elsewhere")
                    } else {
                       console.log("status:", status, statusMessage, headers, message, trailers)
                       console.log("Not logged in")
                    }
                }
            })
        }
    },
}
</script>


