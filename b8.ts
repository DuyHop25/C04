// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let m:number = Number(question("Nhap m: "));
let n:number = Number(question("Nhap n: "));
// Ouput
for (let i = m; i <= n; i++) {
    if(Math.floor(Math.sqrt(i))*Math.floor(Math.sqrt(i)) == i){
        console.log(i);
        break;
    }
}

