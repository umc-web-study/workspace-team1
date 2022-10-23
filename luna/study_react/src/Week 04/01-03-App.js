import React from 'react';
import Hello from './Week 04/01-03-Hello';

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      {/* <br> -> Closing 태그가 없어 오류 발생*/}
      {/* <br/> -> 모든 태그는 반드시 닫아줘야 한다! */}
    </div>
  );
}

export default App;