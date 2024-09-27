import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from "./Components/LoginRegister/LoginRegister";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginRegister />} />
        <Route path='/register' element={<LoginRegister />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        {/* Add other routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;
