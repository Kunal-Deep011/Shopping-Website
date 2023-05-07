
let signup1 =  document.querySelector(".signup1-btn");

signup1.addEventListener("click",(e)=>{
e.preventDefault();

const fname =  document.getElementById("fname").value.trim();
const lname =  document.getElementById("lname").value.trim();
const email =  document.getElementById("email").value.trim();
const password =  document.getElementById("password").value.trim();
const confirm =  document.getElementById("confirmation").value.trim();

signUp(fname, lname, email, password, confirm);


/*let dataObj = 
  {
  FirstName : fname,
  LastName : lname ,
  Email : email,
  Password : password
  }
              ;

if(fname == "" && lname == "" && email == "" &&
    password == "" && confirm == ""){
      swal("Opps...!", "All fields* are required", "error");
    }
    else{

      if(localStorage.getItem("userData") == null){
        localStorage.setItem("userData",'[]');
      }
     
        let old_data = JSON.parse(localStorage.getItem("userData"));

        if(password != confirm){

          swal("Opps...!", "Both passwords are not matching", "error");
  
        }
        else{
            old_data.push(dataObj);

            localStorage.setItem("userData",JSON.stringify(old_data));
  
            swal("Great..!", "Successfully Signed Up", "success");
  
          setTimeout(()=>{
             window.location.href = "./login.html";
          },1000);


          let premail = JSON.parse(localStorage.getItem("userData"));

          if(premail === email){

            swal("Opps...!", "This email address is Already in use", "error");
              
          }else{

            old_data.push(dataObj);

          }

          }



          
        
      }*/
   
  document.getElementById("fname").value ="";
  document.getElementById("lname").value ="";
  document.getElementById("email").value ="";
  document.getElementById("password").value ="";
  document.getElementById("confirmation").value ="";

});


function signUp(fname, lname, email, password, confirm) {
 
   // Get existing users from local storage
   const users = JSON.parse(localStorage.getItem("users")) || [];


  // Check if all fields are filled
  if (!email || !password || !fname|| !lname) {
        
    swal("Opps...!", "All fields* are required", "error");
  }

  else{
         
    // Check if password and confirm password match
  if (password !== confirm) {

    swal("Opps...!", "Both passwords are not matching", "error");
  }else{

  // Check if email is already used
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {

    swal("Opps...!", "This email address is Already in use", "error");
  }
  else{
             // Create a new user object
  const newUser = { fname, lname, email, password};

  // Add the new user to the users array
  users.push(newUser);

  // Save the updated users array in local storage
  localStorage.setItem("users", JSON.stringify(users));

  swal("Great..!", "Successfully Signed Up", "success");



  };



  };

  };


   

};









