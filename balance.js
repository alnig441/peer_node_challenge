var randNum = require('./random');
var conversion = require('./usd_converter');


var returnObj = {


    balance : function (min, max) {
        return conversion(randNum(min, max));
    },

    string : function () {
        return 'Account balance: \n';
    }

}
module.exports = returnObj;
