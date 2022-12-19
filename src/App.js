import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing, Error, Register, ProtectedRoute} from "./pages";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  Profile, 
  AddJob,  
  AllJobs,
  SharedLayout,

} from './pages/dashboard'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
          
        } >
        <Route index element={<AllJobs />} />
        <Route path='all-investor' element={<AllJobs />} />
        <Route path= 'add-investor' element={<AddJob />} />
        <Route path="profile" element={<Profile />} />
      </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position="top-center"/>
    </BrowserRouter>
  )
}

export default App;