// JavaScript Document

jssor_2_slider_init = function() {

var jssor_2_options = {
  $AutoPlay: 1,
  $SlideWidth: 720,
  $ArrowNavigatorOptions: {
    $Class: $JssorArrowNavigator$
  },
  $BulletNavigatorOptions: {
    $Class: $JssorBulletNavigator$
  }
};

var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

/*#region responsive code begin*/

var MAX_WIDTH = 980;

function ScaleSlider() {
    var containerElement = jssor_2_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;

    if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_2_slider.$ScaleWidth(expectedWidth);
    }
    else {
        window.setTimeout(ScaleSlider, 30);
    }
}

ScaleSlider();

$Jssor$.$AddEvent(window, "load", ScaleSlider);
$Jssor$.$AddEvent(window, "resize", ScaleSlider);
$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
/*#endregion responsive code end*/
};
        