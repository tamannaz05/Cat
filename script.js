document.getElementById("catImg").addEventListener("click", ()=>{
    let catImage = document.getElementById("catImg");
    let catMessage = document.getElementById("catMsg");

    if(catImage.src.includes("cat-sleeping.jpg"))
    {
        catImage.src = "cat-awake.jpg";
        catMessage.textContent = "I told you not to touch. See now my cat is awake!";
    }
    else if(catImage.src.includes("cat-awake.jpg"))
    {
        catImage.src = "cat-angry.jpg";
        catMessage.textContent = "She's getting angry, stop touching her!";
    }
    else if(catImage.src.includes("cat-angry.jpg"))
    {
        catImage.src = "cat-very-angry.jpg";
        catMessage.textContent = "Oh my god stop, she'll scratch you!";
    }
    else if(catImage.src.includes("cat-very-angry.jpg"))
    {
        catImage.src = "cat-scratching.jpg";
        catMessage.textContent = "I warned you!";
    }
});
