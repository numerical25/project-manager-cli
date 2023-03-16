
export class DefaultResponse<T> {
  public data: T;
  public message: string = '';
  public response_code: number = 200;
  public success: boolean = true;

  constructor(data :T) {
    this.data = data;
  }
}
