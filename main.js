function copyText(text) {
  navigator.clipboard.writeText(text);
  Toastify({
    text: "copied to clipboard!",
    style: {
      background: "#453a4f",
    },
  }).showToast();
}
window.addEventListener("load", function () {
  tippy("#mastodon", {
    content: "@sky@defcon.social",
    animation: "shift-away-subtle",
    interactive: true
  });
  particlesJS.load("particles-js", "particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
});
