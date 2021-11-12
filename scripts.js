const accessKey ='422fisLondcujJR_j2bxOvzLIRTDFkNgNB0ehHEtntM'
const count = 6;
let photosArray = [];
const baseUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`;
const imageContainer = document.getElementById('row');
const loader = document.getElementById('loader');
let ready = false;
let imagesLoaded = 0;
let totalImagesLoaded = 0;

async function getImages (){
  try{
    const response = await fetch(baseUrl);
    photosArray = await response.json();
    showImages();
  }
catch(error){
    console.log(error);
} 
}

function showImages(){
  imagesLoaded = 0;
  totalImagesLoaded = photosArray.length;
    photosArray.forEach(photo =>{
        //creating an anchor tag 
        const anchorTag = document.createElement('a');
        anchorTag.setAttribute('href', photo.links.html)
        anchorTag.setAttribute('target', '_blank')

        //create image
        const image = document.createElement('img');
        image.setAttribute('src', photo.urls.regular);
        image.setAttribute('alt', photo.alt_description);
        if( photo.alt_description == null){
          image.setAttribute('title', 'Image description not available');
        }
        else{
          image.setAttribute('title', photo.alt_description);
        }
  
        //image loaded
        image.addEventListener('load', imageLoaded);

        anchorTag.appendChild(image)
        imageContainer.appendChild(anchorTag)
    })
}
function imageLoaded(){
  imagesLoaded++;
  if(imagesLoaded === totalImagesLoaded){
    ready = true;
    loader.hidden = true;
    count = 30
  }
}

window.addEventListener('scroll', ()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
    ready = false;
    getImages();
  }
 
})


getImages();
