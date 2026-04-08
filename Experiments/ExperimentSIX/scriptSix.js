let heading=document.getElementById("mainheading");
let paragraph=document.getElementById("paragraph");
let input=document.getElementById("userinput");
let fontSize=15;
document.getElementById("changeTextBtn").addEventListener("click",function() {
    if (input.value!=="") {
        heading.innerHTML=input.value;
    }
});
document.getElementById("bgColorBtn").onclick = function() {
    // document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor="navy";
};
document.getElementById("fontSizeBtn").addEventListener("click",function() {
    fontSize+=5;
    paragraph.style.fontSize=fontSize+"px";
});
document.getElementById("toggleBtn").addEventListener("click",function() {
    if (paragraph.style.display==="none") {
        paragraph.style.display="block";
    }
    else {
        paragraph.style.display="none";
    }
});
document.getElementById("resetBtn").addEventListener("click",function() {
    heading.innerHTML="Welcome to JS Lab";
    paragraph.style.display="block";
    paragraph.style.fontSize="15px";
    document.body.style.backgroundColor="aqua";
    input.value="";
    fontSize=15;
});