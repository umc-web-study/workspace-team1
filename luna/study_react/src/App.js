import React from 'react';
import Filter from './Week 07/Filter';
import MenuItem from './Week 07/MenuItem';

function App() {
  return (
    <>
    <body style={{backgroundColor: "#f4f9ff"}}>
      <h2 style={{marginTop: "30px", fontWeight: "bold", textAlign: "center", fontSize: "1.7em"}}>Our Menu</h2>
      <hr style={{border: '0px', borderBottom: '3px solid #c8a46b', width: "4%", marginTop: "-1em"}} />
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "25px"}}>
        <Filter />
      </div>
      <MenuItem />
    </body>
    </>
  );
}

export default App;