const jimp = require('jimp');

module.exports = {
    createThumbnail : createThumbnail,
    resizeImage : resizeImage,
    createMediumCopy : createMediumCopy
  };



  function createThumbnail(imagePath, destPath){
    jimp.read(imagePath)
  .then(res => {
    return res
      .resize(500, 500) // resize
      .quality(100) // set JPEG quality
      .write(destPath); // save
  })
  .catch(err => {
    console.error(err);
  });
  }


function resizeImage(){

}


function createMediumCopy(imagePath){

}

