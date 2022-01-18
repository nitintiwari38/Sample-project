import  {Route , Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import BasicDetails from './pages/basicdetails/BasicDetails';
import User from './pages/user/User';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Header from './components/header/Header';
import Filter from './pages/filter/Filter';
import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from './protectedRoute/ProtectedRoute';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar></Navbar>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<BasicDetails />}/>
          <Route path='/user' element={<User />}> USer </Route>
          <Route path="/basicdetails" element={<ProtectedRoute> <BasicDetails /></ProtectedRoute>}/>
          <Route  path='/filter' element={<Filter />} />
          <Route path= '*' element={<PageNotFound />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
