var $_CM = {
  phone: '554892032212',
  message: 'Olá! Gostaria de conversar com o time de atendimento.',
};

!(function () {
  const e = document.createElement('a');
  (e.href = `https://wa.me/${$_CM.phone}?text=${$_CM.message}`),
    (e.target = '_blank'),
    (e.style.display = 'block'),
    (e.style.position = 'fixed'),
    (e.style.bottom = '20px'),
    (e.style.right = '20px'),
    (e.style.zIndex = '9'),
    (e.style.backgroundColor = '#25D366'),
    (e.style.textDecoration = 'none'),
    (e.style.color = '#fff'),
    (e.style.padding = '8px 16px'),
    (e.style.borderRadius = '8px'),
    e.appendChild(document.createTextNode('WhatsApp'));
  var t = 'div';
  (t = document.getElementsByTagName(t)[0]).parentNode.insertBefore(e, t);
})();