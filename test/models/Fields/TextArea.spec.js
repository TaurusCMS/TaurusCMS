import { expect } from 'chai'
import { TextArea } from '../../../src/models/Field'

const type = {type: 'text_area'}

describe('Class (TextArea)', () => {
  it('Should exist', () => {
    expect(TextArea).to.exist
  })

  it('Should require a name property', () => {
    expect(() => {
      let testTextArea = new TextArea()
      return testTextArea
    }).to.throw(Error)
  })

  it('Should require a uuid property', () => {
    expect(() => {
      let testTextArea = new TextArea({name: 'Test TextArea'})
      return testTextArea
    }).to.throw(Error)
  })

  it('Should set a length property if undefined', () => {
    let props = {name: 'Test TextArea', uuid: 'test_text_area'}
    let testTextArea = new TextArea(props)
    let expectedLength = 365
    expect(testTextArea.length).to.equal(expectedLength)
  })

  it('Should set the length property to the provided value if passed', () => {
    let props = {name: 'Test TextArea', uuid: 'test_text_area', length: 3}
    let testTextArea = new TextArea(props)
    expect(testTextArea.length).to.equal(3)
  })

  it('Should return a JSON string of the TextArea settings', () => {
    let props = {name: 'Test TextArea', uuid: 'test_text_area', length: 3}
    let expected = Object.assign(props, type)
    let testTextArea = new TextArea(props)
    expect(testTextArea.get()).to.eql(JSON.stringify(expected))
  })

  it('Should allow for properties to be updated', () => {
    let props = [
      {name: 'Test TextArea', uuid: 'test_text_area', length: 3},
      {name: 'New Test TextArea', uuid: 'new_test_text_area', length: 6}
    ]
    let expected = [
      Object.assign(props[0], type),
      Object.assign(props[1], type)
    ]
    let testTextArea = new TextArea(props[0])
    expect(testTextArea.get()).to.eql(JSON.stringify(expected[0]))
    testTextArea.set(props[1])
    expect(testTextArea.get()).to.eql(JSON.stringify(expected[1]))
  })
})
