// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N:number = Number(question("Nhap so nguyen duong: "));
let sum:number = 0;
let result: string ;
// Ouput
for (let i = 1; i < N; i++) {
    if(N % i == 0)
        sum+=i;
}
if (sum == N)
    result = "Yes";
else
    result = "No";
console.log(result);
