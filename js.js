let input = document.getElementById("back")
let input1 = document.getElementById("bak")
let img1 = document.querySelector("img")
let hide = document.getElementById("hidden")
let hide1 = document.getElementById("hidden1")
let para = document.getElementById("para")


function backcolor(z)
{
  if(z.key === "Enter")
  {
    document.body.style.background=`linear-gradient(${input.value})`
  }
}
function borderRadius(z)
{
  if(z.key === "Enter")
  {
    img1.style.borderRadius=`${input1.value}%`
  }
}
hide.onclick = function()
{
  if(hide1.type=="password")
  {
    hide1.type="text"
    hide.className="fa-solid fa-eye"
  }
  else{
    hide1.type="password"
    hide.className="fa-solid fa-eye-slash"
  }

}
let icon = document.getElementById("darkmodes");
let p = document.getElementById("text")

icon.onclick=function (){
  if(icon.className === "fa-solid fa-sun"){
      icon.className="fa-solid fa-moon";
      document.body.style.backgroundColor="black"
       document.body.style.color="white"
  }else{
      icon.className="fa-solid fa-sun";
      document.body.style.backgroundColor="white"
       document.body.style.color="black"
  }
}



