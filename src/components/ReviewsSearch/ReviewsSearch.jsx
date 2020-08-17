import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StrippedButton } from '../../assets/styles';
import { SearchMagnifyingGlassSVG, SearchMagnifyingGlassSVGPath } from '../../assets/svg';

const SearchContainer = styled.div`
  margin-top: 24px;
`;

const ShowReviewsThatContainer = styled.div`
  padding: 12px 0;
`;

const SearchBarContainer = styled.div`
  flex-basis: 33.33%;
  margin-bottom: 16px;
  margin-right: 16px;
  max-width: 400px;
  border: none;
`;

const TextInputField = styled.div`
  align-items: center;
  background-color: #fff;
  border: 2px solid #b9b6bc;
  border-radius: 8px;
  color: #221924;
  display: flex;
  height: 56px;
  transition: border-color .25s cubic-bezier(.65,.05,.36,1);

  &:hover {
    border-color: #47404a;
    transition-duration: 0s, 0s, .25s;
  }
`;

const TextInput = styled.input`
  appearance: textfield;
  border: none;
  cursor: text;
  flex-grow: 1;
  height: calc(56px - 2em);
  margin: 1em 1em 1em;
  outline: none;
  text-overflow: ellipsis;
  width: calc(100% - 2em);
`;

const TextInputButton = styled(StrippedButton)`
  align-items: center;
  background-color: #7f187f;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  color: #fff;
  display: flex;
  height: 56px;
  margin-right: -2px;
  padding: 0 16px;
  transition: .25s cubic-bezier(.65,.05,.36,1);
  transition-property: background-color, color, border-color;
  width: 4em;

  &:hover {
    background-color: #934398;
    box-shadow: 0 0 0 1px #1364f1, 0 0 4px #1364f1;
    transition-duration: 0s,0s,.25s
  }

  &:focus {
    box-shadow: 0 0 0 1px #1364f1, 0 0 4px #1364f1;
    z-index: 1;

`;

class ReviewsSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  handleSearchChange(letter) {
    const queryIgnoreCaseTrim = letter.target.value.toLowerCase().trim();
    this.setState({ query: queryIgnoreCaseTrim });
  }

  handleSearchClick() {
    const { query } = this.state;
    const { filterReviewsByText } = this.props;
    document.getElementById('search_reviews').value = '';
    filterReviewsByText(query);
  }

  render() {
    return (
      <section>
        <SearchContainer>
          <ShowReviewsThatContainer>
            Show reviews that mention
          </ShowReviewsThatContainer>
          <SearchBarContainer>
            <TextInputField>
              <TextInput
                onChange={(letter) => this.handleSearchChange(letter)}
                onKeyDown={(key) => key.keyCode === 13 && this.handleSearchClick()}
                id="search_reviews"
                type="text"
                placeholder="Search Reviews"
              />
              <TextInputButton type="button" onClick={() => this.handleSearchClick()}>
                <SearchMagnifyingGlassSVG
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <SearchMagnifyingGlassSVGPath />
                </SearchMagnifyingGlassSVG>
              </TextInputButton>
            </TextInputField>
          </SearchBarContainer>
        </SearchContainer>
      </section>
    );
  }
}

ReviewsSearch.propTypes = {
  filterReviewsByText: PropTypes.func.isRequired,
};

export default ReviewsSearch;
