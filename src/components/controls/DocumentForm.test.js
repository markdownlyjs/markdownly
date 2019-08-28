import React from 'react';
import { shallow } from 'enzyme';
import DocumentForm from './DocumentForm';

describe('DocumentForm component', () => {
  it('renders DocumentForm', () => {
    const wrapper = shallow(<DocumentForm 
      inputValue="hi"
      handleSubmit={() => {}} 
      handleChange={() => {}} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
