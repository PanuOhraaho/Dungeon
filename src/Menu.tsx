import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {BasicButton} from '../App';

function Menu() {
	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<View style={styles.container}>
			<Text style={styles.basicText}>MENU</Text>
			<BasicButton text={{text: "Jotai"}} action={{action:() => console.log("Ei mitää")}}></BasicButton>
			<BasicButton text={{text: "Jotai"}} action={{action:() => console.log("Ei mitää")}}></BasicButton>
			<BasicButton text={{text: "Jotai"}} action={{action:() => console.log("Ei mitää")}}></BasicButton>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		
	},
	basicText: {
		fontSize: 20,
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 3,
		color: 'rgba(100, 0, 0, 1)',
		textAlign: 'center',
	}
})


export default Menu