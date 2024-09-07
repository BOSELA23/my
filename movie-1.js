
window.addEventListener('load', function() {
    let preload = document.querySelector('.cont');
    if (preload) {
        preload.style.display = 'none';
   
       
        
    }
  });



let display = document.querySelector(".links-section");
let signin = document.createElement("button");
signin.id = "sign-button";
signin.innerHTML = "Sign-up";


signin.addEventListener("click", function() {
  window.location.href = "sing-up.html"; 
 
});
display.appendChild(signin);
let serachicon=document.getElementById("serach-icon");
let serachbar=document.getElementById("search-section");
serachicon.addEventListener("click",function(){
  if(serachbar.style.display==="block"){
    serachbar.style.display="none";
  }
  else{
    serachbar.style.display="block";
   
  }
  })

  
  document.querySelector('.menu-bar').addEventListener('click', function() {
    var linksSection = document.querySelector('.links-section');
    var linksSection2 = document.querySelector('.close-bar');
    var linksSection3 = document.querySelector('.menu-bar');
  
    if (linksSection.style.display === 'none') {
        
        linksSection.style.display = 'block';
        linksSection2.style.display = 'block';
        linksSection3.style.display = 'none';
      
    } else {
        linksSection.style.display = 'none';
        
    }
  });

  document.querySelector('.close-bar').addEventListener('click', function() {
    var linksSection = document.querySelector('.links-section');
    var linksSection3 = document.querySelector('.menu-bar');
    var linksSection2 = document.querySelector('.close-bar');
  
    if (linksSection.style.display === 'block') {
      linksSection2.style.display = 'none';
        linksSection.style.display = 'none';
        linksSection3.style.display = 'block';
    } else {
        linksSection.style.display = 'none';
       
    }
  });
