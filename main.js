Hooks.once('init', () => {
	if (typeof Babele !== 'undefined') {
	  Babele.get().register({
		module: 'dnd-ptbr-expandido',
		lang: 'pt-BR',
		dir: 'lang/pt-BR/compendium'
	  });
	}
  });