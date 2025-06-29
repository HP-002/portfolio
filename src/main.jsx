import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/Components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);