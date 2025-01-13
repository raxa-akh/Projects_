import { ModalsConfig } from "@/services/modal-service/types"
import { ApiConfig } from "./services/api"

type Config = {
  modals: ModalsConfig,
  api: ApiConfig,
}

const config: Config = {
  modals: {},
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API || ''
  },
}

export {type Config, config}