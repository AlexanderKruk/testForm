import React from 'react';
import StartCourseForm from './StartCourseForm';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('StartCourseForm', () => {
  describe('with valid inputs', () => {
    it('calls the onSubmit function', async () => {
      const mockOnSubmit = jest.fn();
      render(<StartCourseForm onSubmit={mockOnSubmit} />);

      fireEvent.change(screen.getByTestId('name'), {
        target: { value: 'Alexander' },
      });
      fireEvent.change(screen.getByTestId('email'), {
        target: { value: '1@1.com' },
      });

      fireEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalled();
      });
    });
  });

  describe('input name', () => {
    it('empty input error', async () => {
      render(<StartCourseForm />);
      const emailInput = screen.getByTestId('name');
      fireEvent.change(emailInput, {
        target: { value: '' },
      });

      fireEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByTestId('name-error')).toHaveTextContent(
          'Please provide a name!'
        );
      });
    });
  });

  describe('input email', () => {
    it('validation error', async () => {
      render(<StartCourseForm />);
      const emailInput = screen.getByTestId('email');
      fireEvent.change(emailInput, {
        target: { value: 'invalid email' },
      });

      fireEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByTestId('email-error')).toHaveTextContent(
          'email must be a valid email'
        );
      });
    });
    it('empty input error', async () => {
      render(<StartCourseForm />);
      const emailInput = screen.getByTestId('email');
      fireEvent.change(emailInput, {
        target: { value: '' },
      });

      fireEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByTestId('email-error')).toHaveTextContent(
          'Please provide an email!'
        );
      });
    });
  });
});
