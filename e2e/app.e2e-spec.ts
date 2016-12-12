import { MulchHttpSamplePage } from './app.po';

describe('mulch-http-sample App', function() {
  let page: MulchHttpSamplePage;

  beforeEach(() => {
    page = new MulchHttpSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
