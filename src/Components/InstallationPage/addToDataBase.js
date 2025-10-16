const getInstallApp = () => {
  const storeAppsStr = localStorage.getItem("installList");
  return storeAppsStr ? JSON.parse(storeAppsStr) : [];
};

const addToDataBase = (id) => {
  const storeAppsData = getInstallApp();
  if (!storeAppsData.includes(id)) {
    storeAppsData.push(id);
    localStorage.setItem("installList", JSON.stringify(storeAppsData));
  }
};

const removeFromDataBase = (id) =>{
  const storeAppsData = getInstallApp()
  const updatedList  = storeAppsData.filter(appId => appId !== id)
  localStorage.setItem("installList",JSON.stringify(updatedList))
  return updatedList
}

export { addToDataBase, getInstallApp ,removeFromDataBase};
