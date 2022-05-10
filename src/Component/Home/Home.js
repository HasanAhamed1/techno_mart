import { ChevronRightIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useItems from "../Hooks/useItems";
import Item from "../Item/Item";

const Home = () => {
  const [items, setItems] = useItems();
  const navigate = useNavigate();
  return (
    <div>
      {/* ---------banner-------- */}
      <div className="grid grid-cols-1 lg:flex bg-gradient-to-r from-blue-500 to-cyan-600 m-12 p-10">
        <div className="lg:p-20">
          <h2 className="text-white text-3xl font-bold">From 950$</h2>
          <h2 className="text-white text-4xl font-bold pb-5">
            Samsung Folding Phone
          </h2>
          <p className="text-white lg:font-semibold lg:py-5">
          Galaxy Fold seen from the front slightly folded with a butterfly onscreen. The biggest breakthrough since the mobile phone. Introducing Galaxy Z Fold3 5G, everything you want in a foldable 5G smartphone.
          </p>
          <button className="flex items-center py-5 text-red-600 font-semibold">
            <p>
              <span className="font-bold text-xl">B</span>uy{" "}
              <span className="font-bold text-xl">N</span>ow
            </p>
            <ChevronRightIcon className="h-3 w-4"></ChevronRightIcon>
          </button>
        </div>
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/DpTB4dX/Background-3-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      {/* ----------select section (extra section)--------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mx-10 gap-5 lg:gap-0">
        <div className="grid justify-items-center bg-gray-100 hover:bg-gray-300 lg:ml-3">
          <div className="pt-4 text-center">
            <h3 className="text-xl font-bold my-2">MacBook Air</h3>
            <p className="text-thin text-xs text-gray-400">
              BEST SLIM LAPTOP FOR WORK
            </p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/4JczJKk/gsmarena-001-2-removebg-preview.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center bg-gray-100 hover:bg-gray-300 lg:px-8 lg:ml-6">
          <div className="grid justify-items-center">
            <h3 className="text-xl font-bold my-2">Gaming Mouse</h3>
            <p className="text-thin text-xs text-gray-400">
              BEST GAMING MOUSE FOR 2022
            </p>
            <button className="text-xs font-bold text-red-500 my-2">
              SHOP NOW
            </button>
          </div>
          <div>
            <img
              src="https://i.ibb.co/JttDJ0S/CH-9300111-NA-Gallery-M65-PRO-RGB-WHT-01-1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="m-5 lg:m-12 lg:p-10">
        <h1 className="text-4xl font-semibold pb-5">Laptop:</h1>
        <hr />
        <div className='lg:flex justify-evenly pt-2'>
                   <div className='lg:flex lg:mr-10 text-gray-500 text-sm font-bold'>
                   <button className='mr-2 lg:m-3'>HP</button>
                    <button className='mr-2 lg:m-3'>ASUS</button>
                    <button className='mr-2 lg:m-3'>MACBOOK</button>
                    <button className='mr-2 lg:m-3'>DEL</button>
                    <button className='mr-2 lg:m-3'>ACER</button>
                    <button className='mr-2 lg:m-3'>HUAWEI</button>
                    <button className='mr-2 lg:m-3'>LENOVO</button>
                   </div>
                    <div className='flex'>
                        <button className='h-10 w-28 m-2 bg-blue-500 text-sm text-white font-bold'>New Arrivals</button>
                        <button className='h-10 w-28 m-2 bg-gray-300 text-sm font-bold'>Best Sellers</button>
                        <button className='h-10 w-28 m-2 bg-gray-300 text-sm font-bold'>On Sale</button>
                    </div>
                </div>
        <hr />

{/* ..........home page products........ */}
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 pt-10">
          {items.slice(0, 6).map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
        <button
          className="rounded bg-blue-500 text-white font-bold h-10 w-28 my-12"
          onClick={() => navigate("/items")}
        >
          See More
        </button>
      </div>

      {/* ----------extra section----------- */}
      <div className="grid lg:grid-cols-2 justify-items-center mx-16 gap-5">
        <div>
          <h1 className="font-bold text-2xl">Watch</h1>
          <br />
          <hr />
          <br />
        <div className="grid grid-cols-2 gap-5">
          <div className="grid justify-items-center bg-gray-100 font-bold text-sm text-gray-600">
            <img
              src="https://i.ibb.co/wQShLvS/1-28abe42e-069c-4e6b-8d23-5cfb9bbb844d-425x425-removebg-preview.png"
              alt=""
            />
            <p className="mb-2">Rimond Balo Stud Cum</p>
            <p>666$</p>
            <button className="m-2"><ShoppingCartIcon className="h-5 w-5 text-black"></ShoppingCartIcon></button>
          </div>
          <div className="grid justify-items-center bg-gray-100 font-bold text-sm text-gray-600">
            <img
              src="https://i.ibb.co/ZYxr1zB/2-57ffcab4-4c78-4764-8607-207b52864731-425x425-removebg-preview.png"
              alt=""
            />
            <p className="mb-2">Rimond Balo Stud Cum</p>
            <p>666$</p>
            <button className="m-2"><ShoppingCartIcon className="h-5 w-5 text-black"></ShoppingCartIcon></button>
          </div>
          <div className="grid justify-items-center bg-gray-100 font-bold text-sm text-gray-600">
            <img
              src="https://i.ibb.co/S6WMQMj/5-56514da7-84ba-45f6-9ee0-989448d194a1-425x425-removebg-preview.png"
              alt=""
            />
            <p className="mb-2">Rimond Balo Stud Cum</p>
            <p>666$</p>
            <button className="m-2"><ShoppingCartIcon className="h-5 w-5 text-black"></ShoppingCartIcon></button>
          </div>
          <div className="grid justify-items-center bg-gray-100 font-bold text-sm text-gray-600">
            <img
              src="https://i.ibb.co/PNzTRNv/9-903bd6e5-4773-4b43-8e5c-053061f35e15-425x425-removebg-preview.png"
              alt=""
            />
            <p className="mb-2">Rimond Balo Stud Cum</p>
            <p>666$</p>
            <button className="m-2"><ShoppingCartIcon className="h-5 w-5 text-black"></ShoppingCartIcon></button>
          </div>
        </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Most Popular</h1>
          <br />
          <hr />
          <br />
          <img
            src="https://img.freepik.com/free-psd/small-speakers-mockup-left-view_1332-11554.jpg?t=st=1652026229~exp=1652026829~hmac=1c3c86b10947417124181ff7eccca4b6cab4071c84c6b8c4a198a1d5c1f1f2a8&w=740"
            alt=""
          />
          <div className="grid gap-5 justify-items-center font-bold text-md text-gray-600 m-5">
          <p>Bluetooth Speaker</p>
          <p>Best Speaker of 2022</p>
          <div className="flex text-red-600">
          <StarIcon className="h-4 w-4"></StarIcon>
          <StarIcon className="h-4 w-4"></StarIcon>
          <StarIcon className="h-4 w-4"></StarIcon>
          <StarIcon className="h-4 w-4"></StarIcon>
          </div>
          </div>
        </div>
      </div>

      {/* --------------footer------------ */}
     <div className="flex justify-center gap-20 my-20">
     <button><img src="https://i.ibb.co/TRxzDfp/Brands-1-a626543a-33da-47fe-a606-cdc9a4e1c73f-160x160-2x.png" alt="" /></button>
            <button><img src="https://i.ibb.co/23bXTfr/Brands-2-ec544c61-becf-404d-ade9-cf17e2ffea2e-160x160-2x.png" alt="" /></button>
            <button><img src="https://i.ibb.co/31W6SQP/Brands-3-847cb0b9-5c73-41d1-b6f0-5055b1fc0f4c-160x160-2x.png" alt="" /></button>
            <button><img src="https://i.ibb.co/5B5tZZq/Brands-4-40c1dc78-c3d9-470e-bb15-309b03338742-160x160-2x.png" alt="" /></button>
            <button><img src="https://i.ibb.co/PWRFk7L/Brands-5-7b30023b-e4d9-408c-b29c-ca70580da975-160x160-2x.png" alt="" /></button>
            <button><img src="https://i.ibb.co/TqbrWL5/Brands-6-041a76e5-647b-4d0b-82af-f960c6b5b5c7-160x160-2x.png" alt="" /></button>
     </div>
    </div>
  );
};

export default Home;