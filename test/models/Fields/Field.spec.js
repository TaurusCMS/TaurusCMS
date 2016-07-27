import { expect } from 'chai'
import { Field } from '../../../src/models/Field'

describe('Class (Field)', () => {
  it('Should exist', () => {
    expect(Field).to.exist
  })

  it('Should require a name property', () => {
    expect(() => {
      let testField = new Field()
      return testField
    }).to.throw(Error)
  })

  it('Should require a uuid property', () => {
    expect(() => {
      let testField = new Field({name: 'Test Field'})
      return testField
    }).to.throw(Error)
  })

  it('Should require a type property', () => {
    expect(() => {
      let testField = new Field({name: 'Test Field', uuid: 'test_field'})
      return testField
    }).to.throw(Error)
  })

  it('Should set the length property to the provided value if passed', () => {
    let props = {name: 'Test Field', uuid: 'test_field', type: 'test', length: 137}
    let testField = new Field(props)
    expect(testField.length).to.equal(137)
  })

  it('Should return a JSON string of the field settings', () => {
    let props = {name: 'Test Field', uuid: 'test_field', type: 'test', length: 137}
    let testField = new Field(props)
    expect(testField.get()).to.equal(JSON.stringify(props))
  })

  it('Should allow for properties to be updated', () => {
    let props = [
      {name: 'Test Field', uuid: 'test_field', type: 'test', length: 137},
      {name: 'New Test Field', uuid: 'new_test_field', type: 'new-test', length: 23}
    ]
    let testField = new Field(props[0])
    expect(testField.get()).to.equal(JSON.stringify(props[0]))
    testField.set(props[1])
    expect(testField.get()).to.equal(JSON.stringify(props[1]))
  })
})
