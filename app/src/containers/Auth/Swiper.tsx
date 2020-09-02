import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {Avatar} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import SwiperScreen from '../../components/Auth/SwiperScreen';
import helpers from '../../theme/helpers';
import {LoginModal} from '../../components/Auth/LoginModal';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const AuthSwiper = () => {
  const swiper = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  const [autoplay, setAutoplay] = React.useState(true);
  return (
    <Swiper
      ref={swiper}
      showsButtons={true}
      loop={false}
      autoplay={autoplay}
      onIndexChanged={(index) => {
        if (index === 4) {
          const animated = false;
          setVisible(true);
          setAutoplay(false);
          swiper.current.scrollBy(-3, animated);
        }
      }}>
      <View style={helpers.fill}>
        <SwiperScreen
          title="Bienvenue sur please"
          headline="On vous livre les meilleurs commerces et restaurants de vottre ville en moins de 30 minutes."
        />
      </View>

      <View style={helpers.fill}>
        <SwiperScreen
          title="Un savoir-faire local"
          headline="Nous travaillons avec les meilleurs commerçants, artisans et producteurs locaux"
        />
      </View>

      <View style={helpers.fill}>
        <SwiperScreen
          title="Une équipe locale"
          headline="Une équipe à votre écoute et qui répond à toutes vos questions
          directement l'App !"
        />
      </View>

      <View style={helpers.fill}>
        <SwiperScreen
          title="Des livraisons de qualité"
          headline="Des livraisons rapides et de qualité, réalisées par des livreurs pros, assurés et formés !"
        />
      </View>
      <View style={helpers.fill}>
        <SwiperScreen
          title="Bienvenue sur please"
          headline="On vous livre les meilleurs commerces et restaurants de vottre ville en moins de 30 minutes."
        />
        <LoginModal visible={visible} setVisible={setVisible} />
      </View>
    </Swiper>
  );
};

export default AuthSwiper;
