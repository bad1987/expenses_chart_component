export const getData = async function(){
	let data = await fetch('data.json', {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	});
	return data.json();
};