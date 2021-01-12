import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { storeSearchResults } from "../actions/searchResult";

export default function SearchForm() {
  const dispatch = useDispatch();

  //Store movie list state

  let page = 1;
  const apiKey = "24c13d37";
  // Access the client
  const getSearchData = async ({ title }) => {
    const { data } = await axios(
      `http://www.omdbapi.com/?s=${title}&page=${page}&apikey=${apiKey}`
    );
    return data.Search;
  };

  function validateName(value) {
    let error;
    if (!value) {
      error = "Input is required";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ title: "" }}
      onSubmit={async (values, actions) => {
        let searchData = await getSearchData(values);
        dispatch(storeSearchResults(searchData));
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {(props) => (
        <Form>
          <Field name='title' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.title && form.touched.title}>
                <FormLabel htmlFor='title'>Movie Title</FormLabel>
                <Input {...field} id='title' placeholder='Search title' />
                <FormErrorMessage>{form.errors.title}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
