var da ='[{"Name":"DR LAL PATHLABS LT","price":"3810.95","dayL":"3768.15","dayH":"3889.95","bidQ":"0","PE":"80.00314894510339"},{"Name":"APOLLO HOSPITALS.","price":"4743.25","dayL":"4720.2","dayH":"4839.65","bidQ":"0","PE":"78.97913648700401"},{"Name":"DIVIS LABORATORIE","price":"4874.65","dayL":"4788","dayH":"4888.7","bidQ":"0","PE":"63.14640654956215"},{"Name":"BIOCON LTD","price":"333.2","dayL":"327.55","dayH":"362.35","bidQ":"0","PE":"58.94215460817266"},{"Name":"ABBOTT INDIA LTD","price":"18945.45","dayL":"18804","dayH":"19101","bidQ":"0","PE":"57.01446318298365"},{"Name":"DR REDDYS LABS","price":"4514.85","dayL":"4500","dayH":"4599","bidQ":"0","PE":"43.77696760493732"},{"Name":"CIPLA LTD","price":"898.35","dayL":"888.65","dayH":"908","bidQ":"0","PE":"28.537166454891995"},{"Name":"ALKEM LAB LTD","price":"3796.55","dayL":"3770.55","dayH":"3856.3","bidQ":"0","PE":"27.830679685667373"},{"Name":"CADILA HEALTHCARE","price":"547.1","dayL":"542","dayH":"577","bidQ":"0","PE":"24.69754423979776"},{"Name":"AUROBINDO PHARMA","price":"682.95","dayL":"678.15","dayH":"726.2","bidQ":"0","PE":"7.5133666307289495"}]';

const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/TempHealthcareStocks.js", (error, data) => {
    if(error) {
        throw error;
    }
    da=data.toString();
    console.log(da);
});

