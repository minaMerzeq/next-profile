import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import Item from "./Item";
import Img from "../Assists/image copy.png";

interface BodyProps {}

const Body: React.FC<BodyProps> = () => {
  const srcone: string = require("../Assists/image copy 12.png");
  const favIconone: string = require("../Assists/image copy 13.png");
  const srctwo: string = require("../Assists/image copy 14.png");
  const favIconTwo: string = require("../Assists/image copy 15.png");

  return (
    <div className="w-full lg:w-2/3 rounded-lg p-4 flex flex-col gap-10 shadow-xl bg-white overflow-x-auto">
      <div className="flex justify-between">
        <div>
          <Button
            variant="contained"
            className="text-sm text-orange-400 bg-orange-100 hover:bg-orange-100 hover:text-orange-400"
          >
            Products
          </Button>
          <Button className="text-slate-400 ">Articles</Button>
          <Button className="text-slate-400 ">Reviews</Button>
        </div>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #D20653 0%, #FF951D 100%)",
          }}
        >
          {" "}
          <Image
            alt="img"
            className="mr-2"
            width={18}
            height={18}
            src={Img}
          />
          Add Review
        </Button>{" "}
      </div>
      <h1>
        <span className="text-3xl font-bold">Products</span>{" "}
        <span className="text-slate-400">(12)</span>
      </h1>
      <div className="flex flex-col h-5/6 p-4 gap-10">
        <Item src={srcone} icon={favIconone} action={"Live Auction"} />
        <Item src={srctwo} icon={favIconTwo} action={"Hot Sale"} />
      </div>
    </div>
  );
};

export default Body;
