<template>
    <div>
        <div class="container">
            <div class="containerInner">
            <waiting v-if="currentState == State.Waiting"/>
            <error v-else-if="currentState == State.Error"/>
            <success v-else-if="currentState == State.Succes"/>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { grpc } from "@improbable-eng/grpc-web";
import { Login } from "../logingRPC/login_pb_service"; //service
import { code } from "../logingRPC/login_pb"; //type
import success from "../components/confirmation_success.vue"
import waiting from "../components/confirmation_waiting.vue"
import error from "../components/confirmation_error.vue"

const State = {
    Waiting: 1,
    Succes: 2,
    Error: 3,
}

export default Vue.extend({
    components: {
        success,
        waiting,
        error
    },
    data: function(){
        return {
            currentState: State.Waiting,
            State,
        }
    },
    created: function() {

        let query = this.$route.query
        if (query.code === undefined) {
            this.currentState = State.Error
            return 
        }

        const sendingCode = new code();
        sendingCode.setCode(query.code);

        grpc.unary(Login.confirmLogin, {
            request: sendingCode,
            host: this.$hostname,
            onEnd: res => {
                const { status, statusMessage, headers, message, trailers } = res;
                if (status === grpc.Code.OK && message) {
                console.log("All good it worked: ", message.toObject());
                    this.currentState = State.Succes
                } else {
                console.log("status:", status, statusMessage, headers, message, trailers)
                    this.currentState = State.Error
                }
            }
        })
    }
})
</script>
