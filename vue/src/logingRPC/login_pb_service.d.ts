// package: Login
// file: login.proto

import * as login_pb from "./login_pb";
import {grpc} from "@improbable-eng/grpc-web";

type Loginlogin = {
  readonly methodName: string;
  readonly service: typeof Login;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof login_pb.loginInfo;
  readonly responseType: typeof login_pb.jwt;
};

type LoginconfirmLogin = {
  readonly methodName: string;
  readonly service: typeof Login;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof login_pb.code;
  readonly responseType: typeof login_pb.empty;
};

type LoginisLoggedIn = {
  readonly methodName: string;
  readonly service: typeof Login;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof login_pb.jwt;
  readonly responseType: typeof login_pb.status;
};

export class Login {
  static readonly serviceName: string;
  static readonly login: Loginlogin;
  static readonly confirmLogin: LoginconfirmLogin;
  static readonly isLoggedIn: LoginisLoggedIn;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class LoginClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  login(
    requestMessage: login_pb.loginInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: login_pb.jwt|null) => void
  ): UnaryResponse;
  login(
    requestMessage: login_pb.loginInfo,
    callback: (error: ServiceError|null, responseMessage: login_pb.jwt|null) => void
  ): UnaryResponse;
  confirmLogin(
    requestMessage: login_pb.code,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: login_pb.empty|null) => void
  ): UnaryResponse;
  confirmLogin(
    requestMessage: login_pb.code,
    callback: (error: ServiceError|null, responseMessage: login_pb.empty|null) => void
  ): UnaryResponse;
  isLoggedIn(
    requestMessage: login_pb.jwt,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: login_pb.status|null) => void
  ): UnaryResponse;
  isLoggedIn(
    requestMessage: login_pb.jwt,
    callback: (error: ServiceError|null, responseMessage: login_pb.status|null) => void
  ): UnaryResponse;
}

