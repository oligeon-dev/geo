import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [permission, setPermission] = useState("");

  const onClick = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  const successCallback = (position: GeolocationPosition) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const getPermissionState = async () => {
    const permissionState = await navigator.permissions.query({
      name: "geolocation",
    });
    setPermission(permissionState.state);
    return permissionState;
  };

  useEffect(() => {
    getPermissionState();
  }, [permission]);
  const errorCallback = () => {
    alert("位置情報が利用できません。");
  };
  return (
    <>
      <div>version: 0.0.6</div>
      <p>permission state: {permission}</p>
      <button onClick={getPermissionState}>CHECK</button>
      <button onClick={onClick}>位置情報取得</button>
      <div>
        <p>latitude: {latitude}</p>
        <p>longitude: {longitude}</p>
      </div>
    </>
  );
}

export default App;
