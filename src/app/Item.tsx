import React, { ReactElement } from "react";
import Image from "next/image";

interface ItemProps {
  src: string;
  icon: string;
  action: string;
}

function Item({ src, icon, action }: ItemProps): ReactElement {
  return (
    <div className="flex">
      <div className="flex gap-6 flex-grow items-stretch">
        <div className="relative w-36 h-36">
          <div
            className="flex justify-center items-center w-28 h-10 text-white text-xs absolute text-center bottom-0 right-0 z-10"
            style={{
              borderTopLeftRadius: "100px",
              borderBottomRightRadius: "100px",
              backgroundColor: "#D20653",
            }}
          >
            {action}
          </div>
          <div className="relative z-0">
            <Image alt="img" className="w-36 h-36" src={src} />
          </div>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="w-full">
            Six-piece clothing set (blouse - pants - hat and ...)
          </p>
          <p className="w-full">
            <span className="text-slate-400">Starting Price</span>{" "}
            <span className="text-xl font-bold">1000 EGp</span>
          </p>
          <p className="w-full flex gap-2 items-center flex-wrap">
            <span className="text-slate-400 mr-2">Lot Starts In</span>
            <span className="flex gap-3 flex-grow">
              <span className="bg-orange-100 w-28 px-4 py-2 rounded-3xl text-orange-500 font-semibold text-xl text-center">
                2 <span className="text-xs">Days</span>
              </span>
              <span className="bg-orange-100 w-28 px-4 py-2 rounded-3xl text-orange-500 text-xl font-semibold text-center">
                10 <span className="text-xs">Hours</span>
              </span>
              <span className="bg-orange-100 w-28 px-4 py-2 rounded-3xl text-orange-500 text-xl font-semibold text-center">
                50 <span className="text-xs">Minutes</span>
              </span>
            </span>
          </p>
        </div>
      </div>
      <div>
        <Image alt="icon" src={icon} />
      </div>
    </div>
  );
}

export default Item;
