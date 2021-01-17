import React from "react";
import {
  Input,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeSearchResults } from "../actions/searchResult";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchForm() {
  const dispatch = useDispatch();

  const toast = useToast();

  // Access the client
  const getSearchData = async (title) => {
    dispatch(storeSearchResults([]));

    try {
      const { data } = await axios(
        `http://www.omdbapi.com/?s=${title}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
      );
      if (!data.Error) {
        dispatch(storeSearchResults(data.Search));
        return;
      }
      throw data.Error;
    } catch (error) {
      toast({
        title: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  function validateTitle(value) {
    let error;
    if (value.trim().length === 0) {
      error = "Input is required";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ title: "" }}
      onSubmit={async ({ title }, actions) => {
        await getSearchData(title.trim());
        actions.setSubmitting(false);
        actions.resetForm();
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(props) => (
        <Form>
          <Field name='title' validate={validateTitle}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.title && form.touched.title}>
                <InputGroup
                  size='md'
                  maxWidth='1040px'
                  minWidth='300px'
                  width='100vw'
                >
                  <Input
                    {...field}
                    id='title'
                    placeholder='Search title'
                    required
                  />
                  <InputRightElement>
                    <IconButton
                      h='1.75rem'
                      size='sm'
                      isLoading={props.isSubmitting}
                      type='submit'
                      aria-label='Search database'
                      icon={<SearchIcon />}
                    />
                  </InputRightElement>
                </InputGroup>

                <FormErrorMessage>{form.errors.title}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </Form>
      )}
    </Formik>
  );
}
