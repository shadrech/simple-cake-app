import Amplify from '@aws-amplify/core';

export const API_NAME = 'CakeApi';
const region = 'eu-west-1';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: API_NAME,
        endpoint: process.env.API_URL
      }
    ]
  },
  Storage: {
    AWSS3: {
      bucket: 'cake-images',
      region
    }
  }
});
