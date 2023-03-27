// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N:number = Number(question("Nhap so nguyen duong: "));
let result: string ;
// Ouput
if(Math.sqrt(N)*Math.sqrt(N) == N)
    result = "Yes";
else
    result = "No";
console.log(result);
