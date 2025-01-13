import { useServices } from "../index";

function useModals() {
  const modals = useServices().modals;

  return modals
}

export { useModals }