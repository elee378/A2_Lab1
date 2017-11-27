(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework

  var theImages = document.querySelectorAll('.data-ref'),
     modelName = document.querySelector('.modelName'),
     priceInfo = document.querySelector('.priceInfo'),
     theDetails = document.querySelector('.modelDetails'),
     focusMini = document.querySelectorAll('.focusMini'),
     appliedClass;

     // i want to change all the content on the page
     function changeElements(){
     let objectIndex = carData[this.id];

       //change the text using the values of the properties in the object
       modelName.firstChild.nodeValue = objectIndex.headline;
       priceInfo.firstChild.nodeValue = objectIndex.price;
       theDetails.firstChild.nodeValue = objectIndex.details;


       //adding the content from contentObject.js
       modelName.classList.add(this.id);
       priceInfo.classList.add(this.id);
       theDetails.classList.add(this.id);

       //remove the colours we applied on the last click
       focusMini.classList.remove(appliedClass);

       appliedClass = this.id;
     }

     theImages.forEach(function (image, index){
       //add an event handler for each image
       image.addEventListener('click', changeElements, false);
     });

})();
