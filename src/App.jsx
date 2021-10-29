import React from "react";
import ReactDom from "react-dom";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1>こんにちは</h1>
      <p>元気ですか?</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
