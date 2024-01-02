var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result =JSON.parse(request.response)
var asiancountries= result.filter((coun)=>coun.region == "Asia");
var country = asiancountries.map((coun)=> coun.name.common);
console.log(country);
};
//.............................
var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
  var result =JSON.parse(request.response)
var asiancountries= result.filter((coun)=>coun.continents == "Asia");
var regions = asiancountries.map((coun)=> coun.name.common);
console.log(regions);
};
//2.............................
var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
  var result =JSON.parse(request.response)
var asia= result.filter((coun)=>coun.population>=200000);
var popu = asia .map((coun)=> coun.population);
console.log(popu);
}
//3.............................................
var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
  var result =JSON.parse(request.response)
  console.log(result);
  result.forEach((country)=> {
  var name = country.name.common;
   var capital = country.capital;
   var flag = country.flags.png;
   console.log (`
          Name:${name};
          Capital:${capital };  
          Flag:${flag}
   `);
    });
}
//4)......................................
var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
   var result =JSON.parse(request.response)
   var popu =result.map((count)=>count.population);  
var total = popu.reduce((acc,population)=>acc+population,0);
console.log(total);
}
//5).......................
var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
   var result =JSON.parse(request.response)
   var curr= result.filter((coun)=>coun.currencies === "USD");
   var  name = curr .map((coun)=> coun.name.common);
console.log(name);
}


    

                                                             