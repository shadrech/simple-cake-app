import { ApiError } from './api-error';

interface ResponseOptions {
  json?: object;
  statusCode: number;
}

function apiGatewayResponse({ json, statusCode }: ResponseOptions) {
  const response = {
    statusCode,
    body: json ? JSON.stringify(json) : '{}',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Credentials': true
    }
  };

  return response;
}

export const tryCatchApiGatewayHandler: CurryingHandler = fn => async (event, context, cb) => {
  context.callbackWaitsForEmptyEventLoop = false;
  event.body = JSON.parse(event.body as any || '{}');

  try {
    return apiGatewayResponse({
      json: await fn(event, context, cb),
      statusCode: 200
    });
  } catch (err) {
    let statusCode = 500;
    if (err instanceof ApiError) {
      statusCode = err.code;
    }

    return apiGatewayResponse({
      json: {
        message: err.message
      },
      statusCode
    });
  }
};