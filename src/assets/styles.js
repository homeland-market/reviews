import styled from 'styled-components';

export const StrippedButton = styled.button`
  background: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
`;

export const ShowMoreOrLessButton = styled(StrippedButton)`
  align-items: center;
  color: #7f187f;
  display: flex;
  font: inherit;
  height: 100%;
  justify-content: center;
  text-decoration: underline;
  outline: none;

  &:hover {
    text-decoration: none;
  }
`;

export const customSortBar = {
  container: (provided) => ({
    ...provided,
    borderRadius: '8px',
    display: 'flex',
    width: '250px',
    textAlign: 'left',
    minHeight: '56px',
    position: 'relative',
    minWidth: '40%',
    background: '#fff',
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '8px',
    border: '2px solid #b9b6bc',
    minHeight: '56px',
    height: '56px',
    minWidth: '100%',
    fontWeight: 900,
    color: '#221924',
    transition: 'border-color .25s cubic-bezier(.65,.05,.36,1)',

    '&:hover': {
      borderColor: '#47404a',
      transitionDuration: '0s, 0s, .25s',
    },
  }),
  option: (provided) => ({
    ...provided,
    color: '#221924',
    borderRadius: '8px',
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '8px',
    marginBottom: '8px',
    width: 'auto',
  }),
  input: (provided) => ({
    ...provided,
    minHeight: '1px',
    minWidth: '100%',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    minHeight: '1px',
    height: '24px',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    minHeight: '1px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    minHeight: '1px',
    height: '40px',
    paddingTop: '0',
    paddingBottom: '0',
    marginLeft: '5px',
  }),
  singleValue: (provided) => ({
    ...provided,
    minHeight: '1px',
    color: '#221924',
  }),
};
