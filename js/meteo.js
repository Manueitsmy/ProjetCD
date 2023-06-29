function RecupereMeteo(){
	//Fonction de récupération de la météo
	//Construction de l'URL de l'API OPENWEATHERMAP	pour plus de souplesse la clé API à été mise dans le fichier de paramétrage
	let url = 'https://api.openweathermap.org/data/2.5/weather?q='+dataprops.param.VILLE+'&units=metric&lang=fr&appid='+dataprops.param.APIKEY;
	//Appel de l'API et récupération de la réponse
	fetch(url).then((response) =>response.json().then((data) => {
		//Pour le debogage
		console.log(data);
		//Remplissage des encarts Ville, température et humidité avec le résultat de l'API
		document.querySelector('#city').innerHTML = '<p align="center">'+data.name + '<br> <img src="https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png" alt="'+data.weather[0].description+'"></p>';
		document.querySelector('#temp').innerHTML = '<p align="center">'+data.main.temp + '°C<br><br>' + data.weather[0].description + '</p>';
		document.querySelector('#humidity').innerHTML = '<p align="center">'+data.main.humidity + "%" + '<br> <img src="img/goutte.png"></p>';
		
		})
	);
}


var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange=function() {
    //On vérifie que la lecture s'est bien passée
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
       //On récupère le JSON dans une variable
		dataprops = JSON.parse(xmlhttp.responseText);
		//Pour le debogage
		console.log(dataprops.param.VILLE);
		//Appel de la fonction de récupération de la météo
        RecupereMeteo();
    }
  };

  //Lecture du fichier de paramétrage pour récupération de la ville
  xmlhttp.open("GET","conf.json",true);
  xmlhttp.send();
	