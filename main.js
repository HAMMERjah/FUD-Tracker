let TwitterKey = 'ySPYuKJSadtKO7d8z618eN7xf';

/*
#btc-current
#btc-high
#btc-low
#btc-mentions
*/



// main function to pull CoinMarketCap data

	let baseurl = "https://min-api.cryptocompare.com/data/price",
		tsym = 'USD'
		btc = 'BTC';
		bch = 'BCH',
		eth = 'ETH',
		zec = 'ZEC',
		coins = [btc, bch, eth, zec];




	let url = baseurl + '?fsym=' + btc + "&tsyms=" + tsym;

	console.log(url);





	
$.getJSON(url, function(data){
	let results = [];
	$.each(data, function(key, val){
		$('#test').html("$" + val)
	})	

});


