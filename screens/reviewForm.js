import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import globalStyles from '../styles/global';
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from '../shared/button';

const { object, string } = yup;

const reviewSchema = object({
    title: string()
            .required()
            .min(4),
    body: string()
            .required()
            .min(8),
    rating: string()
            .required()
            .test('is-num-1-5', 'Rating must be between 1-5', (val) => {
                const intRating = parseInt(val);
                return intRating > 0 && intRating < 6
            }),
});

export default function ReviewForm({ onFormSubmit }) {

    const initialValues = {
        title: '',
        body: '',
        rating: '',
    };

    const { container, input, errorText } = globalStyles;
    return (
        <View style={container}>
            <Formik
            initialValues={initialValues}
            validationSchema={reviewSchema}
            onSubmit={(values, action) => {
                action.resetForm();
                onFormSubmit(values);
            }}
            >
                {
                    ({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
                        <View>
                            <TextInput
                                style={input}
                                placeholder="Review title"
                                onChangeText={handleChange('title')}
                                value={values.title}
                                onBlur={handleBlur('title')}
                            />
                            <Text style={errorText}>{touched.title && errors.title}</Text>
                            <TextInput
                                multiline
                                style={input}
                                placeholder="Review body"
                                onChangeText={handleChange('body')}
                                value={values.body}
                                onBlur={handleBlur('body')}
                            />
                            <Text style={errorText}>{touched.body && errors.body}</Text>
                            <TextInput
                                style={input}
                                placeholder="Rating"
                                onChangeText={handleChange('rating')}
                                value={values.rating}
                                keyboardType="numeric"
                                onBlur={handleBlur('rating')}
                            />
                            <Text style={errorText}>{touched.rating && errors.rating}</Text>
                            <FlatButton
                                text='Submit'
                                onPress={handleSubmit}
                            />
                        </View>
                    )
                }
            </Formik>
        </View>
    );

}