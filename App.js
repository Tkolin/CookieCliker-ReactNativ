/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef, useEffect} from 'react';

//import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Alert,
  Animated,
  Easing,
} from 'react-native';

const App = () => {
  const [score, setScore] = useState(0);
  const [perClick, setPerClick] = useState(1);
  const [grandmaScore, setGrandmaScore] = useState(0);
  const [factoryScore, setFactoryScore] = useState(0);
  const [mineScore, setMineScore] = useState(0);

  return (
    <SafeAreaView style={styles.All}>
      <View style={styles.Row}>
        <ImageBackground source={require('./img/bgBlack.jpg')}>
          <ImageBackground source={require('./img/shine.png')}>
            <Text style={styles.ScoreStyleText}>{score.toFixed(2)}</Text>
            <TouchableOpacity
              onPress={() => {
                setScore(score + perClick);
              }}>
              <Image
                source={require('./img/sugar.png')}
                style={styles.Cookie}
              />
            </TouchableOpacity>
          </ImageBackground>
        </ImageBackground>
      </View>
      {/*Вынести из ScrollView в класс для упрощения создания?*/}
      <View flex={1} backgroundColor="black" paddingVertical={10}>
        <ImageBackground source={require('./img/bgBlack.jpg')}>
          <ScrollView>
            <View>
              <TouchableOpacity
                onPress={() => {
                  if (score >= 1 + grandmaScore * 1.11) {
                    setScore(score - (1 + grandmaScore * 1.11));
                    setGrandmaScore(grandmaScore + 1);
                    setPerClick(perClick + 1);
                  } else {
                    Alert.alert(
                      'Упс...',
                      'Вам не хватает сахара для приманки',
                      [{text: 'Понял'}, {text: 'Принял'}],
                    );
                  }
                }}>
                <Text style={buttonStyles.TextStyle}>
                  Приманить бабушку, у вас {grandmaScore}, цена сахара{' '}
                  {(1 + grandmaScore * 1.19).toFixed(2)}
                </Text>
                {/*Добавленик картинок в зависимости от количества*/}
                <View flexDirection="row">
                  <Image
                    height={50}
                    width={50}
                    source={require('./img/grandma.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  if (score >= 100 + factoryScore * 1.32) {
                    setScore(score - (100 + factoryScore * 1.32));
                    setFactoryScore(factoryScore + 1);
                    setPerClick(perClick + 1);
                  } else {
                    Alert.alert(
                      'Упс...',
                      'Вам не хватает сахара для покупки завода',
                      [{text: 'Понял'}, {text: 'Принял'}],
                    );
                  }
                }}>
                <Text style={buttonStyles.TextStyle}>
                  Купить сахарный завод, у вас {factoryScore}, цена сахара{' '}
                  {(100 + factoryScore * 1.32).toFixed(2)}
                </Text>
                {/*Добавленик картинок в зависимости от количества*/}
                <View flexDirection="row">
                  <Image
                    height={50}
                    width={50}
                    source={require('./img/factory.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  if (score >= (1000 + mineScore) * 1.41 * mineScore) {
                    setScore(score - ((1000 + mineScore) * 1.41 * mineScore));
                    setMineScore(mineScore  + 1);
                    setPerClick(perClick + 20);
                  } else {
                    Alert.alert(
                      'Упс...',
                      'Вам не хватает сахара для открытия шахты',
                      [{text: 'Понял'}, {text: 'Принял'}],
                    );
                  }
                }}>
                <Text style={buttonStyles.TextStyle}>
                  Купить шахту, у вас {mineScore}, цена сахара{' '}
                  {((1000 + mineScore) * 1.41 * mineScore).toFixed(2)}
                </Text>
                {/*Добавленик картинок в зависимости от количества*/}
                <View flexDirection="row">
                  <Image
                    height={50}
                    width={50}
                    source={require('./img/mine.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setScore(score + 1000);
                }}>
                <Text style={buttonStyles.TextStyle}>Купить читы</Text>
                {/*Добавленик картинок в зависимости от количества*/}
                <View flexDirection="row"></View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScoreStyleText: {
    fontSize: 29,
    color: 'white',
    alignSelf: 'center',
  },
  All: {
    flex: 1,
    backgroundColor: 'silver',
  },
  ContainerUp: {},
  Row: {
    flex: 2,
  },

  Cookie: {
    alignSelf: 'center',
    height: 400,
    width: 400,
    resizeMode: 'contain',
  },
});
const buttonStyles = StyleSheet.create({
  PayButton: {},
  TextStyle: {
    borderRadius: 2,
    paddingTop: 10,
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
  },
});

export default App;
