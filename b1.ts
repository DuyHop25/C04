// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N:number = Number(question("Nhap so nguyen duong: "));
let char: string;
let result: string = "";
// Ouput
for (let i = 1; i <= N; i++) {
    char = "Kmin "
    if(i == N) 
        char = char + i 
    else 
        char = char + i + ","
    result = result + char;
}
console.log(result);
