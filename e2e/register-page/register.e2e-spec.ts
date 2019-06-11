import { RegisterPage } from './register.po';

describe('course-project Register', () => {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
  });

  it('should display Title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Register');
  });
  it('should display error msg if email is empty', () => {
    expect(page.errorMsgEmail()).toBe(true);
  });
  it('should display error msg if password is empty', () => {
    expect(page.errorMsgPass()).toBe(true);
  });

  it('should find register inputs and fill them with data', () => {
    expect(page.fillEmailInput()).toEqual('Dincho@sbnd.net');
    expect(page.fillPasswordInput()).toEqual('123456');
    expect(page.fillConfirmPasswordInput()).toEqual('123456');
  });

  it('should display login page after successfull registration', () => {
    Promise.all([page.clickRegister()]).then(function(values) {
      expect(page.isLoginPageDisplayed()).toBe(true);
    });
  });
});
