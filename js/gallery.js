
(function() {
  /**
   *
   * @constructor
   */
   var Gallery = function () {
     element = document.querySelector('.gallery');
     _closeButton = document.querySelector('.gallery-close');
     _showNextPicture = document.querySelector('.gallery-thumbnails-control-next');
     _showPrevPicture = document.querySelector('.gallery-thumbnails-control-prev');
     this._onCloseClick = this._onCloseClick.bind(this);
     this._onChangeClick = this._onChangeClick.bind(this);
   };
  
  
  var SlidesCount = 0;
  /**
   * Показ галереи
   */
  Gallery.prototype.show = function () {
     element.classList.remove('hidden');
     _closeButton.addEventListener('click', this._onCloseClick);
     _showNextPicture.addEventListener('click', this._onChangeClick);
     _showPrevPicture.addEventListener('click', this._onChangeClick);
     this.setCurrentImage(SlidesCount);
     
     
   };
  
  /**
   * Закрытие галереи
   */
   Gallery.prototype.close = function () {
     element.classList.add('hidden');
     _closeButton.removeEventListener('click', this._onCloseClick);
     _showNextPicture.removeEventListener('click', this._onChangeClick);
     _showPrevPicture.removeEventListener('click', this._onChangeClick);
  
   };
   
  /**
   * Обработчик клика по крестику
   * @private
   */
  Gallery.prototype._onCloseClick = function () {
      this.close();
   };
  
  var image = new Image();
  
  /**
   * Смена картинок по клику
   * @private
   */
  
  Gallery.prototype._onChangeClick = function (event) {
     event.preventDefault();
     
    var ClickedButton = event.target;
    var _maxSlides = gallery.data.length;
  
    if (ClickedButton === _showNextPicture) {
      SlidesCount++;
      if (SlidesCount >= _maxSlides) {
        SlidesCount = 0;
      }
    }
    
    console.log(SlidesCount);
  
    if (ClickedButton === _showPrevPicture) {
      SlidesCount--;
      if (SlidesCount <= 0) {
        SlidesCount = _maxSlides;
      }
    }
    
    

    image.src = gallery.data[SlidesCount].src;
    
  };
  
 
  /**
   * Отрисовываем картинку
   * @param i
   */
  Gallery.prototype.setCurrentImage = function (i) {
      
      image.src = gallery.data[i].src;
  
      var galleryContainer = document.querySelector('.gallery-picture');
  
      galleryContainer.appendChild(image);
  };
  

    
   window.Gallery = Gallery;
})();


var gallery = new Gallery();
var showGallery = document.querySelector('.photogallery__show-all');



showGallery.addEventListener('click', _onClick);


function _onClick(evt) {
  evt.preventDefault();
  gallery.data = items;
  gallery.show();
}