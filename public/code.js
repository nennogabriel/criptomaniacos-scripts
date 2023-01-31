var $_Huggy = {
  defaultCountry: "+55",
  company: "335060",
};

((d, h) => {
  function v(n, a) {
    return n.endsWith(a);
  }

  // huggy uuid
  switch (!0) {
    case v(d, "plataforma.criptomasterclass.com"):
    case v(d, "criptomasterclass.com"):
      h.uuid = "49e5258f-239c-4598-88f3-62fe651eb330";
      break;
    case v(d, "www.app.criptomaniacos.io"):
    case v(d, "plataforma.criptomaniacos.com.br"):
    case v(d, "criptomaniacos.app"):
      h.uuid = "eb23b2fe-ab27-4358-b165-66f50a7cdaf3";
      break;
    case v(d, "lp.criptomaniacos.io"):
      h.uuid = "";
      break;
    default:
      h.uuid = "b7bc2fce-928a-407b-b55e-228a1a3df0dd";
      h.channelGreeting = "Olá! Gostaria de conversar com o time de atendimento.";
  }
})(document.location.hostname, $_Huggy);

// Huggy - Customer Experience Chat
if ($_Huggy.uuid) {
  fetch("https://s.cmania.co/api/status/huggy")
    .then((r) => r.json())
    .then((j) => {
      const { huggy } = j;
      if (huggy) {
        (function (i, s, o, g, r, a, m) {
          i[r] = { context: { id: "6f572ea0161fbcb0a44168df7c23ea65" } };
          a = o;
          o = s.createElement(o);
          o.async = 1;
          o.src = g;
          m = s.getElementsByTagName(a)[0];
          m.parentNode.insertBefore(o, m);
        })(window, document, "script", "https://js.huggy.chat/widget.min.js", "pwz");
      } else {
        !(function (b, t, c) {
          ((c = t.createElement(b)).async = 1),
            (c.src = "https://s.cmania.co/tools/whatsapp.js"),
            (b = t.getElementsByTagName(b)[0]).parentNode.insertBefore(c, b);
        })("script", document);
      }
    });
}

// Make all links open in a new tab
window.onload = function () {
  var anchors = document.getElementsByTagName("a");
  if (document.location.hostname == "plataforma.criptomaniacos.com.br") {
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].href.startsWith("https://plataforma.criptomaniacos.com.br/")) {
        break;
      }
      anchors[i].setAttribute("target", "_blank");
    }
  }
};
