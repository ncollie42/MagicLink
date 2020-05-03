<template>
<div>
    <form @submit="call">
        <input type="text" v-model=email placeholder="tmp">
        <input type="submit">
    </form>
    <h1>{{responce}}</h1>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { grpc } from "@improbable-eng/grpc-web";
import { Login } from "../logingRPC/login_pb_service"; //service
import { email } from "../logingRPC/login_pb"; //type

export default Vue.extend({
    name:"grpc",
    data(){
        return {
            email:"",
            key:"",
            responce:""
        }
    },
    methods: {
        call(e) {
            e.preventDefault();
            const sendingEmail = new email();
            sendingEmail.setEmail(this.email);

            grpc.unary(Login.sendEmail, {
                request: sendingEmail,
                host: "http://192.168.43.249:8080",
                onEnd: res => {
                    const { status, statusMessage, headers, message, trailers } = res;
                    if (status === grpc.Code.OK && message) {
                    console.log("All good it worked: ", message.toObject());
                        this.responce = message.toObject();
                    } else {
                    console.log("status:", status, statusMessage, headers, message, trailers)
                        this.responce = "failed"
                    }
                }
            })
            console.log(sendingEmail.getEmail())
        }
    }
})
</script>

