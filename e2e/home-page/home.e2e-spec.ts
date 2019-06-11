import { HomePage } from './home.po';

describe('course-project home', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Online Academy');
  });
  it('should go to login page', () => {
    page.navigateTo();
    page.clickLinkToGoLogin();
    expect(page.isLoginPageDisplayed()).toBe(true);
  });
  it('should go to register page', () => {
    page.navigateTo();
    page.clickLinkToGoRegister();
    expect(page.isRegisterPageDisplayed()).toBe(true);
  });
});
