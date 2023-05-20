//cách khai báo biến ví dụ: var tên biến = ;
//var fullName = "Võ Mạnh Huỳnh";
//var age = 26; // khai báo tuổi
// gọi hàm thông báo
/*
alert(fullName);
alert(age);
*/
/*
console.log(fullName)  //in ra dong thong bao cho trinh duyet tai cua so console
confirm("Xác nhận")//
prompt("nhập vào tuổi")
setTimeout(function() {  //cho doan code chay  trong mot khoang thoi gian 
    alert("thông báo gì dố")
}, 3000)
setInterval(function(){  // cho doan code chay trong mot khoang thoi gian vaf chay lieen tuc
    console.log("xin châo các bạn gì đố ơi" + Math.random())
}, 1500)
*/
/*
var a = 1.5 + 2// a=3.5
a++ // a tang thêm một giá trị. a ++ là hậu tố
--a // là tiền tố

++b// là tiền tố ,việc 1: +1 cho a , a=a+ 1 => a=7, việc 2: trả về a sau khi được +1
b-- // là hậu tố , việc 1 : copy biến a là a = băng bao nhiêu, việc 2: trừ 1 của a, a= a-1 =>5, việc 3: trả về giá trị của a copy
console.log(a)
tuoi = prompt("NHập vào tuổi:")
if (tuoi <= 18){
    alert("bạn thật trẻ trâu")
}
else{
    alert("trưởng thành vải")
}

*/
/*
var number = 6
var output = number++ + --number;// 6 +6
// var output = ++number *2 - number--*2 // 7*2 -7*2
console.log(output)
*/
/*
x += y => x= x + y
x -= y => x= x - y 
x *= y => x = x*y
x /= y => x = x/y
x **= y => x = x **y
*/
/*
 kiểu dữ liệu boolean
 chỉ có hai giá trị true và false
 
*/
/* câu lệnh điều kiện if else và else if
tổng quát:
if (){

}
else{

}
.
-- toán tử logic
1. && - And
2. || - or
3. ! - not
*/
/*
 các kiểu dữ liệu trong js
 1. Dữ liệu nguyên thủy
 - Number 
 - String
 - Boolean
 - Underfined
 - Null
 - Symbol
 2. dữ liệu phức tạp
 - function
 - object
 Ví dụ:
 1.1. Number
 var a = 1;
 1.2 String
 var hoten = "vo manh huynh"
 var nht = "huynh \" manh vo "
 1.3 Boolean
 lưu giá trị đúng hay sai
 var issucces = true;
 1.4 Underfined
 var age 
 không sử dụng toán tử gán
 1.5 Null
 var isNull = null;
 không có gì
 1.6 Symbol
 var id = Symbol();


 2.1 function 
 var myfunction = function(){
     alert("hi. xin chào các bạn")
 }
 myFunction();
 định nghĩa biến function thì code bên không chạy được và chỉ chạy được khi gọi tới function này
 2.2 Object
 var myObject = {
     name: "Mạnh Huỳnh",
     age: 19,
     adress: "An Giang",
     myFuction: function() {

     }

 };
 console.log("myOject", myOject)
 2.2.. Array
 var myArray =[
     "js",
     "php",
     "ruby"

 ];
 cách kiễm tra dữ liệu
 var df =5
 console.log(typeof df)

*/
/* toán tử so sánh
- === // so ánh giá trị và kiểu dữ liệu của biến
- !==
*/

/* 
6 giá trị của biểu thức này thì câu điều kiện trả về false
- 0
- ''
- null
- underfined
- NaN
- false
còn khác với 6 giá trị trên trả về true
 
var result = 'A' || 'B' || 'C' || 'D' ;// biến result được gán cho A(giá trị đầu tiên) vì khác với giá trị 6 giá trị
var result = 'A' && 'B' && 'C' && 'D' ;// biến result được gán cho D(giá trị cuối cùng) vì khác với 6 giá trị 
*/


/*   LÀM VIỆC VỚI CHUỖI
1. cách tạo chuỗi
var fullName = "Manh huynh";
var fullName = new String("Manh huynh");
2. Một số trường sử dụng backslash(\)  
var fullName = "mạnh huỳnh là \" cai gi đó \"   ngày sinh: 16\\11\\2002"

tính độ dày cảu chuỗi
console.log(fullName.length);

3. tìm ký tự trong chuỗi
var myString = "hoc JS tai F8!"
console.log(myString.indexOf('JS',6))// trả ra giá trị 4 còn nếu giá trị là - 1 là không tìm thấy còn số 6: là vị trí bắt đầu tìm khiếm ký tự "JS"
console.log(myString.lastIndexOf('JS'))// tìm kiếm vị trí cuối cùng của kí tự "JS"
console.log(myString.search("JS"))// không có tham số thứ như của indexOf
4. cắt chuỗi

var myString = "hoc JS tai F8!" 
console.log(myString.slice(4, 6))// có hai tham số vị trí bắt đầu cắt và vị trí kết thúc cắt
console.log(myString.slice(4)) // cắt từ vị trí 4 đến hết

5. Replace thay thế kí tự của chuỗi
var myString = "hoc JS tai F8!"
console.log(myString.replace('JS', 'JavaScript'))// kết quả là: hoc JavaScript tai F8!
console.log(myString.replace(/JS/g, 'javascript'))// tất cả ký tự 'JS' đều đổi thành javascript

6. chuyển đổi chuổi thành chữ hoa

console.log(myString.toUpperCase())

7. chuyển đổi chuổi thành chữ thường

console.log(myString.toLowerCase())
8. trim --- loại bỏ khoảng trắng ở hai đầu

console.log(myString.trim())

9. Split cắt chuỗi thành một array
dựa vào điểm chung để cắt thành array
var languages = 'JAva, PHP, Ruby';
console.log(langueges.split(', ')) dấu phẩy và dấu cách là điểm chung 
console.log(langueges.split(' ')) nếu biến là chuỗi không dấu cachs, phẩy , nháy
10. get a character by index-- lấy được ký tự từ chuỗi cho trước
const myString2 = "Manh Huynh";
console.log(myString2.charAt(0))// kết quả: M
*/

/*              LÀM VIỆC VỚI NỤMBER

var result = 20 / 'ABC';
console.log(result) // kết quả: NaN (NaN là đại diện cho số không hợp lệ)

console.log(isNaN(result)) // kết quả: là true -- đây là cách kiễm tra có phải là số NaN không

** cách chuyển number thành string
var age = 20;
var pi = 3.24
console.log(age.toString())
hoặc  var myString = age.toString();
*** làm tròn số thập phân
console.log(pi.toFixed()) // kết quả: 3 làm tròn 0.5 ví dụ : 3.49 là 3 còn 3.5 thì thành 4
*/


/*         LAM VIỆC VỚI MẢNG
1. cách tạo mảng
var languages = [
    'java',
    'python',
    'html',
    'css',
    null,
    undefined,
    function(){

    },
    123

];



console.log(Array.isArray(languages));// kiem tra mangr. ket qua laf true 
2. truy suat mang

console.log(languages.length)// kiem tra do dai mang keets qua ra : 8

console.log(languages[1]) // laays phaanf tu mangr ket qua: python


3. chuyen sang string

var languages = [
    'java',
    'python',
    'html',
    'css',
    'c++',
];
console.log(languages.toString()) // sang string ket qua la: java,python,html,css,c++
console.log(languages.join('///')) // ket qua la:java///python///html///css///c++

//4. pop -- xoa di phần tử cuối mảng và trả về phần tử đã xóa
console.log(languages.pop()) // kêt qua là : c++
console.log(languages)   // ket quả là:  ['java', 'python', 'html', 'css']
// 5. push -- thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về số lượng phần tử của mạng được thêm vào
console.log(languages.push("ruby"))
console.log(languages.push("php","javascript"))
console.log(languages) 
// 6.shift -- xóa đi phần tử đầu mảng và trả về phần tử đã xóa
console.log(languages.shift()) // kết quả là: java
// 7.Unshift -- thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về số lượng phần tử của mạng được thêm vào
console.log(languages.unshift("c#", "arduino"))
console.log(languages) 
// 8.Splicing --- xóa, cắt, chèn phần tử vào mảng
languages.splice(1, 1) // 1: vị trí bắt đầu xóa , 1: xóa một phần tử
console.log(languages)
languages.splice(1, 0, "ESP32") // 0: không xóa phần tử nào cả, "ESP32": được thêm vào mảng ở vị trí 1 và được thêm nhiều phần tử được
console.log(languages)
//9. concat -- nối được array
var languages2 = [
    'Huynh',
    '19',
    'ĐHSG',
    'ĐTVT'
]
console.log(languages.concat(languages2)) // nối mảng
*/



/* Làm việc vói hàm
- là khối mã
- làm 1 việc cụ thể 
- không thực thi khi định nghĩa
- sẽ thực thi khi được gọi 
- có thể nhận tham số
- có thể trả về một giá trị
1. khai báo hàm

function showDialog() {
    // code
    alert(" H lo xxin chào mội người!")

}
showDialog(); // cách gọi hàm

2. tham số

function writerlog(messages){
    console.log(messages)
}
thongbao = " đây là một dòng thông báo quan trọng"
writerlog(thongbao)
// truyền vào nhiều biến
function writerlog(ten, tuoi,diachi){
    console.log(ten, tuoi,diachi)
}
names = "huynh";
age = 19;
address = "An Giang";
writerlog(names, age, address)
// Argument ---  kiểu dữ liệu là array
function writerlog() { // ở đây ko cần ghi hai biến nhận được cho hàm
    console.log(arguments);// truyền tham không cần ghi


}
writerlog("vo manh huynh","16/11/2002");

// sử dụng vòng for

function writer() {
    var myString = "";
    for (var param of arguments) {
        myString += `${param} - `
        //   myString += param + "--"; 
    }
    console.log(myString)
}
writer("python","java","arduino");
3. return trong hàm


function cong(a, b) {
    return a + b; // trả giá trị về


}
var result = cong(2, 5);
console.log(result);
*/

////////////////////////////// lưu ý
//khi định nghĩa hai function giống nhau thì function sau ghi đè fuction trước. kết quả sẻ hiện ra của function sau
// khai báo biến trong hàm: biến trong hàmf chỉ được sử dụng trong hàm và bên ngoài không sự dụng được.
// định nghĩa hàm trong hàm: được 

//4. các loại function 
/* 


function showMessages() { // declaration function

}

var showMessages2 = function() { // expression function -- hàm không đặt tên

}

setTimeout(function(){ // đây cũng là expression function

});

var Myobject = {
    myFunction: function(){ // đây cũng là expression function

    }
};
*/
/*                    LÀM VIỆC VỚI LỚP 
1. khai bao object

var myplay = "hobies"; // cách tạo tên biến cho lớp
var myInfo = {
    name: "Manh HUynh",
    age: 19,
    address: "An giang",
    [myplay]: "liên quân",// từ tên biến ở ngoài
    getname: function() {
        return this.name;// this là myInfo
    }
};
myInfo.email = "vomanhhuynh75@gmail.com" // thêm cặp tên giá trị của biến mới vào lớp,
myInfo["my-university"] = " Dại học Sài Gòn"; // cách thêm cặp biến cho lớp nếu tên biến có dấu trừ

var mykey = "address";


console.log(myInfo[mykey]); // cách lấy giá trị của biến từ mykey đến address trong myInfo-- lưu ý không truyền dạng chuỗi

console.log(myInfo);

delete myInfo.hobies; // các xóa tên biến trông lớp

console.log(myInfo.getname());
2. xây dựng đối tượng-- object constructor




3.object prototype - đói tượng nguyên mẫu - khuông mẫu 




function User(firstname, lastname, avatar) { // đây là mô tả thiết kês đôi tượng 
    this.firstname = firstname;
    this.lastname = lastname;
    this.avatar = avatar;

    this.getname = function() {
        return `${this.firstname} ${this.lastname} ${this.avatar}`
    }
}
User.prototype.classname = "DVC1201"; // khai báo thuộc tính thêm cho mô tả thiết kế chung của đối tượng-- thêm thuộc tính bên ngoài hàm tạo
User.prototype.getclassname = function() {// kai báo thêm phương thức
    return this.classname;
}
var user1 = new User("mạnh","huỳnh","avatar");
var user2 = new User("MH","16/11","avatar");
user1.title = "chấp hết!📢🧐❤️☺️🥰🤩✨👉😁😂🤣😃😎😋😊"; // thêm thuộc tính riêng cho author-- chỉ có đối tượng này ko ảnh hưởng đến đố tượng khác 
user2.comment = "lưu ý cái gì đó!❤️☺️☺️❤️💖👉😂😓😎🧐📢"; 

console.log(user1.getclassname());
console.log(user2);
*/

/*                               Đối tượng date


var date = new Date();
console.log(date.getDate(), date.getHours(), date.getMinutes(), date.getFullYear())
console.log(date)

*/

/*                      CÂU LỆNH RẼ NHÁNH -IF ELSE
*/
/*                                  toán tử 3 ngôi

var course = {
    name : "javascript",
    coin: 0
}
var result = course.coin > 0 ? `${course.coin} Coin` : "Miễn phí";

// vế đầu tiên  là điều kiện , dấu hỏi chấm => nếu điều kiện đúng thì gán giá trị cho vế thứ hai , không đúng thì gán cho " miễn phí"

console.log(result);
*/

/*                           LÀM VIỆC VỚI VÒNG LẶP FOR

LÝ THUYẾT:
- FOR -lặp với điều kiện đúng
-for/in - lặp qua key của đói tượng 
-for/of- lặp qua value của đối tượng
- while - lặp khi điều kiện đúng
do / while - lặp ít nhất một lần, sau đó lặp khi điều kiện đúng
1. vòng lặp for
*/
// có ba biểu thức cách nhau bằng dấu chấm phẩy
/*
for(var i = 1; i <= 100 ; i++ ) {
    console.log(i);
}

// hoặc 

var i =1;
for(;i <= 20;i++){
    console.log("hệ số ",i)
}


var myArray = [
    "java",
    "python",
    "javascript",
    "css",
    "html",
    "c++",
    "arduino"
];

var number = myArray.length
for(var i = 0 ; i < number; i++){
    console.log(myArray[i])
}
console.log(myArray.length)


2. vòng lặp for/in

var myInfo ={ // với object
     name: "Manh Huynh",
     age: 19,
     address: "An Giang"
 };
for (var key in myInfo) {
    // code
    console.log(key); // kết quả là name, age, address- giá trị của key lúc này là chuỗi
    console.log(myInfo[key]) // lấy ra giá trị của biến 
}


var languages = [ // với array
    "java",
    "python",
    "javascript",
    "css",
    "html",
    "c++",
    "arduino"
];

for (var key in languages) {
    console.log(key);
    console.log(languages[key]);
}

var string = "javascript"; // với chuỗi

for(var key in string) {
    console.log(string[key]);
}








3. Vòng lặp for/of

var languages = [
    "java",
    "python",
    "javascript",
    "css",
    "html",
    "c++",
    "arduino"
];

for ( var value of languages) {
    console.log(value); // in ra giá trị của biến
}
// với chuỗi thì cũng giông với array
// nhưng với object thì lại khác cần phải 

var myintroduction ={
    fullname: "Vo Manh Huynh",
    age: 19,
    nowaddress: "Ho Chi Minh City"
}
//console.log(Object.keys(myintroduction))
for( var value of Object.keys(myintroduction)) {
    console.log(value) // in ra tên biến trong object
}

for(var value of Object.values(myintroduction)){
    console.log(value) // in ra giá trị của tên biến tron object
}
*/


/*                                        LÀM VIỆC VỚI WHILE

var i = 0;
var myarray = [
     "python",
     "java",
     "c"

 ];

while (i< 24) { // vòng lặp while
    i++;
    console.log(i);

}

do { // kiễm tra điều kiện từ lần lặp thứ hai
    i++; // vòng lặp chạy một lần trước khi kiểm tra
    console.log("thứ tự", i);

} while (i < 40)

/*


/*                                VÒNG LẶP LỒNG NHAU


 var myarray = [
     [1, 2],
     [2, 3],
     [5, 6],
     [8, 9]
 ];

 for (var i =0; i< myarray.length; i++) {
     for (var j =0; j< myarray[i].length; j++){
         console.log(myarray[i][j]);
     }
 }
*/

/*                                     LAM Viec voi MANG phan 2*/
/*
var courses =[ //khai baos mang
    {
        id: 1,
        name: "Javascript",
        coin: 250
    },
    {
        id: 2,
        name: "HTML, CSS",
        coin: 0
    },
    {
        id: 3,
        name:"RUBY",
        coin: 0
    },
    {
        id: 4,
        name: "PHP",
        coin: 400
    },
    {
        id: 5,
        name: "REACTJS",
        coin: 500
    },
    {
        id: 6,
        name:"RUBY",
        coin: 500
    },
    {
        id: 8,
        name:"RUBY",
        coin: 1000,
        vip: "pro"
    }
];

console.log(courses[3]["id"]); // output: 4
// forEach()--dung de duyet qua tung ohan tu cua mang
courses.forEach(function(course) {
    console.log(course);
     output:
    {id: 1, name: 'Javascript', coin: 250}
    {id: 2, name: 'HTML, CSS', coin: 0}
    {id: 3, name: 'RUBY', coin: 0}
    {id: 4, name: 'PHP', coin: 400}
    {id: 5, name: 'REACTJS', coin: 500}
});

//every() -- kiem tra tat ca phan tu thoa man dieu kien nao do
var isfree = courses.every(function(course, index) {
    return course.coin === 0; // kiem tra tat ca coin trong cac phan tu cua ca mang co bang khong 
});

console.log(isfree); // output: false -- vi co mot so khoa hoc khoong mien phi
//some -- kiem tra phan tu cua mang 
var isfree1 = courses.some(function(course, index) {
    return course.coin === 0; // kiem tra tat ca coin trong cac phan tu cua  mang co bang khong
    // neu co mot phan tu thoa man dieu kien thif tra ve true 
});

console.log(isfree1)
//fine -- tim kiem phan tu -- khi dung thif tra ve mot phan tu

var isfree2 = courses.find(function(course, index) {
    return course.name === "RUBY"; // kiem tra tat ca coin trong cac phan tu cua ca mang co bang khong 
});

console.log(isfree2); //output: {id: 3, name: 'RUBY', coin: 0}
// con neu khong cos thi output: undefined


//filter - tim kiem phan tu neu dung thif tra ve tat ca cac phan tu dung
var isfree3 = courses.filter(function(course, index) {
    return course.name === "RUBY"; // kiem tra tat ca coin trong cac phan tu cua ca mang co bang khong 
});
console.log(isfree3)


//map --- phuong thuc, vong lap qua tung phan tu trong mang, thuc thi su thay doi cac phan tu trong mang, them thuoc tinh cho mang

var newcourses = courses.map(function(course, index) { // vong lap qua tung phan tu
  // return course; // return se tra ve gia tri cho bien 
  return {
      id: "SST: " + course.id,
      name: "Khoa hoc lap trinh: " + course.name,
      coin: `Hoc phi: ${course.coin} 000 dong`,
      starttime: "30/04/2022",
      index: index

  }

});

var newlistname = courses.map(function(course, index){
    //tao ra mang moi tu mang cu va chi chua toan thuoc tinh name
    return {
        name: "Ten Khoa Hoc:" + course.name,
        index: index
    }

})

console.log(newcourses);

console.log(newlistname);
// reduce-- la phuong thuc dung de nhan ve mo gia tri duy nhat tren cac phan tu cua mang
var i =0;
/*
function coinHandler(accumlator, currentVAlue, currentIndex, originArray) {
    i++;
    console.table({
        'luot chay: ': i,
        'Bien tichs tru: ': accumlator
    });

};

var totalcoin = courses.reduce(coinHandler, 0);


var tatalcoin = courses.reduce(function(total, course){
    return total + course.coin;

}, 0);// intial alue gia tri khong bat buoc 
// 0: la gia trij khoi tao
console.log(tatalcoin);

// cach lam phang mang 
var depthArray = [1, 2, [3, 4], 5, 6,[7, 8, 9, 10]];
var flat = depthArray.reduce(function(flatoutput, depthitem){ 
    return flatoutput.concat(depthitem);
// concat la noi mang
}, []);
console.log(flat);





var topics =[
    {
        topic: "fontend",
        courses: [
            {
                id: 1,
                title: "html, css"
            },
            {
                id: 2,
                title: "javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses:[
            {
                id: 1,
                title: "php"
            },
            {
                id: 2,
                title: "nodejs"
            }
           
        ]
    },
];


var newcourses = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses);

}, []);
console.log(newcourses);
console.log(topics);

var html = newcourses.map(function(course){
    return`
    <div>
    <h2> ${course.title}</h2>
    <p>${course.id}<\p>`;
});

console.log(html.join(""));
*/

/*                         phuong thuc includes ton tai trong array vaf string


var title = "resonsive web design";
// include de tim tu hoac cum tu trong chuoi

console.log(title.includes("web", 3)); // output: true
// doi so thu hai la vi tri can tim, bat dau tim kiem

var courses = ['javascript', 'php', 'dart'];

console.log(courses.includes('ruby',0)); // output: false
*/

/*                                       lam viec voi math 

console.log(Math.PI); // outout: gia trij cua pi
console.log(Math.round(1.5));// lam tron so
console.log(Math.abs); // gia tri tuyet doi 
console.log(Math.ceil(4.000004));// lam tron tren , output:5
console.log(Math.floor);//lam tro duoi 


//console.log(Math.random); // tra ve mot so bat ki nho hon mot

var random = Math.floor(Math.random() * 5);

var bonus = [
    '10 coin', 
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
    '100 coin'
];

console.log(bonus[random]);
// vi du radam phan thuong
if(random  < 2) { // radam phan tram de tao 
    console.log("cuong hoa thanh coong chuc mung ban!");
}

timsonho = Math.min(-100, -45, 456, -345, -1234, -786);
timsolonnhat = Math.max(1, 2, 4, 6, 78, 89,56,12, 45, 67,45);

console.log("gia tri lon nhat " + timsolonnhat + "   GIa tri nho nhat " + timsonho);
*/







/*                           hoc ve  khai niem callback 
1 d.n 

// laf hàm (function) được truyền qua đối số
// khi goi hàm khác
- là hàm
- được truyền qua đói số
- được gọi lại (trong hàm nhận đối số)


function myFuction(param) {
    console.log(typeof param);
    if(typeof param === 'function') { // chi thuc thi khi truyen vao la mot function
        param("mot minh tao chap het");
    }
    else {
        console.log('dong lenh kho the thuc thi duoc ?');
    }
};

function myCallback(value) {
    console.log('Value: ', value)

}
myFuction(myCallback); 

// output: 
// function
// Value:  mot minh tao chap het

//myFuction('hoc lap trinh tai f8');

var course = [
    'Javascript',
    'ruby',
    'php'
];
course.map(function(course){
    console.log(course); // in ra tung phan tu cua mang
    console.log(typeof course); // kieu du lieu la string

});
// map la mot function 
console.log(course); // in ra mang




































//                          forEach, find, filter, some, every, reduce

var course = [
    'Javascript',
    'PHP'
];

course.length = 10;

console.log(course);

course.push('python', 'java'); // theem hai phan tu vao mang
/* output:
(10) ['Javascript', 'PHP', ×8 empty]
0: "Javascript"
1: "PHP"
length: 10
[[Prototype]]: Array(0)

--- empty: khong phai la kieu du lieu ma la duoc hieu khong co gi o day ca
-- length khong phai luc nao cung quy dinh tong phan tu trong mang do
neu dung vong for thi nen dung for in

1. phuong thuc forEach
* cachs thucws hoatj doongj
* nhânj hai đối truyền vào */



//         tao ra foreach 2
// hoc lai bai Object prototype
// foreach2 la dinh nghia phuong thuc cho Array


/*
Array.prototype.forEach2 = function(callback) {
    for(var index in this) {

        if(this.hasOwnProperty(index)) {
            //console.log("index ", index);
            callback(this[index], index, this);
        }
// this.hasOwnProperty(index) co tac dung kiêm tra phần tử nếu trong phương thucứ thì cho false còn không có thì true
        

    }
}
var courses = [
    'JAvascript',
    'PHP',
    'Ruby'
];

console.log(courses);

courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
});
// forEach khong tra lai gia phan tu
output: 
index  0
main.js:970 index  1
main.js:970 index  2
main.js:970 index  forEach2

// goc giai thich:
// neeu ko cau lenh hasOwnProperty
vòng for in không chỉ lượt qua các phần tử trong mảng mà cong duyệt qua các element nămf trong prototype foreach2 được định nghĩa nên vòng for được duyệt qua.
*/



/* Tao ra filter 2

// chức năng cảu filter là lọc các phần tử trong mảng thỏa điều kiện tra ve mang moi 
// khong lap qua array trong cung giong nhu eachfor
var courses = [
    {
        name: 'Javascript',
        coin: 500
    },
    {
        name: 'python',
        coin: 600
    },
    {
        name: 'Javascript',
        coin: 700
    },
    {
        name: 'Javascript',
        coin: 400
    },
    {
        name: 'Javascript',
        coin: 300
    }
];*/
// cachs suw dung filter
/*
var filterCourses = courses.filter(function(course, index, array) {
    return course.coin > 500 || course.coin == 500;

});

console.log(filterCourses);
 output:
0: {name: 'Javascript', coin: 500}
1: {name: 'python', coin: 600}
2: {name: 'Javascript', coin: 700}
length: 3
*/

// --- bat dau tao filter moi
/*
Array.prototype.filter2 = function(callback) {

    // vi tao ra mang moi nen can tao ra mang trong truocws
    var output = [];
    for (var index in this) // khong lap qua mang trong
    {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result){ // kiêm tra điều kiện
                output.push(this[index]); // neué thỏa man thì thêm phần tử vào mảng

            }

        }
    }

    return output;
}

var filterCourses = courses.filter2(function(course, index, array) {
    //console.log(course, index, array);
    return course.coin > 500 || course.coin == 500;

});

console.log(filterCourses);
*/

//      tao ra phương thức some
//-- se trả về true hocwj false nếu trong mảng có bất kỳ thỏa mãn điều kiện của bạn

var courses = [
    {
        name: 'Javascript',
        coin: 500,
        isFinish: true,
    },
    {
        name: 'python',
        coin: 600,
        isFinish: true,
    },
    {
        name: 'Javascript',
        coin: 700,
        isFinish: true,
    },
    {
        name: 'Javascript',
        coin: 400,
        isFinish: true,
    },
    {
        name: 'Javascript',
        coin: 300,
        isFinish: true,
    }
];
/*
var result = courses.some(function(course, index, array){
    return course.isFinish === false;

});
console.log(result);
*/

/// cach tao  some
/*
Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
           if( callback(this[index], index, this)) {
            return true;
           };

        }
    }
    return false;
}

var result = courses.some2(function(course, index, array){
    return course.isFinish === false;

});
console.log(result);
*/


//   tim hieu ve every 
// -- tra ve true vaf false  khi cacs phaan tu deu thoa man dieu kien
/*
var result = courses.every(function(course, index, array){
    return course.isFinish;

});
console.log(result);
*/

// ----- cach tao every 2
/*
Array.prototype.every2 = function(callback) {
    var output = true;
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
           var result = callback(this[index], index, this);
           if (!result){
             output = false;
             break;
           }

        }
    }
    return output;
}


var result = courses.every2(function(course, index, array){
    return course.isFinish;

});
console.log(result);
*/

//                                    hoc ve ham de quy
//dinh nghia
/* var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 console.log(array);

 console.log(new Set(array)); // output: a, b, c


// de quy la ham goi lai chinhs no, lap di lap lai
// de quy luon chay mai neen can xac dinh diem dungwf
// co phan xu li logic, phan xu li phai tao ra diem dung 

function deQuy() {
    if(num < 0){ // tao ra logic => diem dung
        // dung
        //... logic cua ban
        return;// function keet thuc khong goi lai ham de quy nua
    }
    deQuy();
}

deQuy();

function countDown(num) {// vis du dem nguoc tuw 10 den 1
    if(num > 0) {
        console.log(num);
        return countDown(num-1);

    }
    return;
}
countDown(10);


function loop(start, end, cb) {
    if(start <= end) {

        cb(start);
        return loop(start + 1, end, cb);
    }




}

var array = ['javascript', 'ruby', 'php'];

loop(0, array.length -1 , function(index) {
    console.log('index: ', index, 'kitu: ', array[index]);
});

/// vi du tinh giai thua 


function giaithua(num) {
    
    if(num > 0) {
        return num * giaithua(num -1);
    }
    return 1;

}

console.log(giaithua(6));
*/


/*                                       GIOI THIEU VE HTML DOM
DOM( Document Object Model) dựa vào quy chuẩn W3c 
Dom có 3 phần:
- element : là thẻ html, phần tử
- attribute: thuocọ tính của thể, ví dụ: class, id, src ,href
- text: nọi dung, đoạn chữ

node:(điểm giao nhau, nốt)
html dom là quy chuẩn w3 đưa ra
*/

// javascript cung cấp các lênh để truy cập vào DOM, dom không phải là javascript
// API(Application programing interface): là một ứng dụng mở ra con đường cho 1 ứng dụng khác nhìn thấy giao tiếp được
// API chỉ tồn tại trên trình duyệt, 
// server: chỉ lưu trữ web, xử lí chứ khôlng có mở web
// browser: html > Dom > web aip : javascript không có dom, chạy trên browser lại có dom, trên browser có web aip(cung cấp dom ở trong đó)



//1. học về element trong dom: laays element trong dom
/*
console.log(document);

document.write('MOT MINH TAO CHAP HET!');// ghi vao phan body// hie thi len web

// element: ID, class, tag(h1, h2, div) --------------------------------------------------


var headingNode = document.getElementById('heading'); // truy cap vao the cos id = heading


console.log(headingNode); // in ra tra the: <h1 id="heading">XIn chao moi nguoi</h1>

console.log({
    element: headingNode
})

var headingNodes = document.getElementsByClassName('headings');// tra ve mang vaf do dai cua mang trong mang là các class có tên là headings muốn truy cập vào thì phải dùng vòng for

console.log(headingNodes);

var heading = document.getElementsByTagName('h1'); // trả về mangr và độ dài của mảng
// truy cập vào tên thẻ vd: h1, div, i, ...
console.log(heading);


// CSS selector-----------------------------------------------


var headCss = document.querySelector('html .box .headingcss'); // di tu the cha vao cung duoc

console.log(headCss); // tra ve the 


var headCSS1 = document.querySelector('.box .headingcss:first-child');
console.log(headCSS1);


var headCSS2 = document.querySelector('.box .headingcss:nth-child(4)');
console.log(headCSS2);
// phương thức querySelector chỉ đưa ra 1 thẻ 
// còn phương thức querySelectorAll thì đưa ra toàn bộ thẻ có cùng tên vào Nodelist
//ví dụ:

var headCSSAll = document.querySelectorAll('.box .headingcss');
console.log(headCSSAll);// trả về Nodelist
console.log(headCSSAll[4]);



//HTML Collection------------------------------------------------------

console.log(document.forms);// tra ve mang chua cac form vaf do dai
// trar ve tat cac cac the mang thuoc tinh form ve duoi dang mang 

console.log(document.forms[3]);// truy caapj vao mang 

console.log(document.forms.testform);

console.log(document.forms['form-2']);


console.log(document.anchors); // trả về tất cả các thẻ a có thuộc tính name

*/
/*

console.log(document.querySelector('.box-1 ul li:first-child'));// laays 1 the li o vi tri dau tien
/*
 output: 
 <li>
  ::marker
  "Javascript 1"
  <\li>


console.log(document.querySelector('.box-1 ul li:nth-child(2)'));// lay 1 the li o vi tri thu hai

/*
 output: 
 <li>
  ::marker
  "PHP 1"
 <\li>


console.log(document.querySelectorAll('.box-2 li')); // laays tat ca the li co trong box -2 => tao ra mang cos te la nodelist
/* 
   NodeList(2) [li, li]
     0: li
     1: li
     length: 2
     [[Prototype]]: NodeList


//vd:

var boxNode = document.querySelector('.box-1');

//- Công việc 1: sử dụng tới 'boxNode';
//...

// - Công việc 2: Sử dụng tới các thẻ li element
// là con của '.box-1'


console.log(boxNode.querySelectorAll('li'));
// cách dùng này là từ biến BoxNode(từ thẻ có tên box-1) để truy cập vaof li
// hoac dung thuoc tinhs getElementsByTagName
console.log(boxNode.getElementsByTagName('li'));

console.log(boxNode.querySelectorAll('p'));
*/


/* Ôn tập về các phương thức lấy ra element

1. getelementById
2. getElementsByClassName
3. getElementsByTagName
4. querySelector
5. QuerySelectorAll

6. HTML collection : gom cac the : img vaf form

7. document.write

- phương thức 1 và 4 thì trả về element, trả về 1 đối tượng ví dụ:
    <div class="box-1">
        <ul>
            <li>Javascript 1</li>
            <li>PHP 1</li>   
        </ul>

        <p>Test paragraph</p>

    </div>

-  phải phân biệt: element, nodelist, HTML collection, node attribute, nodeelement, nodetext, 



var headings = document.querySelectorAll('.heading');
tong = '';
for(var i = 0; i < headings.length; i ++) {
    console.log('so heading', i + 1,': ',headings[i]);
}
console.log(typeof headings);


// 2----------. học về thuoccj tính attribute trong dom
//k.n: attribute laf thuoc tinh the mo(element) trong dom 
// vi du: href, id, class, name, content .....
// <h1 id="heading" class="heading" title="heading"> text heading 1</h1>
// phân biệt: h1: element node ; id, class, title : attribute node ; text heading 1: text node
// cách sử dụng 

var headingElement = document.querySelector('h1');
console.log(headingElement);

//headingElement.title = 'heading';
//headingElement.id ='heading';
//headingElement.className = 'heading';// de them class vao the element
// them thuoc tinh vao element

var youtubeElement = document.querySelector('a');
console.log(youtubeElement);

// youtubeElement.href = 'https://www.youtube.com/';

//headingElement.setAttribute('title', 'heading_1'); // cai dau tien là thêm tên thuộc tính ; còn cái còn lại là gán tên thuộc tính
// setAttribute: them thuoc tinh vao element
// conf getAttribute laf lay ra gia tri thuoc tinh

headingElement.title = 'Title test';

headingElement.setAttribute('data', 'test data'); // cái này có thể thêm thuộc tính hợp lệ hoặc không hợp lệ đối với element đó.


console.log(headingElement.getAttribute('class')); // lấy ra giá trị của thuộc tính hợp lệ hoặc không hợp lệ
console.log(headingElement.getAttribute('title')); // lay ra teen dduoc gan vao thuooc tinh
console.log(headingElement.getAttribute('data'));

alert(headingElement.title); // nếu được thêm đúng thuộc tính của thẻ thì ta có thể dùng cách này để lấy tên thuộc tính được gán vào 
// ví dụ: biến headingElement lấy ra thẻ h1 và phương thức getAttribute gán vào thẻ h1 thuộc tính 'title' ( thuộc tính này có trong thẻ h1)
// thì dùng phương headingElement.title để lấy giá trị của title trong h1 còn nếu thuộc tính gán không có trong h1 thì không ther dung phương thức này kết quả trả lại là undefind

*/

// 3.---- học về text node gồm có hai phương thức: innerText và textContent
//** Lưu ý: muốn tương tác với attribute và text ta cần phải lấy ra element(di từ document) của cả hai để sử dụng 

//var headingElement = document.querySelector('.heading');

//console.log(headingElement.innerText); // lấy ra nội dung của text nam trong element 
// hoac dung thuoc tinhs(textContent) nay der laay noi dung cuar text
//console.log(headingElement.textContent); 
// hai thuộc tính này (innerText và textContent) có tồn tại trong element node nên có gọi nó ra được 


//--- cachs thay đổi nôi dung cua text

//headingElement.innerText = 'new heading text number one'; // thay đổi noi dung trong text
// headingElement là 1 đối tượng
// geter : là lấy ra ví dụ: innerText là 1 geter( lấy nội dung ra);
// seter: là thêm vào, đặt vào, thay đổi nôi dung
//

// phân biệt hai thuộc tính: innerText và textContent
//-- innerText: nội dung lấy được giống với nội dung mà nhìn thấy trên trình duyệt
// in nertext laays noi dung bo cac the con ben trong
//-- textContent: nội dung lấy được là nội dung thật của nó nằm trong dom
// ví dụ:
/*
  <h1 class="heading">
    <span>New Heading</span>
    <span>Number One</span>
  </h1>

console.log(headingElement.innerText);// output: New Heading Number One 
console.log(headingElement.textContent); 
// output: New Heading
//         Number One
 // ở ví dụ trên thì thuộc tính innerText : thì lấy nội dung có trong h1 bỏ qua các thể span và bỏ khoảng cách không xuống dòng
 // còn thuộc tính textContent thì lấy ra khoảng cách tồn tại tron element và kể cả là css hoặc code luôn
 // ví dụ:
  // heading
  // text 
  //
  //
  // .box {
  //  width: 100px;
  //  height: 100px;
 // }
 //
 // alert('text');

// còn thuộc tính innerText không lấy ra được vì .box và alert không hiện lên trình duyệt

// thuộc tính innerText chỉ tồn tại ở element node không tồn tại trong text node muốn sử dụng thuộc tính này thì phải lấy ra element
// còn thuộc tính textContent tồn tại trên cả hai element và text node

// hai thuộc tính chỉ thay đỏi nôi dung text khoong thể thêm element được

// nếu thêm nôi dung bằng hai thuộc tính này bằng 1 element
// ví dụ:

headingElement.innerText = '<i> New Heading <\i>';
// thì trình duyyeetj lại hiện thì: <i> New Heading <\i>
// nôi dung nayf không được hiểu là element và chỉ đây chỉ đoạn text thôi

headingElement.innerText =`

new heading


`;
// dấu xuống trong đoạn code sẽ được thay bằng thẻ <br> trong html để tạo ra dấu xuống dòng

//--- CÁCH THÊM MỘT ELEMENT VÀO MỘT ELEMENT ĐANG CÓ SẴN

// VÍ DỤ

// <div class='box'><\div>
// thêm thẻ h1 vào thẻ div bang hai thuoc tinh: innerHTML vaf OuterHTML
// laf hai thuoc tinh cua element node


var boxElement = document.querySelector('.box');


console.log(boxElement);

//boxElement.innerHTML = '<h1>new heading<\h1>';
// cos theer lay duoc noi dung cua h1 khi duoc them vao
// vuawf theem dc element node vaf text node vaf atribute node;
// them duoc tat ca cac node
boxElement.innerHTML = '<h1 class="heading_innerHTML" title="heading"> New heading number one<\h1>'

console.log(boxElement.innerHTML);
console.log(typeof boxElement.innerHTML); // laay ra element vua duoc them vaof hoac noi dung ben trong element lon
// vaf day ket qua tra laij la dang string

console.log(boxElement.querySelector('h1').className);
console.log(boxElement.querySelector('h1').title);

// innerHTML khi thêm vào sẽ ghi đè lên element trong trong thẻ đó
// ví dụ: trong thẻ div có thẻ h1. khi gọi lấy ra thẻ div và thêm thẻ con ví dụ: thẻ <span> cho div bằng thuộc tính innerHTMl thì thẻ h1 sẽ ko còn thay bằng thẻ <span>
//--- outerHTML lay ra noi dung thẻ cha và thẻ con
// ví dụ: thẻ h1 nằm trong thẻ div => nó sẽ lấy ra nôi dung của thẻ div và thẻ h1

boxElement.outerHTML = '<span> TEST<\span>';
// thì cả thẻ div và thẻ h1 sẽ thay bằng thẻ <span> nhưng biến boxElement vẫn cho ra thẻ div và h1 ở trong
// tại biến bõElement còn lưu trong bộ nhớ nhưng tuy nhiên trong Dom thật không còn nữa
// ít khi sử dụng ounerHTML


//--  học về node Properties

var boxElement = document.querySelector('.box');
// boxElement la doi tuong se có phương thức và thuộc tính.
console.log(boxElement.style);



// DOM CSS 

var boxElement = document.querySelector('.box');

console.log(boxElement.style);
//boxElement.style.width = '100px';
//boxElement.style.height = '100px';
//boxElement.style.backgroundColor = 'red';
// style laf 1 OBJect
// assign kieu giong gans
Object.assign(boxElement.style, {

    width: '200px',
    height: '300px',
    backgroundColor: 'yellow'

}) 


///            ------------ HOC VE CLassLIst Property laf thuoc tinh cua node element
//<div class="box box-2">
//    <h1>CLASS LIST</h1>
//</div> 

var boxElement = document.querySelector('.box');


console.log(boxElement.classList);// tra ve doi tuong DOMTokenList dde quan li class cua element goi toi
// outout: tra ve so luong class vaf teen class,  trị dạng chuỗi 
// cos 5 phuongw thuc su dung: add, contains, remove, toggle.
// add: them class vao element
// contains: kiem tra class cos nam trong
// remove: xoa bo class
// toggle: kiểm tra xem có tên class trong thẻ đó không nếu có thì bị xóa bỏ còn không có thì được thêm 


console.log(boxElement.classList.length); // kiem tra so luong class

console.log(boxElement.classList.value); // tra ve chuoi gia trij cua class
// output: box box-2


boxElement.classList.add('red'); // theem class
// theem nhieu class cach nhau bangf dau phaayr
// vi du:
boxElement.classList.add('red', 'blue', 'green'); // theem class

console.log(boxElement.classList.contains('green')); // kiem tra class co hay ko

boxElement.classList.remove('blue'); // xoa class blue

// cach dung

//forEach

setTimeout(() =>{
    boxElement.classList.remove('red');
}, 3500); // chay doan ma sau 3 s

setTimeout(() =>{
    boxElement.classList.toggle('red');
}, 7000);
// thuộc tính toggle có tác dụng là kiêm tra xem class có hay ko. nếu có thì xóa class này còn nếu ko có thì thêm class vào 

*/

///  -------------------------- HỌC VỀ DOM EVENT
// suwj kieenj 
//1. Attribute events
//2. Assign events using the element node
// can biet teen suwj kieenj
// 1 vai su kienj dduocwj suwr dungj nhieeuf: click, change, copy, cut, dbclick, drag, focus,keydown, keyup, mouseover, mouseout, mouseup, resize, scroll,  
// hocj ve events click
// vi du:
// <h1 class="" onclick="console.log(Math.random())">DOM events</h1>
// khi click vaof DOM events thif sex xuaats 1 con so bat ky been task console
// vi du khac
//<h1 class=""  onclick="console.log(this)">DOM events</h1>
// khi click chuootj vao task console se hien thij the noi the h1
// this.innerText hoac this.textContent laay noi dung doan text
/*
h1Element = document.querySelector('h1');
<!--<h1>DOM events</h1> -->
// 
h1Element.onclick = function() {
    console.log(Math.random());
    alert("Hello World!");
    // khi click noi dung cua h1 thif doan code moi duoc thuc thi 
}
var h1Elements = document.quẻySelectorAll('h1');

for (vả i = 0; i < h1Elements.length; ++i){
    h1Elements[i].onclick = function(e){
        console.log(e.target);
    }
}


*/

//    -------- HOCJ ve DOM event(tt)
/*
<!--<input type="text">
<input type="checkbox">

<select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>

</select>-->

*/
// 1.input / select
// 2. key up / down
/*
var inputElement = document.querySelector('input[type="text"]');

inputElement.onchange = function(e){
    console.log(e.target.value);// lay ra noi dung doan text vua nhap trong o input;
}
// onchange khi value cua input thay doi khi baams chuootj moi xuat hieen trong o console
// thif co the lay ra value cua no

var inputValue;

inputElement.oninput = function(e){
    console.log(e.target.value);// lay ra noi dung doan text vua nhap trong o input;
    inputValue = e.target.value;// duoc luu gia vao bieen
}
// khi viet trong o input thi task console se xuat hieen ngay noi dung vua ghi


var inputElementcheckbox = document.querySelector('input[type="checkbox"]');

inputElementcheckbox.onchange = function(e) {
    console.log(e.target.checked);
}
// kiem tra coi cos check vaao o ko 
// neu co thif true, ko cos laf false

//--. select

var selectElement = document.querySelector('select');


selectElement.onchange = function(e) {
    console.log(e.target.value);
}
// in ra gia tri value trong option
*/


//2. key up/ down
//-- key up

/*

var inputElement = document.querySelecor('input[type="text"]');


inputElement.onkeydown = function(e){
    console.log(e.target.value);
}


inputElement.onkeyup = function(e){
    console.log(e.which);

    switch(e.which){
        case 27:
            console.log('exit');
            break;
    }
}


// e.which la hien thi so tren ban phim
vi du:
1: 49
2:50
3:51
// trar ve mot keyboardEvent 
// .target de lay ra element
//
























//------------------------------- DOM events(tt)

// 1. preventDefault
// có thể loại bỏ hình vi mặc định của trình duyệt từ thẻ element
//
// 2. stopPropagation
// loại bỏ sự kiện nổi bọt

/*
<a href="https://f8.edu.vn">
    Hoc lap trinh tai f8
</a>
*/


///--- preventDefault
/*

var aElement = document.anchors; // lay ra the a co thuoc tinh name
// mang HTML collection
// neu dung phuong thuc links thif co ther lay ra ther a maf ko can phai co thuoc tinh name

console.log(aElement);
for(var i = 0; i < aElement.length; ++i) {
    aElement[i].onclick = function(e) {

        if (!e.target.href.startsWith('https://f8.edu.vn')){ // neeu baam ko phai vao the a mang dia chi nay thi ko the chuyen trang duoc
            e.preventDefault(); // bo did hanh vi mac dinh cua trinh duyet khi baam vao the a

        }
        console.log(e.target.href);
    }

}

/* vi duj:
css:
ul {
            display: none;
            

        }

        input:focus ~ ul{
            display: block;
        }

<input placeholder="Tim Kiem">
<ul>
    <li>Javascript</li>
    <li>PHP</li>
    <li>Ruby</li>
</ul>
*/

/*
var ulElement = document.querySelector('ul');

console.log(ulElement);
ulElement.onmousedown = function(e){
    e.preventDefault();
    // ngan chan hanh vi mac dinh cua trinh duyet xay ra khi cac ban onmoudown len the ul
}

ulElement.onclick = function(e) {
    console.log(e.target);
}

// StopPropagation ngan chan su kien noi bot


document.querySelector('button').onclick =
    function(e){
        e.stopPropagation();
        console.log('click me');
    }

*/
// ------------------------------------------------------------  Bai: Event Listener
//1. xử lí nhiều việc khi 1 event xảy ra
// 2. lắng nghe/ hủy bỏ lắng nghe

/*var btn = document.getElementById('btn');
console.log(btn);
*/
/*

btn.onclick = function(){
    console.log("xu li viec 1");
    console.log("xu li viec 2");
    alert("xu li viec 3");

}*/

// thuoc tinh ghi de dan lai 1 function rong thi khong thuc hien duoc

// cach su event listener
/*
btn.addEventListener('click',function(e){
    console.log("Event 1");
});


btn.addEventListener('click',function(e){
    console.log("Event 2");
});


btn.addEventListener('click',function(e){
    console.log("Event 3");
});
// day la lang nghe sukien
// 3 su kien deu xay ra vaf moi su kien duoc them vao 1 cosback theo thu tu

function viec1(){
    console.log("viec da lam roi ne1");
}

btn.addEventListener('click',viec1);

// cach huy lang nghe su kien

setTimeout(function(){
    btn.removeEventListener('click',viec1);
}, 3000);
// sau 3 giay khong lang nghe ham viec1
*/


//------------------------------------------------------------ hoc ve  Json
// là dịnh dạng dữ liệu (chuỗi) 
// Javascript Object Notation
// json thể hiện kiểu dư liệu: Number, string,bôlean, null, array,Object

// có hai thao tác mã hóa và giải mã (chuyển đổi sang kiểu dữ liệu khác, )

// Stringify (tu  Javascrpit sang json)
// Parse (tu json sang javascript)

//var json = 'false';
//var json = 'null';
// cach viet khai cu phap json theo kieu array
// ngan cach cac key dang chuoi thi dung dau ""
//var json = '["Java","PHP"]';

// var json = '{"name": "huynh", "age": 18}'; // bie dien object duoi dang json
// theo kieu object
// theo dang chuoi them vao 1 dau nhay keps

// var json = '"sba';

//var json = '{"name": "MH", "age":20}';

//console.log(JSON.parse(json)); // cu phap chuyeenr tuwf json sang javascript

// console.log(JSON.stringify(['java', 'python']));// chuyen javascript sang json


//------------------------------------------------------------------------ hoc ve Promise

//k.n:  
// Sync : đồng bộ 

// async: bất đồng bộ
// Nỗi đau
// lý thuyết, cách hoạt động 
// thực hành, ví dụ

//------- sync/ async

// setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame : la nhung ham bat dong bo(async)
//
//
//
//
// call back để xử lí các thao tác bất đồng 

// ---------- Nỗi đau
//-- callback hell
// py of doom
/*
Thực ra callback hell trong javascript chỉ là bạn thực hiện quá nhiều callback lồng nhau. Đại khái, callback hell sẽ có hình dạng như bên dưới
*/

/*
Callback là một hàm sẽ được thực hiện sau khi một hàm khác đã thực hiện xong - vì thế nó có tên là callback.



setTimeout(function(){
    console.log(1)
    setTimeout(function(){
        console.log(2)
        setTimeout(function(){
            console.log(3)
            setTimeout(function(){
                console.log(4)
            },1000)
        },1000)
    },1000)
},1000)
 
// been trong phu thuoc vao ben ngoai

*/


// pyramid of doom


//------- lys thuyeets vaf cach hoat dong

//1. tao ra new promise
//2. tao ra executor

// object promise thi truyen vao 1 function



var promise = new Promise(

    // executor
    // function nay thuc thi khi cac ban goi toi promise
    // tra ve hai gia tri
    // resolve: thanh cong
    // reject: that bai
    function (resolve, reject) {
        // khi executor thực thi thì ta nhận được hai tham số
        //logic: thanh cong hay that bai
        // thanh cong: resolve();
        //that bai: reject();
        // fake call API
        resolve([{
            id: 1,
            name: 'javascript'

        }
        ]);

    }
);

// promise cos 3 trang thai
//1. pendding: dang cho thanh cong hay that bai
//2. fulfilled: thanh cong : tra ve ham .then vaf finally
//3. reject: that bai  : tra ve ham .catch va finally
/*
promise
    .then(function(course){
        console.log('successully', course);
    })
    .catch(function(){
        console.log('Failure');
    })
    .finally(function(){
        console.log('done');
    })
    */
// promise : xử lí các thao tác bất đồng bộ  
// trước khi có promise thì ta thường sử dụng call back(code khó nhìn và khó hiểu) 
//


// ------------------------- học về promise chain
// tính chất của promise
// tính chuỗi(chain)
/*
var promise = new Promise(
    function(resolve, reject){

        resolve();

    }
)

promise
// co the co nhieu .then
// .then thuc thi theo chuoi
//  .then thứ nhất thực thi thì return  cái gì thì .then thứ hai sẽ nhận 
// kết quả trả về của function đằng trước là tham số truyền vào function thứ hai
        .then(function(){
              return 1;
        })


        // không return thì data phía sau nhan gia tri undefined
        // nếu không return ra 1 promise thì nó sẽ chạy .then thứ hai: 1 là không có return hoặc return ra 1 cái gì đó khác với 1 promise ví dụ: number, string, object, array,...

        // nếu return ra 1 promise thì phải chờ promise giải quyết xong thì .then thứ hai mới được thức 
        .then(function(data){
            console.log(data);
            return 2
        })
        .then(function(data){
            console.log(data);
            return 3
        })
        .then(function(data){
            console.log(data);
            
        })
// lồng của promise 
// thực thi dòng lệnh này mới thực thi dòng lệnh dưới
        .then(function(){
            return new Promise(function(resolve,reject){
                setTimeout(function(){
                    resolve([1,2,3]);
                },3000)

            });
        })
        // sau 3 giây mới  thực hiện
        .then(function(data){
            console.log(data);
            
        })
        
        .catch(function(){
            console.log('Failure');
        })
        .finally(function(){
            console.log('done');
        })
        
// oong đằng sau cần value của ông đằng trước để thực thi
// dễ nhìn hơn
// dễ đọc hơn

// .promise có thể lồng nhau

// ví dụ cách 
// sau 1 giây in ra 1 số 

function sleep(ms){
    return new Promise(function(resolve,reject){
        setTimeout(resolve, ms);

    });
}


sleep(1000)
.then(function(){
    console.log(1)
    return sleep(1000);
})

.then(function(){
    console.log(2)
    return sleep(1000);
})

.then(function(){
    console.log(3)
    return sleep(1000);
})

.then(function(){
    console.log(4)
    
})
*/

//---- Promise.resolve
//-----Promise reject
//---- Promise all

// cachs dung promise resolve
/*
var promise =  Promise.resolve('ban da thanh cong'); // tra ve primice luon thanh cong


promise
  .then(function(result){
    console.log('result: ',result)

  })
  .finally(function(){
    console.log('ket thuc')
  })




var promise1 = new Promise(
    function(resolve){
     setTimeout(function(){
        resolve([1]);
    }, 3000)

})

var promise2 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3]);
        },5000)
    }
)


  Promise.all([promise1,promise2])
  /*.then(function(result){
    var result1 = result[0];
    var result2 = result[1];

    console.log(result1.concat(result2));

  })
  //cachs 2
  .then(function([result1,result2]){
    console.log(result1.concat(result2));
    
  })


  */



/// ---------------------------------------  HỌC VỀ FETCH

// 1. Font- end: xây dựng giao diện người dùng
// Back -end: Xây dựng logic xử lí và cơ sở dữ 
//  API -> Application programing interface: giao diện lập trình ứng dụng
// cổng giao tiếp giữa các phần mền.

// Back- end trả cho cái API , dùng FETCh để lấy dữ liệu, nhận được dữ liệu là  JSON hoặc XML 
// JSON.parse -> Javascript types
//-> Render ra giao diện với html
/*

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

//  stream
fetch(postAPI)
    .then(function (response) {
        return response.json(); // trar laij 1 promise
         // se tra ve JSON.parse 
    })


    .then(function(posts){ // nhaanj dduocwj tuwf JSON sang javascript types
            //console.log(posts);

            var htmls = posts.map(function(post){
                return`<li>
                <h2> ${post.title}</h2>
                <p>${post.body}</p>
                </li>`
            });

          var html = htmls.join(''); 
          document.getElementById('post-bloack').innerHTML = html;
    });
/*

    /// -------------------------- thuw vien JSON sever: APi 









// ---------------------------------- Học về ES6 (ECMAsript 6)
// là một quy chuẩn 

//1. let, const dùng để khai báo biến

// phân biệt var/ let,const: phạm vi truy cập(scope), đưa lên trên dầu(hosting)


// phân biệt Const /var ,let : assignment(gan lại giá )

//-------- phạm vi truy cập của 3 cách khai báo
// code bloack: if else, looop,{},....
// có dấu ngoặc kép thì code block
// trong code block thì sử dụng let và const khai báo biến thì bên ngoài code block thì biến này không tồn tại
// cong khai báo kiểu var thì bình thường
/*

if(true){
    var course = 'javascript basic'; 


}

console.log(course);
*/
//----- đưa lên  (hosting): let và const không có hộ trợ hosting

//-----gán biến lại (assigment)
// let và var giống nhau
// const không thẻ toán tử gán lần thứ hai được
// ví dụ 
// const a =1
// a =11
// không được gán lần hai
// gán lại thuộc tính thif được 
//ví dụ :
// const a = {
//   name: 'js'}
// a.name ='php // đang gán lại thuộc tính name cua biến a, nên cía này thuc3wj hiện được.
// chứ không phải  gán lại a.
// gán lại thuộc tính thì được.


// code thuần thì sử dụng var


// nếu sử dụng thư viện babel thì dùng const và let
//- khi định nghĩa biến và không gán lại biến đó: dùng const
//- khi cần gán lại gia s trị của biến: let.

//------------------------------ ---------- Template literals.
/*
const courseName = "javascript";
const description = `Course name: \\ // ${courseName}`;


console.log(description);

const line = `line 1
line 2
line 3
line4`;

console.log(line);
*/














// -------------------------------------- học về arrow function(hàm mũi tên)


// bo chu function thay bangw dau mui ten
/*
const logger = (log) => {
    console.log(log);
}

logger('message...');

// ngan gon hon
//  bỏ đi dấu ngoặc kép
// những gì ghi  trực tiếp phía sau dấu mũi tên là kết quả  
// có dấu ngoặc là khối code

const sum =(a,b) => a +b;

const trve = (a,b) => ({a : a, b : b}); // return ra 1 object theem daaus ngoacwj tronf

console.log(sum(2,6));


console.log(trve(2,6));


// không thể khởi tạo arrow function trong khai báo object
const course = {
    name: 'js basic!',
    getName: () => this.name; // không được
}

// arraw function lhoong thể sử dụng trong function constructor


//----------------- học về template literals


const courseName = 'Javascript';
const decription = ` Course name: ${courseName}`;

// muốn thêm kí tự đặc biệt thì thêm vào dấu /
// ví dụ thêm vào dấu \ thì phải \\
// ${} thì \${}

console.log(decription);

// ------------------------ học về Multi-line String(viết nhiều dòng)
// cach thong thuong
const lines = 'line 1\n'
           + 'line 2\n'
           + 'line 3\n'
           + 'line 4\n'
           + 'line 5\n';

console.log(lines);

// cachs su dung Multi-line String
// xuong dong
const lines2 = `line
line2
line3
line4
line5
`;
console.log(lines2);



// ------------------------ học về classes

class Course{
    constructor(name,price){ //phuong thucws xay dung
        this.name = name;
        this.price = price;
    }
    getName (){ 
        return this.name;
    }

    getPrice (){
        return this.price;
    }

    run (){
        const issucces = false;
    }
}

const phpCourses = new Course('Php',1000);
const javaCourses = new Course('Java',2000);

console.log(phpCourses);
console.log(javaCourses);


//--------------------------- Hoc ve Enhanced object literal --------------------------------
//1. Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. định nghĩa cho object dưới dạng biến

var name = 'Java';
var price = 1000;

//1. Định nghĩa key: value cho object
var course = { // 
    name,
    price,
//2. Định nghĩa method cho object

    getName(){
        return name;

    }
    

};


console.log(course.getName());

//3. định nghĩa cho object dưới dạng biến

var fieldName = 'name';
var fieldPrice = 'price';

const course1 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}

console.log(course1);


//---------------------------------------------------------------- Default parameter values(ddinh nghia ra gia tri mac dinh cua tham so)

 function logger(log = 'Gia tri mac dinh 123'){ // thay cac if bang cus phap nay
   /* if(typeof log === 'undefined'){
        log = 'Gia tri mac dinh';
    }
    console.log(log);
 }


 logger();
*/


//----------------- hoc ve destructuring-(phan ra )

/*
var array = ['Javascript', 'PHP','Ruby'];

var [a,b,c] = array; // dungf ngoac vuong de dat ten bien a, b, c

// var[a,] = array
// var[a,b] = array
// var[a,b,c] = array
// var[a,] = array
// var[a,b,] = array
// var[a,b,c,] = array

// lay nhung phan tuw con lai
//  var [a, ...rest] = array; // bien rest lay ra hai phan tu con lai

console.log(a);
console.log(b);
console.log(c);

// ---------------- vis duj ve object

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address'
};

var {name,price,image} = course;

console.log(name);
console.log(price);
console.log(image);


// vis du neu object co object con

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children:{
        name: 'ReactJS'
    }
}



var { name: parentName } = course;
console.log(parentName);

*/
/*

Array.prototype.map2 = function (callback) {
    var ouput = [];
    Arraylength = this.length;

    for (var i = 0; i < Arraylength; ++i) {

        var result = callback(this[i], i);
        ouput.push(result);

    }

    return ouput;
}

var courses = ["python", "C", "JS"];

var htmls = courses.map2(function (course) {
    return `<h2>${course}</h2>`;
});


console.log(htmls.join(''));

*/









































