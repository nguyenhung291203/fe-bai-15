// Cau 1
console.log("Câu 1");

var x = 5;
var y = 3;

console.log("x + y = ", x + y); //8
console.log("x - y = ", x - y); //2
console.log("x * y = ", x * y); //15
console.log("x / y = ", x / y); //1
console.log("x % y = ", x % y); //2

console.log("--x = ", --x); //4
console.log("x-- = ", x--); //4
console.log("x = ", x); //3

console.log("x ** y = ", x ** y); //27


// Câu 2
console.log("\nCâu 2");
// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); //true
console.log('hello' != 'Hello'); //true

// strict equal operator
console.log(2 === 2); //true
console.log(2 === '2'); //false

// strict not equal operator
console.log(2 !== '2'); //true
console.log(2 !== 2); //false



// Câu 3
console.log("\nCâu 3");
// logical AND
console.log(true && true); //true
console.log(true && false); //false

// logical OR
console.log(true || false); //true

// logical NOT
console.log(!true); //false;


// Câu 4
console.log("\nCâu 4");
console.log("hello" + "world"); //helloworld

var a = "JavaScript";

a += " tutorial";
console.log(a); //JavaScript tutorial

// Câu 5
console.log("\nCâu 5");
var value1 = "one";
var value2 = "two";
console.log("value1 = ", value1);
console.log("value2 = ", value2);
var temp = value1;
value1 = value2;
value2 = temp;
console.log("value1 = ", value1);
console.log("value2 = ", value2);

// Câu 6
console.log("\nCâu 6");

function tinhDienTichPhanDo(r) {
    var dienTichHinhVuongTo = (2 * r) ** 2;
    var dienTichHinhVuongNho = (r ** 2) * 2;

    return (dienTichHinhVuongTo - dienTichHinhVuongNho);
};

console.log(tinhDienTichPhanDo(5));
console.log(tinhDienTichPhanDo(6));
console.log(tinhDienTichPhanDo(7));


// Câu 7
console.log("\nCâu 7");

function kiemTra(string) {
    var reverseString = string.split("").reverse().join("");
    return (string === reverseString);
};

console.log(kiemTra("rotavator"));
console.log(kiemTra("Hello"));


// Câu 8
console.log("\nCâu 8");
console.log(typeof "Le Van A"); //string
console.log(typeof 5000); //number
console.log(typeof 5000.99); //number
console.log(typeof [10, 15, 17]); //obj
console.log(typeof {
    name: "Le Van A",
    age: 18,
    country: "Viet Nam"
}); //obj
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //obj

// Câu 9
console.log("\nCâu 9");

var img = "img.png";
var title = "5/5";
var desc = "Thông báo";
var url = "index.html";

var string = `
    <div class="article">
        <a href="${url}">
        <div class="inner-image">
            <img src="${img}" />
        </div>
        <div class="inner-content">
            <h2 class="inner-title">${title}</h2>
            <p class="inner-desc">${desc}</p>
        </div>
        </a>
    </div>
`;

console.log(string);

// Câu 10
console.log("\nCâu 10");
var a = "100";
var b = 20;
var c = true;

console.log(+a + b + c);

// Câu 11
console.log("\nCâu 11");

var a = 10;

a = a + 20;
console.log(a); //30

a = a + 70;
console.log(a); //100

a += 100;
console.log(a); //200

a -= 50;
console.log(a); //150

a /= 50;
console.log(a); //3

// Câu 11
console.log("\nCâu 11");

var a = 10;
var b = "20";
var c = 80;

var test1 = ++a + +b++ + +c++ - +a++;
// 11 + 20 + 80 - 11
console.log(test1); //100
console.log(a, b, c); // 12, 21, 81
console.log("------------");



var test2 = ++a + -b + +c++ - -a++ + +a;
console.log(test2); //74
console.log(a, b, c); // 14, 21, 82
console.log("------------");


var test3 = --c + +b + --a * +b++ - +b * a + --a - +true;
//          81  + 21 + 13*21      - 22*13 + 12 - 1
console.log(test3);// 100
console.log(a, b, c);// 12, 22, 81
console.log("------------");

// Câu 13
console.log("\nCâu 13");

console.log(Math.round(99.2)); // 99

console.log(Math.round(99.5)); // 100

console.log(Math.ceil(99.2)); // 100

console.log(Math.floor(99.9)); // 99

console.log(Math.min(10, 20, 100, -100, 90)); // -100

console.log(Math.max(10, 20, 100, -100, 90)); // 100

console.log(Math.pow(2, 4)); // 16

console.log(Math.random());

console.log(Math.trunc(99.5)); // 99


// Câu 14
console.log("\nCâu 14");
var theName = "  28Tech  ";

console.log(theName); //  28Tech  
console.log(theName[1]); // 
console.log(theName[5]); // e

console.log(theName.charAt(1));// 
console.log(theName.charAt(5));//'e'

console.log(theName.length); // 10

console.log(theName.trim());//28Tech

console.log(theName.toUpperCase());//28TECH
console.log(theName.toLowerCase());//28tech

console.log(theName.trim().charAt(5).toUpperCase());//H


// Câu 15
console.log("\nCâu 15");

var a = "Daca.vn - Professional Web Design Services.";

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 24));
console.log(a.indexOf("vn"));

console.log(a.lastIndexOf("Design"));

console.log(a.slice(10, 22));
console.log(a.slice(-16, -10));

console.log(a.split("", 10));


// Câu 16
console.log("\nCâu 16");
console.log(10 == "10");// true
console.log(-100 == "-100");//true
console.log(10 != "10");//false

console.log(10 === "10");//false
console.log(10 !== "10");//true
console.log(10 !== 10);//false

console.log(10 > 20);//false
console.log(10 > 10);//false
console.log(10 >= 10);//true

console.log(10 < 20);//true
console.log(10 < 10);//false
console.log(10 <= 10);//true

console.log(typeof "Daca.vn" === typeof "Nam Dang");// true


// Câu 17
console.log("\nCâu 17");

console.log(true); // true

console.log(!true); // false

console.log(!(10 == "10")); // false

console.log((10 == "10") && (10 > 8) && (10 > 50)); // false

console.log((10 == "10") || (10 > 80) || (10 > 50)); // true


// Câu 18
console.log("\nCâu 18");
var myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.unshift("Vu Van E", "Nguyen Van F");
console.log(myFriends); 

var myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.push("Vu Van E", "Nguyen Van F");
console.log(myFriends);


var myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.shift();
console.log(myFriends);

var myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.pop();
console.log(myFriends);