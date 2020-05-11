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
import { email } from "../logingRPC/login_pb"; //type

const State = {
    Idle: 1,
    Waiting: 2,
}
export default {
    name: "login",
    components: {
        login_enter,
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
            const sendingEmail = new email();
            sendingEmail.setEmail(passedEmail);
            
            this.currentState = State.Waiting;
            grpc.unary(Login.sendEmail, {
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
            console.log(sendingEmail.getEmail())
        }
    },
}
</script>


