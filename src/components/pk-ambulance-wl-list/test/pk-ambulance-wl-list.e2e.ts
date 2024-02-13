import { newE2EPage } from '@stencil/core/testing';

describe('pk-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pk-ambulance-wl-list></pk-ambulance-wl-list>');

    const element = await page.find('pk-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
