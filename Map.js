
// higher order function== Map is a higher order function
// call back function== aisa function jiske parameter ke andr pass kiya jaata hai
// Map== map is an array method in javascript that is used to create a new array by applying a function to each element of an existing array.
// it does not change the original array.
// it returns a new array.

//let num = [2,6,4,8,1]

// let newarr= num.map( (e)=>{

//     return e*2

// } )

//console.log(newarr);


//------------------------2-------------------


// let newfilter = num.filter( (e)=>{

//     return e>4

// })

// console.log(newfilter);

//---------------------3-----------------


// num.forEach( (e)=>{

//     console.log(e*2)

// })

//---------------------Array of object---------------------

let info=[{

    name: "Jyotiraditya",
    age: 23,
    city: "Bhopal"

},{

    name: "Vivek",
    age: 22,
    city: "Sehore"

},{

    name: "Abhishek",
    age: 21,
    city: "Indore"

}]

let newdata = info.map( (e)=>{

    return e

})

console.log(newdata);

let show= document.querySelector("#show")

info.map( (e)=> {

    show.innerHTML += `
    
    <tr>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.city}</td>

        </tr>
        
        `
})


// H.W=== FIND=> FIND VS FILTER, REDUCE, FOR OF , FOR IN.
// math , date.