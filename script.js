$(document).ready(function(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  
  if(dd<10) {
      dd='0'+dd
  } 
  
  if(mm<10) {
      mm='0'+mm
  } 
  today = mm+'/'+dd+'/'+yyyy;
    
  $('.menu-item').click(function(){
      $(this).parent().siblings('.section').children('.info').slideUp(); 
      $(this).siblings('.info').slideToggle();
      $('header').fadeIn();
  });

  $('.charge-amount').click(function(){
      var cardAmount = $('.card-amount').html();
      cardAmount = parseInt(cardAmount);
      var loadAmount = $(this).html();
      loadAmount = parseInt(loadAmount.substring(1));
      $('#load-card h2').remove();
      $('#load-card').append('<h2 class="message">Add $' + loadAmount + ' to your card?</h2>');
      $('.confirm').show();
      $('#confirm').click(function(){
          $('ul.card-history').prepend('<li>' + today + ' - $' + loadAmount + ' added</li>');
          cardAmount = cardAmount + loadAmount;
          $('.card-amount').html(cardAmount);
          $('.confirm').hide();
          $('.message').remove();
          $('#load-card').slideUp();
          $('#qr-card').slideDown();      
      });
      $('#cancel').click(function(){
          $('.confirm').hide();
          $('.message').remove();
      });
  });
    
  // Agrega el siguiente bloque de código para redirigir al hacer clic en el elemento con id 'qr-card'
$('#qr-card').click(function() {
    // Cambia la siguiente URL por la que deseas redirigir
    window.location.href = 'https://brandon0902.github.io/card_1mes/';
});

// Agrega el siguiente bloque de código para redirigir al hacer clic en el elemento con id 'qr-foto'
$('#album').click(function() {
    // Cambia la siguiente URL por la que deseas redirigir
    window.location.href = 'https://brandon0902.github.io/album_movil/';
});

$('#rep').click(function() {
    // Cambia la siguiente URL por la que deseas redirigir
    window.location.href = 'https://brandon0902.github.io/reproductor/';
});


  function handleScrollForSection() {
      var $info = $('.info#history');
      var $cardHistory = $info.find('.card-history');
      
      // Altura máxima permitida para la lista
      var maxHeight = 1200 // Puedes ajustar este valor según tus necesidades

      // Establece la altura máxima
      $info.css('max-height', maxHeight + 'px');

      // Si la altura de la lista es mayor que la altura máxima, se agrega scroll
      if ($cardHistory.height() > maxHeight) {
          $info.css('overflow-y', 'auto');
      }
  }

  // Llama a la función para gestionar el scroll al cargar la página y también después de cargar contenido dinámicamente
  handleScrollForSection();

});
