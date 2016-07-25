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
      let testField = new Field({name: 'My Test Field'})
      return testField
    }).to.throw(Error)
  })
})
