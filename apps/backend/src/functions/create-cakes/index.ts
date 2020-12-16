import 'reflect-metadata';
import { cakeModel } from '~models/cake';
import { tryCatchApiGatewayHandler } from '~helpers/api-gateway-response';
import { connectDatabase } from '~helpers/connect-db';
import { UniqueConstraintError } from 'sequelize';
import { ApiError } from '~helpers/api-error';

const handler: Handler = async (event) => {
  try {
    const cake = await cakeModel.create(event.body);
    return { cake };
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      throw new ApiError(`A field with the name "${event.body.name}" already exists`, 400);
    }

    throw error;
  }
};

export default tryCatchApiGatewayHandler(connectDatabase(handler));
