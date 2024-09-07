
window.addEventListener('load', function() {
    let preload = document.querySelector('.cont');
    let all=document.querySelector('#all');
    if (preload) {
        preload.style.display = 'none';
        all.style.display = 'block';

   
       
        
    }
  });
  
  
 let scrollUpBtn = document.getElementById("scrollUpBtn");
  
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  };
    scrollUpBtn.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
  


function scrollSlidel(direction) {
  const slider = document.querySelector('.series-card');
  const scrollAmount = 300;

  if (direction === 'right') {
      slider.scrollLeft += scrollAmount;
      
  } else if (direction === 'left') {
      slider.scrollLeft -= scrollAmount;
  }
}
function scrollSlide(direction) {
  const slider = document.querySelector('.top-slider');
  const scrollAmount = 300; 

  if (direction === 'right') {
      slider.scrollLeft += scrollAmount;
      
  } else if (direction === 'left') {
      slider.scrollLeft -= scrollAmount;
  }
}
  




  function filterSelection(category) {
    const elements = document.querySelectorAll('.movie-contanier');
  
    if (category === 'all') {
        elements.forEach(el => el.style.display = '');
    } else {
        elements.forEach(el => {
            if (el.classList.contains(category)) {
                el.style.display = '';
            } else {
           
                el.style.cssText = 'display:none';
              
            }
        });
    }
  }

  


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
  

  function scrollSlidea(direction) {
    const slider = document.querySelector('.sliders');
    const scrollAmount = 1350; 
  
    if (direction === 'right') {
        slider.scrollLeft += scrollAmount;
        
    } else if (direction === 'left') {
        slider.scrollLeft -= scrollAmount;
    }
  }

  function watchme(){
    window.location.href="movie1.html"
  }


const bookmarkButtons = document.querySelectorAll('#watch-later');


let bookmarkedData = [];


function handleBookmarkClick(event) {
    const parentElement = event.target.closest('.movie-contanier');// i need to uderstand thissss!!!!!
    const title = parentElement.querySelector('h2').textContent;
    const quality = parentElement.querySelector('.quality-section').textContent.trim();
    const year = parentElement.querySelector('.year-section').textContent.trim();
    const genre = parentElement.querySelector('.gener-section').textContent.trim();
    const rating = parentElement.querySelector('.rating-section').textContent.trim();
    const duration = parentElement.querySelector('.duration-section').textContent.trim();
    

    const bookmarkData = {
        title,
        quality,
        year,
        genre,
        rating,
        duration,
        
    };
    
    bookmarkedData.push(bookmarkData);
    console.log('Bookmarked Data:', bookmarkedData);
}


bookmarkButtons.forEach(button => {
    button.addEventListener('click', handleBookmarkClick);
});
