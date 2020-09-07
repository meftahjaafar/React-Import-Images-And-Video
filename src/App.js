import React from 'react';
import second from './assets/second.png';
import third from './assets/MyVideo.mp4';
import './Style.css';

function App() {
  return (
    <div className="App">
     <div class="MyHead">
       <h1>
         Your Name Here
       </h1>
       <br />
       <img class="MyImage" src={process.env.PUBLIC_URL + 'first.png'} />
       <br />
       <img class="MyImage" src={second} />
     </div>
     <video width="320" height="240" controls>
         <source src={third} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
