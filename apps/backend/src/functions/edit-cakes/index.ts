import 'reflect-metadata';
import { UniqueConstraintError } from 'sequelize';
import { cakeModel } from '~models/cake';
import { tryCatchApiGatewayHandler } from '~helpers/api-gateway-response';
import { connectDatabase } from '~helpers/connect-db';
import { ApiError } from '~helpers/api-error';

const handler: Handler = async (event) => {
  try {
    await cakeModel.update(event.pathParameters.id, event.body);
    return { success: true };
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      throw new ApiError(`A field with the name "${event.body.name}" already exists`, 400);
    }

    throw error;
  }
};

export default tryCatchApiGatewayHandler(connectDatabase(handler));
