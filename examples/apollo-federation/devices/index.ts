import { ApolloServer } from "apollo-server";

import UserResolver from "./resolver";
import Device, { resolveDeviceReference } from "./device";
import { buildFederatedSchema } from "../helpers/buildFederatedSchema";
import User from "./account";

export async function listen(port: number): Promise<string> {
  const schema = await buildFederatedSchema(
    {
      resolvers: [UserResolver],
      orphanedTypes: [Device, User],
    },
    {
      Device: { __resolveReference: resolveDeviceReference },
    },
  );

  const server = new ApolloServer({
    schema,
    tracing: false,
    playground: true,
  });

  const { url } = await server.listen({ port });
  console.log(`Device service ready at ${url}`);

  return url;
}
