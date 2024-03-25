import { useState } from "react";
import "./App.css";

function App() {
  // const [latitude, setLatitude] = useState<number>();
  // const [longitude, setLongitude] = useState<number>();
  // // const [permission, setPermission] = useState("");

  // const onClick = () => {
  //   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  // };

  // const successCallback = (position: GeolocationPosition) => {
  //   setLatitude(position.coords.latitude);
  //   setLongitude(position.coords.longitude);
  // };

  // const errorCallback = (error: GeolocationPositionError) => {
  //   switch (error.code) {
  //     case error.PERMISSION_DENIED:
  //       alert("位置情報の取得が許可されていません");
  //       break;
  //     case error.POSITION_UNAVAILABLE:
  //       alert("位置情報が取得できませんでした");
  //       break;
  //     case error.TIMEOUT:
  //       alert("タイムアウト");
  //       break;
  //     default:
  //       alert("予期せぬエラー");
  //   }
  // };

  // const getPermissionState = async () => {
  //   navigator.permissions.query({ name: "geolocation" }).then((result) => {
  //     console.log("state", result.state);
  //     if (result.state === "granted") {
  //       alert("granted");
  //     } else if (result.state === "prompt") {
  //       alert("prompt");
  //     } else {
  //       alert("denied");
  //     }
  //     // パーミッションが拒否された場合は、何もしないでください。
  //   });
  //   const permissionState = await navigator.permissions.query({
  //     name: "geolocation",
  //   });
  //   alert(permissionState.state.toString());
  //   setPermission(permissionState.state.toString());
  //   return permissionState;
  // };

  // useEffect(() => {
  //   getPermissionState();
  // }, [permission]);
  const [tel, setTel] = useState("");
  const telNumber = `tel:${tel}`;

  return (
    <>
      <div>version: 0.0.13</div>
      {/* <button onClick={onClick}>位置情報取得</button>
      <div>
        <p>latitude: {latitude}</p>
        <p>longitude: {longitude}</p>
      </div> */}
      <button onClick={() => window.confirm("テキストテキストテキスト")}>
        show alert
      </button>
      <input
        type="text"
        value={tel}
        onChange={(e) => {
          setTel(e.target.value);
        }}
      />
      <a href={telNumber}>{tel}</a>
      <a href="https://www.google.com/maps/search/?api=1&query=35.631851%2C139.882814">
        google map
      </a>
    </>
  );
}

export default App;
