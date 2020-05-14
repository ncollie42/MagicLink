// package: Login
// file: login.proto

var login_pb = require("./login_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Login = (function () {
  function Login() {}
  Login.serviceName = "Login.Login";
  return Login;
}());

Login.login = {
  methodName: "login",
  service: Login,
  requestStream: false,
  responseStream: false,
  requestType: login_pb.loginInfo,
  responseType: login_pb.jwt
};

Login.confirmLogin = {
  methodName: "confirmLogin",
  service: Login,
  requestStream: false,
  responseStream: false,
  requestType: login_pb.code,
  responseType: login_pb.empty
};

Login.isLoggedIn = {
  methodName: "isLoggedIn",
  service: Login,
  requestStream: false,
  responseStream: false,
  requestType: login_pb.jwt,
  responseType: login_pb.status
};

exports.Login = Login;

function LoginClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LoginClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Login.login, {
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

LoginClient.prototype.confirmLogin = function confirmLogin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Login.confirmLogin, {
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

LoginClient.prototype.isLoggedIn = function isLoggedIn(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Login.isLoggedIn, {
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

