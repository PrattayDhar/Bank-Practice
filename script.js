document.getElementById('butsub').addEventListener('click',function(){
   const emailFild = document.getElementById('email');
   const email = emailFild.value;

 const paasfild=document.getElementById('pass');
 const password=paasfild.value;
console.log(password);
     
if(email==='prattaygub@gmail.com' && password==='1234'){
    console.log("valid");
}
else{
    console.log('Faild');
}

  }
 

)