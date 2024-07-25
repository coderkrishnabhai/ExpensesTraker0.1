import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import Booking from './screens/Booking';
import { GlobalStyles } from './constants/styles';


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.Colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.Colors.primary500 },
        tabBarActiveTintColor: "white",
      }}
    >
      <BottomTab.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          )
        }}

      />
      <BottomTab.Screen 
      name='Booking'
      component={Booking}
      options={{
        title:'Booking Now',
        tabBarLabel:'Booking',
        tabBarIcon:({color,  size}) =>(
          <Ionicons name='logo-whatsapp' size={size} color={color}/>
        )
      }}

      />
      
      <BottomTab.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          )
        }}

      />
      

      
    </BottomTab.Navigator>
  )

}

export default function App() {
  return (
    <>

      <StatusBar style="light" />
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen
            name='ExpensesOverview'
            component={ExpensesOverview}
            options={{ headerShown: false }}

          />
          <Stack.Screen name='ManageExpenses' component={ManageExpenses} />
        </Stack.Navigator>

      </NavigationContainer>

    </>

  );
}

