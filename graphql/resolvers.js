const { text } = require("body-parser");

module.exports = {
    hello(){
        return {
            text: 'Hello World',
            views: 1234
        };

    }
};
