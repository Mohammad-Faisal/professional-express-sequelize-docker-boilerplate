export class SuccessResponse {
  statusCode: number;
  data: any;

  constructor(data: any, statusCode = 200) {
    this.statusCode = statusCode;
    this.data = data;
  }
}
