// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N:number = Number(question("Nhap so nguyen duong: "));
// Ouput
for (let i = 1; i <= N; i++) {
    if(N % i == 0 && i % 2 == 0)
        console.log(i);
}
