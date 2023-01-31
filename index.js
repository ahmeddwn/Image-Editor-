// lets click file input on choose img btn click
const fileInput=document.querySelector(".file-input");
previewImg=document.querySelector(".preview-img img");
filterOptions=document.querySelector(".filter button");//we are refering filtering class and buttons together
chooseImgBtn = document.querySelector(".choose-img");
const loadImage =()=>{
    let file=fileInput.files[0]; //getting user selected files
    if(!file) return; //return if user hasnt selected file
    // console.log(file);
    // URL.createObjectURL() creates a url of passed file object
    previewImg.src = URL.createObjectURL(file);//passing file url as preview img src
    // remove disable class from container when image is loaded
    previewImg.addEventListener("load",()=>{
        document.querySelector(".container").classList.remove("disable");
    });
}

filterOptions.forEach(option => {
    option.addEventListener("click",()=>{
        // adding click event listener to all filter button
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
    });
    
});



fileInput.addEventListener("change",loadImage);

// when choose img is clicked trigger file input
chooseImgBtn.addEventListener("click",()=>fileInput.click());