import Register from './components/Register';
import Login from './components/Login';
import {Route, createBrowserRouter, ceateRoutesFromElemnts, createRoutesFromElements, RouterProvider} from 'react-router-dom';

function App() {
  const op = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Register />} />
      <Route path="/unicode_lp_task_2" element={<Register />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
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
