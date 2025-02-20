import { SafeAreaView, BackHandler, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import useLoginHook from '../../../hooks/useLoginHook'


const LoadingScreen = (): React.JSX.Element => {
    const {onCheckLogin} = useLoginHook();
    useEffect(()=>{
        onCheckLogin();
    },[])
    return (
        <SafeAreaView>
            <View></View>
        </SafeAreaView>
    )
}

export default LoadingScreen;