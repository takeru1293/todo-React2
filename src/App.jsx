/* eslint react-hooks/exhaustive-deps: */

import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // stateの設定----------------------------------------------------------

  const [num, setNum] = useState(0);

  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // 処理内容----------------------------------------------------------
  // カウントアップ処理
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // フラグの出し分け
  const onClickSwichShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffectの設定、-----------------------------------------------
  // 第二引数に空の場合最初の一回だけ実装
  useEffect(() => {
    console.log("useEffect1");
  }, []);
  // 第二引数にnumを設定した場合、numのみに関心を持つ→numの値が変更された場合のみ実行
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

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
