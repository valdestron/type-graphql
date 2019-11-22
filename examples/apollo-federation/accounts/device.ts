import { Field, ObjectType, Directive, ID } from "../../../src";

@Directive("@extends")
@Directive(`@key(fields: "id")`)
@ObjectType()
export default class Device {
  @Directive("@external")
  @Field(() => ID)
  id: string;
}
