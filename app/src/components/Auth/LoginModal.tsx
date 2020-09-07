import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, Image, View} from 'react-native';
import {
  Button,
  Card,
  Modal,
  Portal,
  TextInput,
  Title,
} from 'react-native-paper';
import auth from '../../api/auth';
import {Images} from '../../assets';
import colors from '../../theme/colors';
import helpers from '../../theme/helpers';
import metrics from '../../theme/metrics';

export function LoginModal({visible, setVisible}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const onLogin = async () => {
    try {
      await auth.login(email, password);
      setVisible(false);
      // Save token to async storage
      // ...
      navigation.reset({
        index: 0,
        routes: [{name: 'App'}],
      });
    } catch (error) {
      Alert.alert('Erreur de connexion', error.message);
    }
  };

  const NIY = () => {
    Alert.alert('Not implemented yet');
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={false}
        contentContainerStyle={helpers.crossCenter}>
        <Card style={{height: '80%'}}>
          <Card.Content
            style={[
              metrics.horizontalPadding,
              metrics.mediumVerticalPadding,
              {alignItems: 'baseline'},
            ]}>
            <View
              style={[
                {width: '100%', minHeight: 100},
                helpers.crossCenter,
                helpers.mainSpaceAround,
              ]}>
              <Image source={Images.logo} />
              <Title>CONNEXION</Title>
            </View>

            <View style={(helpers.row, {width: '100%'})}>
              <TextInput
                placeholder="Mon e-mail"
                value={email}
                style={{backgroundColor: colors.white}}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize={false}
                left={<TextInput.Icon name="account-outline" />}
              />

              <TextInput
                placeholder="Mon mot de passe"
                value={password}
                secureTextEntry
                style={{backgroundColor: colors.white}}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize={false}
                left={<TextInput.Icon name="lock-outline" />}
              />
            </View>

            <Button mode="text" labelStyle={{fontSize: 10}} onPress={NIY}>
              Mot de passe oublié ?
            </Button>

            <View
              style={{
                height: '40%',
                width: '100%',
                justifyContent: 'space-around',
                flexDirection: 'column',
              }}>
              <Button
                mode="contained"
                onPress={onLogin}
                dark
                style={{borderRadius: 25}}>
                ME CONNECTER
              </Button>
              <Button
                mode="outlined"
                style={{borderRadius: 25, borderColor: colors.primary}}
                onPress={NIY}>
                CRÉER UN COMPTE
              </Button>
              <Button
                mode="outlined"
                style={{borderRadius: 25, borderColor: colors.primary}}
                onPress={NIY}>
                IGNORER POUR L'INSTANT
              </Button>
            </View>
          </Card.Content>
        </Card>
      </Modal>
    </Portal>
  );
}
