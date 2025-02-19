//list of the image links
const images = [
"https://fastly.picsum.photos/id/804/300/400.jpg",
"https://fastly.picsum.photos/id/185/300/400.jpg",
"https://fastly.picsum.photos/id/229/300/400.jpg",
"https://fastly.picsum.photos/id/211/300/400.jpg",
];

const galleryDiv = document.getElementById("Gallery");


for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.src = images[i];
    // Set image size
    img.width = 300; 
    img.height = 300;
    galleryDiv.appendChild(img);
}