import { APIGatewayEvent, Handler as AWSHandler } from 'aws-lambda';

interface Event extends APIGatewayEvent {
  body: any;
}

declare global {
  export type Handler = AWSHandler<Event>;
  export type CurryingHandler<H = Handler> = (fn: H) => H;
}
