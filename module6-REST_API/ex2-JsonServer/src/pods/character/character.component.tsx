import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import * as classes from './character.styles';
import { CharacterApi } from './api/character.api-model';

interface Props {
  character: CharacterApi;
  onSave: (character: CharacterApi) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="type" label="Type" />
          <TextFieldComponent name="gender" label="Gender" />
          <TextFieldComponent
            name="quotes"
            label="Quotes"
            multiline={true}
            rows={5}
            rowsMax={10}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
