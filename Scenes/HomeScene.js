e
Issues
18
Pull requests
Actions
Projects
1
Wiki
Security
Insights
guess-the-movie/Scenes/Home.js /

Juan Lucero fix(generate-question): start debugging generate question component
Latest commit 0768fa0 7 hours ago
 History
 0 contributors
65 lines (56 sloc)  1.45 KB
   
import { useEffect } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';
import Badge from '../Components/Badge';
import FetchApi from '../Utils/FetchApi';
import GenerateQuestion from '../Components/GenerateQuestion';

function Home({ winningStreak, increaseWinningStreak, resetWinningStreak, movies, setMovies }) {

  useEffect(
    () => {
      FetchApi().then(res => setMovies(res));
    },
    []
  )

  return(
    <View style={styles.container}>
      <Badge />

      <Text>{winningStreak}</Text>
      <Pressable onPress={increaseWinningStreak}>
        <Text>Add</Text>
      </Pressable>
      <Pressable onPress={resetWinningStreak}>
        <Text>Reset</Text>
      </Pressable>

      <GenerateQuestion movies={movies} />
    </View>
  )
}

function mapStateToProps(state){
  return {
    winningStreak: state.winningStreak,
    movies: state.movies,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseWinningStreak: () => dispatch({
      type: 'INCREASE_WINNING_STREAK'
    }),
    resetWinningStreak: () => dispatch({
      type: 'RESET_WINNING_STREAK'
    }),
    setMovies: (movies) => dispatch({
      type: 'SET_MOVIES',
      movies,
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});