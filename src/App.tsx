import { useState } from "react";
import "./App.css";

function App() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const onClick = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  const successCallback = (position: GeolocationPosition) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };
  const errorCallback = () => {};
  return (
    <>
      <div>version: 0.0.2</div>
      <button onClick={onClick}>位置情報取得</button>
      <div>
        <p>latitude: {latitude}</p>
        <p>longitude: {longitude}</p>
      </div>
    </>
  );
}

export default App;
