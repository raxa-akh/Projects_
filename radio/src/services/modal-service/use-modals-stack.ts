"use client"

import { useSyncExternalStore } from "react";
import { useServices } from "../index";

function useModalsStack() {
  const modals = useServices().modals;
  const modalsStack = useSyncExternalStore(modals.subscribe, modals.getStack, modals.getStack);

  return modalsStack
}

export { useModalsStack }