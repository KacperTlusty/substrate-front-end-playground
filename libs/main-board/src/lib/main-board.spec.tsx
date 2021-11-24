import { render } from '@testing-library/react';

import MainBoard from './main-board';

describe('MainBoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainBoard />);
    expect(baseElement).toBeTruthy();
  });
});
