import Amplify from '@aws-amplify/core';

export const API_NAME = 'CakeApi';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: API_NAME,
        endpoint: process.env.API_URL
      }
    ]
  }
});
