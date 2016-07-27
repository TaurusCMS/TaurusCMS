import { expect } from 'chai'
import { InputText } from '../../../src/models/Field'

const type = {type: 'input_text'}

describe('Class (InputText)', () => {
  it('Should exist', () => {
    expect(InputText).to.exist
  })

  it('Should require a name property', () => {
    expect(() => {
      let testInputText = new InputText()
      return testInputText
    }).to.throw(Error)
  })

  it('Should require a uuid property', () => {
    expect(() => {
      let testInputText = new InputText({name: 'Test InputText'})
      return testInputText
    }).to.throw(Error)
  })

  it('Should set a length property if undefined', () => {
    let props = {name: 'Test InputText', uuid: 'test_input'}
    let testInputText = new InputText(props)
    let expectedLength = 75
    expect(testInputText.length).to.equal(expectedLength)
  })

  it('Should set the length property to the provided value if passed', () => {
    let props = {name: 'Test InputText', uuid: 'test_input', length: 137}
    let testInputText = new InputText(props)
    expect(testInputText.length).to.equal(137)
  })

  it('Should return a JSON string of the InputText settings', () => {
    let props = {name: 'Test InputText', uuid: 'test_input', length: 137}
    let testInputText = new InputText(props)
    let expected = Object.assign(props, type)
    expect(testInputText.get()).to.eql(JSON.stringify(expected))
  })

  it('Should allow for properties to be updated', () => {
    let props = [
      {name: 'Test InputText', uuid: 'test_input', length: 137},
      {name: 'New Test InputText', uuid: 'new_test_input', length: 23}
    ]
    let expected = [
      Object.assign(props[0], type),
      Object.assign(props[1], type)
    ]
    let testInputText = new InputText(props[0])
    expect(testInputText.get()).to.eql(JSON.stringify(expected[0]))
    testInputText.set(props[1])
    expect(testInputText.get()).to.eql(JSON.stringify(expected[1]))
  })
})
