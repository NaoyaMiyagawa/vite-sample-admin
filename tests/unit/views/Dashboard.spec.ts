import { mount, shallowMount } from '@vue/test-utils';
import Dashboard from '@/views/Dashboard.vue';

describe('Dashboard.vue', () => {
  it('should be displayed', () => {
    const wrapper = shallowMount(Dashboard);
    expect(wrapper.text()).toContain('Dashboard');
  });
});
