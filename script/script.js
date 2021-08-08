var toTabletValue = 850;
var toPhoneValue = 600;
//Toggle sidebar
function toggleSidebarMenu(){
  var element = document.getElementsByClassName("sidebar")[0];
  //On Phone --- Hide sidebar (Bug fix)
  if(element.style.right == "" && document.documentElement.clientWidth < toPhoneValue){
    element.style.right = "-200px";
  }
  //On Tablet --- Hide sidebar (Bug fix)
  else if(element.style.right == "" && document.documentElement.clientWidth < toTabletValue){
    element.style.right = "-300px";
  }
  //On desktop --- Hide sidebar (Bux fix)
  else if(element.style.right == "" && document.documentElement.clientWidth >= toTabletValue){
    element.style.right = "-270px";
  }
  //Show sidebar
  if(element.style.right == "-300px" || element.style.right == "-270px" || element.style.right == "-200px"){
    element.style.right = "0px";
  }
  //Hide sidebar --- On phone
  else if(element.style.right != "-200px" && document.documentElement.clientWidth < toPhoneValue){
    element.style.right = "-200px";
  }
  //Hide sidebar --- On tablet
  else if(element.style.right != "-300px" && document.documentElement.clientWidth < toTabletValue){
    element.style.right = "-300px";
  }
  //Hide sidebar --- On desktop
  else if(element.style.right != "-270px" && document.documentElement.clientWidth >= toTabletValue){
    element.style.right = "-270px";
  }
}
function showSideBar(element){
  if(document.documentElement.clientWidth >= toTabletValue){
    element.style.right = "0px";
  }
}
function hideSideBar(element){
  if(document.documentElement.clientWidth >= toTabletValue){
    element.style.right = "-270px";
  }
}
//Shows new page
function showPage(element, index){
  var count = document.getElementsByClassName("contentBox")[0].childElementCount;
  var nodes = document.getElementsByClassName("contentBox")[0].children;
  for(let i = 0; i < count; i++){
    nodes[i].style.display = "none";
  }
  nodes[index - 1].style.display = "block";
  //On phone/tablet close the SideBar when item is clicked
  if(document.documentElement.clientWidth < toPhoneValue){
    var element = document.getElementsByClassName("sidebar")[0];
    element.style.right = "-200px";
  }
  else if(document.documentElement.clientWidth < toTabletValue){
    var element = document.getElementsByClassName("sidebar")[0];
    element.style.right = "-300px";
  }
  //Scroll to top
  window.scroll(0, 0);
}
//Opens new site
function openSite(url){
  window.location.href = url;
}
//Enlarges the image
function enlarge(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "flex";
}

//For css to look more compact and nice... this function makes landing page visible
setTimeout(function () {
  var ele = document.getElementsByClassName("content1")[0];
  ele.style.display = "block";
}, 300);
