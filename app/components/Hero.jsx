'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { LiaUniversitySolid } from 'react-icons/lia';
import Skills from '@/components/Skills';
import ImageSection from '../../components/ImageSection';
export default function Hero() {
  const [weather, setWeather] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    fetchWeather();
  }, []);

  async function fetchWeather() {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=41.015137&lon=28.979530&appid=1c70ad67e39f7092c34fa1077253da1d'
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWeather(res);
        const weatherIcon = `https://openweathermap.org/img/wn/${res?.weather[0]?.icon}@2x.png`;
        setIcon(weatherIcon);
        console.log(res?.weather[0]?.icon);
      });
  }

  const date = new Intl.DateTimeFormat('en-us', {
    dateStyle: 'short',
    timeStyle: 'short',
  });
  const today = new Date();
  console.log(date.format(today));

  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-between items-center p-4 h-screen rounded-[50px] w-full sm:w-4/5 md:w-3/4 xl:w-1/2 bg-one overflow-visible relative 
        bg-[url('/project.png')]
 "
    >
      <div className="w-full sm:w-1/4 h-full p-4 border">
        <h1 className="font-bold text-six text-nowrap  select-none">
          {date.format(today)}
        </h1>
        {weather && (
          <div className="flex items-center justify-between gap-4 w-full text-white bg-gradient-to-r from-five to-four/20 rounded-full h-fit px-4 mt-6 shadow-black shadow-2xl hover:scale-105 transition-all duration-300">
            <h5 className="text-nowrap p-0 m-0 select-none">
              Temp: {Math.round(weather?.main?.temp - 272.15)}
            </h5>
            <div className="flex justify-between bg-white rounded-full px-2 my-2 shadow-lg text-six ">
              <h5 className="p-0 m-0 select-none">
                {weather?.weather[0]?.main}
              </h5>
              <Image src={icon} width={20} height={20} alt="icon" />
            </div>
          </div>
        )}
        <div className=" bg-seven mt-9 rounded-2xl p-2 shadow-black/40 shadow-2xl hover:scale-105 transition duration-300">
          <h1 className="p-0 m-0 select-none">
            Istanbul <span className="text-red-400">|</span> Turkey{' '}
          </h1>
          <h1 className="p-0 m-0 select-none">+90 5398387167 </h1>
          <h1 className="p-0 m-0 text-red-400 select-none">
            ramondm4@gmail.com{' '}
          </h1>
        </div>
        <Skills />
        <div className="bg-seven flex flex-col gap-2 mt-7 rounded-2xl p-2 shadow-black/40 shadow-2xl text-white text-[15px] h-[220px] hover:scale-105 transition-all duration-300">
          <div>
            <Image
              src={'/myPhoto.png'}
              width={100}
              height={100}
              alt={'my-photo'}
            />
          </div>
          <div>
            <h1 className="border-b text-eight my-2 select-none">
              name: Wael Kamira
            </h1>
            <h1 className="border-b text-eight my-2 select-none">age: 34</h1>
            <h1 className="border-b text-eight my-2 select-none">
              Full Stack Developer
            </h1>
          </div>
        </div>
        <div className="bg-seven flex items-center justify-between mt-9 rounded-2xl p-2 shadow-black/40 shadow-2xl text-white text-[14px]  hover:scale-105 transition-all duration-300">
          <h1 className="text-six text-nowrap font-bold select-none">
            Re:Coded
          </h1>
          <Image
            src={'/recoded.png'}
            width={30}
            height={30}
            alt="logo"
            className="rounded-full"
          />
          <h1 className="text-six font-bold select-none">bootcamp</h1>
        </div>
        <div className="bg-seven flex items-center justify-between mt-9 rounded-2xl p-2 shadow-black/40 shadow-2xl text-white hover:scale-105 transition-all duration-300">
          <LiaUniversitySolid className="text-nine text-2xl" />
          <h6 className="text-six font-bold text-nowrap text-md my-1 select-none w-full">
            damascus university
          </h6>
        </div>
      </div>
      <ImageSection />
    </div>
  );
}
