import { Directive, ObjectType, Field, ID } from "../../../src";
import Device from "./device";

@Directive("@extends")
@Directive(`@key(fields: "id")`)
@ObjectType()
export default class User {
  @Directive("@external")
  @Field(type => ID)
  id: string;

  @Field(type => Device)
  devices: Device[];
}
