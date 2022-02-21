class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'APIError';
  }
}

class BackendError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export { ApiError, BackendError };
