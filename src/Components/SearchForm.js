import React, { useEffect, useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

export default function SearchForm() {
  let page = 1;

  // Access the client

  const getSearchData = async (searchKey) => {
    const { data } = await axios(
      `http://www.omdbapi.com/?s=batman&page=${page}&apikey=24c13d37`
    );
    console.log("returned info", data);
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
      onSubmit={(values, actions) => {
        setTimeout(() => {
          getSearchData(values);
          actions.setSubmitting(false);
        }, 1000);
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
