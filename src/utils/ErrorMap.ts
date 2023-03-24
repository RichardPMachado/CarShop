export default class ErrorMap extends Error {
  public readonly _statusCode: number;
  
  constructor(statusCode: number, message: string) {
    super(message);
    this._statusCode = statusCode;
  }
}