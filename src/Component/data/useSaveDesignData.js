

export const useSaveDesignData = () => {
  const saveDesign = (design) => {
    if (design){
      localStorage.setItem("data", JSON.stringify(design))
    }
  }
  return {
    saveDesign
  }
}