function RecupereMeteo(){
	let url = 'https://api.openweathermap.org/data/2.5/weather?q='+dataprops.param.VILLE+'&units=metric&lang=fr&appid='+dataprops.param.APIKEY;
	//fetch(url).then((response) =>response.json().then((data) => console.log(data)));
	fetch(url).then((response) =>response.json().then((data) => {
		console.log(data);
		document.querySelector('#city').innerHTML = data.name + '<BR> <img src="https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png" alt="'+data.weather[0].description+'">';
		document.querySelector('#temp').innerHTML = data.main.temp + "°C<br><br><br>" + data.weather[0].description;
		document.querySelector('#humidity').innerHTML = data.main.humidity + "%" + '<br> <img src="img/goutte.png">';
		
		})
	);
}


var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        dataprops = JSON.parse(xmlhttp.responseText);
			console.log(dataprops.param.VILLE);
			//dataprops 
        RecupereMeteo();
    }
  };

  xmlhttp.open("GET","conf.json",true);
  xmlhttp.send();
	