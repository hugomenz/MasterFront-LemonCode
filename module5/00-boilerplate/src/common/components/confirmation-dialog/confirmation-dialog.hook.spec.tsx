import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';
// -------------------------------------------------------------------------------------

describe('common/useConfirmationDialog', () => {
  it('"isOpen" should be false by default', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  // -------------------------------------------------------------------------------------

  it('"onAccept", "onClose" and "onOpenDialog" should be functions', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });
  // -------------------------------------------------------------------------------------
  it('should assign item to "itemToDelete" and change "isOpen" to true if "onOpenDialog" is called with an item as parameter', () => {
    // Arrange
    const item: Lookup = {
      id: '1234',
      name: 'Martin',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert"
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(item);
  });
  // -------------------------------------------------------------------------------------

  it('should set "isOpen" to false if "onClose" is called after calling "onOpenDialog" with an item as parameter, ', () => {
    // Arrange
    const item: Lookup = {
      id: '1234',
      name: 'Martin',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });
    expect(result.current.isOpen).toEqual(true);

    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toEqual(false);
  });
  // -------------------------------------------------------------------------------------

  it('"itemToDelete" should be empty and with "Lookup" interface by default', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.itemToDelete).toEqual<Lookup>({
      id: '',
      name: '',
    });
  });

  // -------------------------------------------------------------------------------------

  it('should set "itemToDelete" to an empty object if "onAccept" is called after calling "onOpenDialog" with an "item" as parameter', () => {
    // Arrange
    const item: Lookup = {
      id: '1234',
      name: 'Martin',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });
    expect(result.current.itemToDelete).toEqual(item);

    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual<Lookup>({
      id: '',
      name: '',
    });
  });
});
