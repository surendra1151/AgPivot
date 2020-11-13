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
import {FertigationRecords} from "../components/FertigationRecords";
import {NavigationActions, StackActions} from "react-navigation";

export default class Fertigation extends React.Component{
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state={
         year:[
             "2019",
             "2020"
         ],
            date:"2019-11-26",
            time:"",
            employee:[
                "Charles Stone",
                "Contract Labor",
                "Beau Hartline",
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
                "Trevor Frey",

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
            fertilizer:[
                "14-0-4.2-3ca Liquid Blend",
                "32% Liquid Nitrogen/Ton",
                "9-0-5.5-4ca N+ Liquid Blend/Ton"
            ],
            gallons:"",
            acres:"",
            degrees:"",
            irrigation:"",
            pump:"",
            application:"",
            comments:"",
            fertigation:'start',
            identify:[
                "jeffrey Huber-Kent 220 -2019",
                "jeffrey Huber-Parks-2019",
                "jeffrey Huber-Parr/A-2-2019",
                "Jeff Vossekuli-013-2019",
                "Greg Hogan-052-2019",
            ],
            stop_date:"2019-11-27",
            stop_time:"",
            employee_hours:"",
            recordScreen:"entry",

        }
    }
    /*condition for start or stop */
    fertigation(name){
        if (name==='start'){
            this.setState({fertigation:'start'});
        }
        else  if (name==='stop'){
            this.setState({fertigation:'stop'});
        }

    }
    /*condition for entry or records */
    recordScreen(name){
        if (name==='entry'){
            this.setState({recordScreen:'entry'});
        }
        else if (name==='records'){
            this.setState({recordScreen:'records'})
        }

    }
    AgPivot(){
        this.props.navigation.replace('Home');
    }
    /* functionality to logout from existing screen and move to login screen */
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
                    <Text style={styles.fertigation}>Fertigation</Text>:
                    <Text style={styles.fertigation}>Fertigation Table</Text>
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
                    <FertigationRecords/> :
                    <View>
                        {this.state.fertigation === 'start' ?
                            <View style={{flexDirection: 'row'}}>
                                <View style={{marginLeft: 85, marginTop: 41, borderWidth: 0.8}}>
                                    <TouchableHighlight onPress={() => this.fertigation('start')}>
                                        <LinearGradient
                                            start={{x: 0.5, y: 0}}
                                            end={{x: 2, y: 0}}
                                            colors={['#634720', '#C99349']}>
                                            <Text style={styles.start}>Start</Text>
                                        </LinearGradient>
                                    </TouchableHighlight>
                                </View>
                                <TouchableHighlight onPress={() => this.fertigation('stop')}>
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
                                <TouchableHighlight onPress={() => this.fertigation('start')}>
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
                                <TouchableHighlight onPress={() => this.fertigation('stop')}>
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
                        <ScrollView style={{flexGrow:1}}>
                            <View style={{marginBottom: 200, paddingBottom: 50}}>
                            {this.state.fertigation === 'start' ?
                                <View>
                                    <View style={{flexDirection: 'row', marginRight: 300}}>
                                        <View
                                            style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                            <Text style={styles.year}>Year</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', marginTop: 30, marginLeft: 360}}>
                                            <Text style={styles.year}>Start Date</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', marginTop: 30, marginLeft: 320}}>
                                            <Text style={styles.year}>Start Time</Text>
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
                                            <Text style={styles.year}>Employee Name</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', marginTop: 30, marginLeft: 287}}>
                                            <Text style={styles.year}>Field</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', marginTop: 30, marginLeft: 350}}>
                                            <Text style={styles.year}>Fertilizer Name</Text>
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
                                                name="Charles Stone"
                                                defaultItem="Charles Stone"
                                                value="Charles Stone"
                                                data={this.state.employee}
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
                                                data={this.state.fertilizer}
                                                color="#686868"
                                            />
                                        </View>

                                    </View>
                                    <View style={{flexDirection: 'row', marginRight: 300}}>
                                        <View
                                            style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                            <Text style={styles.year}>Start Gallons</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', marginTop: 30, marginLeft: 308}}>
                                            <Text style={styles.year}>Acres</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', marginTop: 30, marginLeft: 350}}>
                                            <Text style={styles.year}>Start Degrees</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <TextInput
                                            value={this.state.gallons}
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
                                            onChangeText={gallons => this.setState({gallons})}
                                        />
                                        <TextInput
                                            value={this.state.acres}
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
                                            onChangeText={acres => this.setState({acres})}
                                        />
                                        <TextInput
                                            value={this.state.degrees}
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
                                            onChangeText={degrees => this.setState({degrees})}
                                        />
                                    </View>
                                    <View style={{flexDirection: 'row', marginRight: 300}}>
                                        <View
                                            style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                            <Text style={styles.year}>Irrigation %</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', marginTop: 30, marginLeft: 318}}>
                                            <Text style={styles.year}>Pump Rate (gal/hr)</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', marginTop: 30, marginLeft: 265}}>
                                            <Text style={styles.year}>Application Rate(gal/acre)</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <TextInput
                                            value={this.state.irrigation}
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
                                            onChangeText={irrigation => this.setState({irrigation})}
                                        />
                                        <TextInput
                                            value={this.state.pump}
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
                                            onChangeText={pump => this.setState({pump})}
                                        />
                                        <TextInput
                                            value={this.state.application}
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
                                            onChangeText={application => this.setState({application})}
                                        />

                                    </View>
                                    <View>
                                        <View style={{marginLeft: 85, marginTop: 30}}>
                                            <Text style={styles.year}>Comments</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                                                    marginBottom: 50,
                                                }}
                                                onChangeText={comments => this.setState({comments})}
                                            />
                                            <View style={{marginTop: 30, marginBottom: 50, marginRight: 85}}>
                                                <Image source={require('../assets/Submit.png')}/>
                                            </View>
                                        </View>
                                    </View>
                                </View> :
                                <View>
                                    <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 85}}>
                                        <Text style={styles.year}>Identify Fields (Operator - Field - Year) </Text>
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
                                            <Text style={styles.year}>Employee Hours</Text>
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
                                            value={this.state.employee_hours}
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
                                            onChangeText={employee_hours => this.setState({employee_hours})}
                                        />
                                    </View>
                                    <View style={{flexDirection: 'row', marginRight: 300}}>
                                        <View
                                            style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                            <Text style={styles.year}>End Gallons</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                        <View
                                            style={{flexDirection: 'row', marginTop: 30, marginLeft: 313}}>
                                            <Text style={styles.year}>Total Gallons</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <TextInput
                                            value={this.state.end_gallons}
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
                                            onChangeText={end_gallons => this.setState({end_gallons})}
                                        />
                                        <TextInput
                                            value={this.state.total_gallons}
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
                                            onChangeText={total_gallons => this.setState({total_gallons})}
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
        fertigation:{
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
