import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import general components
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/users/Profile';

//import user components

//import health components
import CreateHealth from './components/health/CreateHealth';

function App() {
  const [token, settoken] = useState();

  if (!token) {
    return <Login settoken={settoken} />;
  }

  return (
    <BrowserRouter>
      <div className="justify-content-center">
        <Navigation />
        <Routes>
          {/* general routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/profile" element={<Profile />} />

          {/* health routes */}
          {/* fix this */}
          <Route path="/user" element={<Profile />}>
            <Route path="/new-user" element={<CreateHealth />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
