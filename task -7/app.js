
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");
request.send();

// ! a
request.onload = function () {
    let result = JSON.parse(request.response);

    let res = result.filter((a)=> a.region =="Asia")       
    console.log(res);

    // ! b
    let pop = result.filter((b)=> b.population<200000 );
      console.log(pop);
    // console.log(result);

    // !c
    result.forEach((c)=>console.log(c.name,c.capital,c.flag));
   
  // !d
    let total =result.reduce((a,b)=>a+b.population,0)
    console.log(total);
  // !e
    let ma =result.filter((a)=>a.name=="United States Dollar")
    console.log(ma);
}








