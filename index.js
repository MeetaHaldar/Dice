// it will generate random number.
var randomNumber1=Math.floor(Math.random()*6)+1; 

// it will concatinate the image randomly
var randomImage1="dice"+randomNumber1+".png";

// it will again concatinate image with its original  folder.
var imagesource1="images/"+randomImage1;

// selecting first image for random generating image.
var  image1=document.querySelectorAll("img")[0];

// changing attribute of first image
image1.setAttribute("src",imagesource1);

// ........................................................................//

// similarlly for second player

//generate random number & it will concatinate the image randomly and concatinate image with its original  folder
var randomNumber2=(Math.floor(Math.random()*6)+1);

// selecting first image for random generating image and changing attribute of first image.
var  image2=document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");


// ........................................................................//

// now, for addressing the h1
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML=("player 1 wins 🎉");
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML=("player 2 wins 🎉");
}
else{
    document.querySelector("h1").innerHTML=("DRAW ☹");
}

// ........................................................................//