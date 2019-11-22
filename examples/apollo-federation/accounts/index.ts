import { ApolloServer } from "apollo-server";

import AccountsResolver from "./resolver";
import User, { resolveUserReference } from "./user";
import { buildFederatedSchema } from "../helpers/buildFederatedSchema";
import Device from "./device";
import DeviceResolver from "../devices/resolver";

export async function listen(port: number): Promise<string> {
  const schema = await buildFederatedSchema(
    {
      resolvers: [AccountsResolver, DeviceResolver],
      orphanedTypes: [User, Device],
    },
    {
      User: { __resolveReference: resolveUserReference },
    },
  );

  const server = new ApolloServer({
    schema,
    tracing: false,
    playground: true,
  });

  const { url } = await server.listen({ port });
  return url;
}
