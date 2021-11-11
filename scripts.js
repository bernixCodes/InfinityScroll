const accessKey ='U8qEIZja9a7JiLW_65G9JPcyK_venXoifP8hGv1-4eU'
const count = 10;
let photosArray = [];
const baseUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`;
const imageContainer = document.getElementById('row');

function showImages(){
    photosArray.forEach(photo =>{
        //creating an anchor tag 
        const anchorTag = document.createElement('a');
        anchorTag.setAttribute('href', photo.links.html)
        anchorTag.setAttribute('target', '_blank')

        //create image

        const image = document.createElement('img');
        image.setAttribute('src', photo.urls.regular);
        image.setAttribute('alt', photo.alt_description);
        image.setAttribute('title', photo.alt_description);

        anchorTag.appendChild(image)
        imageContainer.appendChild(anchorTag)
    })
}


async function getImages (){
  try{
    const response = await fetch(baseUrl);
    photosArray = await response.json();
    console.log(photosArray);
    showImages();
  }
catch(error){
    console.log(error);
}
   
   
}




getImages()
