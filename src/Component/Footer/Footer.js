import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ClockIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="p-16 bg-zinc-900">
      <div className="grid grid-cols-3 justify-items-center">
        {/* --------techno mart--------- */}
        <div>
          <h1 className="text-white font-bold text-2xl ">Techno_Mart</h1>
          <div className="text-gray-500 text-sm">
            <div className="flex items-center gap-3  my-2">
              <PhoneIcon className="h-4 w-4"></PhoneIcon>
              <p>+3450293022</p>
            </div>
            <div className="flex items-center gap-3  my-2">
              <MailIcon className="h-4 w-4"></MailIcon>
              <p>technomart22@gmail.com</p>
            </div>
            <div className="flex items-center gap-3  my-2">
              <LocationMarkerIcon className="h-4 w-4"></LocationMarkerIcon>
              <p>12/5 Dhaka</p>
            </div>
            <div className="flex items-center gap-3  my-2">
              <ClockIcon className="h-4 w-4"></ClockIcon>
              <p>9am to 9pm</p>
            </div>
          </div>
        </div>

        {/* ---------customer service---------- */}
        <div>
          <h2 className="text-white font-bold text-md">CUSTOMER SERVICE</h2>
          <div className="text-gray-500 text-sm">
            <div className="flex items-center gap-3  my-2">
              <button>Contact us</button>
            </div>
            <div className="flex items-center gap-3  my-2">
              <button>Held and advice</button>
            </div>
            <div className="flex items-center gap-3  my-2">
              <button>Shipping and returns</button>
            </div>
            <div className="flex items-center gap-3  my-2">
              <button>Terms and Conditions</button>
            </div>
            <div className="flex items-center gap-3  my-2">
              <button>Refund Policy</button>
            </div>
          </div>
        </div>

        {/* ----------new seletter---------- */}
        <div>
          <h2 className="text-white font-bold text-md">NEWSLETTER</h2>
          <p className="text-gray-500 text-sm w-72">
            Sign up for newsletter to receive special offers and exclusive news
            about Nuranium products
          </p>
          <br />
          <input
            className="h-12 w-72 text-center text-sm font-bold mb-3"
            type="email"
            placeholder="Enter Your Email"
          />
          <br />
          <button className="h-12 w-72 text-center bg-red-400 text-white text-sm font-bold">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="grid justify-items-center mt-14">
        <img
          src="https://i.ibb.co/M6tQNqW/payment-footer-3cd5e244-331d-4433-ac29-eb0f0c257a18-300x.png"
          alt=""
        />
        <p className="font-bold text-xs text-white mt-5">
          Copyright{" "}
          <FontAwesomeIcon icon={faCopyright} className="text-white" /> {year}{" "}
          Techno_Mart
        </p>
      </div>
    </div>
  );
};

export default Footer;