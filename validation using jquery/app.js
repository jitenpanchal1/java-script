$(document).ready(() => {
  let uname = $("#name");
  let eruname = /\d/;

  let uemail = $("#email");
  let eremail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  $("#sub").on("click", function (event) {
    event.preventDefault();
    datacheck();
  });

  function datacheck() {
    if (uname.val() == "") {
      err(uname, "fill the user name");
    } else if (!eruname.test(uname.val())) {
      err(uname, "must include any number");
    } else {
      sus(uname, "good");
    }

    if (uemail.val() == "") {
      err(uemail, "email is required");
    } else if (!eremail.test(uemail.val())) {
      err(uemail, "pls enter valid mail");
    } else {
      sus(uemail, "good");
    }
  }

  function err(u, msg) {
    u.removeClass("sus-border").addClass("er-border");
    u.siblings().removeClass("fa-square-check").addClass("fa-square-xmark");
    let mssg = u.siblings(".msgg");
    mssg.removeClass("sus-msg").addClass("er-msg");
    mssg.text(msg);
  }

  function sus(u, msg) {
    u.removeClass("er-border").addClass("sus-border");
    u.siblings().removeClass("fa-square-xmark").addClass("fa-square-check");
    let mssg = u.siblings(".msgg");
    mssg.removeClass("er-msg").addClass("sus-msg");
    mssg.text(msg);
  }
});
