import { mount } from '@vue/test-utils';
import NavBar from '@components/NavBar.vue';
import router from '@/router/index';

describe('NavBar.vue', () => {
  const wrapper = mount(NavBar, {
    props: { isCollapsed: false },
    global: {
      plugins: [router],
      stubs: {
        Notification: true,
      },
    },
  });

  it('shows system name', () => {
    expect(wrapper.text()).toContain('Admin UI');
  });

  it('shows login username', () => {
    expect(wrapper.text()).toContain('Jedrich');
  });

  describe('page name', () => {
    it('shows page name', async () => {
      router.push('/');
      await router.isReady();
      expect(wrapper.text()).toContain('Dashboard');

      router.push('/dashboard');
      await router.isReady();
      expect(wrapper.text()).toContain('Dashboard');
    });
  });

  it('shows notification icon', () => {
    expect(wrapper.html()).toContain('<notification-stub');
  });

  it('shows fold button when navbar is not collapsed', () => {
    expect(wrapper.html()).toContain('el-icon-s-fold');
  });
});
