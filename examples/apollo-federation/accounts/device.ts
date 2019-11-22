import { Field, ObjectType, Directive, ID } from "../../../src";
import { Type } from "class-transformer";
import User from "./user";

@Directive("@extends")
@Directive(`@key(fields: "id")`)
@ObjectType()
export default class Device {
  @Directive("@external")
  @Field(() => ID)
  id: string;

  @Directive("@external")
  @Field()
  ownerId: string;

  @Type(() => User)
  @Directive(`@requires(fields: "ownerId")`)
  @Field(() => User)
  owner: User;
}
