import { expect } from 'chai'
import { InputNumber } from '../../../src/models/Field'

const type = {type: 'input_number'}

describe('Class (InputNumber)', () => {
  it('Should exist', () => {
    expect(InputNumber).to.exist
  })

  it('Should require a name property', () => {
    expect(() => {
      let testInputNumber = new InputNumber()
      console.log(testInputNumber)
      return testInputNumber
    }).to.throw(Error)
  })

  it('Should require a uuid property', () => {
    expect(() => {
      let testInputNumber = new InputNumber({name: 'Test InputNumber'})
      return testInputNumber
    }).to.throw(Error)
  })

  it('Should set a length property if undefined', () => {
    let props = {name: 'Test InputNumber', uuid: 'test_number'}
    let testInputNumber = new InputNumber(props)
    // TODO: replace this with config settings
    let expectedLength = 75
    expect(testInputNumber.length).to.equal(expectedLength)
  })

  it('Should set the length property to the provided value if passed', () => {
    let props = {name: 'Test InputNumber', uuid: 'test_number', length: 3}
    let testInputNumber = new InputNumber(props)
    expect(testInputNumber.length).to.equal(3)
  })

  it('Should return a JSON string of the InputNumber settings', () => {
    let props = {name: 'Test InputNumber', uuid: 'test_number', length: 3}
    let testInputNumber = new InputNumber(props)
    let expected = Object.assign(props, type)
    expect(testInputNumber.get()).to.eql(JSON.stringify(expected))
  })

  it('Should allow for properties to be updated', () => {
    let props = [
      {name: 'Test InputNumber', uuid: 'test_number', length: 3},
      {name: 'New Test InputNumber', uuid: 'new_test_number', length: 6}
    ]
    let expected = [
      Object.assign(props[0], type),
      Object.assign(props[1], type)
    ]
    let testInputNumber = new InputNumber(props[0])
    expect(testInputNumber.get()).to.eql(JSON.stringify(expected[0]))
    testInputNumber.set(props[1])
    expect(testInputNumber.get()).to.eql(JSON.stringify(expected[1]))
  })
})
