// "Copy" buttons on code samples: clipboard when allowed, otherwise select the text.
document.querySelectorAll("[data-copy]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var pre = document.getElementById(btn.getAttribute("data-copy"));
    var text = pre.innerText;
    function done(label) { btn.textContent = label; setTimeout(function () { btn.textContent = "Copy"; }, 1600); }
    function selectIt() {
      var r = document.createRange(); r.selectNodeContents(pre);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); done("Selected");
    }
    try {
      navigator.clipboard.writeText(text).then(function () { done("Copied"); }, selectIt);
    } catch (e) { selectIt(); }
  });
});
