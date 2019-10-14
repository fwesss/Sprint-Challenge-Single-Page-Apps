import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';


const SearchForm = ({ values, setQuery }) => {
  const search = () => (
    setQuery(values)
  );

  return (
    <Form className="search-form">
      <Field type="text" name="query" placeholder="Search" />
      <button type="submit" onClick={search}>Search</button>
    </Form>
  );
};

SearchForm.propTypes = {
  values: PropTypes.shape({
    query: PropTypes.string,
  }).isRequired,
  setQuery: PropTypes.func.isRequired,
};

const FormikSearchForm = withFormik({
  mapPropsToValues({ query }) {
    return {
      query: query || '',
    };
  },

  handleSubmit() {},
})(SearchForm);

export default FormikSearchForm;
