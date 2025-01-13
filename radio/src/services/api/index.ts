import axios, { AxiosInstance } from "axios";
import { Services } from "..";
import * as modules from './modules/exports';
import { ApiModules, Modules } from "./types";

type Config = {
  baseUrl: string
}

const X_API_KEY = process.env.NEXT_PUBLIC_X_API_KEY

type Headers = {
  ['X-API-Key']?: string
  ['Accept']?: string
}

class Api { 
  public services: Services
  public instance: AxiosInstance
  public modules: ApiModules

  constructor(services: Services, config: Config) {
    this.services = services
    const headers: Headers  = {
      ['Accept']: 'application/json, text/plain, */*',
    }
    if (X_API_KEY) {
      headers['X-API-Key'] = X_API_KEY
    }
    this.instance = axios.create({
      baseURL: config.baseUrl,
      headers
    })

    this.modules = {} as ApiModules
    const modulesKeys = Object.keys(modules) as (keyof Modules)[] 

    const create = <Name extends keyof Modules>(name: Name) => {
      this.modules[name] = new modules[name] (
        this.instance, 
        name, 
      ) as ApiModules[Name]
    }

    for (const name of modulesKeys) {
      create(name)
    }
  }
}

export { Api }
export type { Config as ApiConfig }
export type { ErrorResponse } from './types'