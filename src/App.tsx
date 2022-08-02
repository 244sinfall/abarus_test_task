import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CompleteTable from "./components/table/completeTable";
import './App.css'


function App() {
  return (

      <BrowserRouter>
          <Routes>
              <Route path='/' element={<CompleteTable/>}>
                  <Route path='/:routedPage' element={<CompleteTable/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
