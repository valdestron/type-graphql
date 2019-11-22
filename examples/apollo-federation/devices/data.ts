import { plainToClass } from "class-transformer";

import Device from "./device";

export const devices: Device[] = plainToClass(Device, [
  {
    id: "1",
    name: "device0",
    owner: {
      id: "2",
    },
  },
  {
    id: "2",
    name: "device1",
    owner: {
      id: "1",
    },
  },
]);
