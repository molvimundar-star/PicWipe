import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>PicWipe</Text>
      <Text style={{ fontSize: 14, color: '#666876', marginBottom: 16 }}>
        Swipe left to trash, swipe right to keep. Free, no ads, your photos never leave your device.
      </Text>
      <Text style={{ fontSize: 12, color: '#8C8E98' }}>
        PicWipe by SadSha, version 1.0.0.{'\n'}
        Based on sWipe by madhavpcm (github.com/madhavpcm/sWipe), licensed under AGPL-3.0.{'\n'}
        Source code: github.com/molvimundar-star/PicWipe
      </Text>
    </View>
  )
}

export default index