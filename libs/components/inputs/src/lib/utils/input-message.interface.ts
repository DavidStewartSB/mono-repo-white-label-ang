export interface IMessageValidations {
  required: string;
  email: string;
  password: string;
  notMatchPassword: string;
  dateOrderInvalid: string;
  [key: string]: string;
}
