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
import {HillingRecords} from "../components/HillingRecords";

export default class Hilling extends React.Component{
    static navigationOptions={
        header:null,
    };
    constructor(props) {
        super(props);
        this.state={
            recordScreen:"entry",
            hilling:"start",
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
            date:"2019-11-28",
            time:"",
            tractor:[
                "116-1998 Tractor -Case lh 8950 Mfd",
                "126-Challenger Mt765C Tractor",
                "132-Challenger Mt765D Tractor",
                "146-Challenger Mt765E Tractor",
                "2101-Challenger Mt765E Tractor",
                "2102-John Deere 8360 Tractor",

            ],
            tractor_hours:"",
            fertilizer:[
                "0.32",
                "14-0-4-3Ca",
                "29-0-0-4s"
            ],
            fertilizer_rate:[
                "15",
                "25",
                "27.5",
                "30",
                "35",
                "37.5"
            ],
            implements:[
                "124-Harriston Hiller",
                "130-Harriston Hiller",
                "2145-Oliver Dahlman Hiller"
            ],
            comments:"",
            identify:[
                "Jacob Huber-A-3 205-Russet Silverton-2019",
                "Jim Pruessing-002-Fingerling Little Giant-2019",
                "Jacob Huber-A-4 207-Russet Silverton-2019",
                "Jim Pruessing-055-Russet Norkotah Tx 296-2019",
                "Jacob Huber-Parr/A-2-Russet Silverton-2019",
                "Jim Pruessing-052-Russet Norkotah Tx278-2019",
                "Jim Pruessing-025-Russet Goldrush-2019",
                "Scot Ehlert-184-Golden Jelly-2019"
            ],
            end_hours:"",
            hilled_acres:"",
            stop_date:"2019-11-10",
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
    hilling(name){
        if (name==='start'){
            this.setState({hilling:'start'})
        }
        else if (name==='stop'){
            this.setState({hilling:'stop'})
        }

    }

    AgPivot(){
        this.props.navigation.replace('Home');
    }
    /*condition  for logout screen to move to login screen */
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
                        <Text style={styles.hilling}>Hilling</Text>:
                        <Text style={styles.hilling}>Hilling Table</Text>
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
                {this.state.recordScreen!=='entry'?
                <HillingRecords/>:
                    <View>
                <View style={{flexDirection: 'row'}}>
                    {this.state.hilling === 'start' ?
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginLeft: 85, marginTop: 41, borderWidth: 0.8}}>
                                <TouchableHighlight onPress={() => this.hilling('start')}>
                                    <LinearGradient
                                        start={{x: 0.5, y: 0}}
                                        end={{x: 2, y: 0}}
                                        colors={['#634720', '#C99349']}>
                                        <Text style={styles.start}>Start</Text>
                                    </LinearGradient>
                                </TouchableHighlight>
                            </View>
                            <TouchableHighlight onPress={() => this.hilling('stop')}>
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
                            <TouchableHighlight onPress={() => this.hilling('start')}>
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
                            <TouchableHighlight onPress={() => this.hilling('stop')}>
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
                <ScrollView style={{flexGrow:1}}>
                    <View style={{marginBottom:200,paddingBottom:50}}>
                        {this.state.hilling==='start'?
                        <View>
                <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                        style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                        <Text style={styles.year}>Year</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                        style={{flexDirection: 'row', marginTop: 30, marginLeft: 363}}>
                        <Text style={styles.year}>Field</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                        style={{flexDirection: 'row', marginTop: 30, marginLeft: 352}}>
                        <Text style={styles.year}>Variety/Color</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
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
                        name=""
                        defaultItem=""
                        value=""
                        data={this.state.variety}
                        color="#686868"
                    />
                </View>
                </View>
                <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                        style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                        <Text style={styles.year}>Hilling Operator</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                        style={{flexDirection: 'row', marginTop: 30, marginLeft: 297}}>
                        <Text style={styles.year}>Date</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                        style={{flexDirection: 'row', marginTop: 30, marginLeft: 352}}>
                        <Text style={styles.year}>Time</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
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
                            name="Beau Hartline"
                            defaultItem="Beau Hartline"
                            value="Beau Hartline"
                            data={this.state.operator}
                            color="#686868"
                        />
                    </View>
                    <DatePicker
                        style={{
                            width: 330,
                            marginLeft: 60,
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

                </View>
                <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                        style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                        <Text style={styles.year}>Tractor</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                        style={{flexDirection: 'row', marginTop: 30, marginLeft: 345}}>
                        <Text style={styles.year}>Start Tractor Hours</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                        style={{flexDirection: 'row', marginTop: 30, marginLeft: 267}}>
                        <Text style={styles.year}>Fertilizer</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
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
                            name= "116-1998 Tractor -Case lh 8950 Mfd"
                            defaultItem= "116-1998 Tractor -Case lh 8950 Mfd"
                            value= "116-1998 Tractor -Case lh 8950 Mfd"
                            data={this.state.tractor}
                            color="#686868"
                        />
                    </View>
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
                            name= "0.32"
                            defaultItem= "0.32"
                            value= "0.32"
                            data={this.state.fertilizer}
                            color="#686868"
                        />
                    </View>

                </View>
                <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                        style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                        <Text style={styles.year}>Fertilizer Rate</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                        style={{flexDirection: 'row', marginTop: 30, marginLeft: 305}}>
                        <Text style={styles.year}>Implements</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                        style={{flexDirection: 'row', marginTop: 30, marginLeft: 308}}>
                        <Text style={styles.year}>Comments</Text>
                        <Text style={{color: 'red'}}>*</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
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
                            name= "15"
                            defaultItem= "15"
                            value= "15"
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
                            name= "124-Harriston Hiller"
                            defaultItem= "124-Harriston Hiller"
                            value= "124-Harriston Hiller"
                            data={this.state.implements}
                            color="#686868"
                        />
                    </View>
                    <TextInput
                        value={this.comments}
                        keyboardType={'alphanumeric'}
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
                        <View style={{
                            flex: 1,
                            alignItems: 'flex-end',
                            marginTop: 30,
                            marginRight: 50
                        }}>
                            <Image source={require('../assets/Submit.png')}/>
                        </View>
                        </View>:
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
                                    <Text style={styles.year}>End Tractor Hours</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 278}}>
                                    <Text style={styles.year}>Hilled Acres</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 308}}>
                                    <Text style={styles.year}>Stop Date</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TextInput
                                    value={this.end_hours}
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
                                    onChangeText={end_hours => this.setState({end_hours})}
                                />
                                <TextInput
                                    value={this.hilled_acres}
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
                                    onChangeText={hilled_acres => this.setState({hilled_acres})}
                                />
                                <DatePicker
                                    style={{
                                        width: 330,
                                        marginLeft: 60,
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


                            </View>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Stop Time</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 320}}>
                                    <Text style={styles.year}>Usage Hours</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <DatePicker
                                style={{
                                    width: 330,
                                    marginTop: 15,
                                    borderColor: '#B4B4B4',
                                    marginLeft: 85,
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
                                value={this.usage_hours}
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
                                onChangeText={usage_hours => this.setState({usage_hours})}
                            />
                            </View>
                            <View style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                marginTop: 30,
                                marginRight: 50
                            }}>
                                <Image source={require('../assets/Submit.png')}/>
                            </View>
                        </View>
                        }
                    </View>
                </ScrollView>
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
        hilling:{
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
