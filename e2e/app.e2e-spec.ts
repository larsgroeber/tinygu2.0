import { Tinygu2.0Page } from './app.po';

describe('tinygu2.0 App', () => {
  let page: Tinygu2.0Page;

  beforeEach(() => {
    page = new Tinygu2.0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
