// Contact form validation with alerts

// <input type="text" id="firstname">

// <input type="text" id="lastname">

// <input type="email" id="email">

// Variable that will store the element's document type value 

// let contactIDS = ["firstname", "lastname", "email",];
// let reponse = ["Please enter your first name",
//   "Please enter your last name",
//   "Please enter your email",
//   "Thank you for reaching out! We will be in touch shortly!",
//   "Thank you! We will send you plane ticket deals shortly!"
// ]

// Global variable 
// let reponses = {
//   one: "Please enter your first name", 
//   two: "Please enter your last name", 
//   three: "Please enter your email"
// }

//   var x = document.getElementById("myInput").value;
// document.getElementById("demo").innerHTML = "You wrote: " +
// example:   document.getElementById("fnameMessage").innerHTML = 




function validateForm() {
  // for (let i = 0; i < contactIDS.length; i++) {
  //   if (contactIDS.find("firstname") === "") {
  //     alert(response.find("Please enter your first name"))
  //   }
  //   // alert("It works!")
  // }
  let fName = document.getElementById("firstname");
  let lName = document.getElementById("lastname");
  let email = document.getElementById("email");
  let optionYes = document.getElementById("yes-option");
  let optionNo = document.getElementById("no-option");
  if (fName.value === "") {
    alert("Please enter your first name ");
  }
  else if (lName.value === "") {
    alert("Please enter your last name ");
  }
  else if (email.value === "") {
    alert("Please enter your email");
  }
  // else if (optionYes.value="yes"){
  //    alert("Thank you for submitting! We will send you our current plane ticket deals shortly!");

  // }
  // else if (optionNo.value === "no") {
  //   // alert("Thank you for submitting! We will send you our current plane ticket deals shortly!");
  //   alert("Thank you for submitting! We will not send you our current plane ticket deals.");
  // }
  // else if (testing.value === "no") {
  //   alert("Thank you for submitting! We will not send you our current plane ticket deals.");
  // }
  else {
    alert("Thank you for submitting! We will reach out to you shortly!");
  }


}

