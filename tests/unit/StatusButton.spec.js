import { mount } from "@vue/test-utils";
import Error from "@/components/Error.vue";

test("testErrorComponent", async() => {
	const wrapper = mount(Error);
	await wrapper.get('#addID').setValue('testcase1')
  	await wrapper.get('.submitButton').trigger('click')
	const errorElement = wrapper.get('.listError')
	expect(errorElement.text()).toBe('testcase1')


	//For StatusButton
	const openStatus = wrapper.get('.mark')
	expect(openStatus.text()).toBe('Open')

	await wrapper.get('.mark').trigger('click')
	const inprogressStatus = wrapper.get('.mark')
	expect(inprogressStatus.text()).toBe('InProgress')

	await wrapper.get('.mark').trigger('click')
	const closedStatus = wrapper.get('.mark')
	expect(closedStatus.text()).toBe('Closed')
});