import React from 'react';
import { LuWheat } from 'react-icons/lu';
import { FaAnchor } from 'react-icons/fa6';
import { AiFillFire } from 'react-icons/ai';
import { AiFillGitlab } from 'react-icons/ai';
import { FaAppleAlt } from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa';
import { FaCarrot } from 'react-icons/fa6';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { GiLindenLeaf } from 'react-icons/gi';
import { TbTargetArrow } from 'react-icons/tb';
import { GiBatteredAxe } from 'react-icons/gi';
import { PiPawPrintFill } from 'react-icons/pi';
export default function Skills() {
  return (
    <div className="hover:scale-105 bg-eight mt-8 rounded-2xl p-2 shadow-black/40 shadow-2xl text-white text-[15px] h-[195px] transition-all duration-300">
      <h1 className="p-0 mb-2">Skills:</h1>
      <div className="flex justify-between gap-3">
        <div>
          <h6 className="flex gap-1 mb-0.5 ">
            {' '}
            <PiPawPrintFill className="text-nine text-lg hover:text-nine" />
            JavaScript
          </h6>
          <h6 className="flex gap-1 mb-0.5 ">
            <AiFillFire className="text-[#F87171] text-lg hover:text-nine" />{' '}
            React.js
          </h6>
          <h6 className="flex gap-1 mb-0.5 ">
            <AiFillGitlab className="text-[#FEA87E] text-lg hover:text-nine" />
            HTML
          </h6>
          <h6 className="flex gap-1 mb-0.5 ">
            <TbTargetArrow className="text-[#F5B2B5] text-lg hover:text-nine" />
            MongoDB
          </h6>
          <h6 className="flex gap-1 mb-0.5 ">
            <FaAppleAlt className="text-red-400 text-lg hover:text-nine" />
            Tailwind
          </h6>
          <h6 className="flex gap-1 mb-0.5 ">
            <GiLindenLeaf className="text-nine text-lg hover:text-nine" />
            Bootstrap
          </h6>
        </div>
        <div>
          <h6 className="flex gap-1 mb-0.5 ">
            <FaBrain className="text-[#FCF4E9] text-lg hover:text-nine" />
            Git
          </h6>
          <h6 className="flex gap-1 mb-0.5 ">
            {' '}
            <LuWheat className="text-[#F5DDB4] text-lg hover:text-nine" />
            CSS
          </h6>
          <h6 className="flex gap-1 mb-0.5 ">
            <FaCarrot className="text-red-400 text-lg hover:text-nine" />
            Next.js
          </h6>
          <h6 className="flex gap-1 mb-0.5 ">
            <FaCanadianMapleLeaf className="text-[#FEA87E] text-lg hover:text-nine" />
            Node.js
          </h6>
          <h6 className="flex gap-1 mb-0.5 ">
            {' '}
            <FaAnchor className="text-nine" />
            Express
          </h6>

          <h6 className="flex gap-1 mb-0.5 ">
            {' '}
            <GiBatteredAxe className="text-[#F5B2B5] text-lg hover:text-nine" />{' '}
            Stripe
          </h6>
        </div>
      </div>
    </div>
  );
}
