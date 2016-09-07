import Avatar from 'react-native-interactive-avatar';
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class Avatary extends Component {
    handleImageChange = (response) => {
        // Do something

        // response looks like : {
        //      data: "data:image/jpeg;base64,/9j/4AAQSkZJRg...", // Base64
        //      fileSize: 474486,
        //      height: 531,
        //      isVertical: false,
        //      origURL: "assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG",
        //      uri: "file:///...",
        //      width: 800,
        // }
    };

    render() {
        <View>
            <Avatar
                source={'https://media2.giphy.com/media/sbLpwwHlgls8E/giphy.gif'}
                size={'default'}
                interactive={true}
                onChange={this.handleImageChange}
            />
            <Avatar
                source={require('./images/logo-cropped.png')}
                isRequire={true}
                size={'medium'}
            />
            <Avatar
                source={require('./images/logo-cropped.png')}
                isRequire={true}
                size={'small'}
            />
            <Avatar
                withBorder={true}
                placeholder={require('./images/avatar-placeholder.png')}
                style={{
                    borderColor: '#000000',
                    marginLeft: 5,
                }}
                size={'verySmall'}
            />
        </View>
    }
}
