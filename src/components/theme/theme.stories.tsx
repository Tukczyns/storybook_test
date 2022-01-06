import React from 'react';
import { Story, Meta } from '@storybook/react';

import Theme from '../theme/theme';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  Primary,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { ThemeProps } from './theme.types';

export default {
  title: 'Komunikuje/Theme',
  component: Theme,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  }
} as Meta;