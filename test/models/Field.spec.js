import { expect } from 'chai'
import Field from '../../src/models/Field'

describe('Class (Field)', () => {
  it('Should exist', () => {
    expect(Field).to.exist
  })

  it('Should require a name property', () => {
    expect(() => {
      let testField = new Field()
      console.log(testField)
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

  it('Should set a length property if undefined', () => {
    let props = {name: 'Test Field', uuid: 'test_field', type: 'type'}
    let testField = new Field(props)
    // TODO: replace this with config settings
    let expectedLength = 37
    expect(testField.length).to.equal(expectedLength)
  })

  it('Should set the length property to the provided value if passed', () => {
    let props = {name: 'Test Field', uuid: 'test_field', type: 'test', length: 137}
    let testField = new Field(props)
    expect(testField.length).to.equal(137)
  })

  it('Should return a JSON string of the field settings', () => {
    let props = {name: 'Test Field', uuid: 'test_field', type: 'test', length: 137}
    let testField = new Field(props)
    expect(testField.save()).to.equal(JSON.stringify(props))
  })
})
