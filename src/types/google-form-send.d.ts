declare module "google-form-send" {
  export default class GoogleForm {
    constructor(url: string);

    public addField(name: string, text: string | string[]): void;
    public send(isAsync: boolean): void;
  }
}
