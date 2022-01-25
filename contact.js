const form=document.querySelector("form"),
statusTxt=form.querySelector(".send-btn span");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.display="block";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "contact.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState==4 && xhr.status == 200){
            let response= xhr.response;
            console.log(response);
            statusTxt.innerText = response;
        }

    }
    let formData = new FormData();
    xhr.send();
}