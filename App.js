import React, { Component } from "react";
import HomeScreen from "./screens/Home";
import RecommendedMoviesScreen from "./screens/Recommendation";
import PopularMoviesScreen from "./screens/Popular";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { RFValue } from "react-native-responsive-fontsize";

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
				<AppStackNavigator />
			</NavigationContainer>
		);
	}
}

const Tab = createMaterialTopTabNavigator();

const AppTopNavigation = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='RecommendedMovies'
				component={RecommendedMoviesScreen}
				options={{
					tabBarLabelStyle: { color: "#000" },
					tabBarItemStyle: { width: 100 },
					tabBarStyle: { backgroundColor: "#fff" },
					tabBarLabel: "Recommended",
				}}
			/>
			<Tab.Screen
				name='PopularMovies'
				component={PopularMoviesScreen}
				options={{
					tabBarLabelStyle: { color: "#000" },
					tabBarItemStyle: { width: 100 },
					tabBarStyle: { backgroundColor: "#fff" },
					tabBarLabel: "Popular",
				}}
			/>
		</Tab.Navigator>
	);
};

const Stack = createStackNavigator();

function AppStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='AppTopNav'
				component={AppTopNavigation}
				options={{
					headerBackTitle: null,
					headerTintColor: "#fff",
					headerTitle: "Recommended Movies",
					headerStyle: {
						backgroundColor: "#d500f9",
					},
					headerTitleStyle: {
						color: "#fff",
						fontWeight: "bold",
						fontSize: RFValue(18),
					},
				}}
			/>
		</Stack.Navigator>
	);
}
