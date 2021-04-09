document.getElementById("popupbutton").addEventListener("click", myFunction);

function myFunction(){
  let params = `scrollbars=no,resizable=yes,status=no,location=no,toolbar=no,menubar=no,
width=1024,height=1024,left=0,top=0`;

  window.open("https://webbmath.com/sample", "WebbMath", params);
}