$('#timer').countdown('2023/01/01').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span>%-w</span> недель'
      + '<span>%-d</span> дней'
      ));
  });