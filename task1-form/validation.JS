

function myFunction() {
 var sitename,sitemail, sitepassword,localname;
 sitename = document.getElementById("Name").value;
 sitemail = document.getElementById("Email").value;
 sitepassword = document.getElementById("Password").value;
 JSON.stringify(['sitename', 'sitemail', 'sitepassword']); 

/*   {"employees":[
       {"firstName":"John", "lastName":"Doe"},
       {"firstName":"Anna", "lastName":"Smith"},
       {"firstName":"Peter", "lastName":"Jones"}
   ]}*/
   localStorage.setItem('name', 'Rahul');




    localname= localStorage.getItem('name');
    if(sitename==localname){
      alert("Login Successful");
       window.location = "registrationform.html"
    }
    else {
      alert("Invalid User");
    }

    /*if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }*/
  }
