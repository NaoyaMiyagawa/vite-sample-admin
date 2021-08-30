import { mount, shallowMount } from '@vue/test-utils';
import Users from '@/views/Users.vue';

describe('Users.vue', () => {
  it('should be displayed', () => {
    const wrapper = shallowMount(Users);
    expect(wrapper.text()).toContain('Users');
  });
});
