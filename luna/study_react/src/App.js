import React from 'react';
import Hello from './Week 04/01-03-Hello';

function App() {
  return (
    // Before
    // 여러 개의 태그 사용 X (반드시 하나의 태그 안에 작성!)
    /* <Hello />
    <div>Bye</div> */
    
    // After
    // 그러나 단순히 감싸기 위해 <div>를 이용하는 것은 비효율적!
    /* <div>
      <Hello />
      <div>안녕히계세요</div>
    </div> */

    <>
      <Hello />
      <div>안녕히계세요</div>
    </>
  );
}

export default App;