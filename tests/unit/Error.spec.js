import { mount } from "@vue/test-utils";
import Error from "@/components/Error.vue";
import { nextTick } from 'vue';
jest.useFakeTimers();

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


	//For editing
	await wrapper.get('#editButton').trigger('click')
	await wrapper.get('.edited').setValue('edited_testcase')
	await wrapper.get('.update_buttons').trigger('click')
	const editedElement = wrapper.get('.listError')
	expect(editedElement.text()).toBe('edited_testcase')


	//For deleting
	await wrapper.get('#deleteButton').trigger('click')
	expect(wrapper.findAll('.listError')).toHaveLength(0)

	//For search
	//Adding more elements, for getting result for search
	await wrapper.get('#addID').setValue('testcase1')
  	await wrapper.get('.submitButton').trigger('click')

  	await wrapper.get('#addID').setValue('testcase2')
  	await wrapper.get('.submitButton').trigger('click')

  	await wrapper.get('#addID').setValue('testcase3')
  	await wrapper.get('.submitButton').trigger('click')

  	expect(wrapper.findAll('.listError')).toHaveLength(3)

  	await wrapper.get('#searchError').setValue('testcase3')
  	await wrapper.get('#searchError').element.dispatchEvent(new KeyboardEvent('keyup'))
  	jest.advanceTimersByTime(3000)
  	await nextTick()
  	expect(wrapper.findAll('.listError')).toHaveLength(1)
});
