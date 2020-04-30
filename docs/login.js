"use strict";
exports.__esModule = true;
var grpc_web_1 = require("@improbable-eng/grpc-web");
var login_pb_service_1 = require("./logingRPC/login_pb_service"); //service
var login_pb_1 = require("./logingRPC/login_pb"); //type
var sendingEmail = new login_pb_1.email();
sendingEmail.setEmail("test@gmail.com");
grpc_web_1.grpc.unary(login_pb_service_1.Login.sendEmail, {
    request: sendingEmail,
    host: "localhost:4242",
    onEnd: function (res) {
        var status = res.status, statusMessage = res.statusMessage, headers = res.headers, message = res.message, trailers = res.trailers;
        if (status === grpc_web_1.grpc.Code.OK && message) {
            console.log("All good it worke: ", message.toObject());
        }
        else {
            console.log("Something else happened");
        }
    }
});
console.log("Hello");
