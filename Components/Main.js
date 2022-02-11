import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { connect } from 'react-redux';

function Main(){
    return(
        
        <>
            <View>
                <Image
                    style={{ width: 700, height: 500 }}
                    source={require('../Images/cnc-logo.png')} />
            </View>
            
            
            </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect()(Main);