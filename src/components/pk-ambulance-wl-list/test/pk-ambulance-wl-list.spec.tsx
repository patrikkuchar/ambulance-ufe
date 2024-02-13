import { newSpecPage } from '@stencil/core/testing';
import { PkAmbulanceWlList } from '../pk-ambulance-wl-list';

describe('pk-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PkAmbulanceWlList],
      html: `<pk-ambulance-wl-list></pk-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as PkAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
