export class ApiError extends Error {
  readonly statusDescription: string;
  readonly originalError: Error;

  constructor(public error: string | Error, public code: number) {
    super(typeof error === 'string' ? error : error.message);
    this.statusDescription = this.setStatusDescription(code);

    if (typeof error !== 'string') {
      this.originalError = error;
    }
  }

  private setStatusDescription(code: number) {
    switch (code) {
      case 400:
        return '400 BadRequest';
      case 401:
        return '401 Unauthorized';
      case 403:
        return '403 Forbidden';
      case 404:
        return '404 NotFound';
      case 500:
        return '500 InternalError';
      default:
        return `${code} Error`;
    }
  }
}
