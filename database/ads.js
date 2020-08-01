var cheerio=require('cheerio');
var request=require('request');
var parse=require('body-parser');
//var result=require('./database/sql')

const url="https://in.tradingview.com/markets/stocks-india/market-movers-large-cap/";
request(url,function (err,resp,body) {
  if (err) throw err;
  const $=cheerio.load(body);
  //console.log(body);
 $('.tv-screener__description').each(function(i,element){
    const $element=$(element);
  //  console.log($element.text());
  var sk=$element.text();
  //var ske=parse(sk);
  //console.log(sk);
module.exports = sk;
    });
  });
