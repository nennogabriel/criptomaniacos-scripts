var $_CM = {
  phone: '554892032212',
  message: 'Olá! Gostaria de conversar com o time de atendimento.',
};

!(function (d) {
  const e = d.createElement('img');
  (e.src = 'https://s.cmania.co/assets/whatsapp-logo.svg'),
    (e.style.width = '80px'),
    (e.style.height = '80px');
  const t = d.createElement('a');
  (t.href = `https://wa.me/${$_CM.phone}?text=${$_CM.message}`),
    (t.target = '_blank'),
    (t.style.display = 'block'),
    (t.style.position = 'fixed'),
    (t.style.bottom = '20px'),
    (t.style.right = '20px'),
    (t.style.zIndex = '9'),
    (t.style.backgroundColor = 'tansparent'),
    t.appendChild(e);
  var s = 'div';
  (s = document.getElementsByTagName(s)[0]).parentNode.insertBefore(t, s);
})(document);
