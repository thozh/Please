import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import colors from '../theme/colors';

interface Props {
  children: React.ReactNode;
}
const Background = ({children}: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});

export default Background;
