import { expect } from 'chai'
import { InputRadio } from '../../../src/models/Field'

const type = {type: 'input_radio'}

describe('Class (InputRadio)', () => {
  it('Should exist', () => {
    expect(InputRadio).to.exist
  })

  it('Should require a name property', () => {
    expect(() => {
      let testInputRadio = new InputRadio()
      return testInputRadio
    }).to.throw(Error)
  })

  it('Should require a uuid property', () => {
    expect(() => {
      let testInputRadio = new InputRadio({name: 'Test InputRadio'})
      return testInputRadio
    }).to.throw(Error)
  })

  it('Should set a length property if undefined', () => {
    let props = {name: 'Test InputRadio', uuid: 'test_radio'}
    let testInputRadio = new InputRadio(props)
    // TODO: replace this with config settings
    let expectedLength = 2
    expect(testInputRadio.length).to.equal(expectedLength)
  })

  it('Should set the length property to the provided value if passed', () => {
    let props = {name: 'Test InputRadio', uuid: 'test_radio', length: 3}
    let testInputRadio = new InputRadio(props)
    expect(testInputRadio.length).to.equal(3)
  })

  it('Should return a JSON string of the InputRadio settings', () => {
    let props = {name: 'Test InputRadio', uuid: 'test_radio', length: 3}
    let testInputRadio = new InputRadio(props)
    let expected = Object.assign(props, type)
    expect(testInputRadio.get()).to.eql(JSON.stringify(expected))
  })

  it('Should allow for properties to be updated', () => {
    let props = [
      {name: 'Test InputRadio', uuid: 'test_radio', length: 3},
      {name: 'New Test InputRadio', uuid: 'new_test_radio', length: 6}
    ]
    let expected = [
      Object.assign(props[0], type),
      Object.assign(props[1], type)
    ]
    let testInputRadio = new InputRadio(props[0])
    expect(testInputRadio.get()).to.eql(JSON.stringify(expected[0]))
    testInputRadio.set(props[1])
    expect(testInputRadio.get()).to.eql(JSON.stringify(expected[1]))
  })
})
