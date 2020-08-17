import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchFullWrapper = styled.div`
  margin-top: 24px;
  display: block;
`;

const ShowReviewsThatContainer = styled.div`
  display: block;
  padding: 12px 0;
`;

const SearchBarContainer = styled.div`
  max-width: 400px;
  flex-basis: 33.33%;
  margin-bottom: 16px;
  margin-right: 16px;
`;

const TextInputFieldWrap = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  color: #221924;
  border-radius: 8px;
  background-color: #fff;
  border: 2px solid #b9b6bc;
  transition: border-color .25s cubic-bezier(.65,.05,.36,1);

  &:hover {
    transition-duration: 0s,0s,.25s
    box-shadow: 0 0 0 1px #47404a,0 0 4px #47404a;
    border-color: #47404a;
  }
`;

const TextInputLabelWrap = styled.div`
  flex-grow: 1;
`;

const TextInputLabel = styled.label`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const TextInput = styled.input`
  background: none;
  flex-grow: 1;
  line-height: inherit;
  margin: 1em 1em 1em;
  height: calc(56px - 2em);
  width: calc(100% - 2em);
  text-overflow: ellipsis;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  border: none;
  border-radius: 0;
  cursor: text;
  appearance: textfield;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
`;

const TextInputButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #7f187f;
  color: #fff;
  height: 56px;
  padding: 0 16px;
  margin-right: -2px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: .25s cubic-bezier(.65,.05,.36,1);
  transition-property: background-color,color,border-color;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  border: 0;
  width: 4em;

  &:hover {
    transition-duration: 0s,0s,.25s
    box-shadow: 0 0 0 1px #1364f1, 0 0 4px #1364f1;
    background-color: #934398;
  }

  &:focus {
    box-shadow: 0 0 0 1px #1364f1, 0 0 4px #1364f1;
    z-index: 1;

`;

const SearchHourGlass = styled.svg`
  width: 100%;
  height: 100%;
  fill: #fff;
`;

const SearchHourGlassPath = styled.path`
  d: path("M21.7 20.3l-3.4-3.4c2-2.7 1.8-6.4-.6-8.9C15 5.3 10.6 5.3 8 8c-2.7 2.7-2.7 7 0 9.6 1.3 1.3 3.1 2 4.8 2 1.4 0 2.8-.5 4-1.3l3.4 3.4c.2.2.5.3.7.3s.5-.1.7-.3c.5-.4.5-1 .1-1.4zM9.4 16.2c-1.9-1.9-1.9-4.9 0-6.8.9-.9 2.2-1.4 3.4-1.4s2.5.5 3.4 1.4c1.9 1.9 1.9 4.9 0 6.8-1.9 1.9-4.9 1.9-6.8 0z")
`;

class ReviewsSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.handleSearchClick();
    }
  }

  handleSearchChange(event) {
    const queryIgnoreCaseTrim = event.target.value.toLowerCase().trim();
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
        <SearchFullWrapper>
          <ShowReviewsThatContainer>
            Show reviews that mention
          </ShowReviewsThatContainer>
          <SearchBarContainer>
            <TextInputFieldWrap>
              <TextInputLabelWrap>
                <TextInputLabel>
                  <TextInput
                    onChange={(e) => this.handleSearchChange(e)}
                    onKeyDown={(e) => this.handleKeyPress(e)}
                    id="search_reviews"
                    type="text"
                    placeholder="Search Reviews"
                  />
                  <TextInputButton type="button" onClick={() => this.handleSearchClick()}>
                    <SearchHourGlass
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <SearchHourGlassPath />
                    </SearchHourGlass>
                  </TextInputButton>
                </TextInputLabel>
              </TextInputLabelWrap>
            </TextInputFieldWrap>
          </SearchBarContainer>
        </SearchFullWrapper>
      </section>
    );
  }
}

ReviewsSearch.propTypes = {
  filterReviewsByText: PropTypes.func.isRequired,
};

export default ReviewsSearch;
