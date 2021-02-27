//Phần 1: Trắc Nghiệm
//1D
//2B
//3B
//4B
//5B
//6D
//7A
//8A
//9C
//10C


//Phần 2: Xử lí tình huống

//Bài 2
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".playVideo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//get the iframe from  youtube

let playVid = document.querySelector(".video")

//Get the btn that open the modal
btn.onclick = function(){
    modal.style.display ="block"
}

  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }

  

//Get the btn that close the modal
var close1 = document.getElementsByClassName("close1")[0];

// Get the modal
var modal1 = document.getElementById("myModal-1");

// Get the button that opens the modal
var btn1 = document.querySelector("#modal-1");

// When the user clicks on button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
close1.onclick = function() {
    modal1.style.display = "none";
  }

// ------------

//Get the btn that close the modal

var close2 = document.getElementsByClassName("close2")[0];

// Get the modal

var modal2 = document.getElementById("myModal-2");

// Get the button that opens the modal
var btn2 = document.querySelector("#modal-2");

// When the user clicks on button, open the modal

btn2.onclick = function() {
    modal2.style.display ="block"
  }
  // When the user clicks on <span> (x), close the modal

close2.onclick = function() {
    modal2.style.display = "none";
  }


//   -------------

// Get the button that closes the modal

var close3 = document.getElementsByClassName("close3")[0];

//Get the modal
var modal3 = document.getElementById("myModal-3");

// Get the button that opens the modal
var btn3 = document.querySelector("#modal-3");

//When user clicks on button, open the modal
btn3.onclick = function() {
    modal3.style.display ="block"
  }

// When the user clicks on <span> (x), close the modal
close3.onclick = function() {
    modal3.style.display = "none";
  }
  //   -------------

  // Get the button that closes the modal

var close4 = document.getElementsByClassName("close4")[0];


//Get the modal
var modal4 = document.getElementById("myModal-4");

// Get the button that opens the modal
var btn4 = document.querySelector("#modal-4");

//When user clicks on button, open the modal

btn4.onclick = function() {
    modal4.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal

  close4.onclick = function() {
    modal4.style.display = "none";
  }

//Nhận Xét
  
// Bài làm tuy chưa đầy đủ được chức năng và giao diện khi ấn vào các nút VD: Tiêu điểm, read more nhưng đã có cách chia bố cục, vị trí và màu sắc rất hài hòa,cân đối. 
//Cách comment rất dễ hiểu tuy nhiên còn comment 1 số chỗ thiếu nên dễ gây rối khi đọc code.
// Cần tìm hiểu về CSS/JS Box Model để có thể hoàn chỉnh bài 