import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';


const currentPhoto = {
    name: 'park bench',
    category: 'landscape',
    description: 'lorem ipsum',
    index: '1'
};

afterEach(cleanup);

describe('Modal is rendering', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto}></Modal>)
    })

    it('matches snapshot DOM node structure', () => {
        //Arrage the snapshot = declare varabiles
        const { asFragment } = render(<Modal currentPhoto={currentPhoto}></Modal>)
        //Assert the match
        expect(asFragment()).toMatchSnapshot()
    })
});

// describe('Click Event', () => {
//     it('calls onClose handler', () => {
//       const { getByText } = render(<Modal
//         onClose={mockToggleModal}
//         currentPhoto={currentPhoto}
//       />);
//       fireEvent.click(getByText('Close this modal'));
  
//       expect(mockToggleModal).toHaveBeenCalledTimes(1);
//     });
//   }) 