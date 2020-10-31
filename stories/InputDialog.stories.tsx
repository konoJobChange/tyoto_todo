import React from 'react';
import InputDialog from '../src/components/InputDialog';
import { Meta, Story } from '@storybook/react/types-6-0';

type InputDialogProps = Parameters<typeof InputDialog>[0];

export default {
  title: 'Components/InputDialog',
  component: InputDialog,
  argTypes: {
    open: {
      type: 'boolean',
    },
  },
} as Meta<InputDialogProps>;

const Template: Story<InputDialogProps> = (args) => <InputDialog {...args} />;

export const Default = Template.bind({});
