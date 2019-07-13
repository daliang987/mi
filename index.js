/************* 轮播图效果js start****************/
imgs = $(".lb-product").children("img");

$(".lb-button")
  .children("li")
  .first()
  .css({
    background: "#FFF"
  });

img_index = 0;

function ppt() {

  if (img_index == 6) {
    img_index = 0;
    $(".lb-product").css({
      left: 0
    });

  }


  li = $(".lb-button")
    .children("li")
    .eq(img_index);
  li.css({
    background: "#fff"
  });
  $(".lb-button")
    .children("li")
    .not(li)
    .css({
      background: "#a0a0a0"
    });


  $(".lb-product").animate({
    left: -(img_index * 1226) + "px"
  });

  img_index++;

  if (img_index == 6) {
    $(".lb-button").children("li").eq(0).css({
      background: "#fff"
    });
  }

}

pTimer = setInterval(ppt, 3000);

$(".lunbo")
  .mouseenter(function () {
    if (pTimer) {
      clearInterval(pTimer);
    }
  })
  .mouseleave(function () {
    pTimer = setInterval(ppt, 3000);
  });

$(".lb-button li").click(function () {
  // if (pTimer) {
  //   clearInterval(pTimer);
  // }
  $(this).css({
    background: "#fff"
  });
  $(".lb-button li")
    .not($(this))
    .css({
      background: "#a0a0a0"
    });
  img_index = $(this).index();
  $(".lb-product").animate({
    left: -(img_index * 1226) + "px"
  });
});

/*************轮播图效果js end***************/

/************* 轮播图上主菜单 start***************/

$(".lbmenu li")
  .mouseenter(function () {
    lbmenu_index = $(this).index();

    divmenu = $(".lb-detail-list")
      .children()
      .eq(lbmenu_index);
    divmenu.show();
    $(".lb-detail-list")
      .children()
      .not(divmenu)
      .hide();
  })
  .mouseleave(function (e) {
    lbmenu_index = $(this).index();
    divmenu = $(".lb-detail-list")
      .children()
      .eq(lbmenu_index);

    divmenu.mouseleave(function () {
      $(this).hide();
    });

    var y1 = divmenu.offset().top;
    var x1 = divmenu.offset().left;
    y2 = y1 + divmenu.height();
    x2 = x1 + divmenu.width();
    x = e.pageX;
    y = e.pageY;
    // console.log(x, y, x1, y1, x2, y2);
    if (x < x1 || x > x2 || y < y1 || y > y2) {
      divmenu.hide();
    }
  });

/************* 轮播图上主菜单 end***************/


/***************明星单品轮播图 start******************/



$(".btnSwitch .btn-nav:first").click(function () {
  item_left = parseInt($(".items-show").css("margin-left"));
  // alert(item_left);
  if (item_left >= -2480) {
    item_left = (item_left - 1240) + "px";
    $(".items-show").animate({ marginLeft: item_left }, "slow");
  }

  item_left = parseInt(item_left);
  if (item_left == -3720) {
    $(this).addClass("btn-nav-disable");
    $(this).attr("disabled")
  }

  if (item_left <= -1240) {
    $(".btnSwitch .btn-nav:last").removeClass("btn-nav-disable");
    $(".btnSwitch .btn-nav:last").addClass("btn-nav-able");
    $(".btnSwitch .btn-nav:last").attr("enabled");

  }

})

$(".btnSwitch .btn-nav:last").click(function () {
  item_left = parseInt($(".items-show").css("margin-left"));
  // alert(item_left);
  if (item_left <= -1240) {
    item_left = (item_left + 1240) + "px";
    $(".items-show").animate({ marginLeft: item_left }, "slow");
  }

  item_left = parseInt(item_left);
  if (item_left == 0) {
    $(this).addClass("btn-nav-disable");
    $(this).attr("disabled")
  }

  if (item_left >= -3720) {
    $(".btnSwitch .btn-nav:first").removeClass("btn-nav-disable");
    $(".btnSwitch .btn-nav:first").addClass("btn-nav-able");
    $(".btnSwitch .btn-nav:first").attr("enabled");
  }

})


/***************明星单品轮播图 end******************/
