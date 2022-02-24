import { Field } from 'formik';
import styled from '@emotion/styled';

const StyledField = styled(Field)`
  background: var(--background);
  border: 1px var(--text) solid;
  color: var(--text);
  height: 51px;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 10px;
`;

const InputHHMM = (name) => {
  return (
    <>
      <StyledField
        type="number"
        placeholder="00"
        step="1"
        min="0"
        max="12"
        name={`${name}.hours`}
      />
      hours{'  '}
      <StyledField
        placeholder="00"
        type="number"
        step="5"
        min="0"
        max="55"
        name={`${name}.minutes`}
      />
      {'  '}
      minutes
    </>
  );
};

export default InputHHMM;