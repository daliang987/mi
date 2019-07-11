imgs = $(".lb-product").children("img");

img_index = 0;
function ppt() {
  if (img_index == 5) {
    img_index = 0;
  }
  $(".lb-product").animate({
    left: -(img_index * 1226) + "px"
  });
  img_index++;
}

pTimer = setInterval(ppt, 2000);

$(".lunbo")
  .mouseenter(function() {
    if (pTimer) {
      clearInterval(pTimer);
    }
  })
  .mouseleave(function() {
    pTimer = setInterval(ppt, 2000);
  });
