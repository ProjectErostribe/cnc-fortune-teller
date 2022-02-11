import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { connect } from 'react-redux';

function WorkforceTraining(){
    return(
        <View>
                <Image
                    style={{ width: 700, height: 100 }}
                    source={require('../Images/bw-header-logo.png')} />
                <Image
                    style={{ width: 700, height: 100 }}
                    source={require('../Images/wft-logo.png')} /> 
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect()(WorkforceTraining);