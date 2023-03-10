$(function () {
  var botones = $(".button");
  botones.click(function () {
    botones.removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $('nav__button .button[id="all"]').addClass("ct_item-active");

  $(".button").click(function () {
    var catProduct = $(this).attr("id");
    console.log(catProduct);

    $(".button").removeClass("ct_item-active");
    $(this).addClass("ct_item-active");

    $(".product-item").css("transform", "scale(0)");
    function hideProduct() {
      $(".product-item").hide();
    }
    setTimeout(hideProduct, 400);

    function showProduct() {
      $('.product-item[id="' + catProduct + '"]').show();
      $('.product-item[id="' + catProduct + '"]').css(
        "transform",
        "scale(1)"
      );
    }
    setTimeout(showProduct, 400);
  });

  $('.button[id="all"]').click(function () {
    function showAll() {
      $(".product-item").show();
      $(".product-item").css("transform", "scale(1)");
    }
    setTimeout(showAll, 400);
  });
});

