import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    StyleSheet,
    Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gStyle } from '../styles/styles';
import { Form } from './Form';

export const Main = ({ navigation }) => {
    const [news, setNews] = useState([
        {
            name: 'Google',
            anons: 'Google...',
            full: 'Google is cool',
            key: '1',
            img: 'https://file.liga.net/images/general/2020/09/08/20200908171549-5386.jpg?v=1599578314' },
        {
            name: 'Apple',
            anons: 'Apple...',
            full: 'Apple is cool',
            key: '2',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQXq6pAA7mdkNSNbbCS8G3EbarxJjx43__8rU8KiUvYSWCT-OXkuMnf1CGJv-1JQpNcc&usqp=CAU' },
        {
            name: 'Facebook',
            anons: 'Facebook...',
            full: 'Facebook is cool',
            key: '3',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1200px-Facebook_New_Logo_%282015%29.svg.png' }
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }

    return (
        <View style={gStyle.main}>
            <Modal visible={modalWindow}>
                <View style={gStyle.main}>
                    <Ionicons
                        name="close-circle-sharp"
                        size={34} color="red"
                        style={styles.iconClose}
                        onPress={() => setModalWindow(false)}
                    />
                    <Text style={styles.title}>Add form</Text>
                    <Form addArticle={addArticle}/>
                </View>
            </Modal>
            <Ionicons
                name="add-circle-sharp"
                size={34} color="green"
                style={styles.iconAdd}
                onPress={() => setModalWindow(true)}
            />
            <Text style={[gStyle.title, styles.header]}>Main page</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigation.navigate('FullInfo', item)}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: item.img }}
                    />
                    <Text style={styles.title}>{ item.name }</Text>
                    <Text style={styles.anons}>{ item.anons }</Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    iconClose: {
        textAlign: 'center',
    },
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15
    },
    header: {
      marginBottom: 30
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'

    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    },
    item: {
       width: '100%',
       marginBottom: 30,
    },
    image: {
        width: '100%',
        height: 200,
    }
})
