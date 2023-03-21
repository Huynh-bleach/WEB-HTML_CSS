




function sendData_1(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "setPOS?servoPOS="+pos, true);
    xhttp.send();
  } 
 var s = document.getElementById("my");
        var o = document.getElementById("demo");
        o.innerHTML = s.value;
  
        s.oninput = function() {
          o.innerHTML = this.value;
          sendData_1(o.innerHTML);
        }






    function sendData(boss) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "setBOSS?servoBOSS="+boss, true);
    xhttp.send();
  } 
  var slider = document.getElementById("myRange");
  var output = document.getElementById("mydemo");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
    sendData(output.innerHTML);
  }








  // cai dat hieu chinh

  function sendData(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "setPOS?servoPOS="+pos, true);
    xhttp.send();
  } 
 var s0 = document.getElementById("my0");
        var o0 = document.getElementById("demo0");
        o0.innerHTML = s0.value;
  
        s0.oninput = function() {
          o0.innerHTML = this.value;
          sendData(o0.innerHTML);
        }



        ////
/*    function sendData1(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "setPOS?servoPOS="+pos, true);
    xhttp.send();
  } 
  */
        var s1 = document.getElementById("my1");
        var o1 = document.getElementById("demo1");

        var thoigianchon = 10000;
        var thoigianlaydulieu;

      setInterval(function() {
        o1.innerHTML = s1.value;

        console.log(s1.value);
  
        s1.oninput = function() {
        o1.innerHTML = this.value;
        }
        thoigianchon = parseInt(s1.value)*1000;
        console.log(thoigianchon);
        console.log(typeof thoigianchon);

      },5000)




    function thoigianxaclap(){
        
      return thoigianchon;

    }



    

  


    function sendData2(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "setPOS?servoPOS="+pos, true);
    xhttp.send();
  } 
 var s2 = document.getElementById("my2");
        var o2 = document.getElementById("demo2");
        o2.innerHTML = s2.value;
  
        s2.oninput = function() {
          o2.innerHTML = this.value;
          sendData2(o.innerHTML);
        }


  /*function sendData3(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "setPOS?servoPOS="+pos, true);
    xhttp.send();
  } 
 var s3 = document.getElementById("my3");
        var o3 = document.getElementById("demo3");
        o3.innerHTML = s3.value;
  
        s3.oninput = function() {
          o3.innerHTML = this.value;
          sendData3(o.innerHTML);
        }*/
        




function click_icon(){
            document.getElementById("toast").style.display = "none";              
                  
        
        }


function button(){
    document.getElementById("toast").style.display = "block";              
          

}


var thoigian = [];
var giatri = [];

var giatri_2 = [];

var giatri_3 = [];






var bieudo = document.getElementById("myChart").getContext('2d');



setInterval(function(){
                      const d = new Date();
                  let hour = d.getHours();

                  let phut = d.getMinutes();

                  

                var time = hour.toString() + ":"+ phut.toString();
                  
                thoigian.push(time);

                console.log(thoigian);
                if(thoigian.length == 11){
                  thoigian.shift()
                }
                  


                  
                  }, thoigianchon);


setInterval(function(){

                      var a = Math.floor(Math.random() * 100);
                      giatri.push(a);
                      console.log(giatri);
                      if(giatri.length == 11){
                          giatri.shift();
                      }

                      
    },thoigianchon);


setInterval(function(){

                    var b = Math.floor(Math.random() * 100);
                      giatri_2.push(b);
                    console.log(giatri_2);
                  if(giatri_2.length == 11){
                      giatri_2.shift();
                      }


        },thoigianchon);

                  
setInterval(function(){

                        var c = Math.floor(Math.random() * 100);
                        giatri_3.push(c);
                        console.log(giatri_3);
                      if(giatri_3.length == 11){
                      giatri_3.shift();
                      }


    },thoigianchon);



            
setInterval(function(){

              var line_chart = new Chart(bieudo, {
              type: "line",
              data: {
                labels: thoigian,
                datasets: [{
                  label: 'Nhiệt độ',
                  fill: false,
                  lineTension: 0,
                  backgroundColor: "rgba(205,0,0,1.0)",
                  borderColor: "rgba(205,0,0,0.5)",
                  data: giatri,
                  tension: 0.3,
                  borderWidth: 6
                },
                {
                  label: 'Độ ẩm',
                  fill: false,
                  lineTension: 0,
                  backgroundColor: "rgba(0,205,0,1.0)",
                  borderColor: "rgba(0,205,0,0.5)",
                  data: giatri_2,
                  tension: 0.3,
                  borderWidth: 6

                },
                {
                  label: 'Độ ẩm đất',
                  fill: false,
                  lineTension: 0,
                  backgroundColor: "rgba(0,0,205,1.0)",
                  borderColor: "rgba(0,0,205,0.5)",
                  data: giatri_3,
                  tension: 0.3,
                  borderWidth: 6
                }
            ]
              },
              options: {
                title: {
                            display:true,
                            text: 'Biểu Đồ Giám Sát Nông Nghiệp',
                            fontSize: 25
                        },
                scales: {
                  yAxes: [{ticks: {min: 0, max:100}}],
                },          
              }
            });


            }, thoigianchon)

            

function button_chart(){
              document.getElementById('home').style.display = 'none';
              document.getElementById('myChart').style.display = 'block';
              document.getElementById('toast').style.display = 'none';

              document.getElementById('icon_chart').style.backgroundColor='rgba(0, 255, 0, 0.5)';
              document.getElementById('icon_home').style.backgroundColor='inherit';
              document.getElementById('icon_setting').style.backgroundColor='inherit';
              document.getElementById('icon_video').style.backgroundColor='inherit';


            }

function button_home(){
              document.getElementById('home').style.display = 'block';
              document.getElementById('myChart').style.display = 'none';
              document.getElementById('toast').style.display = 'none';
              document.getElementById('icon_home').style.backgroundColor='rgba(0, 255, 0, 0.5)';
              document.getElementById('icon_chart').style.backgroundColor='inherit';
              document.getElementById('icon_setting').style.backgroundColor='inherit';
              document.getElementById('icon_video').style.backgroundColor='inherit';


        }
function button_setting(){
              document.getElementById('home').style.display = 'none';
              document.getElementById('myChart').style.display = 'none';
              document.getElementById('toast').style.display = 'block';

              document.getElementById('icon_home').style.backgroundColor='inherit';
              document.getElementById('icon_chart').style.backgroundColor='inherit';
              document.getElementById('icon_setting').style.backgroundColor='rgba(0, 255, 0, 0.5)';
              document.getElementById('icon_video').style.backgroundColor='inherit';


              
             
}


function button_video(){
  document.getElementById('home').style.display = 'none';
  document.getElementById('myChart').style.display = 'none';
  document.getElementById('toast').style.display = 'none';
  


  document.getElementById('icon_home').style.backgroundColor='inherit';
  document.getElementById('icon_chart').style.backgroundColor='inherit';
  document.getElementById('icon_setting').style.backgroundColor='inherit';
  document.getElementById('icon_video').style.backgroundColor='rgba(0, 255, 0, 0.5)';


 
}




