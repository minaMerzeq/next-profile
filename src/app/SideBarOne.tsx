import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Img2 from "../Assists/image copy 2.png";
import Img3 from "../Assists/image copy 3.png";
import Img4 from "../Assists/image copy 4.png";
import Img5 from "../Assists/image copy 5.png";

function SideBarOne(): JSX.Element {
  return (
    <div className="w-full h-1/2 bg-white shadow-lg rounded-lg flex flex-col gap-2 p-6">
      <div>
        <Image
          alt="img"
          src={Img2}
          width={70}
          height={70}
        />
      </div>
      <h1 className="text-lg font-bold">Hala Ahmed</h1>
      <p
        className="text-gray-500 text-xs"
      >
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>
      <div className="flex gap-4">
        <p className="flex gap-2 w-1/3 items-center justify-center bg-orange-100 py-3 rounded-xl">
          <p>
            <Image
              alt="img"
              width={20}
              height={20}
              src={Img3}
            />
          </p>
          <div>
            <p className="text-xs font-bold">5</p>
            <p className="text-orange-400 text-xs">Following</p>
          </div>
        </p>
        <p className="flex gap-2 w-1/3 items-center justify-center bg-orange-100 py-3 rounded-xl">
          <p>
            <Image
              alt="img"
              src={Img4}
              width={20}
              height={20}
            />
          </p>{" "}
          <div>
            <p className="text-xs font-bold">20</p>
            <p className="text-orange-400 text-xs">Followers</p>
          </div>
        </p>
        <p className="flex gap-2 w-1/3 items-center justify-center bg-orange-100 py-3 rounded-xl">
          <p>
            <Image
              alt="img"
              width={20}
              height={20}
              src={Img5}
            />
          </p>{" "}
          <div>
            <p className="text-xs font-bold">
              4.2 <span className="text-slate-400">(15)</span>
            </p>
            <p className="text-orange-400 text-xs">Rate</p>
          </div>
        </p>
      </div>
      <div className="w-full">
        <Button
          variant="contained"
          color="primary"
          className="w-full h-10 rounded-xl"
          sx={{
            background: "linear-gradient(90deg, #D20653 0%, #FF951D 100%)",
          }}
        >
          Follow
        </Button>
      </div>
    </div>
  );
}

export default SideBarOne;
