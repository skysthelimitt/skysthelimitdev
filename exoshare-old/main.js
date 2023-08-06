function generateThumb() {
  if ($("#levelid").val() == "" || $("#version").val() == "") {
    alert("Please put something inside of Level ID and Version.");
    return;
  }
  thumb =
    "https://storage.googleapis.com/exoracer-bd008.appspot.com/levels/" +
    $("#levelid").val() +
    "-" +
    $("#version").val() +
    ".png";
  $("#thumb").val(thumb);
  toast("Created thumbnail URL.");
}

function checkLink() {
    console.log("not available rn :(");
}

function createLink() {
    level_id = $("#levelid").val();
    ver = $("#version").val();
    title = $("#title").val();
    desc = $("#desc").val();
    thumb = $("#thumb").val();

    if(level_id == "" || title == "" || ver == "" || desc == "" || thumb == "") {
        toast("Make sure to fill every input box.");
        return;
    }

    longurl = "https://exoracer.page.link/?link=https://exoracer.io/?link%3DLEVEL%26levelId%3D" + level_id + "%26levelVersion%3D" + ver + "&apn=com.nyanstudio.exoracer&ofl=https://exoracer.io/deeplinkfallback.php?title%3D" + title + "%26description%3D" + desc + "%26imageUrl%3D" + thumb + "&ibi=com.nyanstudio.exoracer&st=" + title + "&sd=" + desc + "&si=" + thumb;
    navigator.clipboard.writeText(longurl);
}

function toast(toasttext) {
    Toastify({
        text: toasttext,
        duration: 5000,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "toast",
        style: {
          background: "#301482",
          borderColor: "#784eec",
          borderWidth: "thick",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
}