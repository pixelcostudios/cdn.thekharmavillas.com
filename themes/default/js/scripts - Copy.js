/* Dore Theme Select & Initializer Script 

Table of Contents

01. Css Loading Util
02. Theme Selector And Initializer
*/
if (location.hostname === "localhost" || location.hostname === "localhost80" || location.hostname === "localhost80.local" || location.hostname === "127.0.0.1") {
  var urlArray = window.location.pathname.split('/');
  var url_Base = document.location.origin + '/' + urlArray[1] + '/' + urlArray[2] + '/';
  var urlPost = urlArray[3];
} else {
  var urlArray = window.location.pathname.split('/');
  var url_Base = document.location.origin + '/';
  var urlPost = urlArray[1];
}
//console.log(url_Base);
/* 01. Css Loading Util */
function loadStyle(href, callback) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].href == href) {
      return;
    }
  }
  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";

  if (location.hostname === "localhost" || location.hostname === "localhost80" || location.hostname === "localhost80.local" || location.hostname === "127.0.0.1") {
    link.href = url_Base+""+href;
  }
  else
  {
    link.href = url_Base+""+href;
  }
  
  //console.log(link.href);

  if (callback) {
    link.onload = function () {
      callback();
    };
  }
  var mainCss = $(head).find('[href$="main.css"]');
  if (mainCss.length !== 0) {
    mainCss[0].before(link);
    //console.log(mainCss);
  } else {
    head.appendChild(link);
  }
}

/* 02. Theme Selector, Layout Direction And Initializer */
(function ($) {
  if ($().dropzone) {
    Dropzone.autoDiscover = false;
  }

  $(document).on("click", ".open-modal_deleted", function () {
		var mypost_id = $(this).data('id');
    var mypost_title = $(this).data('title');
    //console.log(mypost_title);
		$(".modal-body #post_id").val(mypost_id);
    $(".modal-body #deleted_title").html(mypost_title);
		$('#modal_deleted').modal('show');
	});
  try {
    var isPrivateTab = false;
    localStorage.setItem("dore-is-private-tab", isPrivateTab);
    var themeColorsDom = /*html*/`
  <div class="theme-colors">
    <div class="p-4">
    <p class="text-muted mb-2">Light Theme</p>
    <div class="d-flex flex-row justify-content-between mb-3">
      <a href="#" data-theme="dore.light.bluenavy.min.css" class="theme-color theme-color-bluenavy"></a>
      <a href="#" data-theme="dore.light.blueyale.min.css" class="theme-color theme-color-blueyale"></a>
      <a href="#" data-theme="dore.light.blueolympic.min.css" class="theme-color theme-color-blueolympic"></a>
      <a href="#" data-theme="dore.light.greenmoss.min.css" class="theme-color theme-color-greenmoss"></a>
      <a href="#" data-theme="dore.light.greenlime.min.css" class="theme-color theme-color-greenlime"></a>
    </div>
    <div class="d-flex flex-row justify-content-between mb-4">
      <a href="#" data-theme="dore.light.purplemonster.min.css" class="theme-color theme-color-purplemonster"></a>
      <a href="#" data-theme="dore.light.orangecarrot.min.css" class="theme-color theme-color-orangecarrot"></a>
      <a href="#" data-theme="dore.light.redruby.min.css" class="theme-color theme-color-redruby"></a>
      <a href="#" data-theme="dore.light.yellowgranola.min.css" class="theme-color theme-color-yellowgranola"></a>
      <a href="#" data-theme="dore.light.greysteel.min.css" class="theme-color theme-color-greysteel"></a>
    </div>
    <p class="text-muted mb-2">Dark Theme</p>
    <div class="d-flex flex-row justify-content-between mb-3">
      <a href="#" data-theme="dore.dark.bluenavy.min.css" class="theme-color theme-color-bluenavy"></a>
      <a href="#" data-theme="dore.dark.blueyale.min.css" class="theme-color theme-color-blueyale"></a>
      <a href="#" data-theme="dore.dark.blueolympic.min.css" class="theme-color theme-color-blueolympic"></a>
      <a href="#" data-theme="dore.dark.greenmoss.min.css" class="theme-color theme-color-greenmoss"></a>
      <a href="#" data-theme="dore.dark.greenlime.min.css" class="theme-color theme-color-greenlime"></a>
    </div>
    <div class="d-flex flex-row justify-content-between">
    <a href="#" data-theme="dore.dark.purplemonster.min.css" class="theme-color theme-color-purplemonster"></a>
    <a href="#" data-theme="dore.dark.orangecarrot.min.css" class="theme-color theme-color-orangecarrot"></a>
    <a href="#" data-theme="dore.dark.redruby.min.css" class="theme-color theme-color-redruby"></a>
    <a href="#" data-theme="dore.dark.yellowgranola.min.css" class="theme-color theme-color-yellowgranola"></a>
    <a href="#" data-theme="dore.dark.greysteel.min.css" class="theme-color theme-color-greysteel"></a>
  </div>
  </div>
  <div class="p-4">
    <p class="text-muted mb-2">Border Radius</p>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="roundedRadio" name="radiusRadio" class="custom-control-input radius-radio" data-radius="rounded">
      <label class="custom-control-label" for="roundedRadio">Rounded</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="flatRadio" name="radiusRadio" class="custom-control-input radius-radio" data-radius="flat">
      <label class="custom-control-label" for="flatRadio">Flat</label>
    </div>
  </div>
  <div class="p-4">
    <p class="text-muted mb-2">Direction</p>
    <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="ltrRadio" name="directionRadio" class="custom-control-input direction-radio" data-direction="ltr">
    <label class="custom-control-label" for="ltrRadio">Ltr</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="rtlRadio" name="directionRadio" class="custom-control-input direction-radio" data-direction="rtl">
    <label class="custom-control-label" for="rtlRadio">Rtl</label>
  </div>
</div>
<a href="#" class="theme-button"> <i class="simple-icon-magic-wand"></i> </a>
</div>
`;

    $("body").append(themeColorsDom);
  } catch (error) {}


  /* Default Theme Color, Border Radius and  Direction */
  var theme = "themes/default/css/dore.light.bluenavy.min.css";
  var direction = "ltr";
  var radius = "rounded";

  try {
    if (localStorage.getItem("dore-theme-color")) {
      theme = localStorage.getItem("dore-theme-color");
    } else {
      localStorage.setItem("dore-theme-color", theme);
    }
    if (localStorage.getItem("dore-direction")) {
      direction = localStorage.getItem("dore-direction");
    } else {
      localStorage.setItem("dore-direction", direction);
    }
    if (localStorage.getItem("dore-radius")) {
      radius = localStorage.getItem("dore-radius");
    } else {
      localStorage.setItem("dore-radius", radius);
    }
  } catch (error) {
    theme = "dore.light.bluenavy.min.css";
    direction = "ltr";
    radius = "rounded";
  }

  $(".theme-color[data-theme='" + theme + "']").addClass("active");
  $(".direction-radio[data-direction='" + direction + "']").attr("checked", true);
  $(".radius-radio[data-radius='" + radius + "']").attr("checked", true);
  $("#switchDark").attr("checked", theme.indexOf("dark") > 0 ? true : false);

  if (location.hostname === "localhost" || location.hostname === "localhost80" || location.hostname === "localhost80.local" || location.hostname === "127.0.0.1") {
    loadStyle( theme, onStyleComplete);
  }
  else
  {
    loadStyle( theme, onStyleComplete);
  }
  //console.log(location.hostname);
  function onStyleComplete() {
    setTimeout(onStyleCompleteDelayed, 300);
  }

  function onStyleCompleteDelayed() {
    $("body").addClass(direction);
    $("html").attr("dir", direction);
    $("body").addClass(radius);
    $("body").dore();
  }

  $("body").on("click", ".theme-color", function (event) {
    event.preventDefault();
    var dataTheme = $(this).data("theme");
    try {
      localStorage.setItem("dore-theme-color", dataTheme);
      window.location.reload();
    } catch (error) { }
  });

  $("input[name='directionRadio']").on("change", function (event) {
    var direction = $(event.currentTarget).data("direction");
    try {
      localStorage.setItem("dore-direction", direction);
      window.location.reload();
    } catch (error) { }
  });

  $("input[name='radiusRadio']").on("change", function (event) {
    var radius = $(event.currentTarget).data("radius");
    try {
      localStorage.setItem("dore-radius", radius);
      window.location.reload();
    } catch (error) { }
  });

  $("#switchDark").on("change", function (event) {
    var mode = $(event.currentTarget)[0].checked ? "dark" : "light";
    if (mode == "dark") {
      theme = theme.replace("light", "dark");
    } else if (mode == "light") {
      theme = theme.replace("dark", "light");
    }

    try {
      localStorage.setItem("dore-theme-color", theme);
      window.location.reload();
    } catch (error) { }
  });

  $(".theme-button").on("click", function (event) {
    event.preventDefault();
    $(this)
      .parents(".theme-colors")
      .toggleClass("shown");
  });

  $(document).on("click", function (event) {
    if (
      !(
        $(event.target)
          .parents()
          .hasClass("theme-colors") ||
        $(event.target)
          .parents()
          .hasClass("theme-button") ||
        $(event.target).hasClass("theme-button") ||
        $(event.target).hasClass("theme-colors")
      )
    ) {
      if ($(".theme-colors").hasClass("shown")) {
        $(".theme-colors").removeClass("shown");
      }
    }
  });
})(jQuery);
$('#input01').filestyle()

$('#input02').filestyle({
	buttonText: 'My filestyle'
});

$('#input03').filestyle({
	input: false,
	classButton: 'btn btn-primary'
});

$('#input04').filestyle({
	icon: false
});

$('#input05').filestyle({
	classButton: 'btn btn-warning'
});

$('#input06').filestyle({
	classInput: 'input-small'
});

$('#input07').filestyle({
	classIcon: 'icon-plus',
	buttonText: 'Add'
});

$('#input08').filestyle({
	buttonText: 'File',
	classButton: 'btn btn-success'
});

$('#clear').click(function () {
	$('#input08').filestyle('clear');
});

$('#input09').filestyle({
	buttonText: 'File',
	classButton: 'btn btn-primary'
});

$('#toggleInput').click(function () {
	var fs = $('#input09');
	if (fs.filestyle('input'))
		fs.filestyle('input', false);
	else
	   	fs.filestyle('input', true);
});

$('#input10').filestyle({
	buttonText: 'File',
	classButton: 'btn btn-primary'
});

$('#toggleIcon').click(function () {
	var fs = $('#input10');
	if (fs.filestyle('icon'))
		fs.filestyle('icon', false);
	else
	   	fs.filestyle('icon', true);
});

$('#input_images').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_icon').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_thumb').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_background').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_detail').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_pdf').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_files').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_avatar').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_logo').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_logo2').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_header').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_footer').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_logo_dashboard').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_favicon').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});
$('#input_favicon_dashboard').filestyle({
	buttonText: '',
	classButton: 'input-group-addon bg-blue bordered-blue'
});