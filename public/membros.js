var $_Huggy = {
  defaultCountry: '+55',
  uuid: 'eb23b2fe-ab27-4358-b165-66f50a7cdaf3',
  company: '335060',
};

fetch('https://s.cmania.co/api/fauna/huggy')
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
