/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button
} from 'react-native';
import ViewContainer from "./src/components/ViewContainer";
import StatusBarBackground from "./src/components/StatusBarBackground";
import BreweriesContainer from "./src/components/BreweriesContainer";

//import {getBreweryDB, searchBreweryDB} from "./src/api/brewerydbApi";
import beerData from "./src/api/beers";

export default class App extends Component<{}> {
	constructor(props) {
		super(props)
		this.state = {
			search: ""
		}
	}

	render() {
		return (
			<ViewContainer>
				<StatusBarBackground />
				<View>
					<Text style={styles.welcome}>
						Welcome to Beer Buddy!
					</Text>
					<Text style={styles.instructions}>
						To get started, search for a beer, brewery, or category.
					</Text>
					<TextInput
						style={styles.searchInput}
						onChangeText={(text) => this.setState({search: text})}
						value={this.state.search}
						onFocus={() => this.setState({search: ""})}
						placeholder="Beer, Brewery, etc."
					/>
					<Button
						style={styles.searchButton}
						title="Search"
						onPress={() => console.log(beerData)} />
				</View>
				<BreweriesContainer/>
			</ViewContainer>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	searchInput: {
		borderColor: "black",
		borderWidth: 1,
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 40,
		marginRight: 40,
		padding: 5,
		borderRadius: 3
	},
	searchButton: {
		color: "blue",
		padding: 10,
	}
});
