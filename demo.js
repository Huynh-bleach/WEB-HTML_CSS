/*
Array.prototype.map2 = function(callback){
    var ouput = [];
    Arraylength = this.length;

    for(var i = 0; i < Arraylength; ++i){

        var result = callback(this[i],i);
        ouput.push(result);

    }

    return ouput;
}

var courses = ["python", "C", "JS"];

var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`;
});


console.log(htmls.join(''));




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
*/

/*

console.log("hello");



//   ---------------------------promise example

var users = [
    {
        id: 1,
        name: "Huynh"
    },
    {
        id: 2,
        name: "Nghi"
    },
    {
        id: 3,
        name: "Toan"
    }
];


var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Chua ra video"
    },
    {
        id: 2,
        user_id: 2,
        content: "Vua ra video xong"
    }
    ,
    {
        id: 3,
        user_id: 3,
        content: "moi vua xe duoc video ne"
    }
];


// 1. lấy comments
// 2. từ comments lấy ra uẻ_id
// từ uẻ_id lấy ra uẻ tương ứng

// Fake Api


function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000)
    })
}

function getUserByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(function () {
            resolve(result);
        }, 1000);
    }, 1000);
}


getComments()
    .then(function (comments) {

        var userIds = comments.map(function (comment) {
            return comment.user_id;
        });

        console.log(userIds);
        return getUserByIds(userIds)
            .then(function (users) {

                return {
                    users: users,
                    comments: comments
                };

            });




    })

    .then(function (data) {

        var comment_block = document.getElementById('comment-blocka');
        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            })

            html += `<li>${user.name}: ${comment.content}<\li>`;
        });

         comment_block.innerHTML  = html;

    });

*/


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
          document.getElementById('comment-blocka').innerHTML = html;
    })

