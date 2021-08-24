var da='[{"Name":"ADANI ENTERPRISES","price":"1396.7","dayL":"1361.55","dayH":"1427.75","bidQ":"0","PE":"131.80145324148344"},{"Name":"TATA POWER CO LTD","price":"124.95","dayL":"121.7","dayH":"127.85","bidQ":"0","PE":"33.2579185520362"},{"Name":"RELIANCE INDS","price":"2162.35","dayL":"2132.3","dayH":"2174","bidQ":"0","PE":"29.51933053022443"},{"Name":"GAIL INDIA LTD","price":"140.8","dayL":"140","dayH":"144.1","bidQ":"0","PE":"8.299929261966518"},{"Name":"POWER GRID CORP","price":"175.65","dayL":"174.2","dayH":"179.9","bidQ":"0","PE":"7.665284747981672"},{"Name":"NTPC LTD","price":"113.4","dayL":"112.2","dayH":"115.75","bidQ":"0","PE":"7.325108197144888"},{"Name":"OIL & NATURAL GAS","price":"111.75","dayL":"108.5","dayH":"112","bidQ":"0","PE":"6.316057197761826"},{"Name":"BHARAT PETROL CORP","price":"451.7","dayL":"448.1","dayH":"459.65","bidQ":"0","PE":"5.3659463761745805"},{"Name":"INDIAN OIL CORP","price":"103","dayL":"102.2","dayH":"104.9","bidQ":"0","PE":"3.707436469656612"},{"Name":"HINDUSTAN PETROL","price":"245.65","dayL":"244.5","dayH":"250.7","bidQ":"0","PE":"3.5057799343513634"}]';

const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/TempEnergyStocks.js", (error, data) => {
    if(error) {
        throw error;
    }
    da=data.toString();
    console.log(da);
});
