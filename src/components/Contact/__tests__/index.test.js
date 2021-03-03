import React from 'react';
import { render, cleanup, getAllByLabelText, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm></ContactForm>)
    });
})