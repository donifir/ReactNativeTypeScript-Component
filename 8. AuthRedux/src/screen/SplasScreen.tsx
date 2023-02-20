import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { resetState } from '../features/authSlice';

const SplasScreen = () => {
  const redirect = useAppSelector(state => state.user.isRedirect);
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (redirect === true) {
      setTimeout(() => {
        dispatch(resetState());
      }, 500);
    }
  }, [redirect])
  return (
    <View style={styles.wrapper}>
      <Text>SplasScreen</Text>
    </View>
  )
}

export default SplasScreen

const styles = StyleSheet.create({
  wrapper:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:'white'
  }
})