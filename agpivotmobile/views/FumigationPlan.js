import React,{Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableHighlight,
    Alert,
    Dimensions,
    TextInput, AsyncStorage, ScrollView,
} from 'react-native';
import {DropDown} from '../components/DropDownOne';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationActions, StackActions} from "react-navigation";
import {FumigationRecords} from "../components/FumigationRecords";

export default class FumigationPlan extends React.Component{
    static navigationOptions={
        header:null,
    };
    constructor(props) {
        super(props);
        this.state={
        year:[
            "2019",
            "2020"
        ],
            field:[
                "002",
                "003",
                "013",
                "017",
                "018",
                "023",
                "024",
                "025",
                "051",
                "052",
                "055",
                "059",
                "071",
                "072",
                "124",
                "175",
                "183",
                "184",
                "191",
                "A-3 205",
                "Bonnett Little/East 210 ",
                "Kent 220",
                "Parks",
                "Tracy North",
                "Parr/A-2"
            ],
            section:[
                "N",
                "S",
                "E",
                "W",
                "NE",
                "NW",
                "SE",
                "SW",
                "ENTIRE"
            ],
            vppg:"",
            cc:"",
            grdw:"",
            fumigate:[
                "yes",
                "no"
            ],
            fumigant:[
                "Picplus",
                "Vapam"
            ],
            fumigant_rate:"",
            acres:"",
            comments:"",
            recordScreen:"entry",

        }
    }
    /*condition for entry  or record screen */
    recordScreen(name){
        if (name === 'entry') {
            this.setState({
                recordScreen: 'entry',
            });
        } else if (name === 'records') {
            this.setState({
                recordScreen: 'records',
            });
        }
    }
    AgPivot(){
        this.props.navigation.replace('Home');
    }
    /*condition for logout to move to login screen */
    logout(){
        AsyncStorage.removeItem('loginCredentials').then((value) => {
            AsyncStorage.removeItem('mostUsed').then((value) =>{} )

        } )
        const resetAction= StackActions.reset({
            index:0,
            actions: [NavigationActions.navigate({routeName: 'Login'})],
        });
        this.props.navigation.dispatch(resetAction);
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 20,
                        marginBottom: 5,
                    }}>
                    <View>
                        <TouchableHighlight onPress={()=> this.AgPivot()}>
                            <Image source={require('../assets/Logo.png')} />
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Text style={styles.farm}>
                            {' '}
                            Integrated Farm Management Made Easy
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 30}}>
                        <Text style={{marginRight: 15,color:'#634720'}}>Admin</Text>
                        <Image
                            source={require('../assets/Bitmap.png')}
                            style={{borderRadius: 50,marginRight:20}}
                        />
                        <TouchableHighlight onPress={() =>this.logout()}>
                            <Text style={{color:'#634720'}}>Logout</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        borderWidth: 0.686327,
                        borderColor: '#CCCBCB',
                        height: 0,
                    }}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.home}>Home</Text>
                        <Text style={styles.divison}>/</Text>
                        <Text style={styles.edit}>Edit Profile</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    {this.state.recordScreen === 'entry' ?
                        <Text style={styles.fumigation}>Fumigation</Text> :
                        <Text style={styles.fumigation}>Fumigation Table</Text>
                    }
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{marginTop: 18, flexDirection: 'row'}}>
                            {this.state.recordScreen === 'entry' ? (
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableHighlight
                                        onPress={() => this.recordScreen('entry')}>
                                        <Image source={require('../assets/Entry.png')} />
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        onPress={() => this.recordScreen('records')}>
                                        <Image
                                            source={require('../assets/Records.png')}
                                            style={{marginLeft: 20, marginRight: 30}}
                                        />
                                    </TouchableHighlight>
                                </View>
                            ) : (
                                <View style={{flexDirection: 'row', marginRight: 30}}>
                                    <TouchableHighlight
                                        onPress={() => this.recordScreen('entry')}>
                                        <Text style={styles.entry}>Entry</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        onPress={() => this.recordScreen('records')}>
                                        <LinearGradient
                                            start={{x: 0.5, y: 0}}
                                            end={{x: 2, y: 0}}
                                            colors={['#634720', '#C99349']}>
                                            <Text style={styles.records}>Records</Text>
                                        </LinearGradient>
                                    </TouchableHighlight>
                                </View>
                            )}
                        </View>
                    </View>

                </View>
                {this.state.recordScreen !== 'entry' ?
                    <FumigationRecords/> :
                    <ScrollView style={{flexGrow: 1}}>
                        <View style={{marginBottom: 50, paddingBottom: 50}}>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Year</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 360}}>
                                    <Text style={styles.year}>Field</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 355}}>
                                    <Text style={styles.year}>Section Of Field</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View
                                    style={{
                                        width: 330,
                                        marginLeft: 85,
                                        borderColor: '#B4B4B4',
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        marginTop: 15,
                                        paddingBottom: 25,
                                        height: 40,
                                    }}>
                                    <DropDown
                                        name="2019"
                                        defaultItem="2019"
                                        value="2019"
                                        data={this.state.year}
                                        color="#686868"
                                    />
                                </View>
                                <View
                                    style={{
                                        width: 330,
                                        marginLeft: 60,
                                        borderColor: '#B4B4B4',
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        marginTop: 15,
                                        paddingBottom: 25,
                                        height: 40,
                                    }}>
                                    <DropDown
                                        name={'002'}
                                        defaultItem={'002'}
                                        value={'002'}
                                        data={this.state.field}
                                        color="#686868"
                                    />
                                </View>
                                <View
                                    style={{
                                        width: 330,
                                        marginLeft: 60,
                                        borderColor: '#B4B4B4',
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        marginTop: 15,
                                        paddingBottom: 25,
                                        height: 40,
                                    }}>
                                    <DropDown
                                        name={'N'}
                                        defaultItem={'N'}
                                        value={'N'}
                                        data={this.state.section}
                                        color="#686868"
                                    />
                                </View>

                            </View>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>VPPG</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 350}}>
                                    <Text style={styles.year}>100CC</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 347}}>
                                    <Text style={styles.year}>GRDW</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    value={this.state.vppg}
                                    keyboardType={'numeric'}
                                    placeholder={''}
                                    style={{
                                        height: 40,
                                        borderColor: '#B4B4B4',
                                        borderWidth: 1,
                                        marginLeft: 85,
                                        marginTop: 15,
                                        borderRadius: 5,
                                        width: 330
                                    }}
                                    onChangeText={vppg => this.setState({vppg})}
                                />
                                <TextInput
                                    value={this.state.cc}
                                    keyboardType={'numeric'}
                                    placeholder={''}
                                    style={{
                                        height: 40,
                                        borderColor: '#B4B4B4',
                                        borderWidth: 1,
                                        marginLeft: 60,
                                        marginTop: 15,
                                        borderRadius: 5,
                                        width: 330
                                    }}
                                    onChangeText={cc => this.setState({cc})}
                                />
                                <TextInput
                                    value={this.state.grdw}
                                    keyboardType={'numeric'}
                                    placeholder={''}
                                    style={{
                                        height: 40,
                                        borderColor: '#B4B4B4',
                                        borderWidth: 1,
                                        marginLeft: 60,
                                        marginTop: 15,
                                        borderRadius: 5,
                                        width: 330
                                    }}
                                    onChangeText={grdw => this.setState({grdw})}
                                />
                            </View>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Fumigate</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>

                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 330}}>
                                    <Text style={styles.year}>Fumigant</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 328}}>
                                    <Text style={styles.year}>Fumigant Rate</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View
                                    style={{
                                        width: 330,
                                        marginLeft: 85,
                                        borderColor: '#B4B4B4',
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        marginTop: 15,
                                        paddingBottom: 25,
                                        height: 40,
                                    }}>
                                    <DropDown
                                        name={'yes'}
                                        defaultItem={'yes'}
                                        value={'yes'}
                                        data={this.state.fumigate}
                                        color="#686868"
                                    />
                                </View>
                                <View
                                    style={{
                                        width: 330,
                                        marginLeft: 60,
                                        borderColor: '#B4B4B4',
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        marginTop: 15,
                                        paddingBottom: 25,
                                        height: 40,
                                    }}>
                                    <DropDown
                                        name={'picplus'}
                                        defaultItem={'picplus'}
                                        value={'picplus'}
                                        data={this.state.fumigant}
                                        color="#686868"
                                    />
                                </View>
                                <TextInput
                                    value={this.state.fumigant_rate}
                                    keyboardType={'numeric'}
                                    placeholder={''}
                                    style={{
                                        height: 40,
                                        borderColor: '#B4B4B4',
                                        borderWidth: 1,
                                        marginLeft: 60,
                                        marginTop: 15,
                                        borderRadius: 5,
                                        width: 330
                                    }}
                                    onChangeText={fumigant_rate => this.setState({fumigant_rate})}
                                />
                            </View>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Acres</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 355}}>
                                    <Text style={styles.year}>Comments</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    value={this.state.acres}
                                    keyboardType={'numeric'}
                                    placeholder={''}
                                    style={{
                                        height: 40,
                                        borderColor: '#B4B4B4',
                                        borderWidth: 1,
                                        marginLeft: 85,
                                        marginTop: 15,
                                        borderRadius: 5,
                                        width: 330
                                    }}
                                    onChangeText={acres => this.setState({acres})}
                                />
                                <TextInput
                                    value={this.state.comments}
                                    keyboardType={'numeric'}
                                    placeholder={''}
                                    style={{
                                        height: 60,
                                        borderColor: '#B4B4B4',
                                        borderWidth: 1,
                                        marginLeft: 60,
                                        marginTop: 15,
                                        borderRadius: 5,
                                        width: 330
                                    }}
                                    onChangeText={comments => this.setState({comments})}
                                />
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', marginTop: 30, marginRight: 85}}>
                                <Image source={require('../assets/Submit.png')}/>
                            </View>
                        </View>
                    </ScrollView>
                }
            </View>
        )
    }

}
const styles=StyleSheet.create(
    {
        farm: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 10,
            lineHeight: 15,
            color: 'grey',
            marginTop: 20,
        },
        home: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 15,
            lineHeight: 18,
            color: '#9D9D9D',
            marginTop: 20,
            marginLeft: 85,
            height: 25,
        },
        divison: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 12,
            lineHeight: 18,
            color: '#9D9D9D',
            marginTop: 20,
            marginLeft: 10,
        },
        edit: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 18,
            color: '#717171',
            marginTop: 20,
            marginLeft: 10,
        },
        fumigation:{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
            lineHeight: 36,
            color: '#686868',
            marginLeft: 85,
            marginTop: 20,
        },
        entry: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            color: '#634720',
            borderRadius: 2,
            paddingLeft: 36,
            paddingTop: 10,
            paddingRight: 36,
            borderWidth: 1,
            borderColor: '#634720',
            height: 35,
            marginRight: 20,
            width: 103,
        },
        records: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            color: '#FFFFFF',
            borderRadius: 2,
            textAlign: 'center',
            paddingTop: 10,
            height: 35,
            width: 103,
        },
    }
)
