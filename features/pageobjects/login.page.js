const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('#cuit');
    }

    get inputPassword () {
        return $('#password');
    }

    get buttonSubmit () {
        return $('#entrar');
    }

    get loginPasswordErrorMessage (){
        return $('.error-formu');
    }

    get loginMessage(){
        return $('#mensaje');
    }

    get loginCuitErrorMessage(){
        return $('#cuit').nextElement();
    }

    get loginPasswordErrorMessage(){
        return $('#password').nextElement();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
