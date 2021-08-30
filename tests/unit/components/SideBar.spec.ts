import { shallowMount } from '@vue/test-utils';
import SideBar from '@components/SideBar.vue';

describe('SideBar.vue', () => {
  it('should not collapse at first', () => {
    const wrapper = shallowMount(SideBar);
    expect(wrapper.vm.$props.isCollapsed).toBe(false);
  });

  it('should be collapsed when passing isCollapsed with true', () => {
    const wrapper = shallowMount(SideBar, {
      props: { isCollapsed: true },
    });

    expect(wrapper.vm.$props.isCollapsed).toBe(true);
  });

  it('should show link to dashboard', () => {
    const wrapper = shallowMount(SideBar);
    expect(wrapper.text()).toContain('Dashboard');
  });

  it('should show link to users', () => {
    const wrapper = shallowMount(SideBar);
    expect(wrapper.text()).toContain('Users');
  });
});
