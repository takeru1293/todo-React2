import React, { useState } from "react";
import ReactDom from "react-dom";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // stateの設定----------------------------------------------------------
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  // 処理内容----------------------------------------------------------
  // カウントアップ処理
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // フラグの出し分け
  const onClickSwichShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  // 画面内容----------------------------------------------------------
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です。</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>

      <br />

      <button onClick={onClickSwichShow}>on off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ??)</p>}
    </>
  );
};

export default App;
