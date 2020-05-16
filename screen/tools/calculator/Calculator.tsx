import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

export default class Calculator extends Component{
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> CALCULATOR Screen </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Timer')}
                    title="Go to Timer screen"
                />
            </View>
        )
    }
}