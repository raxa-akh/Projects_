import { useContext } from "react";
import { Services } from "./index";
import { ServicesContext } from "./provider";

function useServices(): Services {
  return useContext(ServicesContext) as Services;
}

export { useServices }
