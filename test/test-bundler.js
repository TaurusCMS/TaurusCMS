import chai from 'chai'

global.chai = chai
global.expect = chai.expect
global.should = chai.should

describe('Example', () => {
  it('Should pass!', () => {
    expect(true).to.ok
  })
})
