import { expect } from 'chai'
import { InputCheckbox } from '../../../src/models/Field'

const type = {type: 'input_checkbox'}

describe('Class (InputCheckbox)', () => {
  it('Should exist', () => {
    expect(InputCheckbox).to.exist
  })

  it('Should require a name property', () => {
    expect(() => {
      let testInputCheckbox = new InputCheckbox()
      return testInputCheckbox
    }).to.throw(Error)
  })

  it('Should require a uuid property', () => {
    expect(() => {
      let testInputCheckbox = new InputCheckbox({name: 'Test InputCheckbox'})
      return testInputCheckbox
    }).to.throw(Error)
  })

  it('Should set a length property if undefined', () => {
    let props = {name: 'Test InputCheckbox', uuid: 'test_checkbox'}
    let testInputCheckbox = new InputCheckbox(props)
    // TODO: replace this with config settings
    let expectedLength = 1
    expect(testInputCheckbox.length).to.equal(expectedLength)
  })

  it('Should set the length property to the provided value if passed', () => {
    let props = {name: 'Test InputCheckbox', uuid: 'test_checkbox', length: 3}
    let testInputCheckbox = new InputCheckbox(props)
    expect(testInputCheckbox.length).to.equal(3)
  })

  it('Should return a JSON string of the InputCheckbox settings', () => {
    let props = {name: 'Test InputCheckbox', uuid: 'test_checkbox', length: 3}
    let testInputCheckbox = new InputCheckbox(props)
    let expected = Object.assign(props, type)
    expect(testInputCheckbox.get()).to.eql(JSON.stringify(expected))
  })

  it('Should allow for properties to be updated', () => {
    let props = [
      {name: 'Test InputCheckbox', uuid: 'test_checkbox', length: 3},
      {name: 'New Test InputCheckbox', uuid: 'new_test_checkbox', length: 6}
    ]
    let expected = [
      Object.assign(props[0], type),
      Object.assign(props[1], type)
    ]
    let testInputCheckbox = new InputCheckbox(props[0])
    expect(testInputCheckbox.get()).to.eql(JSON.stringify(expected[0]))
    testInputCheckbox.set(props[1])
    expect(testInputCheckbox.get()).to.eql(JSON.stringify(expected[1]))
  })
})
