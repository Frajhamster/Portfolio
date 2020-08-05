var toPhoneValue = 850;

function toggleSidebarMenu(){
  var element = document.getElementsByClassName("sidebar")[0];
  //On phone --- Hide sidebar (Bug fix)
  if(element.style.right == "" && document.documentElement.clientWidth < toPhoneValue){
    element.style.right = "-300px";
  }
  //On desktop --- Hide sidebar (Bux fix)
  else if(element.style.right == "" && document.documentElement.clientWidth >= toPhoneValue){
    element.style.right = "-270px";
  }
  //Show sidebar
  if(element.style.right == "-300px" || element.style.right == "-270px"){
    element.style.right = "0px";
  }
  //On phone --- Hide sidebar
  else if(element.style.right != "-300px" && document.documentElement.clientWidth < toPhoneValue){
    element.style.right = "-300px";
  }
  //On desktop --- Hide sidebar
  else if(element.style.right != "-270px" && document.documentElement.clientWidth >= toPhoneValue){
    element.style.right = "-270px";
  }
}

function showSideBar(element){
  if(document.documentElement.clientWidth >= toPhoneValue){
    element.style.right = "0px";
  }
}
function hideSideBar(element){
  if(document.documentElement.clientWidth >= toPhoneValue){
    element.style.right = "-270px";
  }
}

function showPage(element, index){
  var count = document.getElementsByClassName("contentBox")[0].childElementCount;
  var nodes = document.getElementsByClassName("contentBox")[0].children;
  for(let i = 0; i < count; i++){
    nodes[i].style.display = "none";
  }
  nodes[index - 1].style.display = "block";
}

function openSite(url){
  window.location.href = url;
}

//For css to look more compact and nice... this function makes landing page visible
setTimeout(function () {
  var ele = document.getElementsByClassName("content1")[0];
  ele.style.display = "block";
}, 100);
