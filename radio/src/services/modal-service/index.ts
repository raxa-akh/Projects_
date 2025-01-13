"use client"

import type { Services } from "../index";
import { ModalCodes, Modals, ModalsConfig } from "./types";
import codeGenerator from "@/utils/code-generator";

class ModalService {

  private generateId: Function
  private listeners: Function[]
  private stack: Modals[keyof Modals][]
  private config: ModalsConfig
  readonly services: Services

  public types: {
    [key in keyof typeof ModalCodes]: typeof ModalCodes[key]
  }

  constructor(services: Services, config: ModalsConfig) {
    this.generateId = codeGenerator(1);
    this.services = services
    this.config = config
    this.types = {
      share: ModalCodes.share,
      signin: ModalCodes.signin,
      signup: ModalCodes.signup,
    };
    this.listeners = []
    this.stack = []
  }

  private notify(): void {
    for (const listener of this.listeners) listener(this.stack);
  }

  public subscribe = (listener: Function): () => void  => {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  public getStack = () => {
    return this.stack;
  };

  public open<T extends ModalCodes>({type, extraData, resolve}: {
    type: T,
    //@ts-ignore
    extraData?: Modals[T]['extraData'],
    //@ts-ignore
    resolve?: Modals[T]['resolve']
  }): `${ModalCodes}_${number}` {
    const _id = type + '_' + this.generateId();
    this.stack = [
      //@ts-ignore
        ...this.stack,
        //@ts-ignore
        { type, extraData, resolve, _id} as Modals[T]
    ]
    this.notify()
    return _id as `${ModalCodes}_${number}`
  }

  public close<T extends ModalCodes>(
      _id: `${T}_${number}`, 
      result?: unknown
    ): void{
      //@ts-ignore
    const index = this.stack.findIndex(m => m._id === _id);
    //@ts-ignore
    const modal = this.stack[index] as Modals[T];
    this.stack = [
      ...this.stack.slice(0, index),
      ...this.stack.slice(index + 1, this.stack.length)
    ]
    //@ts-ignore
    if (modal && modal.resolve) {
      //@ts-ignore
      modal.resolve(result as any);
    };
    this.notify()
  }
}

export { ModalService }
export { useModalsStack } from './use-modals-stack'
export { useModals } from './use-modals'
export { ModalCodes } from './types'