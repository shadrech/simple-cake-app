import 'reflect-metadata';
import { cakeModel } from '~models/cake';
import { tryCatchApiGatewayHandler } from '~helpers/api-gateway-response';
import { connectDatabase } from '~helpers/connect-db';

const handler: Handler = async (event) => {
  const cake = await cakeModel.fetchById(event.pathParameters.id);

  return { cake };
};

export default tryCatchApiGatewayHandler(connectDatabase(handler));
