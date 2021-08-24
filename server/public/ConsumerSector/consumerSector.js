const request = require('request');
var fs = require('fs')

var storePE = [];

const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
    qs: {
      region: 'IN',
      symbols: 'AMBER.NS,BATAINDIA.NS,BLUESTARCO.NS,CROMPTON.NS,DIXON.NS,HAVELLS.NS,KAJARIACER.NS,ORIENTELEC.NS,RAJESHEXPO.NS,RELAXO.NS,TTKPRESTIG.NS,TITAN.NS,VGUARD.NS,VOLTAS.NS,WHIRLPOOL.NS'
    },
    headers: {
      'x-rapidapi-key': '649f766425mshf4cffc28e6b2844p12fafdjsneca2210e76a0',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      useQueryString: true
    }
  };
  
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
      var obj1 = JSON.parse(body);

      var sector1 = (JSON.stringify(obj1["quoteResponse"]));
      var obj2 = JSON.parse(sector1);
     // console.log(obj2);
      for(key2 in obj2)
      {
          if(key2 == "result")
          {
              for(let i = 0; i < 10 ; i++)
              {
                  var sector2 = (JSON.stringify(obj2[key2][i]));
                  var obj3 = JSON.parse(sector2);

                  var eps = (obj3.epsTrailingTwelveMonths);
                  var price = obj3.regularMarketPrice;
                  var name = obj3.shortName;
                  var bid = obj3.bid;
                  var dayLow = obj3.regularMarketDayLow;
                  var dayHigh = obj3.regularMarketDayHigh;

                  var pe = price / eps ;

                 storePE[i] ={ Name:name , price:price.toString() ,dayL:dayLow.toString(),dayH:dayHigh.toString(),bidQ : bid.toString(),PE:pe.toString()} ;
                 
              }
          }
      }
      //storePE.sort(compareName).reverse();
      storePE.sort(function(a, b) {
        return b.PE - a.PE;
      });

      const jsonString = JSON.stringify(storePE)
          fs.writeFile('./ConsumerStocks.js', jsonString, err => {
              if (err) {
                  console.log('Error writing file', err)
              } else {
                  console.log('Successfully wrote file')
              }
          })

      for (let index = 0; index < 5; index++) {
          console.log(storePE[index]);      
      }
  });


