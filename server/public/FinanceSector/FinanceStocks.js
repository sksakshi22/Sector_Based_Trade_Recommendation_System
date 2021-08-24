var da = '[{"Name":"HDFC LIFE INSURANC","price":"668.8","dayL":"662.3","dayH":"672.8","bidQ":"0","PE":"114.69730749442633"},{"Name":"BAJAJ FINANCE LTD","price":"6752.2","dayL":"6697","dayH":"6819.5","bidQ":"0","PE":"91.73810850101219"},{"Name":"BAJAJ FINSERV LTD","price":"15271.9","dayL":"15065","dayH":"15420","bidQ":"0","PE":"59.46908926652233"},{"Name":"ICICI LOMBARD GEN","price":"1485.9","dayL":"1460.05","dayH":"1489.95","bidQ":"0","PE":"55.33666021152987"},{"Name":"HDFC ASSET MANAGEM","price":"2906.05","dayL":"2851.85","dayH":"2959.3","bidQ":"0","PE":"45.27897664417819"},{"Name":"CHOLAMANDALAM INV","price":"484.2","dayL":"472.5","dayH":"494.7","bidQ":"0","PE":"28.051677191356237"},{"Name":"AXIS BANK","price":"736.1","dayL":"734.4","dayH":"749.5","bidQ":"0","PE":"26.505113063517214"},{"Name":"HDFC BANK","price":"1524.6","dayL":"1508.65","dayH":"1533.15","bidQ":"0","PE":"25.71081655367803"},{"Name":"HOUSING DEVEL FIN","price":"2721.95","dayL":"2710","dayH":"2758.5","bidQ":"0","PE":"24.443676137792306"},{"Name":"ICICI BANK","price":"682.7","dayL":"673.85","dayH":"689.95","bidQ":"0","PE":"23.809855962054897"}]';

const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/TempFinanceStocks.js", (error, data) => {
    if(error) {
        throw error;
    }
    da=data.toString();
    console.log(da);
});
