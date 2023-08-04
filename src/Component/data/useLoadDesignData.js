import { useState, useEffect } from "react"
import dummyData from './dummyData.json'

export const InitialDeisgnState = {
  projectId: null,
  projectAuthor: "",
  pageUri: "",
  websiteSetting: {
      siteName: "My Website",
      favIco: "https://reactjs.org/favicon.ico",
      socialImage: "",
      desc: "Description for the webpage"
  },
  published: false,
  pageMode: 1,
  settigMode: -1,
  isDropEnabled: true,
  analyticsID: "",
  dropIndex: 0,
  fonts: [{
      "font": "Poppins",
      "weights": [
          "300",
          "regular",
          "700"
      ]
  }],
  elements: []
}
export const useLoadDesignData = () => {
  const [data,setData] = useState(InitialDeisgnState)
  useEffect(() => {
    const savedDesignData = localStorage.getItem("data")
    if (savedDesignData){
      setData(JSON.parse(savedDesignData))
    } else {
      setData(dummyData)
    }
  },[])

  return {
    data: data
  }
}