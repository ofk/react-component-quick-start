import React from 'react';
import { create } from 'react-test-renderer';

import Hello from '../Hello';

test('render', () => {
  const rendered = create(<Hello text="World" />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
