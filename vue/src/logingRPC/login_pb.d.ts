// package: Login
// file: login.proto

import * as jspb from "google-protobuf";

export class email extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): email.AsObject;
  static toObject(includeInstance: boolean, msg: email): email.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: email, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): email;
  static deserializeBinaryFromReader(message: email, reader: jspb.BinaryReader): email;
}

export namespace email {
  export type AsObject = {
    email: string,
  }
}

export class jwt extends jspb.Message {
  getJwt(): string;
  setJwt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): jwt.AsObject;
  static toObject(includeInstance: boolean, msg: jwt): jwt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: jwt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): jwt;
  static deserializeBinaryFromReader(message: jwt, reader: jspb.BinaryReader): jwt;
}

export namespace jwt {
  export type AsObject = {
    jwt: string,
  }
}

export class code extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): code.AsObject;
  static toObject(includeInstance: boolean, msg: code): code.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: code, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): code;
  static deserializeBinaryFromReader(message: code, reader: jspb.BinaryReader): code;
}

export namespace code {
  export type AsObject = {
    code: string,
  }
}

export class tmpReturn extends jspb.Message {
  getStr(): string;
  setStr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): tmpReturn.AsObject;
  static toObject(includeInstance: boolean, msg: tmpReturn): tmpReturn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: tmpReturn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): tmpReturn;
  static deserializeBinaryFromReader(message: tmpReturn, reader: jspb.BinaryReader): tmpReturn;
}

export namespace tmpReturn {
  export type AsObject = {
    str: string,
  }
}

