var da='[{"Name":"BHARAT FORGE","price":"719.65","dayL":"717","dayH":"773.3","bidQ":"0","PE":"218.8051079355427"},{"Name":"BOSCH LTD","price":"13650.55","dayL":"13412.05","dayH":"13834.15","bidQ":"0","PE":"46.61038362385399"},{"Name":"EICHER MOTORS","price":"2544","dayL":"2535","dayH":"2622.45","bidQ":"0","PE":"42.47716685311649"},{"Name":"BALKRISHNA INDS","price":"2279.85","dayL":"2226.7","dayH":"2298","bidQ":"0","PE":"32.02306374132652"},{"Name":"MRF LTD","price":"76162.9","dayL":"75950","dayH":"78699","bidQ":"0","PE":"22.600468253426587"},{"Name":"BAJAJ AUTO LTD","price":"3668.25","dayL":"3647.15","dayH":"3787.9","bidQ":"0","PE":"18.84410494033278"},{"Name":"HERO MOTOCORP LTD","price":"2680.6","dayL":"2656.5","dayH":"2710.9","bidQ":"0","PE":"17.193583354179093"},{"Name":"AMARA RAJA BATTERI","price":"680.5","dayL":"675.2","dayH":"703.4","bidQ":"0","PE":"16.40668322202667"},{"Name":"EXIDE INDUSTRIES","price":"158.4","dayL":"156.9","dayH":"161.4","bidQ":"0","PE":"15.873334001402949"},{"Name":"ASHOK LEYLAND","price":"117.75","dayL":"114.85","dayH":"121.35","bidQ":"0","PE":"-1154.4117647058824"}]';


const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/TempAutomobileStocks.js", (error, data) => {
    if(error) {
        throw error;
    }
    da=data.toString();
    console.log(da);
});
