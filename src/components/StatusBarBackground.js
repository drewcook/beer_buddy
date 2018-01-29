"use strict"
import React, {Component} from "react";
import {
	View,
	StyleSheet
} from "react-native";

export default class StatusBarBackground extends Component {
	render() {
		return (
			<View style={[styles.statusBarBackground, this.props.style || {}]}>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	statusBarBackground: {
		backgroundColor: "white",
		height: 20,
	}
})
