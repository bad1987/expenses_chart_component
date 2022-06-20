import React from 'react';
import logo from '../images/logo.svg'


export default function Balance(){

	return (
		<div className="p-5 shrink sm:h-40 lg:h-36 bg-[#EC775F] shadow-lg rounded-lg flex justify-between items-center">
      <div className="text-white flex flex-col space-y-2">
        <p className="md:text-xl">My balance</p>
        <h1 className="text-2xl md:text-4xl font-bold">$921.48</h1>
      </div>
      <div className="shrink-0">
        <img src={logo} className="h-12 w-12" alt="Expenses chart logo" />
      </div>
    </div>
	);
}