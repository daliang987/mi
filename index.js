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
    $(".lb-button")
      .children("li")
      .eq(0)
      .css({
        background: "#fff"
      });
  }
}

pTimer = setInterval(ppt, 3000);

$(".lunbo")
  .mouseenter(function() {
    if (pTimer) {
      clearInterval(pTimer);
    }
  })
  .mouseleave(function() {
    if (!pTimer) {
      pTimer = setInterval(ppt, 3000);
    }
  });

$(".lb-button li").click(function() {
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
  .mouseenter(function() {
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
  .mouseleave(function(e) {
    lbmenu_index = $(this).index();
    divmenu = $(".lb-detail-list")
      .children()
      .eq(lbmenu_index);

    divmenu.mouseleave(function() {
      $(this).hide();
    });

    var y1 = divmenu.offset().top;
    var x1 = divmenu.offset().left;
    var y2 = y1 + divmenu.height();
    var x2 = x1 + divmenu.width();
    var x = e.pageX;
    var y = e.pageY;
    // console.log(x, y, x1, y1, x2, y2);
    if (x < x1 || x > x2 || y < y1 || y > y2) {
      divmenu.hide();
    }
  });

/************* 轮播图上主菜单 end***************/

/***************明星单品轮播图 start******************/

$(".btnSwitch").each(function() {
  $(this)
    .children(".btn-nav:first")
    .click(function() {
      item_left = parseInt($(".items-show").css("margin-left"));
      // alert(item_left);
      if (item_left >= -2480) {
        item_left = item_left - 1240 + "px";
        $(".items-show").animate({ marginLeft: item_left }, "slow");
      }

      item_left = parseInt(item_left);
      if (item_left == -3720) {
        $(this).addClass("btn-nav-disable");
        $(this).attr("disabled");
      }

      if (item_left <= -1240) {
        $(".btnSwitch .btn-nav:last").removeClass("btn-nav-disable");
        $(".btnSwitch .btn-nav:last").addClass("btn-nav-able");
        $(".btnSwitch .btn-nav:last").attr("enabled");
      }
    });
});

$(".btnSwitch").each(function() {
  $(this)
    .children(".btn-nav:last")
    .click(function() {
      item_left = parseInt($(".items-show").css("margin-left"));
      // alert(item_left);
      if (item_left <= -1240) {
        item_left = item_left + 1240 + "px";
        $(".items-show").animate({ marginLeft: item_left }, "slow");
      }

      item_left = parseInt(item_left);
      if (item_left == 0) {
        $(this).addClass("btn-nav-disable");
        $(this).attr("disabled");
      }

      if (item_left >= -3720) {
        $(".btnSwitch .btn-nav:first").removeClass("btn-nav-disable");
        $(".btnSwitch .btn-nav:first").addClass("btn-nav-able");
        $(".btnSwitch .btn-nav:first").attr("enabled");
      }
    });
});

/***************明星单品轮播图 end******************/

/***************完成商品展示动态效果 start ***************/

$(".digital .right-item").hide();
$(".digital").each(function() {
  $(this)
    .find(".right-item")
    .first()
    .show();
});

$(".digital ul li").mouseenter(function() {
  nav_index = $(this).index();
  nav_length = $(this)
    .parents("ul")
    .children("li").length;
  show_tab = $(this)
    .parents(".digital")
    .find(".right-item")
    .eq(nav_length - 1 - nav_index);
  show_tab.show();
  $(this)
    .parents(".digital")
    .find(".right-item")
    .not(show_tab)
    .hide();

  nav_link = $(this)
    .parents(".digital")
    .find("a")
    .eq(nav_index);
  nav_link.addClass("nav-link-active");
  $(this)
    .parents(".digital")
    .find("a")
    .not(nav_link)
    .removeClass("nav-link-active");
});

/***************完成商品展示动态效果 end **************/

/**************** 内容展示块轮播效果 start***************/

$(".content-item").each(function() {
  $(this)
    .mouseenter(function() {
      $(this)
        .find(".middle-button-left")
        .fadeIn();
      $(this)
        .find(".middle-button-right")
        .fadeIn();
    })
    .mouseleave(function() {
      $(this)
        .find(".middle-button-left")
        .fadeOut();
      $(this)
        .find(".middle-button-right")
        .fadeOut();
    });

  var content_ppt_left = parseInt(
    $(this)
      .parent()
      .find(".content-ppt-body")
      .css("left")
  );
  $(this)
    .find(".middle-button-left")
    .click(function() {
      var content_ppt_left = parseInt(
        $(this)
          .parent()
          .find(".content-ppt-body")
          .css("left")
      );
      if (content_ppt_left != 0) {
        $(this)
          .parent()
          .find(".content-ppt-body")
          .animate(
            {
              left: content_ppt_left + 294 + "px"
            },
            "fast"
          );

        $(this)
          .parent()
          .find(".bottom-button-li-active")
          .addClass("bottom-button-li")
          .removeClass("bottom-button-li-active")
          .prev()
          .addClass("bottom-button-li-active")
          .removeClass("bottom-button-li");
      }
    });
  $(this)
    .find(".middle-button-right")
    .click(function() {
      var content_ppt_left = parseInt(
        $(this)
          .parent()
          .find(".content-ppt-body")
          .css("left")
      );
      if (content_ppt_left != -588) {
        $(this)
          .parent()
          .find(".content-ppt-body")
          .animate(
            {
              left: content_ppt_left - 294 + "px"
            },
            "fast"
          );

        $(this)
          .parent()
          .find(".bottom-button-li-active")
          .next()
          .addClass("bottom-button-li-active")
          .removeClass("bottom-button-li")
          .siblings("li")
          .addClass("bottom-button-li")
          .removeClass("bottom-button-li-active");
      }
    });

  $(this)
    .find(".bottom-button")
    .each(function() {
      $(this)
        .find("li")
        .click(function() {
          $(this)
            .addClass("bottom-button-li-active")
            .removeClass("bottom-button-li");
          $(this)
            .siblings()
            .addClass("bottom-button-li")
            .removeClass("bottom-button-li-active");

          b_index = $(this).index();
          content_ppt_left = parseInt(
            $(this)
              .parent()
              .parent()
              .find(".content-ppt-body")
              .css("left")
          );

          $(this)
            .parent()
            .parent()
            .find(".content-ppt-body")
            .animate(
              {
                left: -(b_index * 294) + "px"
              },
              "fast"
            );
        });
    });
});

/**************** 内容展示块轮播效果 end***************/

/****************** 视频播放鼠标滑入效果 start**************/

$(".video-content")
  .find(".video-item")
  .each(function() {
    $(this)
      .mouseenter(function() {
        $(this)
          .find(".video-play")
          .css({ "border-color": "#ff6700" })
          .addClass("video-play-mouse");
      })
      .mouseleave(function() {
        $(this)
          .find(".video-play")
          .css({ "border-color": "#fff" })
          .removeClass("video-play-mouse");
      });
  });

/****************** 视频播放鼠标滑入效果 end**************/

/********************购物车动画 start**********************/

$(".cart")
  .mouseenter(function() {
    $(this)
      .find(".cartmenu")
      .stop()
      .slideDown("fast");
  })
  .mouseleave(function() {
    $(this)
      .find(".cartmenu")
      .stop()
      .slideUp("fast");
  });

/********************购物车动画 end**********************/

/********************购物车动画 start**********************/

$(".nav_product .nav_product_list")
  .children("li")
  .each(function() {
    $(this).mouseenter(function() {
      var li_index = $(this).index();
      $(".nav_product_container")
        .stop()
        .slideDown("fast");

      $(".nav_product_container")
        .find("ul")
        .hide();
      $(".nav_product_container")
        .find("ul")
        .eq(li_index)
        .show();
    });
  })
  .mouseleave(function(e) {

    $(".nav_product_container").mouseleave(function(){
      $(this).stop().slideUp();
    })

    var nav_y1 = $(".nav_product_container").offset().top;
    var nav_x1 = $(".nav_product_container").offset().left;
    var nav_y2 = nav_y1 + $(".nav_product_container").height();
    var nav_x2 = nav_x1 + $(".nav_product_container").width();
    var x = e.pageX;
    var y = e.pageY;
    console.log(nav_x1, nav_y1, nav_x2, nav_y2);
    console.log(x,y);
    if (x < nav_x1 || x > nav_x2 || y < nav_y1 || y > nav_y2) {
      $(".nav_product_container").stop().slideUp();
    }
  });

/********************购物车动画 end**********************/
