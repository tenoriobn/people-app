import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UsersListScreen from "../screens/UsersListScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";

export type RootStackParamList = {
  UsersList: undefined;
  UserDetails: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UsersList"
          component={UsersListScreen}
          options={{ title: "People" }}
        />

        <Stack.Screen
          name="UserDetails"
          component={UserDetailsScreen}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
