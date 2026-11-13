/* INDIKA · aviso de manutenção das compras
   Para DESLIGAR o aviso quando o checkout voltar: troque true por false. */
var INDIKA_MANUTENCAO = false;

(function () {
  if (!INDIKA_MANUTENCAO) return;
  var css = document.createElement("style");
  css.textContent =
    ".mnt-bar{background:#2bff88;color:#05110a;font:600 14px/1.4 system-ui,sans-serif;text-align:center;padding:10px 14px;position:relative;z-index:9999}" +
    ".mnt-ov{position:fixed;inset:0;background:rgba(0,0,0,.75);display:none;align-items:center;justify-content:center;z-index:10000;padding:20px}" +
    ".mnt-ov.on{display:flex}" +
    ".mnt-box{background:#0b0f0d;border:1px solid rgba(43,255,136,.4);border-radius:18px;max-width:380px;width:100%;padding:26px 22px;text-align:center;color:#e8f0ec;font-family:system-ui,sans-serif;box-shadow:0 0 40px rgba(43,255,136,.15)}" +
    ".mnt-box h3{margin:6px 0 10px;font-size:20px;color:#2bff88}" +
    ".mnt-box p{margin:0 0 18px;font-size:15px;line-height:1.5;color:#cfd8d5}" +
    ".mnt-box button{background:#2bff88;color:#05110a;border:0;border-radius:999px;padding:12px 26px;font-weight:700;font-size:15px;cursor:pointer}";
  document.head.appendChild(css);

  function init() {
    var bar = document.createElement("div");
    bar.className = "mnt-bar";
    bar.textContent = "🔧 Compras em manutenção. Voltamos em breve, seu link de indicação continua valendo.";
    document.body.insertBefore(bar, document.body.firstChild);

    var ov = document.createElement("div");
    ov.className = "mnt-ov";
    ov.innerHTML =
      '<div class="mnt-box"><div style="font-size:34px">🔧</div><h3>Em manutenção</h3>' +
      "<p>As compras do e-book estão temporariamente pausadas para ajustes no pagamento. " +
      "Volte em breve: quem chegou pelo link de um indicador continua vinculado a ele.</p>" +
      "<button type=\"button\">Entendi</button></div>";
    document.body.appendChild(ov);
    ov.addEventListener("click", function (e) {
      if (e.target === ov || e.target.tagName === "BUTTON") ov.classList.remove("on");
    });

    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a");
      if (!a || !/chk\.eduzz\.com/.test(a.href || "")) return;
      e.preventDefault();
      e.stopPropagation();
      ov.classList.add("on");
    }, true);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
