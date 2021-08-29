import { mount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';

describe('NavBar.vue', () => {
  const wrapper = mount(NavBar, {
    props: {},
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

  it('shows page name', () => {
    expect(wrapper.html()).toContain('<notification-stub');
  });

  it('shows page name', () => {
    expect(wrapper.text()).toContain('Logout');
  });

  // - [ ] サイドバーのトグルボタンを表示させる
  it('shows sidebar toggle button', () => {
    expect(wrapper.text()).toContain('expand');
  });
});
