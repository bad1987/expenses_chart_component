import React, {useEffect, useState} from 'react';

import { getData } from '../utils/JsonUtils';

export default function ChartBar(){

	const [maxbar, setMaxbar] = useState(null);
	const [bars, setBars] = useState(null);

	useEffect(()=>{
		async function request(){
			let jdata = await getData();
			// console.log(jdata);
			let maxB = 0;
			for(let elt of jdata){
				if (elt.amount > maxB) {
					maxB = elt.amount;
				}
			}
			setMaxbar(maxB);

			buildBars(jdata, maxB);
		}
		request();
	},[]);

	const buildBars = (jdata, maxBar) => {
		const scale = 4;
		const html = jdata.map((item, index) => {
			let myClassName = "w-9 sm:w-16 rounded" + (item.amount == maxBar ? " bg-[#76B5BC]" : " bg-[#EC775F]");
			return (
				<div key={index} className="flex sm:shrink-0 shrink flex-col justify-center space-y-2 cursor-pointer">
					<div className="text-center opacity-0 text-white p-2 font-bold rounded-md bg-[#382314]">${item.amount}</div>
      		<div style={{height: item.amount * scale}} className={myClassName} onClick={handleClick}></div>	
      		<div className="text-sm sm:text-lg sm:text-center text-[#93867B]">{item.day}</div>	
      	</div>
			);
		});
		setBars(html);
	};

	const handleClick = event => {
		const node =event.target.parentNode.firstChild.classList;
		const current = event.target.classList;
		if (node.contains('opacity-0')) {
			node.remove('opacity-0');
			node.add('opacity-100');

			current.add('opacity-70')
		} 
		else{
			node.remove('opacity-100');
			node.add('opacity-0');

			current.remove('opacity-70')
		}
		console.log(event.target.parentNode.firstChild.classList);
	}

	return (
		<div className="p-5 shrink shadow-lg rounded-lg sm:rounded-3xl flex flex-col">
      <h1 className="text-[#382314] font-bold sm:text-4xl text-2xl">Spending - Last 7 days</h1>
      <div className="flex text-[0.6rem] sm:text-base items-end sm:space-x-4">
      	{bars &&
      		bars
      	}
      </div>
      <div style={styles.dividerStyle}></div>
      <div className="flex flex-col sm:mb-6 sm:space-y-2">
      	<div className="text-[#93867B] sm:text-2xl">Total this month</div>
      	<div className="flex flex-row justify-between items-center">
      		<div className="text-[#382314] font-bold text-3xl sm:text-5xl">$478.33</div>
      		<div className="flex flex-col justify-end">
      			<div className="text-[#382314] text-lg sm:text-2xl text-right font-bold">+2.4%</div>
      			<div className="text-[#93867B] sm:text-2xl">from last month</div>
      		</div>
      	</div>
      </div>
    </div>
	)
}

const styles = {
	dividerStyle: {
    border: 0,
    borderBottom: '3px solid',
    opacity: 0.1,
    marginTop: '24px',
    marginBottom: '24px'
	}
};