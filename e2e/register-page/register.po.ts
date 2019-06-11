import { browser, by, element } from 'protractor';
import { protractor } from 'protractor';
browser.ignoreSynchronization = true;

export class RegisterPage {
  loginPage = element(by.css('app-login'));
  email = element.all(by.tagName('input')).get(0);
  pass = element.all(by.tagName('input')).get(1);
  confirmPass = element.all(by.tagName('input')).get(2);
  registerButton = element.all(by.tagName('button')).get(0);
  private EC = protractor.ExpectedConditions;
  errMsgEmail = element.all(by.tagName('p')).get(0);
  errMsgPass = element.all(by.tagName('p')).get(1);
  navigateTo() {
    return browser.get('/register');
  }

  getParagraphText() {
    return element(by.css('app-register h1')).getText();
  }
  fillEmailInput() {
    this.email.clear();
    this.email.sendKeys('Dincho@sbnd.net');
    return this.email.getAttribute('value');
  }
  fillPasswordInput() {
    this.pass.clear();
    this.pass.sendKeys('123456');
    return this.pass.getAttribute('value');
  }
  fillConfirmPasswordInput() {
    this.confirmPass.clear();
    this.confirmPass.sendKeys('123456');
    return this.confirmPass.getAttribute('value');
  }
  clickRegister() {
    this.email.clear();
    this.email.sendKeys('Dincho28@sbnd.net');
    this.pass.clear();
    this.pass.sendKeys('1234567');
    this.confirmPass.clear();
    this.confirmPass.sendKeys('1234567');
    this.registerButton.click();
  }
  isLoginPageDisplayed() {
    browser.wait(this.EC.elementToBeClickable(this.loginPage), 10000);
    return browser.isElementPresent(this.loginPage);
  }
  errorMsgEmail() {
    this.email.clear();
    this.email.sendKeys('');
    this.confirmPass.click();
    return browser.isElementPresent(this.errMsgEmail);
  }
  errorMsgPass() {
    this.pass.clear();
    this.pass.sendKeys('');
    this.confirmPass.click();
    return browser.isElementPresent(this.errMsgPass);
  }
}
