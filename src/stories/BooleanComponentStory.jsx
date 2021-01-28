import React from 'react';
import { storiesOf } from '@storybook/react';

import BooleanComponent from '../example/BooleanComponent';

storiesOf('BooleanComponent', module)
  .add('기본', () => <BooleanComponent />)
  .add('bored', () => <BooleanComponent bored />);
