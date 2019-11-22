import { Resolver, FieldResolver, Directive, Root } from "../../../src";

import User from "./user";
import Device from "./device";
import { users } from "./data";

@Resolver(of => Device)
export default class DeviceOwnerResolver {
  @Directive(`@requires(fields: "ownerId")`)
  @FieldResolver(returns => Number)
  async owner(@Root() device: Device): Promise<User> {
    return users[0];
  }
}
