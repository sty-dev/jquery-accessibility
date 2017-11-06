jQuery(function($){

  $.a11y();

  $('.jq_a11y--expand').parent().on({
    mouseenter: function () {
      $(this).children('.jq_a11y--expand').addClass('active');
      $(this).children('.jq_a11y--expand').siblings('.dropdown-list').stop();
      $(this).children('.jq_a11y--expand').siblings('.dropdown-list').fadeIn(300);
      $(this).children('.jq_a11y--expand').a11y('expand');
    },
    mouseleave: function () {
      $(this).children('.jq_a11y--expand').removeClass('active');
      $(this).children('.jq_a11y--expand').siblings('.dropdown-list').stop();
      $(this).children('.jq_a11y--expand').siblings('.dropdown-list').fadeOut(300);
      $(this).children('.jq_a11y--expand').a11y('expand');
    }
  });
});
