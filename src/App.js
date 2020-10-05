import React from 'react';
import './App.css';
import ModalContainer from "./components/ModalContainer";

function App() {
  return (
    <div className="App">
      <ModalContainer buttonText="呼叫张龙"/>
      <ModalContainer buttonText="呼叫赵虎">
        <p>威——武——</p>
      </ModalContainer>
      <ModalContainer buttonText="呼叫王朝">
        <h3>威——武——</h3>
        <ModalContainer buttonText="呼叫马汉" zindex={10}/>
      </ModalContainer>
    </div>
  );
}

export default App;
