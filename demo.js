/*
Array.prototype.map2 = function(callback){
    var ouput = [];
    Arraylength = this.length;

    for(var i = 0; i < Arraylength; ++i){

        var result = callback(this[i],i);
        ouput.push(result);

    }

    return ouput;
}

var courses = ["python", "C", "JS"];

var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`;
});


console.log(htmls.join(''));




class Course{
    constructor(name,price){ //phuong thucws xay dung
        this.name = name;
        this.price = price;
    }
    getName (){ 
        return this.name;
    }

    getPrice (){
        return this.price;
    }

    run (){
        const issucces = false;
    }
}

const phpCourses = new Course('Php',1000);
const javaCourses = new Course('Java',2000);

console.log(phpCourses);
console.log(javaCourses);
*/



console.log("hello");
