import { Story, Meta } from '@storybook/react';
import { Post, PostProps } from './post';

import 'semantic-ui-css/semantic.min.css';

export default {
  component: Post,
  title: 'Post',
  args: {
    content: 'test content',
    header: 'test header',
    onCommentClick: console.log,
  } as PostProps,
} as Meta;

const Template: Story<PostProps> = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
