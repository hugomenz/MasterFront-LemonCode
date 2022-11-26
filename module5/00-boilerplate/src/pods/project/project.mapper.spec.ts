import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

// -------------------------------------------------------------------------------------
describe('./pods/project/project.mapper', () => {
  it('should return a cloned object with the already mapped viewModel interface', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Hugo',
      externalId: 'testing 1234',
      comments: 'this should be displayed',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Joaquin' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Hugo',
      externalId: 'testing 1234',
      comments: 'this should be displayed',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Joaquin' }],
    });
  });
  // -------------------------------------------------------------------------------------

  it('should be error free if externalId (optional) is not included in apiData', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Hugo',
      comments: 'this should be displayed',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Joaquin' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Hugo',
      comments: 'this should be displayed',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Joaquin' }],
    });
  });
  // -------------------------------------------------------------------------------------

  it('should be error free if comments (optional) is not included in apiData', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Hugo',
      externalId: 'testing 1234',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Joaquin' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Hugo',
      externalId: 'testing 1234',
      isActive: true,
      employees: [{ id: '02', isAssigned: false, employeeName: 'Joaquin' }],
    });
  });
  // -------------------------------------------------------------------------------------

  it('should return an empty object with already mapped viewModel.Project interface when receiving undefined', () => {
    // Arrange
    const apiData: apiModel.Project = undefined;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  // -------------------------------------------------------------------------------------

  it('should be error free if atleast one property of apiData is undefined', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: [
        { id: undefined, isAssigned: undefined, employeeName: undefined },
      ],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: [
        { id: undefined, isAssigned: undefined, employeeName: undefined },
      ],
    });
  });

  // -------------------------------------------------------------------------------------

  it('should be error free if atleast one property of apiData is null', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [{ id: null, isAssigned: null, employeeName: null }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [{ id: null, isAssigned: null, employeeName: null }],
    });
  });

  // -------------------------------------------------------------------------------------
  it('should be error free if the property employees is an empty array', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: '01',
      name: 'Hugo',
      externalId: 'testing 1234',
      comments: 'this should be displayed',
      isActive: true,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: '01',
      name: 'Hugo',
      externalId: 'testing 1234',
      comments: 'this should be displayed',
      isActive: true,
      employees: [],
    });
  });
  // -------------------------------------------------------------------------------------
  //should return expected result but feeding undefined employees list

  it('should return expected result but feeding null employees list', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: null,
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: null,
      name: null,
      externalId: null,
      comments: null,
      isActive: null,
      employees: [],
    });
  });
  // -------------------------------------------------------------------------------------

  it('should return expected result but feeding undefined employees list', () => {
    // Arrange
    const apiData: apiModel.Project = {
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: undefined,
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiData);

    // Assert
    expect(result).toEqual<viewModel.Project>({
      id: undefined,
      name: undefined,
      externalId: undefined,
      comments: undefined,
      isActive: undefined,
      employees: [],
    });
  });
  // -------------------------------------------------------------------------------------
});
