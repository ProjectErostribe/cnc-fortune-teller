import { StatusBar } from 'expo-status-bar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Linking } from 'react-native';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import About from './Components/About';


export default function App() {

  const initialState = {
    winningStreak: 0
  }

  const reducer = (state = initialState, action) => {
    switch(action.type){
      case 'INCREASE_WINNING_STREAK':
        return {
          winningStreak: state.winningStreak + 1
        }
      case 'RESET_WINNING_STREAK':
        return {
          winningStreak: 0
        }
    }
    return state;
  }

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
      <StatusBar style="auto" />
    </Provider>
  );
}
