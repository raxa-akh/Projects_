import { AxiosInstance } from "axios";
import { Api } from "..";

class BaseApiModule{

  protected instance: AxiosInstance
  public name: string

  constructor(instance: AxiosInstance, name: string) {
    this.instance = instance
    this.name = name
  }
}

export { BaseApiModule }