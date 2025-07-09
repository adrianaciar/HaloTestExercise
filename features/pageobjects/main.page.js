const { $ } = require('@wdio/globals')
const Page = require('./page');

class MainPage extends Page {

    get mainTitle(){
        return $('#main-header');
    }

    open () {
        return super.open('inicio');
    }
}

module.exports = new MainPage();
