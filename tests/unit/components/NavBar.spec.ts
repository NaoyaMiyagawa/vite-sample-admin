import { mount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';

describe('NavBar.vue', () => {
  const wrapper = mount(NavBar, {
    props: { isCollapsed: false },
    shallow: true,
  });

  it('shows system name', () => {
    expect(wrapper.text()).toContain('Admin UI');
  });

  it('shows login username', () => {
    expect(wrapper.text()).toContain('Jedrich');
  });

  it('shows page name', () => {
    expect(wrapper.text()).toContain('Articles CMS');
  });

  it('shows notification icon', () => {
    expect(wrapper.html()).toContain('<notification-stub');
  });

  it('shows logut button', () => {
    expect(wrapper.text()).toContain('Logout');
  });

  it('shows fold button when navbar is not collapsed', () => {
    expect(wrapper.html()).toContain('el-icon-s-fold');
  });
});
