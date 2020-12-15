import 'reflect-metadata';
import { cakeModel } from '~models/cake';
import { tryCatchApiGatewayHandler } from '~helpers/api-gateway-response';
import { connectDatabase } from '~helpers/connect-db';

const handler: Handler = async (event) => {
  await cakeModel.update(event.pathParameters.id, event.body);
  
  return { success: true };
};

export default tryCatchApiGatewayHandler(connectDatabase(handler));
