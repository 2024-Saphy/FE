import React from 'react';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/Landing';
import ErrorPage from './pages/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      // element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [{ path: '/', element: <LandingPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
