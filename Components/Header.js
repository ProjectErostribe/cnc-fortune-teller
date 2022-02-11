import { StyleSheet, View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';
import { Linking } from 'react-native';

function Header(){
    return(
        <View style={styles.container}>
            <Text>
            ABOUT  |  PROJECT GITHUB  |  CIRCUS AND CODE COMMUNITY  |  CIRCUS AND CODE TWITTER
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF525',
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect()(Header);