import { useServices } from "@/services"

function useApi() {
  return useServices().api
}

export { useApi }