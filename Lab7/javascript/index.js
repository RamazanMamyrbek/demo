function register(event){
    let dannye = event.target;
    let formdata = new FormData(dannye);
    let obj = Object.fromEntries(formdata);

    console.log(obj);

    var img = new Image();
    img.src = obj.image.name;
   


    localStorage.setItem('email', obj.email);
    localStorage.setItem('password', obj.password);
    localStorage.setItem('image', img.src);
    localStorage.setItem('name', obj.name);
    localStorage.setItem('birthdate', obj.birthdate);
    localStorage.setItem('birthhour', obj.birthhour);
    localStorage.setItem('gender', obj.gender);
    localStorage.setItem('color', obj.color);
    localStorage.setItem('selectCountry', obj.selectCountry);
    

        
  
            $.ajax({
              url : 'register.php',
              type : 'POST',
              data: {username: obj.name, password: obj.password,image:img.src,
                 email:obj.email, birthdate:obj.birthdate,birthhour:obj.birthhour,
                 gender:obj.gender,color:obj.color,country:obj.selectCountry
                  },
              success : function (result) {
                console.log (result); // Here, you need to use response by PHP file.
                if(result == "Success!") console.log('success reg');
                else alert("Wrong input");
              },
              error : function () {
                console.log ('error');
              }
            });
          
          

    event.preventDefault();
}

function login(event){
    let dannye = event.target;
    let formdata = new FormData(dannye);
    let obj = Object.fromEntries(formdata);

    let email = obj.email_log;
    let pass = obj.password_log;

    $.ajax({
        url : 'login.php',
       type : 'POST',
       data: {email: email, password: pass},
       success : function (result) {
       console.log (result); // Here, you need to use response by PHP file.
       if(result == "Logged IN!") {
        window.location.href = "info.html";
       }   
       else alert("Wrong input");
   },
    error : function () {
       console.log ('error');
   }
        });
    
    event.preventDefault();
}

function info(){
    document.getElementById('email_info').innerHTML = localStorage.getItem('email');
    document.getElementById('password_info').innerHTML = localStorage.getItem('password');
}

function openRegisterBox(){
    document.getElementById('login_box').style.display = 'none';
    document.getElementById('register_box').style.display = 'block';
}
function openLoginBox(){
    document.getElementById('login_box').style.display = 'block';
    document.getElementById('register_box').style.display = 'none';
}