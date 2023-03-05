import { Draft } from "@reduxjs/toolkit";

type HasId = {
  id: string;
};

export type ProtoUserStructure = {
  name: string;
  email: string;
  password: string;
  friend: [];
  enemies: [];
  draft?: Draft<UserStructure>;
};

export type UserStructure = HasId & ProtoUserStructure;
