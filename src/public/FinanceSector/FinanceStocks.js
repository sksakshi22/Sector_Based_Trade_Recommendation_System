var da = '[{"Name":"ICICI BANK","price":"695.3","dayL":"690","dayH":"696.25","bidQ":"695.7","PE":"24.24929376068078"},{"Name":"HOUSING DEVEL FIN","price":"2710.5","dayL":"2682.2","dayH":"2714.9","bidQ":"2710.2","PE":"24.340852760515823"},{"Name":"HDFC BANK","price":"1564.5","dayL":"1543.45","dayH":"1569","bidQ":"1564.85","PE":"26.38368916320955"},{"Name":"AXIS BANK","price":"742.35","dayL":"732.35","dayH":"745.75","bidQ":"742.95","PE":"26.73015987325364"},{"Name":"CHOLAMANDALAM INV","price":"527.15","dayL":"510.35","dayH":"527.7","bidQ":"526.65","PE":"30.539945541973236"},{"Name":"HDFC ASSET MANAGEM","price":"2979.35","dayL":"2956.95","dayH":"2987.7","bidQ":"2976.65","PE":"46.4210591919727"},{"Name":"ICICI LOMBARD GEN","price":"1454.65","dayL":"1453.6","dayH":"1473.5","bidQ":"1454.4","PE":"54.17287352897364"},{"Name":"BAJAJ FINSERV LTD","price":"15714.95","dayL":"15693.05","dayH":"16124.2","bidQ":"15710","PE":"61.19433497920594"},{"Name":"BAJAJ FINANCE LTD","price":"6900","dayL":"6875","dayH":"6993.25","bidQ":"6902.45","PE":"93.74617882423271"},{"Name":"HDFC LIFE INSURANC","price":"696.55","dayL":"690","dayH":"702","bidQ":"696.8","PE":"119.45635397015947"}]';

const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/TempFinanceStocks.js", (error, data) => {
    if(error) {
        throw error;
    }
    da=data.toString();
    console.log(da);
});
