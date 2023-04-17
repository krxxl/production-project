import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Code } from './Code';

export default {
  title: 'share/Code',
  component: Code,
  argTypes: {},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'export default {\n'
    + '  title: \'Widgets/Code\',\n'
    + '  component: Code,\n'
    + '  argTypes: {},\n'
    + '} as ComponentMeta<typeof Code>;\n'
    + '\n'
    + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
Primary.decorators = [(StoreDecorator({}))];
