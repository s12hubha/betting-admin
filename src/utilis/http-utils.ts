import environment from "../enviroments/enviroment";


export class UrlUtils {
  static getBaseUrl(): string {
    return environment.baseURL;
  }
  
}
