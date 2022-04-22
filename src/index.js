import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
 <Router>

    {/* <Route path='/' element={<App />}/> */}
     <App />
</Router>
  // {/* </React.StrictMode> */}
);

reportWebVitals();
