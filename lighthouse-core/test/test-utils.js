/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* eslint-env jest */

const i18n = require('../lib/i18n');

expect.extend({
  toHaveDisplayValue(received, expected) {
    const obj = {displayValue: received.displayValue};
    i18n.replaceIcuMessageInstanceIds(obj, 'en-US');
    const actual = obj.displayValue;
    const pass = expected instanceof RegExp ?
      expected.test(actual) :
      actual === expected;

    const message = () => [
      `${this.utils.matcherHint('.toHaveDisplayValue')}\n`,
      `Expected object to have display value ${expected instanceof RegExp ? 'matching' : 'of'}:`,
      `  ${this.utils.printExpected(expected)}`,
      `Received:`,
      `  ${this.utils.printReceived(actual)}`,
    ].join('\n')
    return {actual, message, pass};
  },
});