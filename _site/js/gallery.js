  //variable to hold all the images nested inside the div with id: gallery-thumbs
  let thumbnails = document.querySelectorAll('#gallery-thumbs > div > img');

  //set variable to hold img nested inside id: gallery-photo 
  let mainImage = document.querySelector('#gallery-photo img');

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
      //set variable to hold path src of file
      let newImageSrc = thumbnail.dataset.largeVersion;
      //variable for alt
      let newImageAlt = thumbnail.dataset.description;
      //change the src/alt attribute to the current display image 
      mainImage.setAttribute('src', newImageSrc);
      mainImage.setAttribute('alt', newImageAlt);

      //change orange border to current img
      document.querySelector('.current').classList.remove('current');
      thumbnail.parentNode.classList.add('current');
    });
  });
