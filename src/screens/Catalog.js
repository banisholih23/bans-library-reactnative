import React from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';

export default (props) => (
  <ScrollView
    style={{
      ...{
        flex: 1,
        width: '100%',
        paddingHorizontal: 0,
      },
    }}>
    <ScrollView
      horizontal={true}
      decelerationRate="normal"
      style={{
        ...props.dashboardStyle.containerImage,
        ...{
          flex: 1, 
          marginTop: 50,
          minWidth: '100%',
        },
      }}>
      <View
        style={{
          ...{
            flexDirection: 'row',
            flex: 1,
          },
        }}>
        {props.data.map((val, index) => (
          <TouchableOpacity
            key={index}
            style={{
              ...{
                width: 110,
                borderRadius: 10,
                marginRight: 12,
                marginBottom: 5,
                height: 170,
              },
              ...props.dashboardStyle.shadow,
            }}>
            <Image
              source={val.image}
              resizeMode={'cover'}
              style={{
                ...{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                },
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
    <View style={{...{marginBottom: 27}}} />
  </ScrollView>
);