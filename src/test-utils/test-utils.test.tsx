import { getFunctionComponent, getClassComponent } from './test-utils';

describe('getFunctionComponent()', () => {
  it('returns a function component', () => {
    expect(/I'm a function/.test(String(getFunctionComponent()))).toBe(true);
    expect(/I'm a class/.test(String(getClassComponent()))).toBe(true);
  });
});
