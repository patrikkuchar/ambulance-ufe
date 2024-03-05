import { newE2EPage } from '@stencil/core/testing';

describe('pk-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pk-ambulance-wl-editor></pk-ambulance-wl-editor>');

    const element = await page.find('pk-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
