import React from 'react';
import PropTypes from 'prop-types';
import FormikSearchForm from './SearchForm';


const Header = ({ setQuery }) => (
  <header className="ui centered">
    <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    <FormikSearchForm setQuery={setQuery} />
  </header>
);

Header.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default Header;
