import { render, RenderResult } from '@testing-library/react';

import Comment from './comment';

describe('Comment', () => {
  let element: RenderResult;

  beforeEach(() => {
    element = render(<Comment author="test author" text="test text" />);
  });

  it('should render successfully', () => {
    expect(element.baseElement).toBeTruthy();
  });

  it('should render given author', () => {
    expect(element.getByTestId('author').textContent).toBe('test author');
  });

  it('should render given text', () => {
    expect(element.getByTestId('text').textContent).toBe('test text');
  });
});
