import React from "react";
import ReactDom from "react-dom";

const App = () => {
  const onClickButton = () => alert();
  const constentStyle = {
    color: "blue",
    fondSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={constentStyle}>元気ですか?</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
