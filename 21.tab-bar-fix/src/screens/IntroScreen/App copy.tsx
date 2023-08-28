import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { COLORS, SIZES } from '../../constants/theme'

const slides = [
  {
    'id': 1,
    'title': 'Dokter Terbaik',
    'description': 'Tim dokter profesional untuk membantu Anda mendapatkan pengalaman perawatan kesehatan terbaik.',
    'image': require('./src/assets/Illustration.png')
  },
  {
    'id': 2,
    'title': 'Kelola Kesehatan Anda',
    'description': 'Kelola kesehatan Anda secara online dan dapatkan bantuan tentang cara meningkatkan kesehatan Anda.',
    'image': require('./src/assets/Illustration.png')
  },
  {
    'id': 3,
    'title': 'Jadwalkan Janji Temu Anda',
    'description': 'Ingin membuat janji temu? Tidak perlu pergi ke mana pun, pesan dan atur janji temu Anda sambil duduk di rumah.',
    'image': require('./src/assets/Illustration.png')
  }
]

const App = () => {
  const [showHomePage, setShowHomePage] = useState(false)

  const NextBotton= (props:any) => {
    return (
      <View style={{
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.pindad,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 10,
      }}>
        <Text style={{
          color: 'white',
          fontWeight: 'bold'
        }}>{props.labelText}</Text>
      </View>
    )
  }
  

  const buttonLabel = (label: any) => {
    return (
      <View style={{ padding: 12 }}>
        <Text
          style={{
            color: COLORS.title,
            fontWeight: '600',
            fontSize: SIZES.h4,
          }}>
          {label}
        </Text>
      </View>
    )
  }

  if (!showHomePage) {

    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 15,
                paddingTop: 10,
              }}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 400,
                }}
                resizeMode='contain'
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.title,
                  fontSize: SIZES.h1,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  paddingHorizontal:5,
                  color: COLORS.title
                }}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLORS.pindad,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel(<NextBotton labelText='Next' />)}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel(<NextBotton labelText='Done' />)}
        onDone={() => {
          setShowHomePage(true)
        }}
      />
    )
  }

  return (
    <View style={styles.wrapper}>
      <Text>Home</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})