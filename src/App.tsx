import "./App.css";

function App() {
  const onClick = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  const successCallback = () => {};
  const errorCallback = () => {};
  return (
    <>
      <div>version: 0.0.1</div>
      <button onClick={onClick}>位置情報取得</button>
    </>
  );
}

export default App;
