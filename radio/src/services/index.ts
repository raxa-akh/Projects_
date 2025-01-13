import { Config } from "../config";
import { Api } from "./api";
import { ModalService } from "./modal-service";
import { ReduxStore, createStoreWithServices } from "./store";

class Services {

  private config: Config
  private _modals: ModalService
  private _store: ReduxStore
  private _api: Api

  constructor(config: Config) {
    this.config = config;
    this._modals = new ModalService(this, this.config.modals);
    this._store = createStoreWithServices(this)
    this._api = new Api(this, this.config.api)
  }

  get modals(): ModalService {
    return this._modals;
  }

  get store(): ReduxStore {
    if (!this._store) {
      this._store = createStoreWithServices(this)
    }
    return this._store;
  }

  get api(): Api {
    if (!this._api) {
      this._api = new Api(this, this.config.api)
    }
    return this._api;
  }

}

export { Services }
export { useServices } from './use-services' 
export { ServicesContext, ServicesProvider } from './provider' 
