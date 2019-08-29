import React from 'react';
import { shallow } from 'enzyme';
import DocumentList from './DocumentList';

describe('DocumentList component', () => {
  it('renders DocumentList', () => {
    const wrapper = shallow(<DocumentList 
      documents={[]}
      handleFormSubmit={() => {}} 
      handleChange={() => {}}
      inputValue=''
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
