/*
 * Copyright (c) 2013-2021 node-coap contributors.
 *
 * node-coap is licensed under an MIT +no-false-attribs license.
 * All rights not explicitly granted in the MIT license are reserved.
 * See the included LICENSE file for more details.
 */

var coap       = require('../')
var parameters = coap.parameters
var RetrySend  = require('../lib/retry_send')

describe('RetrySend', function() {

  it('should use the default retry count', function() {
    var result = new RetrySend({}, 1234, 'localhost')
    expect(result._maxRetransmit).to.eql(parameters.maxRetransmit)
  })

  it('should use a custom retry count', function() {
    var result = new RetrySend({}, 1234, 'localhost', 55)
    expect(result._maxRetransmit).to.eql(55)
  })

  it('should use default retry count, using the retry_send factory method', function() {
    var result = RetrySend({}, 1234, 'localhost')
    expect(result._maxRetransmit).to.eql(parameters.maxRetransmit)
  })

  it('should use a custom retry count, using the retry_send factory method', function() {
    var result = RetrySend({}, 1234, 'localhost', 55)
    expect(result._maxRetransmit).to.eql(55)
  })

})
