// package: Login
// file: login.proto

import * as login_pb from "./login_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LoginsendEmail = {
  readonly methodName: string;
  readonly service: typeof Login;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof login_pb.email;
  readonly responseType: typeof login_pb.jwt;
};

type LoginacceptEmail = {
  readonly methodName: string;
  readonly service: typeof Login;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof login_pb.code;
  readonly responseType: typeof login_pb.tmpReturn;
};

export class Login {
  static readonly serviceName: string;
  static readonly sendEmail: LoginsendEmail;
  static readonly acceptEmail: LoginacceptEmail;
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
  sendEmail(
    requestMessage: login_pb.email,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: login_pb.jwt|null) => void
  ): UnaryResponse;
  sendEmail(
    requestMessage: login_pb.email,
    callback: (error: ServiceError|null, responseMessage: login_pb.jwt|null) => void
  ): UnaryResponse;
  acceptEmail(
    requestMessage: login_pb.code,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: login_pb.tmpReturn|null) => void
  ): UnaryResponse;
  acceptEmail(
    requestMessage: login_pb.code,
    callback: (error: ServiceError|null, responseMessage: login_pb.tmpReturn|null) => void
  ): UnaryResponse;
}

