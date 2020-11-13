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
import {PlantingRecords} from '../components/PlantingRecords';
export default class Planting extends React.Component{
    static navigationOptions={
        header:null,
    };
    constructor(props) {
        super(props);
        this.state={
            recordScreen:"entry",
            planting:"start",
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
            variety:[
                "Fingerling",
                "Golden",
                "Red",
                "Ruesset",
                "White",
            ],
            color:[],
            seed:[
                "Baginski",
                "Baginski & Sons",
                "Bula Potato Farms",
                "Bushman Riverside Ranch",
                "C.K Jespersen Farms",
                "Colorado-Kist Farms",
                "Countrywide Potato",
                "Creekside Farms",
                "Creekside Potato Farms",
                "Hafner Seed Farms",
                "J.D.Miller Seed Farm",
                "Jorde Certified Seed,LLC",
                "Karren Farms",
                "Kroeker Farms",
                "Mahogany Creek Farms",
                "Norbest Farms",
                "Parkland/Pinery Farms",
                "Pinery Farms",
                "Real Potatoes",
                "Schroeder Bros",
                "Schroeder Bros(RPE)",
                "Solanum International,Inc",
                "Sun Rain Varieties",
                "Trembling Prairie Farms",
                "West Edmonton Seed Potatoes"
            ],
            gps:"",
            date:"2019-11-27",
            time:"",
            tractor_hours:"",
            tractor:[
                "132-Challenger Mt765D Tractor",
                "146-Challenger Mt765E Tractor",
                "2101-Challenger Mt765E Tractor",
            ],
            operator:[
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
            implements:[
                "2140-Spudnik Planter 8060",
                "134-Miedema Planter",
                "135-Miedema Planter"
            ],
            spacing:"",
            cwt:"",
            emerging_date:"2019-10-22",
            fertilizer_rate:[
                "22.5",
                "25.0",
                "27.5",
                "30"
            ],
            fertilizers:[
                "11-8-5 Micropac Bulk 10.476#/Gal",
                "9-28-4-2s-.1zn",
                "Amisorb Liquid 10.5#/Gal",
                "Carbonboost/Gal",
                "Chb Premium",
                "Plant-X Bio-Sb",
                "Tilt It Blue Zone Ultra 6-24-6"
            ],
            chemicals:[
                "Aframe",
                "Alias 4F-600303",
                "Azoxy -600208",
                "Blocker",
                "Metelaxyl 2E-600207",
                "Nuprid 4F",
                "Platinum 75 Sc-600300",
                "Velum Prime-600209"
            ],
            comments:"",
            identify:[
                "Russet-Russet Silverton -A-4 207-Bushman Riverside Ranch -2019-Jacob Huber",
                "Russet-Russet Norkotah TX 278 -Bonnett Little/East 210 -Schroeder Bros-2019-Jacob Huber",
                "Fingerling-Fingerling Red Cersia -002-Solanum International,Ince-2019-Jeff Vossekuil",
                "Red-Red Lollipop-002 -Solanum International,Inc-2019-Jeff Vossekuil",
                "Golden-Golden Anouk-002-Solanum International,Inc-2019-Jeff Vossekuil ",
                "Golden-Golden Soraya -002-Schroeder Bros -2019-Scott Ehlert",
                "Russet-Russet Silverton-072-Jorde Certified Seed,LLC-2019-Jeff Vossekuil"
            ],
            actual:"",
            end:"",
            tractor_stop:"",
            stop_date:"2020-10-01",
            stop_time:"",
            usage_hours:"",

        }
    }
    /*condition for entry or record screen */
    recordScreen(name){
        if (name==='entry'){
            this.setState({recordScreen:'entry'})
        }
        else if (name==='records'){
            this.setState({recordScreen:'records'})
        }


    }
    /*condition for start or stop screen */
    planting(name){
        if (name==='start'){
            this.setState({planting:'start'})
        }
        else if (name==='stop'){
            this.setState({planting:'stop'})
        }

    }

    AgPivot(){
        this.props.navigation.replace('Home');
    }
    /*condition for logout screen  to move to login screen */
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
                        <Text style={styles.planting}>Planting</Text>:
                        <Text style={styles.planting}>Planting Table</Text>
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
                    <PlantingRecords/> :
                    <View>
                    <View style={{flexDirection: 'row'}}>
                        {this.state.planting === 'start' ?
                            <View style={{flexDirection: 'row'}}>
                                <View style={{marginLeft: 85, marginTop: 41, borderWidth: 0.8}}>
                                    <TouchableHighlight onPress={() => this.planting('start')}>
                                        <LinearGradient
                                            start={{x: 0.5, y: 0}}
                                            end={{x: 2, y: 0}}
                                            colors={['#634720', '#C99349']}>
                                            <Text style={styles.start}>Start</Text>
                                        </LinearGradient>
                                    </TouchableHighlight>
                                </View>
                                <TouchableHighlight onPress={() => this.planting('stop')}>
                                    <View
                                        style={{
                                            backgroundColor: '#FFFFFF',
                                            borderColor: '#634720',
                                            borderWidth: 0.8,
                                            /* paddingLeft: 36,
                                                    paddingTop: 14,
                                                    paddingBottom: 14,
                                                    paddingRight: 36,

                                                    */
                                            marginTop: 41,
                                            borderRightWidth: 0.8,
                                        }}>
                                        <Text style={styles.stop}>Stop</Text>
                                    </View>
                                </TouchableHighlight>

                            </View> :
                            <View style={{flexDirection: 'row'}}>
                                <TouchableHighlight onPress={() => this.planting('start')}>
                                    <View
                                        style={{
                                            backgroundColor: '#FFFFFF',
                                            borderColor: '#634720',
                                            borderWidth: 0.8,
                                            /* paddingLeft: 36,
                                                    paddingTop: 14,
                                                    paddingBottom: 14,
                                                    paddingRight: 36,

                                                    */
                                            marginTop: 41,
                                            borderRightWidth: 0.8,
                                            marginLeft: 85
                                        }}>
                                        <Text style={styles.starts}>Start</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => this.planting('stop')}>
                                    <View style={{marginTop: 41, borderWidth: 0.8}}>
                                        <LinearGradient
                                            start={{x: 0.5, y: 0}}
                                            end={{x: 2, y: 0}}
                                            colors={['#634720', '#C99349']}>
                                            <Text style={styles.stops}>Stop</Text>
                                        </LinearGradient>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        }

                    </View>
                {this.state.planting==='start'?
                    <ScrollView style={{flexGrow:1}}>
                        <View style={{marginBottom: 200, paddingBottom: 50}}>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                    <Text style={styles.year}>Year</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 363}}>
                    <Text style={styles.year}>Field Number</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 300}}>
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
                    value="002"
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
                    name="Fingerling"
                    defaultItem="Fingerling"
                    value="Fingerling"
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
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 307}}>
                    <Text style={styles.year}>Seed Grower</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 303}}>
                    <Text style={styles.year}>Begining GPS Acres</Text>
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
                    name="Baginski"
                    defaultItem="Baginski"
                    value="Baginski"
                    data={this.state.seed}
                    color="#686868"
                    />
                    </View>
                    <TextInput
                    value={this.state.gps}
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
                    onChangeText={gps => this.setState({gps})}
                    />
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                    <Text style={styles.year}>Date</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 358}}>
                    <Text style={styles.year}>Start Time</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 320}}>
                    <Text style={styles.year}>Tractor Start Hours</Text>
                    <Text style={{color: 'red'}}>*</Text>
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
                    <DatePicker
                    style={{
                    width: 330,
                    marginTop: 15,
                    borderColor: '#B4B4B4',
                    marginLeft: 60,
                    Color: '#634720',
                }}
                    date={this.state.time}
                    mode="time"
                    placeholder="select time"
                    format="HH:mm"
                    androidMode="spinner"
                    confirmBtnText="confirm"
                    cancelBtnText="cancel"
                    minuteInterval={1}
                    showIcon={false}
                    is24Hour={true}
                    coustomstyles={{
                    dateInput: {
                        paddingLeft: 20,
                        height: 40,
                        paddingTop: 50,
                        paddingBottom: 50,
                        borderRadius: 2,
                    },
                    dateText: {
                        color: '#686868',
                        fontSize: 50,
                    },
                }}
                    onDateChange={time => {
                    this.setState({time: time});
                }}
                    />
                    <TextInput
                    value={this.state.tractor_hours}
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
                    onChangeText={tractor_hours => this.setState({tractor_hours})}
                    />
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                    <Text style={styles.year}>Tractor</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 343}}>
                    <Text style={styles.year}>Operator</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 330}}>
                    <Text style={styles.year}>Implements</Text>
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
                    name="132-Challenger Mt765D Tractor"
                    defaultItem="132-Challenger Mt765D Tractor"
                    value="132-Challenger Mt765D Tractor"
                    data={this.state.tractor}
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
                    name="Beau Hartline"
                    defaultItem="Beau Hartline"
                    value="Beau Hartline"
                    data={this.state.operator}
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
                    name="2140-Spudnik Planter 8060"
                    defaultItem="2140-Spudnik Planter 8060"
                    value="2140-Spudnik Planter 8060"
                    data={this.state.implements}
                    color="#686868"
                    />
                    </View>
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                    <Text style={styles.year}>Actual Spacing</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 297}}>
                    <Text style={styles.year}>Actual CWT (Per Acre)</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 245}}>
                    <Text style={styles.year}>Actual Emerging Date</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <TextInput
                    value={this.spacing}
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
                    onChangeText={spacing => this.setState({spacing})}
                    />
                    <TextInput
                    value={this.state.cwt}
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
                    onChangeText={cwt => this.setState({cwt})}
                    />
                    <DatePicker
                    style={{
                    width: 330,
                    marginLeft: 60,
                    marginTop: 15,
                    borderColor: '#B4B4B4',
                    color: '#686868',
                }}
                    date={this.state.emerging_date}
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
                    onDateChange={emerging_date => {
                    this.setState({emerging_date: emerging_date});
                }}
                    />

                    </View>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                    <Text style={styles.year}>Fertilizer Rate</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 303}}>
                    <Text style={styles.year}>Fertilizers</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 325}}>
                    <Text style={styles.year}>Chemicals</Text>
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
                    name="22.5"
                    defaultItem="22.5"
                    value="22.5"
                    data={this.state.fertilizer_rate}
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
                    name="11-8-5 Micropac Bulk 10.476#/Gal"
                    defaultItem="11-8-5 Micropac Bulk 10.476#/Gal"
                    value="11-8-5 Micropac Bulk 10.476#/Gal"
                    data={this.state.fertilizers}
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
                    name="Aframe"
                    defaultItem="Aframe"
                    value="Aframe"
                    data={this.state.chemicals}
                    color="#686868"
                    />
                    </View>
                    </View>
                    <View>
                    <Text style={styles.comments}>Comments</Text>
                    <TextInput
                    value={this.state.comments}
                    keyboardType={'alphanumeric'}
                    placeholder={''}
                    style={{
                    height: 60,
                    borderColor: '#B4B4B4',
                    borderWidth: 1,
                    marginLeft: 85,
                    marginTop: 15,
                    borderRadius: 5,
                    width: 330,
                }}
                    onChangeText={comments => this.setState({comments})}
                    />
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
                        </View>
                    </ScrollView>:
                    <View>
                    <View style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                    <Text style={styles.year}>Identify Fields (Variety - Color - Field - Grower - Year - Operator)</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{
                    width: 1110,
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
                    data={this.state.identify}
                    color="#686868"
                    />
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                    <Text style={styles.year}>Actual Acres Planted</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 260}}>
                    <Text style={styles.year}>End GPS Acres</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 290}}>
                    <Text style={styles.year}>Tractor Stop Hours</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <TextInput
                    value={this.state.actual}
                    keyboardType={'alphanumeric'}
                    placeholder={''}
                    style={{
                    height: 40,
                    borderColor: '#B4B4B4',
                    borderWidth: 1,
                    marginLeft: 85,
                    marginTop: 15,
                    borderRadius: 5,
                    width: 330,
                }}
                    onChangeText={actual => this.setState({actual})}
                    />
                    <TextInput
                    value={this.state.end}
                    keyboardType={'alphanumeric'}
                    placeholder={''}
                    style={{
                    height: 40,
                    borderColor: '#B4B4B4',
                    borderWidth: 1,
                    marginLeft: 60,
                    marginTop: 15,
                    borderRadius: 5,
                    width: 330,
                }}
                    onChangeText={end => this.setState({end})}
                    />
                    <TextInput
                    value={this.state.tractor_stop}
                    keyboardType={'alphanumeric'}
                    placeholder={''}
                    style={{
                    height: 40,
                    borderColor: '#B4B4B4',
                    borderWidth: 1,
                    marginLeft: 60,
                    marginTop: 15,
                    borderRadius: 5,
                    width: 330,
                }}
                    onChangeText={tractor_stop => this.setState({tractor_stop})}
                    />


                    </View>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                    <Text style={styles.year}>Stop Date</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 327}}>
                    <Text style={styles.year}>Stop Time</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 320}}>
                    <Text style={styles.year}>Usage Hours</Text>
                    <Text style={{color: 'red'}}>*</Text>
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
                    date={this.state.stop_date}
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
                    onDateChange={stop_date => {
                    this.setState({stop_date: stop_date});
                }}
                    />
                    <DatePicker
                    style={{
                    width: 330,
                    marginTop: 15,
                    borderColor: '#B4B4B4',
                    marginLeft: 60,
                    Color: '#634720',
                }}
                    date={this.state.stop_time}
                    mode="time"
                    placeholder="select time"
                    format="HH:mm"
                    androidMode="spinner"
                    confirmBtnText="confirm"
                    cancelBtnText="cancel"
                    minuteInterval={1}
                    showIcon={false}
                    is24Hour={true}
                    coustomstyles={{
                    dateInput: {
                        paddingLeft: 20,
                        height: 40,
                        paddingTop: 50,
                        paddingBottom: 50,
                        borderRadius: 2,
                    },
                    dateText: {
                        color: '#686868',
                        fontSize: 50,
                    },
                }}
                    onDateChange={stop_time => {
                    this.setState({stop_time: stop_time});
                }}
                    />
                    <TextInput
                    value={this.state.usage_hours}
                    keyboardType={'numeric'}
                    placeholder={''}
                    style={{
                    height: 40,
                    borderColor: '#B4B4B4',
                    borderWidth: 1,
                    marginLeft: 60,
                    marginTop: 15,
                    borderRadius: 5,
                    width: 330,
                }}
                    onChangeText={usage_hours => this.setState({usage_hours})}
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
        planting:{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
            lineHeight: 36,
            color: '#686868',
            marginLeft: 85,
            marginTop: 20,
        },
        start: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            color: '#FFFFFF',
            borderRadius: 2,
            /* paddingLeft:36,
                paddingTop:14,
                paddingBottom:14,
                paddingRight:36,*/
            textAlign: 'center',
            paddingTop: 10,
            height: 36,
            width: 82,
        },
        starts: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            color: '#634720',
            borderRadius: 2,
            height:34,
            width:82,
            textAlign:'center',
            paddingTop:10
        },
        stop: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            borderRadius: 2,
            color: '#634720',
            height: 36,
            width: 81,
            textAlign: 'center',
            paddingTop: 10,
        },
        stops: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            borderRadius: 2,
            color: '#FFFFFF',
            height:34,
            width:82,
            textAlign:'center',
            paddingTop:10
        },
        year: {
            fontFamily: ' Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 20,
            color: '#686868',
        },
        comments:{
            fontFamily: ' Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 20,
            color: '#686868',
            marginLeft:85,
            marginTop:30
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
