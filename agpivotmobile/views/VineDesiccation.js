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
import {VineRecords} from "../components/VineRecords";
export default class VineDesiccation extends React.Component{
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state={
         recordScreen:"entry",
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
            variety:[],
            color:[],
            seed:[],
            date:"2019-11-27",
            killed:"",



        }
    }
    /*condition for entry or records screen */
    recordScreen(name){
        if (name==='entry'){
            this.setState({recordScreen:'entry'})
        }
        else if (name==='records'){
            this.setState({recordScreen:'records'})
        }

    }

    AgPivot(){
        this.props.navigation.replace('Home');
    }
    /*functionality to exit screen and move to login screen */
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
                        <TouchableHighlight onPress={() =>this.AgPivot()}>
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
                    {this.state.recordScreen==='entry'?
                        <Text style={styles.vine}>Vine Desiccation</Text>:
                        <Text style={styles.vine}>Vine Desiccation Table</Text>
                    }
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{marginTop: 18, flexDirection: 'row'}}>
                            {this.state.recordScreen==='entry'?
                                <View style={{flexDirection:'row'}}>
                                    <TouchableHighlight onPress={() =>this.recordScreen('entry')}>
                                        <Image source={require('../assets/Entry.png')} />
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() =>this.recordScreen('records')}>
                                        <Image
                                            source={require('../assets/Records.png')}
                                            style={{marginLeft: 20, marginRight: 30}}
                                        />
                                    </TouchableHighlight>
                                </View>:
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
                            }
                        </View>
                    </View>
                </View>
                {this.state.recordScreen !== 'entry' ?
                    <VineRecords/> :

                    <View>
                        <View style={{flexDirection: 'row', marginRight: 300}}>
                            <View
                                style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                <Text style={styles.year}>Year</Text>
                                <Text style={{color: 'red'}}>*</Text>
                            </View>
                            <View
                                style={{flexDirection: 'row', marginTop: 30, marginLeft: 360}}>
                                <Text style={styles.year}>Field Number</Text>
                                <Text style={{color: 'red'}}>*</Text>
                            </View>
                            <View
                                style={{flexDirection: 'row', marginTop: 30, marginLeft: 303}}>
                                <Text style={styles.year}>Variety</Text>
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
                                    name="002"
                                    defaultItem="002"
                                    value="2019"
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
                                    name=""
                                    defaultItem=""
                                    value="2019"
                                    data={this.state.variety}
                                    color="#686868"
                                />
                            </View>

                        </View>
                        <View style={{flexDirection: 'row', marginRight: 300}}>
                            <View
                                style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                <Text style={styles.year}>Color/Variety</Text>
                                <Text style={{color: 'red'}}>*</Text>
                            </View>
                            <View
                                style={{flexDirection: 'row', marginTop: 30, marginLeft: 305}}>
                                <Text style={styles.year}>Seed Grower</Text>
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
                                    name=""
                                    defaultItem=""
                                    value=""
                                    data={this.state.color}
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
                                    name=""
                                    defaultItem=""
                                    value=""
                                    data={this.state.seed}
                                    color="#686868"
                                />
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <View style={{marginRight: 83, marginTop: 15}}>
                                    <LinearGradient
                                        start={{x: 0.5, y: 0}}
                                        end={{x: 2, y: 0}}
                                        colors={['#634720', '#C99349']}>
                                        <Text style={styles.identify}>Identify</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                borderWidth: 0.686327,
                                borderColor: '#CCCBCB',
                                height: 0,
                                marginLeft: 85,
                                marginRight: 30,
                                marginTop: 30
                            }}
                        />
                        <View>
                            <Text style={styles.vine}>Add Record</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Killed Date</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 320}}>
                                    <Text style={styles.year}>Acres Killed</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                            </View>


                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <DatePicker
                                style={{
                                    width: 330,
                                    marginLeft: 85,
                                    marginTop: 15,
                                    borderColor: '#B4B4B4',
                                    color: '#686868',
                                }}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                androidMode="calendar"
                                minDate="1900-01-01"
                                maxDate="2050-12-31"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                customStyles={{
                                    dateInput: {
                                        paddingRight: 220,
                                        color: '#686868',
                                        height: 40,
                                        borderRadius: 5,
                                    },
                                    dateText: {
                                        color: '#686868',
                                    },
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={date => {
                                    this.setState({date: date});
                                }}
                            />
                            <TextInput
                                value={this.state.killed}
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
                                onChangeText={killed => this.setState({killed})}
                            />
                        </View>
                        <View style={{
                            flex: 1,
                            alignItems: 'flex-end',
                            marginTop: 30,
                            marginBottom: 50,
                            marginRight: 50
                        }}>
                            <Image source={require('../assets/Submit.png')}/>
                        </View>

                    </View>
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
        vine:{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
            lineHeight: 36,
            color: '#686868',
            marginLeft: 85,
            marginTop: 20,
        },
        identify: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            borderRadius: 2,
            height: 36,
            width: 102,
            textAlign: 'center',
            paddingTop: 10,
            color: 'white',

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
        year: {
            fontFamily: ' Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 20,
            color: '#686868',
        },
    }
)
