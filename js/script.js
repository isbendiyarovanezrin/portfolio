// background music
const song = document.getElementById("song");
song.play();

// loader
$(window).on("load", () => {
  setTimeout(removeLoader, 1800);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(400, () => {
    $("#loadingDiv").remove();
  });
}

document.body.style.overflow = "hidden";

window.onload = function () {
  document.body.style.overflow = "auto";
  document.getElementById("loadingDiv").style.display = "none";
};
