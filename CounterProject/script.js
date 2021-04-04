 var num=document.querySelector(".counter");
 var followersText=document.querySelector(".followers");
 let i=1;

 setInterval(()=>{
     
   if(i<1000)
   {
       i++;
       num.innerText=i;
       
   }
   else
   {
       followersText.innerText="Followers you have,Congrast!!"
   }


 },1);
