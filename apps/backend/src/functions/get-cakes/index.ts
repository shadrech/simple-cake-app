import 'reflect-metadata';
import { cakeModel } from '~models/cake';
import { tryCatchApiGatewayHandler } from '~helpers/api-gateway-response';
import { connectDatabase } from '~helpers/connect-db';

const handler: Handler = async () => {
  const cakes = await cakeModel.fetch();

  return { cakes };
};

export default tryCatchApiGatewayHandler(connectDatabase(handler));
