// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let N:number = Number(question("Nhap so nguyen duong: "));
let dem:number = 0 ;
// Ouput
for (let i = 1; i <= N; i++) {
    if(N % i == 0)
        dem++;
}
console.log(dem);
