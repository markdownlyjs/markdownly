import React from 'react';
import { shallow } from 'enzyme';
import DocumentList from './DocumentList';

describe('DocumentList component', () => {
  it('renders DocumentList', () => {
    const documents = [];
    const wrapper = shallow(<DocumentList documents={documents} />);
    expect(wrapper).toMatchSnapshot();
  });
});
