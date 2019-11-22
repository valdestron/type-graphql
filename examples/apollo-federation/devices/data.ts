import { plainToClass } from "class-transformer";

import Device from "./device";

export const devices: Device[] = plainToClass(Device, [
  {
    id: "1",
    name: "device0",
    ownerId: "1",
  },
  {
    id: "2",
    name: "device1",
    ownerId: "2",
  },
]);
