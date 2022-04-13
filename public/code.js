var $_Huggy = {
  defaultCountry: '+55',
  company: '335060',
};
var $_Ackee = {
  server: 'https://ackee.cmania.co',
};

((d, h, a) => {
  function v(d, h, a) {
    return d.endsWith(h);
  }
  // huggy uuid
  switch (!0) {
    case v(d, 'plataforma.criptomaniacos.com.br'):
    case v(d, 'criptomaniacos.app'):
      h.uuid = 'eb23b2fe-ab27-4358-b165-66f50a7cdaf3';
      break;
    default:
      h.uuid = 'b7bc2fce-928a-407b-b55e-228a1a3df0dd';
      h.channelGreeting =
        'Olá! Gostaria de conversar com o time de atendimento.';
  }
  // ackee domainID
  switch (!0) {
    case v(d, 'criptomaniacos.io'):
      a.domainID = 'eb978a5b-49d6-49ab-8855-53195f83dd4b';
      break;
    case v(d, 'plataforma.criptomaniacos.com.br'):
      a.domainID = '6d00427a-67dc-48a0-abd1-d0239b3300a0';
      break;
    case v(d, 'carteira.criptomaniacos.app'):
      a.domainID = '1d732e10-665a-4039-8d22-17e576be358f';
      break;
    default:
      a.domainID = '';
  }
})(document.location.hostname, $_Huggy, $_Ackee);

// Ackee - https://ackee.cmania.co
!(function (b, t, c) {
  if ($_Ackee.domainID) {
    ((c = t.createElement(b)).async = 1),
      (c.src = 'https://ackee.cmania.co/tracker.js'),
      c.setAttribute('data-ackee-server', $_Ackee.server),
      c.setAttribute('data-ackee-domain-id', $_Ackee.domainID),
      c.setAttribute(
        'data-ackee-opts',
        '{ "ignoreLocalhost": true, "detailed": true }'
      ),
      (b = t.getElementsByTagName(b)[0]).parentNode.insertBefore(c, b);
  }
})('script', document);

fetch('https://s.cmania.co/api/status/huggy')
  .then((r) => r.json())
  .then((j) => {
    const { huggy } = j;
    if (huggy) {
      (function (i, s, o, g, r, a, m) {
        i[r] = { context: { id: '6f572ea0161fbcb0a44168df7c23ea65' } };
        a = o;
        o = s.createElement(o);
        o.async = 1;
        o.src = g;
        m = s.getElementsByTagName(a)[0];
        m.parentNode.insertBefore(o, m);
      })(
        window,
        document,
        'script',
        'https://js.huggy.chat/widget.min.js',
        'pwz'
      );
    } else {
      !(function (b, t, c) {
        ((c = t.createElement(b)).async = 1),
          (c.src = 'https://s.cmania.co/tools/whatsapp.js'),
          (b = t.getElementsByTagName(b)[0]).parentNode.insertBefore(c, b);
      })('script', document);
    }
  });

window.onload = function () {
  var anchors = document.getElementsByTagName('a');
  if (document.location.hostname == 'plataforma.criptomaniacos.com.br') {
    for (var i = 0; i < anchors.length; i++) {
      if (
        anchors[i].href.startsWith('https://plataforma.criptomaniacos.com.br/')
      ) {
        break;
      }
      anchors[i].setAttribute('target', '_blank');
    }
  }
};
