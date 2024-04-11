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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <p className="mr-3">
            <Image width={100} height={20} alt="layer1" src={Layer1} />
          </p>
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
        <p>
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
        <div className="flex justify-center items-center">
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
