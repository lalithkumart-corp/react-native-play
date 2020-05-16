import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class HomeScreen extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
                />
            </View>
        )
    }
}