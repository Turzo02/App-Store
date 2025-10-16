const getInstallApp = () => {
  const storeAppsStr = localStorage.getItem("installList");

  if (storeAppsStr) {
    const storeAppsData = JSON.parse(storeAppsStr);
    return storeAppsData;
  } else {
    return [];
  }
};

const addToDataBase = (id) => {
  const storeAppsData = getInstallApp();
  if (storeAppsData.includes(id)) {
    console.log("Alert");
  } else {
    storeAppsData.push(id);
    const data = JSON.stringify(storeAppsData);
    localStorage.setItem("installList", data);
  }
};

export { addToDataBase,getInstallApp };
