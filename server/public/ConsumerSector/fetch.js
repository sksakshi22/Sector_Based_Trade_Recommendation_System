var da='[{"Name":"DIXON TECHNOLOGIES","price":"3910.15","dayL":"3900","dayH":"4096.3","bidQ":"0","PE":"132.5609384005153"},{"Name":"RELAXO FOOTWEARS","price":"1173.2","dayL":"1160.2","dayH":"1220","bidQ":"0","PE":"97.84004670169294"},{"Name":"AMBER ENTERPRISES","price":"2742.8","dayL":"2710.75","dayH":"2809","bidQ":"0","PE":"78.30307182825169"},{"Name":"HAVELLS INDIA","price":"1259.2","dayL":"1241.35","dayH":"1289.5","bidQ":"0","PE":"64.77699470137352"},{"Name":"BLUE STAR","price":"800.25","dayL":"780.05","dayH":"812.1","bidQ":"0","PE":"58.03959965187119"},{"Name":"ORIENT ELECTRIC LT","price":"331.3","dayL":"318.2","dayH":"334","bidQ":"0","PE":"46.19353039598439"},{"Name":"KAJARIA CERAMICS","price":"1083.95","dayL":"1048","dayH":"1096.35","bidQ":"0","PE":"45.54220410907105"},{"Name":"CROMPTON GREAVES C","price":"441.25","dayL":"432.7","dayH":"452.2","bidQ":"0","PE":"43.800873535834825"},{"Name":"RAJESH EXPORTS","price":"609.4","dayL":"602.5","dayH":"627.9","bidQ":"0","PE":"21.82039530220567"},{"Name":"BATA INDIA","price":"1727.75","dayL":"1721","dayH":"1774.3","bidQ":"0","PE":"-383.3481251386732"}]'

const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/ConsumerStocks.js", (error, data) => {
    if(error) {
        throw error;
    }
    da=data.toString();
    console.log(da);
});