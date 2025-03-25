//* entry point into db
//* entry point into React, runs when React starts

import { StrictMode } from 'react'; // this just helps catch probs in code
// this is creating the React root el
import { createRoot } from 'react-dom/client';
import './index.css';
// imports App, which contains all the routes
import App from './App.tsx';

// finds the html el with id: 'root', tells React where to insert the app. See index.html
// createRoot: creates a React root container
// .render() : function tells React to display the App component inside the root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
