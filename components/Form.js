import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { gStyle } from '../styles/styles';
import { Formik } from 'formik';

export const Form = ({ addArticle }) => {
    return (
        <View>
            <Formik
                initialValues={{name: '', anons: '', full: '', img: ''}}
                onSubmit={(values, action) => {
                    addArticle(values);
                    action.resetForm();
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.name}
                            placeholder='Add name'
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.anons}
                            multiline
                            placeholder='Add anons'
                            onChangeText={props.handleChange('anons')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.full}
                            multiline
                            placeholder='Add full'
                            onChangeText={props.handleChange('full')}
                        />
                        <TextInput
                            style={[styles.input, styles.lastInput]}
                            value={props.values.img}
                            placeholder='Add img'
                            onChangeText={props.handleChange('img')}
                        />
                        <Button
                            style={styles.button}
                            title='Add'
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5
    },
    lastInput: {
        marginBottom: 15
    },
})
