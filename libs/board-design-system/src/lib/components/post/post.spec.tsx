import { render, RenderResult } from '@testing-library/react';

import Post from './post';

describe('Post', () => {
  let element: RenderResult;
  const onCommentClick: () => void = () => {};

  beforeEach(() => {
    element = render(
      <Post
        onCommentClick={onCommentClick}
        header="test header"
        content="test content"
      />
    );
  });

  it('should render successfully', () => {
    expect(element.baseElement).toBeTruthy();
  });

  it('should render given message', () => {
    expect(element.getByTestId('content').textContent).toBe('test content');
  });

  it('should render given header', () => {
    expect(element.getByTestId('header').textContent).toBe('test header');
  });
});
