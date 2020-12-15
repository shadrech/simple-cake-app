import 'reflect-metadata';
import { cakeModel } from '~models/cake';
import { tryCatchApiGatewayHandler } from '~helpers/api-gateway-response';
import { connectDatabase } from '~helpers/connect-db';

const handler: Handler = async (event) => {
  await cakeModel.delete(event.pathParameters.id);
  
  return { success: true };
};

export default tryCatchApiGatewayHandler(connectDatabase(handler));
