import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Card,
  TextInput,
  withTheme,
  Title,
} from 'react-native-paper';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextStyle,
  Dimensions,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const HomeScreen = (props: any) => {
  const {colors} = props.theme;

  const [isLoading, setLoading] = useState(true);
  const [allMemes, setAllMemes] = useState([]);
  const [image, setImage] = useState('http://i.imgflip.com/1bij.jpg');
  const [upperText, setUpperText] = useState('');
  const [lowerText, setLowerText] = useState('');

  const onRandomImagePress = () => {
    const img = allMemes[Math.floor(Math.random() * allMemes.length)].url;
    setImage(img);
  };

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((json) => {
        const {memes} = json.data;
        setAllMemes(memes);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <View style={styles.loading}>
          <View style={styles.overlay} />
          <ActivityIndicator
            animating={true}
            color={colors.accent}
            size="large"
          />
          <Title style={styles.overlayText}>Loading meme links</Title>
        </View>
      ) : null}
      <View style={styles.container}>
        <Card>
          <Card.Actions>
            <Button
              mode="contained"
              style={{backgroundColor: colors.accent}}
              onPress={() => onRandomImagePress()}>
              RANDOM IMAGE
            </Button>
          </Card.Actions>
          <AutoHeightImage
            width={Dimensions.get('window').width - 20}
            source={{uri: image}}
          />
          <Text style={styles.upperText}>{upperText}</Text>
          <Text style={styles.lowerText}>{lowerText}</Text>
          <Card.Content>
            <TextInput
              mode="outlined"
              label="Top Text"
              style={{marginTop: 10}}
              defaultValue={upperText}
              onChangeText={(text) => setUpperText(text)}
            />
            <TextInput
              mode="outlined"
              label="Bottom Text"
              defaultValue={lowerText}
              onChangeText={(text) => setLowerText(text)}
            />
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const textStyle: TextStyle = {
  position: 'absolute',
  left: 0,
  width: '100%',
  letterSpacing: 1,
  fontSize: 23,
  fontWeight: 'bold',
  color: 'white',
  textTransform: 'uppercase',
  fontFamily: 'monospace',
  textAlign: 'center',
  textShadowColor: '#000',
  textShadowOffset: {width: 2, height: 2},
  textShadowRadius: 5,
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    zIndex: 1,
  },
  upperText: {
    ...textStyle,
    top: 60,
  },
  lowerText: {
    ...textStyle,
    bottom: 160,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000000,
  },
  overlay: {
    backgroundColor: 'gray',
    opacity: 0.5,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlayText: {
    color: 'white',
  },
});

export default withTheme(HomeScreen);
