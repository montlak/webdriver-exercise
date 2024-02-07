const { browser } = require('@wdio/globals')

module.exports = class Utils {

    open () {
        return browser.url('https://en.wikipedia.org/wiki/Main_Page')
    }
}
