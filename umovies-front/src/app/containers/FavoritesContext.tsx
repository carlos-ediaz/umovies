/*import { DataType, DataValuesType } from '@/types/Data'
import { createContext, useState, useContext, useEffect } from 'react'

const defaultProvider: DataValuesType = {
  data: [],
  setData: () => [],
  initData: () => void 0
}

const DataContext = createContext(defaultProvider)

const storageKey = 'fav_ids'

export function useDataContext() {
  return useContext(DataContext)
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<DataType[]>([])

  const init = () => {
    const storedData = window.localStorage.getItem(storageKey)!

    if (storedData) {
      setData(JSON.parse(storedData))
    }
  }

  const initData = (): void => {
    localStorage.removeItem(storageKey)
    setData([])
  }

  const storeData = (data: DataType[]): void => {
    setData(data)
    window.localStorage.setItem(storageKey, JSON.stringify(data))
  }

  useEffect(() => {
    init()
  }, [])

  const value = {
    data,
    setData: storeData,
    initData: initData
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}*/