// package: Login
// file: login.proto

import * as jspb from "google-protobuf";

export class loginInfo extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getKey(): number;
  setKey(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): loginInfo.AsObject;
  static toObject(includeInstance: boolean, msg: loginInfo): loginInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: loginInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): loginInfo;
  static deserializeBinaryFromReader(message: loginInfo, reader: jspb.BinaryReader): loginInfo;
}

export namespace loginInfo {
  export type AsObject = {
    email: string,
    key: number,
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

export class empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): empty.AsObject;
  static toObject(includeInstance: boolean, msg: empty): empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): empty;
  static deserializeBinaryFromReader(message: empty, reader: jspb.BinaryReader): empty;
}

export namespace empty {
  export type AsObject = {
  }
}

export class status extends jspb.Message {
  getIsloggedin(): boolean;
  setIsloggedin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): status.AsObject;
  static toObject(includeInstance: boolean, msg: status): status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): status;
  static deserializeBinaryFromReader(message: status, reader: jspb.BinaryReader): status;
}

export namespace status {
  export type AsObject = {
    isloggedin: boolean,
  }
}

