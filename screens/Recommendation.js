import React, { Component } from "react";
import {
	View,
	StyleSheet,
	FlatList,
	ImageBackground,
	Text,
} from "react-native";
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";

export default class RecommendedMoviesScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		this.getData();
	}

	timeConvert(num) {
		var hours = Math.floor(num / 60);
		var minutes = num % 60;
		return `${hours} hrs ${minutes} mins`;
	}

	getData = () => {
		const url = "http://localhost:5000/recommended-movies";
		axios
			.get(url)
			.then(async (response) => {
				this.setState({ data: response.data.data });
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	keyExtractor = (item, index) => index.toString();

	renderItems = ({ item, index }) => {
		return (
			<View style={styles.cardContainer}>
				<ImageBackground
					source={{ uri: item.poster_link }}
					imageStyle={styles.cardBackground}
					style={styles.cardBackgroundContainer}>
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.subtitle}>
						{item.release_date.split("-")[0]} |{" "}
						{this.timeConvert(item.duration)}
					</Text>
				</ImageBackground>
			</View>
		);
	};

	render() {
		const { data } = this.state;
		return (
			<View style={styles.container}>
				<FlatList
					data={data}
					keyExtractor={this.keyExtractor}
					renderItem={this.renderItems}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	title: {
		color: "#fff",
		alignSelf: "flex-start",
		paddingLeft: RFValue(15),
		fontSize: RFValue(20),
		marginTop: RFValue(60),
		fontWeight: "bold",
	},
	subtitle: {
		fontWeight: "bold",
		alignSelf: "flex-start",
		paddingLeft: RFValue(15),
		fontSize: RFValue(15),
		color: "#fff",
	},
	cardContainer: {
		height: 150,
		width: "90%",
		alignSelf: "center",
		marginVertical: "5%",
		borderRadius: RFValue(20),
	},
	cardBackgroundContainer: {
		flex: 1,
		justifyContent: "center",
	},
	cardBackground: {
		flex: 1,
		borderRadius: RFValue(20),
		resizeMode: "cover",
	},
});
