import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BottomSheetModal from '../items/BottomSheetModal';
import { Color } from '../../components/styles/GlobalStyles';

const ToolbarDetail = () => {
  const navigation = useNavigation();
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };
  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };
  const goBack = () => {
    navigation.goBack(); // Use goBack function to navigate back
  };

  return (
    <View style={styles.toolbarDetail}>
      <TouchableOpacity onPress={goBack}>
        <Image style={styles.backward} source={require('../../assets/icon--backward3x.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openBottomSheet}>
        <Image style={styles.more} source={require('../../assets/more.png')} />
        <BottomSheetModal isVisible={isBottomSheetVisible} onClose={closeBottomSheet} />
      </TouchableOpacity>
    </View>
  );
};

const ContentEvent = ({ route }) => {
  const eventData = route.params.eventData;

  return (
    <View>
      <Text style={styles.title}>{eventData.name}</Text>
      <Text style={styles.textNameEvent}>Khai trương nhà hàng</Text>
      <View>
        <Text style={styles.nameLabel}>Nhân viên</Text>
        <View style={styles.image}>
          <Image
            style={[styles.avatar, styles.avatarIconLayout]}
            contentFit="cover"
            source={require('../../assets/avatar-28x2813x.png')}
          />
          <Image
            style={[styles.avatar, styles.avatarIconLayout]}
            contentFit="cover"
            source={require('../../assets/avatar-28x2823x.png')}
          />
          <Image
            style={[styles.avatar, styles.avatarIconLayout]}
            contentFit="cover"
            source={require('../../assets/avatar-28x283x.png')}
          />
        </View>
      </View>

      <Text style={styles.nameLabel}>Thời gian</Text>
      <Text style={styles.nameLabel}>Mô tả</Text>
      <Text style={styles.nameLabel}>Hình ảnh</Text>
    </View>
  );
};

const DetailEventScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <ToolbarDetail />
      <ContentEvent route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    margin: 5,
  },
  toolbarDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backward: {
    width: 30,
    height: 30,
  },
  more: {
    width: 25,
    height: 25,
    alignItems: 'flex-end',
    alignContent: 'center',
  },
  title: {
    fontSize: 17,
    color: Color.colorText,
    fontWeight: 'bold',
  },
  nameLabel: {
    fontSize: 16,
    color: Color.colorText,
    fontWeight: 'bold',
  },
  image: {
    flexDirection: 'row',
  },
});

export default DetailEventScreen;
