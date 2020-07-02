import React from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';

export default (props) => (
  <ScrollView
    style={{
      ...{
        flex: 1,
        width: '100%',
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
                width: 120,
                borderRadius: 10,
                marginRight: index === props.data.length - 1 ? 4 : 12,
                marginLeft: index === 0 ? 3 : 0,
                marginBottom: 5,
                height: 200,
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