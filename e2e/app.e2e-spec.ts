import { LaPage } from './app.po';

describe('la App', function() {
  let page: LaPage;

  beforeEach(() => {
    page = new LaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
