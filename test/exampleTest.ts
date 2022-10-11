import Model from '../Model'
import assert from 'assert'

describe('example', function() {
  it('is good', function() {
    assert.strictEqual(new Model().speak(), 'hello')
  })
})
