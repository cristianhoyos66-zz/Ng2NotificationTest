import { NotificationTestPage } from './app.po';

describe('notification-test App', () => {
  let page: NotificationTestPage;

  beforeEach(() => {
    page = new NotificationTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
