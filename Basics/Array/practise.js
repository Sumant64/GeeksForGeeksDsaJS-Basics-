// array insert element

let arr = [1, 2, 3, 4, 5]
let x = 6;


const insertFun = (arr, value) => {
    let temp = new Array(arr.length + 1);

    for(let i = 0; i < arr.length; i++) {
        temp[i] = arr[i]
    }
    console.log(temp)

    temp[temp.length - 1] = value;
    return temp;
}

console.log(insertFun(arr, x));