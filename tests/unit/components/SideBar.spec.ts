import { mount, flushPromises } from '@vue/test-utils';
import SideBar from '@components/SideBar.vue';
import router from '@/router/index';

describe('SideBar.vue', () => {
  it('should not collapse at first', () => {
    const wrapper = mount(SideBar);
    expect(wrapper.vm.$props.isCollapsed).toBe(false);
  });

  it('should be collapsed when passing isCollapsed with true', () => {
    const wrapper = mount(SideBar, {
      props: { isCollapsed: true },
    });

    expect(wrapper.vm.$props.isCollapsed).toBe(true);
  });

  it('should show link to dashboard', () => {
    const wrapper = mount(SideBar);
    expect(wrapper.text()).toContain('Dashboard');
  });

  it('should show link to users', () => {
    const wrapper = mount(SideBar);
    expect(wrapper.text()).toContain('Users');
  });

  it('changes page after clicking menu link', async () => {
    const wrapper = mount(SideBar, {
      global: {
        plugins: [router],
      },
    });

    router.push('/');
    await router.isReady();
    expect(wrapper.find('.is-active').text()).toContain('Dashboard');

    await wrapper.find('[test-id="articles"]').trigger('click');
    await flushPromises();
    expect(wrapper.find('.is-active').text()).toContain('Articles');
  });
});
