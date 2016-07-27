import { expect } from 'chai'
import { Range } from '../../../src/models/Field'

const type = {type: 'range'}

describe('Class (Range)', () => {
  it('Should exist', () => {
    expect(Range).to.exist
  })

  it('Should require a name property', () => {
    expect(() => {
      let testRange = new Range()
      return testRange
    }).to.throw(Error)
  })

  it('Should require a uuid property', () => {
    expect(() => {
      let testRange = new Range({name: 'Test Range'})
      return testRange
    }).to.throw(Error)
  })

  it('Should set a length property if undefined', () => {
    let props = {name: 'Test Range', uuid: 'test_range'}
    let testRange = new Range(props)
    // TODO: replace this with config settings
    let expectedLength = 2
    expect(testRange.length).to.equal(expectedLength)
  })

  it('Should set the length property to the provided value if passed', () => {
    let props = {name: 'Test Range', uuid: 'test_range', length: 3}
    let testRange = new Range(props)
    expect(testRange.length).to.equal(3)
  })

  it('Should return a JSON string of the Range settings', () => {
    let props = {name: 'Test Range', uuid: 'test_range', length: 3}
    let testRange = new Range(props)
    let expected = Object.assign(props, type)
    expect(testRange.get()).to.eql(JSON.stringify(expected))
  })

  it('Should allow for properties to be updated', () => {
    let props = [
      {name: 'Test Range', uuid: 'test_range', length: 3},
      {name: 'New Test Range', uuid: 'new_test_range', length: 6}
    ]
    let expected = [
      Object.assign(props[0], type),
      Object.assign(props[1], type)
    ]
    let testRange = new Range(props[0])
    expect(testRange.get()).to.eql(JSON.stringify(expected[0]))
    testRange.set(props[1])
    expect(testRange.get()).to.eql(JSON.stringify(expected[1]))
  })
})
