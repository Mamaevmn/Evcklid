$(function () {
  var use_privacy = true;
  $('.feedback__form').on('submit', function (e) {

    if (use_privacy) {
      if (!$(this).find('input[name=agree]').prop('checked')) {
        alert('Для продолжения вы должны дать Согласие на обработку данных');
        return false;
      }
    }

  });
});