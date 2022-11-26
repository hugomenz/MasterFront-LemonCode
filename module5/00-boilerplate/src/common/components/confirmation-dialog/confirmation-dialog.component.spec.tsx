import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/ConfirmationDialogComponent', () => {
  it('should be displayed if property isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Testing 1234',
      labels: {
        closeButton: 'testing close button',
        acceptButton: 'testing accept button',
      },
    };

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <span>This should be displayed</span>
      </ConfirmationDialogComponent>
    );

    const dialogElement = screen.getByRole('dialog');
    const dialogTitleElement = screen.getByText(props.title);
    const dialogContentElement = screen.getByText('This should be displayed');
    const closeButtonElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });
    const acceptButtonElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    // Assert
    expect(dialogElement).toBeInTheDocument();
    expect(dialogTitleElement).toBeInTheDocument();
    expect(dialogContentElement).toBeInTheDocument();
    expect(closeButtonElement).toBeInTheDocument();
    expect(acceptButtonElement).toBeInTheDocument();
  });
  // -------------------------------------------------------------------------------------
  it('should NOT be displayed if property isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Testing 1234',
      labels: {
        closeButton: 'testing close button',
        acceptButton: 'testing accept button',
      },
    };

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <span>NEVER show this!</span>
      </ConfirmationDialogComponent>
    );

    const dialogElement = screen.queryByRole('dialog');
    const dialogTitleElement = screen.queryByText(props.title);
    const dialogContentElement = screen.queryByText('NEVER show this!');
    const closeButtonElement = screen.queryByRole('button', {
      name: props.labels.closeButton,
    });
    const acceptButtonElement = screen.queryByRole('button', {
      name: props.labels.acceptButton,
    });

    // Assert
    expect(dialogElement).toEqual(null);
    expect(dialogTitleElement).toEqual(null);
    expect(dialogContentElement).toEqual(null);
    expect(closeButtonElement).toEqual(null);
    expect(acceptButtonElement).toEqual(null);
  });

  // -------------------------------------------------------------------------------------

  it('should call onAccept and onClose funtions one time when acceptButton is clicked', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Testing 1234',
      labels: {
        closeButton: 'testing close button',
        acceptButton: 'testing accept button',
      },
    };

    // Act
    render(<ConfirmationDialogComponent children={''} {...props} />);

    const acceptButtonElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    expect(props.onClose).toHaveBeenCalledTimes(0);
    expect(props.onAccept).toHaveBeenCalledTimes(0);

    userEvent.click(acceptButtonElement);

    // Assert
    expect(props.onAccept).toHaveBeenCalledTimes(1);
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });
  // -------------------------------------------------------------------------------------
  it('should call onClose funtion one time when closeButton is clicked', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Testing 1234',
      labels: {
        closeButton: 'testing close button',
        acceptButton: 'testing accept button',
      },
    };

    // Act
    render(<ConfirmationDialogComponent children={''} {...props} />);

    const closeButtonElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });

    expect(props.onClose).toHaveBeenCalledTimes(0);

    userEvent.click(closeButtonElement);

    // Assert
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });
});
