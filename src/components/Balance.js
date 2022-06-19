import React from 'react';
import logo from '../images/logo.svg'


export default function Balance(){

	return (
		<div className="px-10 w-full h-40 lg:h-36 bg-[#EC775F] shadow-lg rounded-3xl flex justify-between items-center space-x-4">
      <div className="text-white flex flex-col justify-between space-y-4">
        <p className="text-xl">My balance</p>
        <div className="text-4xl font-bold">$921.48</div>
      </div>
      <div className="shrink-0">
        <img src={logo} className="h-12 w-12" alt="Expenses chart logo" />
      </div>
    </div>
	);
}