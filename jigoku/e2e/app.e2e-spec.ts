import { JigokuPage } from './app.po';

describe('jigoku App', function() {
  let page: JigokuPage;

  beforeEach(() => {
    page = new JigokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
