(function(){
  var start = function(){
      var cards = document.querySelectorAll('.card-short-id');
      [].forEach.call(cards, function( el ) {
        removeClass(el,'hide');
        el.innerHTML = el.innerHTML.replace('-','');
        el.innerHTML = el.innerHTML + " - ";
      });
  };
  
  var removeClass = function(el, className) {
    if (el.classList){
      el.classList.remove(className);
    }else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className=el.className.replace(reg, ' ');
    }
  };
  
  start();

})();



