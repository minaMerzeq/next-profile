import React, { ReactElement } from "react";
import Image from "next/image";

interface ItemProps {
  src: string;
  icon: string;
  action: string;
}

function Item({ src, icon, action }: ItemProps): ReactElement {
  return (
    <div className="flex justify-between">
      <div className="flex gap-6 relative">
        <div
          className="flex justify-center items-center w-40 h-10 text-white py-6 absolute text-center bottom-0 left-8 z-10"
          style={{
            borderTopLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            backgroundColor: "#D20653",
          }}
        >
          {action}
        </div>
        <div className="relative z-0">
          <Image alt="img" width={190} height={200} src={src} />
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-xl">
            Six-piece clothing set (blouse - pants - hat and ...)
          </p>
          <p>
            <span className="text-2xl text-slate-400">Starting Price</span>{" "}
            <span className="text-2xl font-bold">1000 EGp</span>
          </p>
          <p>
            <span className="text-2xl text-slate-400 mr-2">Lot Starts In</span>
            <span>
              <span className="bg-orange-200 p-4 rounded-3xl text-orange-500 text-xl">
                2 Days
              </span>
              <span className="bg-orange-200 mx-3 p-4 rounded-3xl text-orange-500 text-xl">
                10 Hours
              </span>
              <span className="bg-orange-200 p-4 rounded-3xl text-orange-500 text-xl">
                50 Minutes
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
