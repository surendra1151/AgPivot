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
import {ManagementRecords} from "../components/ManagementRecords";

export default class LineManagement extends React.Component{
    static navigationOptions={
        header:null
    };
    constructor(props) {
        super(props);
        this.state={
            location:[
                "Arena",
                "Grand Marsh",
                "Friesland"
            ],
            line:[
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8"
            ],
            operators:[
                "Beau Hartline",
                "Charles Stone",
                "Contract Labor",
                "Dale Grimm",
                "Duane Katsma",
                "Frankie Lambert",
                "Greg Hogan",
                "Jacob Huber",
                "Jeff Vossekuil",
                "Jeffrey Huber",
                "Jim Pruessing",
                "Joe Huber",
                "Kirk Dornfeld",
                "Larry Bahr",
                "Mark Randall",
                "Scot Ehlert",
                "Seasonal Labor",
                "Terry Janke",
                "Trevor Frey"
            ],
            equipments:[
                "15100 Double L Conveyor Mod 809 30 Straight",
                "15101 Double L conveyor Mod 809 30 Straight",
                "15150 Double L Telescope Conveyor 30 Mod",
                "15151 Double L Telescope Conveyor 30",
                "15200 Piller 30 Double L",
                "15277 Piller 36 Double L",
                "15330 Miedema Piler System(1 Piler,4 Convetors)",
                "2200 Milestone Expandable Conveyor M70T #994 70'X30",
                "2201 LI Bin Piler 36 * 50'(Wagner Piler)",
                "2202 Milestone Bin Piler 48'Boom-30-1998",
                "2203 LI Bin Piler #8130 With Stinger 45",
                "2204 Mayo Mini Piler 18",
                "222 Double L 36 Piler",
                "225 EVEN-FLO BIN-GALLENBERG(BLUE TUB)",
                "2250 Spudnik 995 Multi Sep Eliminator 60",
                "2251 Spudnik Sizer/Dirt Eliminator 60",
                "2252 Lockwood Air Seperator",
                "2253 Spudinik Evenflow Tub #294(600 Bag)",
                "2255 Double L 2019 Even Flow Tub",
                "228 Conveyor Extenable Double L",
                "229 CONVEYOR -38' Double L",
                "232 Conveyor-Tare Elevator 25'Mayo",
                "234 Collector-Double L 878",
                "235 Even-Flo Tub Double L",
                "236 Conveyor-Telescoping Double L",
                "237 Conveyor-Telescoping Double L",
                "238 Conveyor-Portable Double L",
                "239 Conveyor-Portable Double L",
                "243 Piler -36 Double L",
                "244 Piler-36 Double L",
                "245 245 Conveyot 36 * 60 Double L(Telescoping)",
                "246 Conveyor-36*38 Double L",
                "247 Conveyor-36*25 Double L",
                "248 72 Double L Collector",
                "249 Skid Steer- New Holland Ls185/Add 78",
                "250 Potato Scooper -Double L",
                "252 Potato Scoop LI967 2014",
                "253 2010 Piler Double L",
                "254 Telescoping Conveyor Double L",
                "255 Telescoping Conveyor Double L",
                "256 Telescoping Conveyor Double L",
                "257 Telescoping Conveyor Double L",
                "258 Conveyor Double L",
                "259 Conveyor Double L",
                "260 Conveyor Double L",
                "261 Conveyor Double L",
                "262 Evenflo Tub Double L",
                "263 Mayo Elevator",
                "264 Mayo Mini Piler",
                "265 Collector Double L",
                "266 Milestone Barrel Duster",
                "267 2016 New Holland L228 Skid Steer",
                "268 Yale Fork Lift",
                "269 Miedema Double Tote Filler",
                "270 2017 Spudnik 84 Collector",
                "272 2018 Spudnik Piler",
                "273 2019 Spudnik Piler",
                "273 2019 Spudnik Telescoping Conveyor",
                "274 2019 Spudnik Telescoping Conveyor",
                "275 2019 Spudnik Straight Conveyor",
                "Conveyor",

            ],
            recordScreen:"entry",
        }
    }
    /*condition for entry or record screen */
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
                        <Text style={styles.yield}>Line Management</Text> :
                        <Text style={styles.yield}>Line Management Table</Text>
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
                    <ManagementRecords/> :
                    <View>

                    <View style={{flexDirection: 'row', marginRight: 300}}>
                        <View
                            style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                            <Text style={styles.year}>Location</Text>
                            <Text style={{color: 'red'}}>*</Text>
                        </View>
                        <View
                            style={{flexDirection: 'row', marginTop: 30, marginLeft: 530}}>
                            <Text style={styles.year}>Line</Text>
                            <Text style={{color: 'red'}}>*</Text>
                        </View>
                    </View>
                    < View style={{flexDirection:'row'}}>
                    <View
                    style={{
                    width: 500,
                    marginLeft: 85,
                    borderColor: '#B4B4B4',
                    borderRadius: 5,
                    borderWidth: 1,
                    marginTop: 15,
                    paddingBottom: 25,
                    height: 40,
                }}>
                    <DropDown
                    name="Arena"
                    defaultItem="Arena"
                    value="Arena"
                    data={this.state.location}
                    color="#686868"
                    />
                    </View>
                    <View
                    style={{
                    width: 500,
                    marginLeft: 85,
                    borderColor: '#B4B4B4',
                    borderRadius: 5,
                    borderWidth: 1,
                    marginTop: 15,
                    paddingBottom: 25,
                    height: 40,
                }}>
                    <DropDown
                    name="0"
                    defaultItem="0"
                    value="0"
                    data={this.state.line}
                    color="#686868"
                    />
                    </View>
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                    <Text style={styles.year}>Operators</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 525}}>
                    <Text style={styles.year}>Equipments</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <View
                    style={{
                    width: 500,
                    marginLeft: 85,
                    borderColor: '#B4B4B4',
                    borderRadius: 5,
                    borderWidth: 1,
                    marginTop: 15,
                    paddingBottom: 25,
                    height: 40,
                }}>
                    <DropDown
                    name="Beau Hartline"
                    defaultItem="Beau Hartline"
                    value="Beau Hartline"
                    data={this.state.operators}
                    color="#686868"
                    />
                    </View>
                    <View
                    style={{
                    width: 500,
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
                    data={this.state.equipments}
                    color="#686868"
                    />
                    </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <View style={{marginRight: 83, marginTop: 15}}>
                    <LinearGradient
                    start={{x: 0.5, y: 0}}
                    end={{x: 2, y: 0}}
                    colors={['#634720', '#C99349']}>
                    <Text style={styles.editing}>Edit</Text>
                    </LinearGradient>
                    </View>
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
        yield:{
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
        editing:{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            borderRadius: 2,
            height: 36,
            width: 80,
            textAlign: 'center',
            paddingTop: 10,
            color: 'white',
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
