import { StyleSheet, View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';

function About(){
    return(
        <View style={styles.container}>
            <Text>
                ABOUT PAGE
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: 100,
        width: '100%',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect()(About);