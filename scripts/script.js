function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  active = false
function toggleActive(){
		active = !active
    let element1 = document.getElementById("item");
    let element2 = document.getElementById("this_course");
    let element3 = document.getElementById("this_content");
    let element4 = document.getElementById("day");
		if (active){
        element1.classList.add("active");
        element2.classList.add("active");
        element3.classList.add("active");
        element4.classList.add("active");
    }else{
        element1.classList.remove("active");
        element2.classList.remove("active");
        element3.classList.remove("active");
        element4.classList.remove("active");
    }
}
function submitted(){
document.getElementById("newPoll").style.display='none';
document.getElementById("submission").style.display='block'

}