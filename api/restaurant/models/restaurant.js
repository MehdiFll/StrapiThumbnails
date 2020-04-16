'use strict';

/**
 * Lifecycle callbacks for the `restaurant` model.
 */
const fs = require('fs');
const path = require('path');

const ImageHelper = require('../../image/ImageHelper');
const uploadsPath = path.join(__dirname, '../../../public');

module.exports = {

  afterSave: async (model, result) => {
    setTimeout(async function () {
      let restaurant = await strapi.services.restaurant.findOne({ id: model.attributes.id }, ['id', 'image']);
      if (restaurant != undefined) {
        const imagePath = uploadsPath + restaurant.image.url;
        const destPath = uploadsPath + '/uploads/Thumbnails/' + restaurant.image.hash + restaurant.image.ext;
        if (!fs.existsSync(destPath)) {
          ImageHelper.createThumbnail(imagePath, destPath);
        }

      }
    }, 1000);





  }
}
