function helpCall(){
    blurryContainer = document.getElementById('blurry-container');
    blurryContainer.style.width = '100%';
    helpType=document.getElementById("help-type").value;
    document.getElementById("info").innerHTML = "Are you sure it is <br> <h3>"+helpType+"</h3>";
}