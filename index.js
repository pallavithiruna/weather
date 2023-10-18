v=fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    console.log(data[3]);
    console.log(data[3].name.common);
    console.log(data[3].flags.svg)
    console.log(data[3].capital[0]);
    console.log(data[3].region);
    console.log(data[3].cca3);
    // console.log(data[1].capital[1]);
    console.log(data[3].latlng[0])
    console.log(data[3].latlng[1])

    var name1=document.getElementById("title1");
    name1.innerHTML=data[3].name.common;  
    var image1=document.getElementById("image1");
    image1.innerHTML=`
    <img src="${data[3].flags.svg}"width="200px;heigth="200px">`
    var capital1=document.getElementById("capital1");
    capital1.innerHTML=data[3].capital; 
    var region1=document.getElementById("region1");
    region1.innerHTML=data[3].region; 
    var countrycode1=document.getElementById("countrycode1");
    countrycode1.innerHTML=data[3].cca3; 

    var name2=document.getElementById("title2");
    name2.innerHTML=data[1].name.common;  
    var image2=document.getElementById("image2");
    image2.innerHTML=`
    <img src="${data[1].flags.svg}"width="200px;heigth="200px">`
    var capital2=document.getElementById("capital2");
    capital2.innerHTML=data[1].capital; 
    var region2=document.getElementById("region2");
    region2.innerHTML=data[1].region; 
    var countrycode2=document.getElementById("countrycode2");
    countrycode2.innerHTML=data[1].cca3;

    var name3=document.getElementById("title3");
    name3.innerHTML=data[2].name.common;  
    var image3=document.getElementById("image3");
    image3.innerHTML=`
    <img src="${data[3].flags.svg}"width="200px;heigth="200px">`
    var capital3=document.getElementById("capital3");
    capital3.innerHTML=data[2].capital; 
    var region3=document.getElementById("region3");
    region3.innerHTML=data[2].region; 
    var countrycode3=document.getElementById("countrycode3");
    countrycode3.innerHTML=data[2].cca3;
    
    var button1=document.getElementById("button1");
    // const api=fetch("https://api.openweathermap.org/data/2.5/weather?lat=31&lon=36&appid=cbe81d847b25b2776bc3ea55aeaf9bde")
    button1.addEventListener('click',function(){
        const api1=fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data[3].capital},${data[3].name.common}&APPID=cbe81d847b25b2776bc3ea55aeaf9bde`)
        .then(response=>response.json())
        .then(response=>{
            console.log(response);
            console.log(response.main.temp);
            console.log(response.weather[0].description);
            alert("The Temperature  is"+response.main.temp+"and the climate is "+response.weather[0].description);
        });
    })
   
    
    var button2=document.getElementById("button2");
    // const api=fetch("https://api.openweathermap.org/data/2.5/weather?lat=31&lon=36&appid=cbe81d847b25b2776bc3ea55aeaf9bde")
       button2.addEventListener('click',function(){
        const api1=fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data[1].capital},${data[1].name.common}&APPID=cbe81d847b25b2776bc3ea55aeaf9bde`)
        .then(response=>response.json())
        .then(response=>{
            console.log(response);
            console.log(response.main.temp);
            console.log(response.weather[0].description);
            alert("The Temperature  is"+response.main.temp+"and the climate is "+response.weather[0].description);
        });
    })


    var button3=document.getElementById("button3");
    // const api=fetch("https://api.openweathermap.org/data/2.5/weather?lat=31&lon=36&appid=cbe81d847b25b2776bc3ea55aeaf9bde")
       button3.addEventListener('click',function(){
        const api2=fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data[2].capital},${data[2].name.common}&APPID=cbe81d847b25b2776bc3ea55aeaf9bde`)
        .then(response=>response.json())
        .then(response=>{
            console.log(response);
            console.log(response.main.temp);
            console.log(response.weather[0].description);
            alert("The Temperature  is"+response.main.temp+"and the climate is "+response.weather[0].description);
        });
    })





});

