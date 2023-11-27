import { ReactNode, createContext, useState } from "react";

export const DataContext = createContext<any>(null);

function DataProvider({ children }: { children: ReactNode }): JSX.Element {
  const [productDatas, setProductDatas] = useState(null);

  const info = {
    productDatas,
    setProductDatas,
  };
  return <DataContext.Provider value={info}>{children}</DataContext.Provider>;
}

export default DataProvider;
