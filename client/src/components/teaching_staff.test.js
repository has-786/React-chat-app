import ReactDOM from 'react-dom';
import React from 'react';
import {render, cleanup} from '@testing-library/react';


afterEach(cleanup)

it('renders without crashing', () => {
     const div =document.createElement('div');
     ReactDOM.render(<teaching_staff/>,div);
 });
it('renders without crashing', () => {
    const div =document.createElement('div');
    ReactDOM.render(<nonTeaching_staff/>,div);
});
it('should take a snapshot', () => {
    const { asFragment } = render(<teaching_staff/>)
    expect(asFragment(<teaching_staff/>)).toMatchSnapshot()
});

// it('should be active', () => {
//     const { getByTestId } = render(<teaching_staff />);
//     expect(getByTestId('all-link')).toBe('active')
//   });



 