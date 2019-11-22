import { Resolver, Query, Root, FieldResolver } from "../../../src";

import Device from "./device";
import { devices } from "./data";
import User from "./account";

@Resolver(of => User)
export default class UserResolver {
  @FieldResolver(() => [Device])
  async devices(@Root() account: User): Promise<Device[]> {
    return devices.filter(device => {
      return device.ownerId === account.id;
    });
  }
}
