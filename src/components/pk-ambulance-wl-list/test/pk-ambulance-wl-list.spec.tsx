import { newSpecPage } from '@stencil/core/testing';
import { PkAmbulanceWlList } from '../pk-ambulance-wl-list';

describe('pk-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PkAmbulanceWlList],
      html: `<pk-ambulance-wl-list></pk-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pk-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pk-ambulance-wl-list>
    `);
  });
});
