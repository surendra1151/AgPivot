import React,{Component} from 'react';
import {Text,Image,View, StyleSheet,TouchableHighlight,TextInput,ScrollView,FlatList} from 'react-native';
export default class SupportPage extends React.Component{
    static navigationOptions = {
        header: null,
    };
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View>
                <View style={styles.home}>
                    <Text style={styles.hi}>Hi @E Raja Raja Raja {'\n'} how can we help? </Text>
                    <TextInput
                    placeholder={'Search'}
                    placeholderTextColor='#B0EBFF'
                    style={{
                        width:380,
                        borderColor: '#B0EBFF',
                        marginTop: 96,
                        height:45,
                        borderBottomWidth:0.7,
                        marginLeft:60,

                    }
                    }
                   />
                   <Image source={require('../assets/Find.png')} style={{marginTop: 110,right:20,height:20,width:20}}/>
                   <Image source={require('../assets/Design.png')} style={{marginLeft:18}}/>
                </View>

                </View>
                <View style={{ flex:4,flexDirection:'row',backgroundColor: '#F2F2F2'}}>
                    <View style={{ flex:1,flexDirection:'column'}}>
                        <TouchableHighlight>
                        <Text style={styles.farmpro}>  Using AgPivot</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                        <Text style={styles.account}>Managing your account</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                        <Text style={styles.account}>Safety and security</Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                        <Text style={styles.account}>Rules and policies</Text>
                        </TouchableHighlight>
                        <Image source={require('../assets/infographic.png')} style={{height:120,width:120,marginLeft:110,marginTop:45}}/>
                    </View>
                    <View style={{ flex:3,backgroundColor:'white',marginLeft:100}}>
                        <Text style={styles.pro}>Everything ypu need to know so you can use AgPivot like a pro</Text>
                        <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column'}}>
                            <TouchableHighlight>
                            <Text style={styles.tweet}>Tweets</Text>
                            </TouchableHighlight>
                            <TouchableHighlight>
                            <Text style={styles.tweet}>Adding content to your Tweets</Text>
                            </TouchableHighlight>
                            <TouchableHighlight>
                            <Text style={styles.tweet}>Search and trends</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <TouchableHighlight>
                            <Text style={styles.tweet}>Blocking and muting</Text>
                            </TouchableHighlight>
                            <TouchableHighlight>
                            <Text style={styles.tweet}>Direct Messages</Text>
                            </TouchableHighlight>
                            <TouchableHighlight>
                            <Text style={styles.tweet}>Twitter on your device</Text>
                            </TouchableHighlight>
                        </View>
                        </View>


                    </View>

                </View>
            </View>
        )
    }

}
const styles=StyleSheet.create({
    hi: {
        marginTop:96,
        marginLeft:80,
        fontFamily:'poppins',
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:40,
        lineHeight:65,
        color:'#B0EBFF'

    },
    home:{
        flexDirection:'row',
        backgroundColor:'#03A8E1'
    },
    farmpro: {
        fontFamily:'poppins',
        fontStyle:'normal',
        fontWeight:'500',
        fontSize:20,
        lineHeight:32,
        marginLeft:100,
        marginTop:75,
        color:'#333333'
    },
    account:{
        fontFamily:'poppins',
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:14,
        lineHeight:23,
        marginLeft:110,
        marginTop:15,
        color:'#646464'
    },
    pro:{
        fontFamily:'poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:16,
        lineHeight:28,
        marginLeft:110,
        marginTop:75,
        color:'#646464'
    },
    tweet:{
        fontFamily:'poppins',
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:12,
        lineHeight:20,
        marginLeft:110,
        marginTop:20,
        color:'#03A8E1'
    }
})
