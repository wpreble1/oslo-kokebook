import { FC, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import styled from '@emotion/styled';
import Input from './Input';
import Select from './Select';
import Ingredient from './Ingredient';
import IngredientForm from './IngredientForm';
import InputHHMM from './InputHHMM';
import DirectionsBox from './DirectionsBox';
import TextArea from './TextArea';

const RecipeForm: FC = ({ className }) => {
  const bydelAry = [
    'Alna',
    'Bjerke',
    'Frogner',
    'Gamle Oslo',
    'Grorud',
    'Grünerløkka',
    'Nordre Aker',
    'Nordstrand',
    'Sagene',
    'St. Hanshaugen',
    'Stovner',
    'Søndre Nordstrand',
    'Ullern',
    'Vestre Aker',
    'Østensjø',
  ];
  const maxDropdown = 12;

  const categoryAry = ['Appetizer', 'Entree', 'Drink', 'Other'];

  return (
    <div className={className}>
      <Formik
        initialValues={{
          recipeName: '',
          bydel: 'Alna',
          story: '',
          category: '',
          author: '',
          yield: '1',
          prepTime: { hours: 0, minutes: 0 },
          ingredients: [{ name: '', qty: '', units: '' }],
          directions: [''],
          notes: '',
        }}
        onSubmit={(values) => console.log(values, null, 2)}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <Input name="recipeName" placeholder="What is the name of the dish?" />
              Category: <Select name="category" options={categoryAry} />
              <Input name="author" placeholder="Tell us your name..." />
              Bydel:
              <Select name="bydel" options={bydelAry} />{' '}
              <TextArea name="story" placeholder="What makes this dish special to you?" />
              Yield:{' '}
              <Select
                name="yield"
                // Create an array containing ints 0..N, remove 0, concat an 'N+' string as final element
                options={Array.from(Array(maxDropdown).keys()).slice(1).concat(`${maxDropdown}+`)}
              />
              Time to prepare: <InputHHMM name="prepTime" />
              <IngredientForm props={props} />
              <DirectionsBox props={props} />
              <TextArea name="notes" placeholder="Any additional notes goe here!" />
              <button onSubmit={props.handleSubmit}>Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RecipeForm;
