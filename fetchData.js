
let requestURL="https://api.covid19india.org/data.json";
let request = new XMLHttpRequest();

request.open('GET',requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	const data = request.response;
	showNationalData(data);
}

function showNationalData(jsonObj)
{
	const confirmed = document.getElementById('confirmed');
	const active = document.getElementById('active');
	const recovered = document.getElementById('recovered');
	const death = document.getElementById('death');
	const lastupdated = document.getElementById('lastupdated');
	let total = jsonObj['statewise'][0];
	let monthParse = {
		'01':'January',
		'02':'February',
		'03':'March',
		'04':'April',
		'05':'May',
		'06':'June',
		'07':'July',
		'08':'August',
		'09':'September',
		'10':'October',
		'11':'November',
		'12':'December'
	}
	let dateAndTime = total['lastupdatedtime'].split(" ");
	let date = dateAndTime[0];
	let temp = date.split("/");
	let formatDate = `${temp[0]} ${monthParse[temp[1]]} ${temp[2]}`;
	let suffix;
	total['deltaconfirmed']>0?suffix='+':suffix='-';
	lastupdated.innerHTML = `Updated on: <span style="color: red">${formatDate}, ${dateAndTime[1]} IST</span>`;
	confirmed.innerHTML = `Confirmed<br><span id="num1">${Number(total['confirmed']).toLocaleString('en')}</span><br>Today: ${suffix}${total['deltaconfirmed']}`;
	active.innerHTML = `Active <br><span id="num2">${Number(total['active']).toLocaleString('en')}</span>`;
	total['deltarecovered']>0?suffix='+':suffix='-';
	recovered.innerHTML = `Recovered<br><span id="num3">${Number(total['recovered']).toLocaleString('en')}</span><br>Today: ${suffix}${total['deltarecovered']}`;
	total['deltadeaths']>0?suffix='+':suffix='-';
	death.innerHTML = `Deaths <br><span id="num4">${Number(total['deaths']).toLocaleString('en')}</span><br>Today: ${suffix}${total['deltadeaths']}`;
}