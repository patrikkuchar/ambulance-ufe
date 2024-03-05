import { newE2EPage } from '@stencil/core/testing';

describe('pk-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pk-ambulance-wl-app></pk-ambulance-wl-app>');

    const element = await page.find('pk-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
