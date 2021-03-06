$(function () {
var menuItems = $("nav.ui.menu .item");
menuItems
.click(function (i) {
    var section = this.getAttribute("data-section");
    console.log("Data section = " + section);
    var offset = $("#" + section).offset();
    $("html, body").animate({
      scrollTop: offset.top,
    });
    $(this)
    .addClass("active")
    .closest(".ui.menu")
    .find(".item")
    .not($(this))
    .removeClass("active");
  });
var activate = function() {
  menuItems.filter(".active").removeClass("active");
  $('nav [data-section="' + this.id + '"]').addClass("active");
};
$("main section")
.visibility({
    observeChanges: false,
    once: false,
    offset: $(window).height() / 2,
    onTopPassed: activate,
    onBottomPassedReverse: activate
  });
});
$("#project1").click(function (e) {
    $("#portfolio_header").html('WEB & APP DESIGN');
    $("#project_frame").attr('src', 'project1.html');
    $(".fullscreen.modal").modal("show");
});
$("#project2").click(function (e) {
    $("#portfolio_header").html('DIGITAL ADVERTISING');
    $("#project_frame").attr('src', 'project2.html');
    $(".fullscreen.modal").modal("show");
});
$("#project_object").click(function (e) {
    $("#portfolio_header").html('Objects');
    $("#project_frame").attr('src', 'object.html');
    $(".fullscreen.modal").modal("show");
});
$("#project_print").click(function (e) {
    $("#portfolio_header").html('PRINT & GRAPHIC DESIGN');
    $("#project_frame").attr('src', 'print.html');
    $(".fullscreen.modal").modal("show");
});
