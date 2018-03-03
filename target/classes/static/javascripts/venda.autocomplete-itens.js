Brewer = Brewer || {};

Brewer.Autocomplete = (function() {
	
	function Autocomplete() {
		this.skuOuNomeInput = $('.js-sku-nome-cerveja-input');
		var htmlTemplateAutocomplete = $('#template-autocomplete-cerveja').html();
		this.template = Handlebars.compile(htmlTemplateAutocomplete);
		this.emitter = $({});
		this.on = this.emitter.on.bind(this.emitter);
		
	}
	
	Autocomplete.prototype.iniciar = function() {
		var options = {
			
				url: function (skuOuNome){
					return '/brewer/cervejas/filtro?skuOuNome=' + skuOuNome;			
				},
			getValue: 'nome',
				minCharNumber: 3,
				requestDelay: 300,
				ajaxSettings: {
					contentType:'application/json;',
				
				  dataType:'json',
			},
			
			template: {
				type: 'custom',
				method: function(nome, cerveja) {
					cerveja.valorFormatado = Brewer.formatarMoeda(cerveja.valor);
					console.log(cerveja.valorFormatado);
					return this.template(cerveja);
				}.bind(this)
			},
			
			list: {
				onChooseEvent: function (){
					console.log('selecionou um item')
					console.log(' item-selecionado', this.skuOuNomeInput.getSelectedItemData());
					this.emitter.trigger('item-selecionado', this.skuOuNomeInput.getSelectedItemData());
				}.bind(this)
			}
		};
		this.skuOuNomeInput.easyAutocomplete(options);
		}	
	return Autocomplete
	
}());

