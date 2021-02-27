// const inpFile = document.getElementById("inpFile");

// const imgContainer = document.getElementById("img-Prev");

// const img = imgContainer.querySelector(".img");

// inpFile.addEventListener("change" , function(){
//     const file = this.files[0];

//     if(file){
//         const reader = new FileReader();

//         img.style.display = "block";

//         reader.addEventListener("load" , function(){
//             console.log(this);
//             img.setAttribute("src", this.result);
//         });
//         reader.readAsDataURL(file);
//     }

// });


function showPreview(event){
if(event.target.files.length > 0){
var src = URL.createObjectURL(event.target.files[0]);
var preview = document.getElementById("slide-img");
preview.src = src;
preview.style.display = "block";
}
}
