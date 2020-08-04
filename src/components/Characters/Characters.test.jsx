import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';
import Character from '../Character/Character';

describe('Characters component', () => {
  it('creates a Character for each item in the characters props', () => {
    const characters = [
      { name: 'Sidney', image: 'https://sidney.com' },
      { name: 'Edmund', image: 'https://edmund.com' }
    ];
    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper.find(Character)).toHaveLength(2);
  });
});
