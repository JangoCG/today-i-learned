import { render } from '@testing-library/react';

import SessionLoader from './session-loader';

describe('SessionLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SessionLoader />);
    expect(baseElement).toBeTruthy();
  });
});
