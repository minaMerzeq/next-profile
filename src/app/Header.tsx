"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Image from "next/image";
import Layer1 from '../Assists/Layer 1.jpg';
import Search from "../Assists/search-normal.jpg";
import Notif from "../Assists/notification.jpg";
import Ellipse from "../Assists/Ellipse 1.jpg";
import Img from "../Assists/image copy.png";
import Global from "../Assists/global.jpg";

export default function Header(): JSX.Element {
  const [value, setValue] = React.useState<string>("Home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="flex justify-between px-14 w-full bg-white shadow-lg">
      <div className="flex justify-center items-stretch mt-4">
      <div className="lg:hidden mt-2">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
        <p className="mr-3">
          <Image width={100} height={20} alt="layer1" src={Layer1} />
        </p>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          className="hidden lg:flex"
        >
          <Tab value="Home" label="Home" />
          <Tab value="Blog" label="Blog" />
          <Tab value="Gifts" label="Gifts" />
        </Tabs>
      </div>
      <div className="flex justify-end items-center  ">
        <p
          className="p-4"
          style={{
            borderRight: "1px solid #FFEAD2",
          }}
        >
          <Image alt="search" src={Search} />
        </p>{" "}
        <p
          className="p-4"
          style={{
            borderRight: "1px solid #FFEAD2",
          }}
        >
          <Image alt="notification" src={Notif} />
        </p>{" "}
        <p className="p-4">
          <Image alt="ellipse" src={Ellipse} />
        </p>
        <p className="hidden lg:flex">
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #D20653 0%, #FF951D 100%)",
            }}
          >
            <Image
              className="mr-2"
              width={18}
              height={18}
              alt="img"
              src={Img} // Assuming this is the correct path
            />
            Add New Product
          </Button>{" "}
        </p>
        <div className="justify-center items-center hidden lg:flex">
          <p
            className="p-4"
            style={{
              borderRight: "1px solid #FFEAD2",
            }}
          >
            <Image alt="global" src={Global} />
          </p>
          <p className="p-4">EN</p>
        </div>
      </div>
    </div>
  );
}
