// Animasi Fade-in saat scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const position = sec.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            sec.classList.add("show");
        }
    });
});

// Slider otomatis
const images = [
    "https://via.placeholder.com/300x200?text=Motor+1",
    "https://via.placeholder.com/300x200?text=Motor+2",
    "https://via.placeholder.com/300x200?text=Motor+3"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    index++;
    if(index >= images.length){
        index = 0;
    }
    slide.src = images[index];
}, 3000);