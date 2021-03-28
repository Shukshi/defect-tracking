import { mount } from "@vue/test-utils";
import Error from "@/components/Error.vue";
jest.useFakeTimers();
test("check", () => {
	const wrapper = mount(Error);
	wrapper.find('#addID').setValue('testcase1')
	const button = wrapper.find('.submitButton')
  	button.trigger('click')
  	jest.advanceTimersByTime(3000);
	const error = wrapper.get('.listError')
	expect(error.text()).toBe('testcase1')
});
