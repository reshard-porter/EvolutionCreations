import { EvolutionCreationsPage } from './app.po';

describe('evolution-creations App', function() {
  let page: EvolutionCreationsPage;

  beforeEach(() => {
    page = new EvolutionCreationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
