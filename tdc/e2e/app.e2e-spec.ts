import { TdcPage } from './app.po';

describe('tdc App', function() {
  let page: TdcPage;

  beforeEach(() => {
    page = new TdcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
