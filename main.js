let TwitterKey = 'ySPYuKJSadtKO7d8z618eN7xf';

$(document).ready(function(){
	$('#btc-image').attr('src', 'https://bitcoin.org/img/icons/opengraph.png');
	$('#bch-image').attr('src', 'https://coinagepro.com/wp-content/uploads/2017/08/bitcoin-cash_logo.png');
	$('#eth-image').attr('src', 'https://www.cryptocompare.com/media/20646/eth.png');
	$('#zec-image').attr('src', 'https://www.cryptocompare.com/media/351360/zec.png');
})


// CRYPTOCOMPARE API 
let baseurl_price = "https://min-api.cryptocompare.com/data/price?",
	baseurl_data = "https://min-api.cryptocompare.com/data/pricemultifull?",
	tsym = 'USD',
	btc = 'BTC',
	bch = 'BCH',
	eth = 'ETH',
	zec = 'ZEC',
	coins = [btc, bch, eth, zec];


	let url = baseurl_data + "fsyms=" + 'BTC,BCH,ETH,ZEC' + "&tsyms=" + tsym;
	
	$.getJSON(url, function(data){
		$.each(coins, function(){
			let lowered = this.toLowerCase();
			let refCurrent = "#" + lowered + "-current";
			let refHigh = "#" + lowered + "-high";
			let refLow = "#" + lowered + "-low";
			let ref2 = this;
			$(refCurrent).html(data['DISPLAY'][ref2]['USD']['PRICE']);
			$(refHigh).html(data['DISPLAY'][ref2]['USD']['HIGH24HOUR']);
			$(refLow).html(data['DISPLAY'][ref2]['USD']['LOW24HOUR']);
		});

	});