import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import AddItem from './Component/AddItem/AddItem';
import Blogs from './Component/Blogs/Blogs';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import ItemDetail from './Component/ItemDetail/ItemDetail';
import Items from './Component/Items/Items';
import Login from './Component/Login/Login';
import ManageItem from './Component/ManageItem/ManageItem';
import MyItems from './Component/MyItems/MyItems';
import NotFound from './Component/NotFound/NotFound';
import Register from './Component/Register/Register';
import RequireAuth from './Component/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/item/:itemId' element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;