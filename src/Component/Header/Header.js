import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import {
  CashIcon,
  CogIcon,
  CurrencyDollarIcon,
  HeartIcon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div>
      {/* --------top header---------- */}
      <div className="flex my-10 p-5">
        <div className="mx-12">
          <h2 className="text-blue-600 text-4xl font-bold">Techno_Mart</h2>
        </div>
        <div className="flex mx-20">
          <button className="flex items-center mx-5 text-gray-600 text-xs">
            <TruckIcon className="h-12 w-12"></TruckIcon>
            <p>FREE DELIVERY</p>
          </button>
          <button className="flex items-center mx-5 text-gray-600 text-xs">
            <CurrencyDollarIcon className="h-12 w-12"></CurrencyDollarIcon>
            <p>MONEY BACK GUARANTEED</p>
          </button>
          <button className="flex items-center mx-5 text-gray-600 text-xs">
            <CashIcon className="h-12 w-12"></CashIcon>
            <p>CASH ON DELIVERY</p>
          </button>
        </div>
        <div className="flex ml-8 m-2">
          <button><UserIcon className="h-8 w-8 mx-5" onClick={() => navigate('/login')}></UserIcon></button>
          <button><HeartIcon className="h-8 w-8 mx-5"></HeartIcon></button>
          <button><CogIcon className="h-8 w-8 mx-5"></CogIcon></button>
        </div>
      </div>

    {/* ----------navigation bar---------- */}
      <nav className="flex justify-evenly bg-blue-600 py-4">
        <div className="flex">
        <CustomLink to="/" className="mx-5 font-bold">
          Home
        </CustomLink>
        <CustomLink to="/items" className="mx-5 font-bold">
          Items
        </CustomLink>
        <CustomLink to="/blogs" className="mx-5 font-bold">
          Blogs
        </CustomLink>
        <CustomLink to="/about" className="mx-5 font-bold">
          About
        </CustomLink>
        </div>

        <div className="flex ml-2">          
        {
          user && <>
          <CustomLink to="/additem" className="mx-5 font-bold">Add New Item</CustomLink>
          <CustomLink to="/manageitem" className="mx-5 font-bold">Manage Item</CustomLink>
          <CustomLink to="/myitems" className="mx-5 font-bold">My Items</CustomLink>
          </>
        }
        <span>{user?.displayName && user.displayName}</span>
        {
          user?.uid
          ?
          <button className="mx-5 font-bold text-white" onClick={() => signOut(auth)}>Log Out</button>
          :
          <CustomLink to="/login" className="mx-5 font-bold">Login</CustomLink>
        }
        </div>
      </nav>
      
    </div>
  );
};

export default Header;

