import { Field, ObjectType, Directive, ID } from "../../../src";

import { devices } from "./data";
import { Type } from "class-transformer";
import User from "./account";

@Directive(`@key(fields: "id")`)
@ObjectType()
export default class Device {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Type(() => User)
  @Directive(`@provides(fields: "id")`)
  @Field()
  owner: User;
}

export async function resolveDeviceReference(reference: Pick<Device, "id">): Promise<Device> {
  return devices.find(u => u.id === reference.id)!;
}
