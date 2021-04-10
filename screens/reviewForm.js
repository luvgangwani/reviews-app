import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import globalStyles from '../styles/global';
import { Formik } from "formik";

export default function ReviewForm({ onFormSubmit }) {

    const initialValues = {
        title: '',
        body: '',
        rating: '',
    };

    const { container, input } = globalStyles;
    return (
        <View style={container}>
            <Formik
            initialValues={initialValues}
            onSubmit={(values, action) => {
                action.resetForm();
                onFormSubmit(values);
            }}
            >
                {
                    ({ handleChange, handleSubmit, values }) => (
                        <View>
                            <TextInput
                                style={input}
                                placeholder="Review title"
                                onChangeText={handleChange('title')}
                                value={values.title}
                            />
                            <TextInput
                                multiline
                                style={input}
                                placeholder="Review body"
                                onChangeText={handleChange('body')}
                                value={values.body}
                            />
                            <TextInput
                                style={input}
                                placeholder="Rating"
                                onChangeText={handleChange('rating')}
                                value={values.rating}
                                keyboardType="numeric"
                            />
                            <Button
                                title='Submit'
                                color='#184e77'
                                onPress={handleSubmit}
                            />
                        </View>
                    )
                }
            </Formik>
        </View>
    );

}