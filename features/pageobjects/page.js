const { browser } = require('@wdio/globals')

module.exports = class Page {

    open (path) {
        return browser.url(`https://autogestion.apronline.gob.ar/${path}`)
    }

    get presentUrl(){
        return browser.getUrl();
    }
}
