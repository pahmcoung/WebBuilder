import { useEffect } from "react"
import dummyData from './dummyData.json'


export const useInitialDesignData = () => {
  useEffect(() => {
    const savedData = localStorage.getItem("data")
    if (!savedData){
      localStorage.setItem("data", JSON.stringify(dummyData))
    }
  },[])
}