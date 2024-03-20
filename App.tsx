import React, { useState } from 'react';
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
  BackHandler,
  PanResponder
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Menu from './src/Menu';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.mainContainer}>
		<Title text="Dungeon"></Title>
		<StartButton text="Start"></StartButton>
		<Footer></Footer>
	</View>
  );
}

type textProp = {
	text: string
}
type buttonProp = {
	action: () => void
}

function Title(props: textProp) {
	return <Text style={styles.title}>{props.text}</Text>
}

function StartButton(props: textProp) {
	const [menu, setMenu] = useState(true)
	return <View style={styles.middleContainer}>
				<ImageBackground style={styles.mainImage} source={require('./MainMenu.webp')} resizeMode='cover'>
					{menu 
						? <TouchableOpacity onPress={() => setMenu(false)} style={styles.bigButton}>
							<Text style={styles.bigButtonText}>{props.text}</Text>
						  </TouchableOpacity>
						: <Menu></Menu>
					}
				</ImageBackground>	
			</View>
}

function Footer() {
	return <View style={styles.footer}>
		<BasicButton text={{text: "Exit"}} action={{action:() => BackHandler.exitApp()}}></BasicButton>
		<BasicButton text={{text: "Settings"}} action={{action:() => BackHandler.exitApp()}}></BasicButton>
		<BasicButton text={{text: "Credits"}} action={{action:() => BackHandler.exitApp()}}></BasicButton>
	</View>
}

function BasicButton(props : {text: textProp, action: buttonProp}) {
	return<TouchableOpacity onPress={props.action.action}
				style={styles.basicButton}>
				<Text style={styles.basicText}>{props.text.text}</Text>
			</TouchableOpacity>
}

const styles = StyleSheet.create({
  mainContainer: {
	flex: 1,
	flexDirection: 'column'
  },
  title: {
	fontSize: 75,
	color: 'rgba(100, 0, 0, 1)',
	textAlign: 'center',
	textShadowColor: 'rgba(0, 0, 0, 1)',
  	textShadowOffset: {width: -7, height: 10},
  	textShadowRadius: 10,
	textTransform: 'uppercase'
  },
  middleContainer: {
	flex: 1
  },
  bigButton: {
	height: "20%",
	width: "70%",
	justifyContent: 'center',
	backgroundColor: 'rgba(100, 100, 100, 1)',
	borderRadius: 10
  },
  bigButtonText: {
	fontSize: 50,
	textAlign: 'center',
	color: 'rgba(100, 0, 0, 1)',
	textTransform: 'uppercase',
	textShadowColor: 'rgba(0, 0, 0, 1)',
  	textShadowOffset: {width: -3, height: 5},
  	textShadowRadius: 10
  },
  footer: {
	flex: 0.2,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center'
  },
  basicButton: {
	height: "55%",
	width: "30%",
	justifyContent: 'center',
	backgroundColor: 'rgba(100, 100, 100, 1)',
	borderRadius: 10,
	margin: 5
  },
  basicText: {
	fontSize: 20,
	textShadowColor: 'rgba(0, 0, 0, 1)',
	textShadowOffset: {width: -1, height: 1},
	textShadowRadius: 3,
	color: 'rgba(100, 0, 0, 1)',
	textAlign: 'center',
  },
  mainImage: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center'
  }
  
});
export{
	BasicButton
}
export default App;


