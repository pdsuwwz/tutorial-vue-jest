import { mount } from '@vue/test-utils'
import HelloWorld from './src/HelloWorld.vue'

test('Test Vue Running', () => {
  
  const textMsg = '测试'
  const instance = mount(HelloWorld, {
    props: {
      msg: textMsg
    }
  })

  expect(instance.text()).toBe(textMsg)
})
