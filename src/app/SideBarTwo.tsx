import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Img8 from "../Assists/image copy 8.png";
import Img9 from "../Assists/image copy 9.png";
import Img10 from "../Assists/image copy 10.png";
import Img11 from "../Assists/image copy 11.png";
import Img7 from "../Assists/image copy 7.png";
import Img6 from "../Assists/image copy 6.png";

function SideBarTwo(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-lg p-6 rounded-xl h-1/2">
      <div className="flex justify-between">
        <span className="font-semibold">QR Code</span>
        <div className="flex gap-10">
          <p>
            <Image
              alt="img"
              width={20}
              height={20}
              src={Img8}
            />
          </p>
          <p>
            <Image
              alt="img"
              width={20}
              height={20}
              src={Img9}
            />
          </p>
          <p>
            <Image
              alt="img"
              width={20}
              height={20}
              src={Img10}
            />
          </p>
        </div>
      </div>
      <div className="bg-orange-100 p-3 rounded-xl">
        <Image
          alt="img"
          src={Img11}
          width={20}
          height={20}
          className="inline-block"
        />
        <span className="text-xs mx-2 text-gray-500">
          Download the QR code or share it with your friends.
        </span>
      </div>
      <div
        className="rounded-3xl p-5 "
        style={{
          background: "linear-gradient(90deg, #D20653 0%, #FF951D 100%)",
        }}
      >
        <div className=" bg-white flex flex-col items-center justify-center rounded-3xl">
          <div className="">
            <Image
              alt="img"
              width={100}
              height={48}
              src={Img7}
            />
          </div>
          <div className="font-bold">Hala Ahmed</div>
          <div>
            {" "}
            <Image
              alt="img"
              width={70}
              height={70}
              src={Img6}
            />
          </div>
          <div className="text-sm">Follow Us On Mazaady</div>
        </div>
      </div>
    </div>
  );
}

export default SideBarTwo;
