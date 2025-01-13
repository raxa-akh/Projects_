"use client"

import { type ReactNode, createContext, useMemo } from 'react';
import { Services } from './index';
import { config } from '@/config';
import { Provider } from 'react-redux';

const ServicesContext = createContext({});

function ServicesProvider({children}: {
  children: ReactNode
}) {

  const services = useMemo(() => new Services(config), [])

  return (
    <ServicesContext.Provider value={services}>
      <Provider store={services.store}>
        {children}
      </Provider>
    </ServicesContext.Provider>
  )
}


export { ServicesProvider, ServicesContext }
