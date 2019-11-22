import { Field, ObjectType, Directive, ID } from "../../../src";

import { devices } from "./data";

@Directive(`@key(fields: "id")`)
@ObjectType()
export default class Device {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  ownerId: string;
}

export async function resolveDeviceReference(reference: Pick<Device, "id">): Promise<Device> {
  console.log("in devices");
  return devices.find(u => u.id === reference.id)!;
}
