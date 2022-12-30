
//JSON comparision
// let obj1 = {name : "Person1",age : 5};
// let obj2 = {name : "Person2",age : 2};

// function v(obj1,obj2) {
//     var res = true;
// var obj1k  = Object.keys(obj1);
// var obj2k = Object.keys(obj2);

// for(var i = 0; i < obj1k.length;i++){
// if(obj1k[i] === obj2k[i]){
//     res = true;
// }
// else{
// res = false;
// break;
// }

// }
// return res;
// }
// console.log(v(obj1,obj2));


//to display flags of all countries && name,region,subregion,population
var country = new XMLHttpRequest();
country.open('GET','https://restcountries.com/v2/all');
country.send();
country.onload = function () {
var flags = JSON.parse(country.responseText); 

flags.forEach((fl)=> {
    console.log(`Flags : ${fl.flags}`)
});


flags.forEach((fl)=> {
    console.log(`Name : ${fl.name},Region :${fl.region},Subregion : ${fl.subregion},Population : ${fl.population}`)
})

}
