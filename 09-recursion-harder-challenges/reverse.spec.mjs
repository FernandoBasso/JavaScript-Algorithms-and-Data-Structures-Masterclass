import {
  // reverse_v1 as reverse,
  reverse_v2 as reverse,
} from './reverse';

describe('reverse()', () => {
  it('should reverse one letter strings', () => {
    expect(reverse('z')).toEqual('z');
  });

  it('should reverse two letter strings', () => {
    expect(reverse('yz')).toEqual('zy');
  });

  it('should reverse three letter strings', () => {
    expect(reverse('xyz')).toEqual('zyx');
  });

  it('should reverse larger strings', () => {
    expect(reverse('awesome')).toEqual('emosewa');
    expect(reverse('rithmschool')).toEqual('loohcsmhtir');
  });
});

