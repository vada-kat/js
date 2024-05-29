function fOne(){
    console.log("normal/synchronous function");
}

async function fTwo(){
    const data = await fetch("https://jsonplaceholder.typeicode.com/users")
    const actualData = await data.json

    console.log(actualData)
}

fTwo()
fOne()

let number = "354,545,255"
console.log(number*0.8);