"use strict"
import React, {Component} from "react";
import {
	Text,
	ListView,
	StyleSheet
} from "react-native";

import beerData from "../api/beers";
import {getBreweryDB, searchBreweryDB} from "../api/brewerydbApi";

export default class BreweriesContainer extends Component {
	constructor(props) {
		super(props)
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([1,2,3,4])
		}
	}
	render() {
		//console.log(getBreweryDB("breweries"))
		return (
			<ListView
				style={styles.breweriesContainer}
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
		)
	}
}

const styles = StyleSheet.create({
	breweriesContainer: {
		backgroundColor: "#eee",
	}
});