import {grpc} from "@improbable-eng/grpc-web";
import {Login} from "./logingRPC/login_pb_service"; //service
import {email} from "./logingRPC/login_pb"; //type

const sendingEmail = new email();
sendingEmail.setEmail("test@gmail.com");

grpc.unary(Login.sendEmail, {
    request: sendingEmail,
    host: "localhost:4242",
    onEnd: res => {
           const { status, statusMessage, headers, message, trailers } = res;
    if (status === grpc.Code.OK && message) {
      console.log("All good it worke: ", message.toObject());
    } else {
        console.log("Something else happened")
    }
    }
})

console.log("Hello");