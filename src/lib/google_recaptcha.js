const initRecaptcha = async () => {
	(function () {
		var w = window,
			C = '___grecaptcha_cfg',
			cfg = (w[C] = w[C] || {}),
			N = 'grecaptcha';
		var gr = (w[N] = w[N] || {});
		gr.ready =
			gr.ready ||
			function (f) {
				(cfg['fns'] = cfg['fns'] || []).push(f);
			};
		w['__recaptcha_api'] = 'https://www.google.com/recaptcha/api2/';
		(cfg['render'] = cfg['render'] || []).push('onload');
		w['__google_recaptcha_client'] = true;
		var d = document,
			po = d.createElement('script');
		po.type = 'text/javascript';
		po.async = true;
		var v = w.navigator,
			m = d.createElement('meta');
		m.httpEquiv = 'origin-trial';
		m.content =
			'Az520Inasey3TAyqLyojQa8MnmCALSEU29yQFW8dePZ7xQTvSt73pHazLFTK5f7SyLUJSo2uKLesEtEa9aUYcgMAAACPeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=';
		if (v && v.cookieDeprecationLabel) {
			v.cookieDeprecationLabel.getValue().then(function (l) {
				if (l !== 'treatment_1.1' && l !== 'treatment_1.2' && l !== 'control_1.1') {
					d.head.prepend(m);
				}
			});
		} else {
			d.head.prepend(m);
		}
		po.src =
			'https://www.gstatic.com/recaptcha/releases/DH3nyJMamEclyfe-nztbfV8S/recaptcha__pt_br.js';
		po.crossOrigin = 'anonymous';
		po.integrity = 'sha384-666IxluSOP3w2F/vHro2IAl7ksHGvVPvAsWC2eZhsMsv0bD5RotT7KwXwUp4QIgU';
		var e = d.querySelector('script[nonce]'),
			n = e && (e['nonce'] || e.getAttribute('nonce'));
		if (n) {
			po.setAttribute('nonce', n);
		}
		var s = d.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(po, s);
	})();
};

const setKey = (e) => {
	const keyadmin = e.target.value;
	localStorage.setItem('key_admin', keyadmin);
};

const getKey = () => {
	return localStorage.getItem('key_admin');
};

const KEY_RECAPTCHA = '6LdrROwpAAAAAPJdEUdTZnqwmraKFeGXXJkNytsw';

export { initRecaptcha, KEY_RECAPTCHA, setKey, getKey };
