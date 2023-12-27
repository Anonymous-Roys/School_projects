function helpCall(){
    blurryContainer = document.getElementById('blurry-container');
    blurryContainer.style.display = 'flex';   
    helpType=document.getElementById("help-type").value;
    document.getElementById("info").innerHTML = "Are you sure it is <br> <h3><i>"+helpType+"</i></h3>";
}

const closeBtn = () => {
    blurryContainer = document.getElementById('blurry-container');
    blurryContainer.style.display = 'none';   
}