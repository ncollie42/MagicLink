// package: Login
// file: login.proto

var login_pb = require("./login_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Login = (function () {
  function Login() {}
  Login.serviceName = "Login.Login";
  return Login;
}());

Login.sendEmail = {
  methodName: "sendEmail",
  service: Login,
  requestStream: false,
  responseStream: false,
  requestType: login_pb.email,
  responseType: login_pb.jwt
};

Login.acceptEmail = {
  methodName: "acceptEmail",
  service: Login,
  requestStream: false,
  responseStream: false,
  requestType: login_pb.code,
  responseType: login_pb.tmpReturn
};

exports.Login = Login;

function LoginClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LoginClient.prototype.sendEmail = function sendEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Login.sendEmail, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

LoginClient.prototype.acceptEmail = function acceptEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Login.acceptEmail, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.LoginClient = LoginClient;

