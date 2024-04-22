import Image from 'next/image';
import React from 'react';

export default function ImageSection() {
  return (
    <div className=" w-full h-full -right-32 grow">
      <div className=" flex items-center justify-betwee">
        <div className="flex justify-between items-center mt-5 ml-10">
          <h6 className="text-six font-bold text-nowrap text-md my-1 select-none w-full bg-seven">
            damascus
          </h6>
        </div>
      </div>
      <div className="relative w-full h-full left-0  overflow-visible -right-10">
        <Image src={'/plane.png'} layout="fill" objectFit="contain" />
      </div>
      {/* <dir className="absolute h-36 w-36 right-0 top-72 bg-green-400">
            <Image src={'/fane.png'} layout="fill" objectFit="contain " />
          </dir>
          <dir className="absolute h-28 w-28 right-0-0 top-44 bg-red-400">
            <Image src={'/fane.png'} layout="fill" objectFit="contain " />
          </dir> */}
    </div>
  );
}
