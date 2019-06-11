import { browser, by, element } from 'protractor';
browser.ignoreSynchronization = true;

export class HomePage {
  loginPage = element(by.css('app-login'));
  registerPage = element(by.css('app-register'));
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-home h1')).getText();
  }
  clickLinkToGoLogin() {
    return element(by.partialLinkText('Login')).click();
  }
  isLoginPageDisplayed() {
    return browser.isElementPresent(this.loginPage);

  }
  clickLinkToGoRegister() {
    return element(by.partialLinkText('Register')).click();
  }
  isRegisterPageDisplayed() {
    return browser.isElementPresent(this.registerPage);
  }
}
