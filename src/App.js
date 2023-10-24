import Register from './components/Register';
import Login from './components/Login';
import {Route, createBrowserRouter, ceateRoutesFromElemnts, createRoutesFromElements, RouterProvider} from 'react-router-dom';

function App() {
  const op = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Register />} />
      <Route path="/unicode_lp_task_2" element={<Register />} />
      <Route path="unicode_lp_task_2/signup" element={<Register />} />
      <Route path="unicode_lp_task_2/login" element={<Login />} />
      </>
    )
  )
  return (
    <>
    <RouterProvider router={op}/>
    </>
  );
}

export default App;
