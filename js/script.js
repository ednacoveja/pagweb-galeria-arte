$(function () {
  var botones = $(".button");
  botones.click(function () {
    botones.removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
  $('nav__button .button[category="all"]').addClass("ct_item-active");

  // FILTRANDO PRODUCTOS  ============================================

  $(".button").click(function () {
    var catProduct = $(this).attr("category");
    console.log(catProduct);

    // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
    $(".button").removeClass("ct_item-active");
    $(this).addClass("ct_item-active");

    // OCULTANDO PRODUCTOS =========================
    $(".product-item").css("transform", "scale(0)");
    function hideProduct() {
      $(".product-item").hide();
    }
    setTimeout(hideProduct, 400);

    // MOSTRANDO PRODUCTOS =========================
    function showProduct() {
      $('.product-item[category="' + catProduct + '"]').show();
      $('.product-item[category="' + catProduct + '"]').css(
        "transform",
        "scale(1)"
      );
    }
    setTimeout(showProduct, 400);
  });

  // MOSTRANDO TODOS LOS PRODUCTOS =======================

  $('.button[category="all"]').click(function () {
    function showAll() {
      $(".product-item").show();
      $(".product-item").css("transform", "scale(1)");
    }
    setTimeout(showAll, 400);
  });
});

