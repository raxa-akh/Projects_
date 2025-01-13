import type * as modules from "./modules/exports"; 

type Detail = {
  loc: [string, 0],
  msg: string,
  type: string
}

type ErrorResponse = {
  detail: Detail[]
}

export type CreateModuleName<Name extends keyof Modules> = Name | `${Name}_${number}`

export type ModuleNames = CreateModuleName<keyof Modules>

export type ExtractBaseName<T extends ModuleNames> = 
  T extends `${infer F}_${number}` 
    ? F 
    : T extends keyof Modules
      ? T
      : never

export type ApiModules = {
  [K in ModuleNames]: Modules[ExtractBaseName<K>]
}

export type Modules = {
  [K in keyof typeof modules]: InstanceType<typeof modules[K]>
}

export type { ErrorResponse }