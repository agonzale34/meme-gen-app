import React from 'react';
import {Button, Card, TextInput} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
import {withTheme} from 'react-native-paper';

const HomeScreen = (props: any) => {
  const {colors} = props.theme;
  return (
    <ScrollView>
      <View style={{padding: 10}}>
        <Card>
          <Card.Actions>
            <Button mode="contained" style={{backgroundColor: colors.accent}}>
              RANDOM IMAGE
            </Button>
          </Card.Actions>
          <Card.Cover source={{uri: 'http://i.imgflip.com/1bij.jpg'}} />
          <Card.Content>
            <TextInput mode="outlined" label="Top Text" />
            <TextInput mode="outlined" label="Bottom Text" />
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default withTheme(HomeScreen);
