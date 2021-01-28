$(function() {
  $("#input").keyup(function(e) {
    let s = $("#input").val();

    s = s.replace(/\a/g, "i");
    s = s.replace(/\e/g, "i");
    s = s.replace(/\u/g, "i");
    s = s.replace(/\o/g, "i");
    s = s.replace(/\A/g, "I");
    s = s.replace(/\U/g, "I");
    s = s.replace(/\E/g, "I");
    s = s.replace(/\O/g, "I");

    $("#output").val(s);
  });

  $("#btn-reset").click(function(e) {
    e.preventDefault();
    $("#input").val("");
    $("#output").val("");
  });
});
