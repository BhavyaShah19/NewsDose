import "./App.css";
import React, { useState } from "react";
import Navbar from "./components-NewsMonkey/Navbar";
import News from "./components-NewsMonkey/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="general"
              pagesize={5}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress} apikey={apikey}
              key="business"
              pagesize={5}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress} apikey={apikey}
              key="entertainment"
              pagesize={5}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress} apikey={apikey}
              key="health"
              pagesize={5}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress} apikey={apikey}
              key="science"
              pagesize={5}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress} apikey={apikey}
              key="sports"
              pagesize={5}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress} apikey={apikey}
              key="technology"
              pagesize={5}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;


//TextUtils Project

// import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   const [mode, setmode] = useState('light')
//   const [alert, setalert] = useState(null)

//   const showalert=(message,type)=>{
//     setalert({
//       msg:message,
//       type:type
//     })
//     setTimeout(() => {
//       setalert(null);
//     }, 1500);
//   }

//   const togglemode=()=>{
//     if(mode=='dark'){
//       setmode('light')
//       document.body.style.backgroundColor='white';
//       showalert("Light mode has been enabled","success")
//     }
//     else{
//       setmode('dark')
//       document.body.style.backgroundColor='grey';
//       showalert("Dark mode has been enabled","success")
//     }
//   }
//   return (
//     <>
//     <Router>
//     <Navbar mode={mode} togglemode={togglemode}/>
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//             <TextForm showalert={showalert} heading="Enter the text to analyze." mode={mode}/>
//           </Route>
//     </Switch>
//     </div>
//     </Router>

//     </>
//   );
// }

//Newsapp Project
