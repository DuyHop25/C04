// Khai bao thu vien
import {question} from 'readline-sync';
// Input
let w:number = Number(question("Nhap w: "));
let h:number = Number(question("Nhap h: "));
let d:string = "";
// Ouput
for (let i = 1; i <= h; i++) {
    d = "";
    for (let k = 1; k <= w; k++){
        if(i > 1 && i < h ){
            if(k == 1 || k == w)
                d = d + "* ";
            else
                d = d + "  ";
        }
        else
            d = d + "* ";
    }
    console.log(d);
}

