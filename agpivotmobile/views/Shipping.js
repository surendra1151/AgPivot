import React,{Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableHighlight,
    Alert,
    Dimensions,
    TextInput, AsyncStorage, ScrollView,CheckBox
} from 'react-native';
import {DropDown} from '../components/DropDownOne';
import DatePicker from 'react-native-datepicker';
import {RadioButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationActions, StackActions} from "react-navigation";
import {ShippingRecords} from "../components/ShippingRecords";

export default class Shipping extends React.Component{
    static navigationOptions={
        header:null,
    };
    constructor(props) {
        super(props);
        this.state={
         recordScreen:"entry",
            location:[
                "Arena",
                "Grand Marsh"
            ],
            harvestor:[
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
            line:[],
            shipping:"add",
            load:[],
            temperature:"",
            radioButton:"Bin",
            checked:"Bin",
            comments:"",
            bin_no:[],
            consignment:"",
            check:"potato",
            percent_bin:"",
            percent_semi:"",
            box_no:"",
            line_no:[
                "4",
                "7",
                "6",
                "2",
                "5",
                "8",
                "1",
                "3",
                "0"
            ],
            truck:[
                "1-Peterbilt Truck",
                "10-Chevrolet Truck",
                "10-Oshkosh Truck",
                "105-International Truck",
                "11-Oshkosh Truck",
                "12-Oshkosh Truck",
                "14-Oshkosh Truck",
                "14-Ford Truck",
                "14-Oshkosh Truck",
                "15-International Truck",
                "16-Ford Truck",
                "17-Westernstar Truck",
                "18-Ford Truck",
                "19-International Truck",
                "2-International Truck",
                "21-Freightliner Truck",
                "215-Oshkosh Truck",
                "22-Ford Truck",
                "23-International",
                "2302-Brown Dump Truck",
                "24-Freightliner Truck",
                "55-International Truck",
                "61-Oshkosh Truck",
                "62-Oshkosh Truck",
                "63-Oshkosh Truck",
                "65-Oshkosh Truck",
                "67-Oshkosh Truck",
                "69-Oshkosh Truck",
                "70-Oshkosh Truck",
                "70T-International Dump Truck",
                "72T-International Dump Truck",
                "73-Oshkosh Truck",
                "74-Oshkosh Truck",
                "75-Oshkosh Truck",
                "76-Oshkosh Truck",
                "78-Oshkosh Truck",
                "79-Oshkosh Truck",
                "8-Mack Truck",
                "806-International Truck",
                "81-Oshkosh Truck",
                "810-International Truck",
                "811-International Truck",
                "82-Oshkosh Truck",
                "83-Oshkosh Truck",
                "87-Oshkosh Truck",
                "88-Oshkosh Truck",
                "89-Oshkosh Truck",
                "9-2304-White Road Boss Truck",
                "91-Oshkosh Truck",
                "92-Oshkosh Truck",
                "95-Oshkosh Truck",
                "96-Oshkosh Truck",
                "97-Oshkosh Truck",
                "98-Oshkosh Truck",
                "99-Oshkosh Truck",
                "At02-Chevrolet Pickup Truck",
                "At09-Dodge Pickup Truck",
                "At12-Ford Pickup Truck"
            ],
            truck_load:"",
            btruck_comments:"",

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
    /* condition for add Record or btruck  screen */
    shipping(name){
        if (name==='add'){
            this.setState({shipping:'add'})
        }
        else if (name==='btruck'){
            this.setState({shipping:'btruck'})
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
    /*condition for radio button whether it is bin or semi or split or box */
    radioButton(name){
        if (name==='Bin'){
            this.setState({radioButton:'Bin',checked:'Bin'});
        }
        else if (name==='Semi'){
            this.setState({radioButton:'Semi',checked: 'Semi'});
        }
        else if (name==='Split'){
            this.setState({radioButton:'Split',checked:'Split'});
        }
        else if (name==='Box'){
            this.setState({radioButton:'Box',checked:'Box'});
        }

    }
    render(){
        const {checked } = this.state;
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
                    <Text style={styles.summary}>Summary</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    {
                        this.state.recordScreen === 'entry' ?
                        <Text style={styles.shipping}>Shipping / Storage</Text> :
                        <Text style={styles.shipping}>Shipping / Storage Table</Text>
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
                {this.state.recordScreen !== 'entry'?
                < ShippingRecords />:
                    <ScrollView>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                    <View
                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                    <Text style={styles.year}>Location</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 335}}>
                    <Text style={styles.year}>Harvestor</Text>
                    <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View
                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 325}}>
                    <Text style={styles.year}>Line No</Text>
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
                    name={'arena'}
                    defaultItem={'arena'}
                    value={'arena'}
                    data={this.state.location}
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
                    name={'Beau Hartline'}
                    defaultItem={'Beau Hartline'}
                    value={'Beau Hartline'}
                    data={this.state.harvestor}
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
                    name={''}
                    defaultItem={''}
                    value={''}
                    data={this.state.line}
                    color="#686868"
                    />
                    </View>
                    </View>
                    <View style={{flexDirection: 'row-reverse'}}>
                    <View style={{marginRight: 83, marginTop: 30}}>
                    <LinearGradient
                    start={{x: 0.5, y: 0}}
                    end={{x: 2, y: 0}}
                    colors={['#634720', '#C99349']}>
                    <Text style={styles.identify}>Identify</Text>
                    </LinearGradient>
                    </View>
                    </View>
                    <View>
                    {this.state.shipping === 'add' ?
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginLeft: 85, marginTop: 20, borderWidth: 0.8}}>
                                <TouchableHighlight onPress={() => this.shipping('add')}>
                                    <LinearGradient
                                        start={{x: 0.5, y: 0}}
                                        end={{x: 2, y: 0}}
                                        colors={['#634720', '#C99349']}>
                                        <Text style={styles.add}>Add Record</Text>
                                    </LinearGradient>
                                </TouchableHighlight>
                            </View>
                            <TouchableHighlight onPress={() => this.shipping('btruck')}>
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
                                        marginTop: 20,
                                        borderRightWidth: 0.8,
                                    }}>
                                    <Text style={styles.btruck}>B Truck</Text>
                                </View>
                            </TouchableHighlight>

                        </View> :
                        <View style={{flexDirection: 'row'}}>
                            <TouchableHighlight onPress={() => this.shipping('add')}>
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
                                        marginTop: 20,
                                        borderRightWidth: 0.8,
                                        marginLeft: 85
                                    }}>
                                    <Text style={styles.adds}>Add Record</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.shipping('btruck')}>
                                <View style={{marginTop: 20, borderWidth: 0.8}}>
                                    <LinearGradient
                                        start={{x: 0.5, y: 0}}
                                        end={{x: 2, y: 0}}
                                        colors={['#634720', '#C99349']}>
                                        <Text style={styles.btrucks}>B Truck</Text>
                                    </LinearGradient>
                                </View>
                            </TouchableHighlight>
                        </View>
                    }
                    </View>
                    {this.state.shipping === 'add' ?
                        <View>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Load (Truck No-Field-Color-Date-Time) </Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 145}}>
                                    <Text style={styles.year}>Pulp Temperature (F)</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 260}}>
                                    <Text style={styles.year}>Destination</Text>
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
                                        name={''}
                                        defaultItem={''}
                                        value={''}
                                        data={this.state.load}
                                        color="#686868"
                                    />
                                </View>
                                <TextInput
                                    value={this.state.temperature}
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
                                    onChangeText={temperature => this.setState({temperature})}
                                />
                                <View style={{flexDirection: 'row', marginTop: 15}}>
                                    <View style={{marginLeft: 60, flexDirection: 'row'}}>
                                        <RadioButton
                                            value="Bin"
                                            color={'#686868'}
                                            status={checked === 'Bin' ? 'checked' : 'unchecked'}
                                            onPress={() => this.radioButton('Bin')}
                                        />
                                        <Text style={styles.bin}>Bin</Text>
                                    </View>

                                    <View style={{marginLeft: 10, flexDirection: 'row'}}>
                                        <RadioButton
                                            value="Truck"
                                            color={'#686868'}
                                            status={checked === 'Semi' ? 'checked' : 'unchecked'}
                                            onPress={() => this.radioButton('Semi')}
                                        />
                                        <Text style={styles.bin}>Semi</Text>
                                    </View>
                                    <View style={{marginLeft: 10, flexDirection: 'row'}}>
                                        <RadioButton
                                            value="Split"
                                            color={'#686868'}
                                            status={checked === 'Split' ? 'checked' : 'unchecked'}
                                            onPress={() => this.radioButton('Split')}
                                        />
                                        <Text style={styles.bin}>Split</Text>
                                    </View>
                                    <View style={{marginLeft: 10, flexDirection: 'row'}}>
                                        <RadioButton
                                            value="Box"
                                            color={'#686868'}
                                            status={checked === 'Box' ? 'checked' : 'unchecked'}
                                            onPress={() => this.radioButton('Box')}
                                        />
                                        <Text style={styles.bin}>Box</Text>
                                    </View>
                                </View>

                            </View>
                            {this.state.radioButton === 'Bin' ?
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View>
                                        <Text style={styles.comments}>Comments</Text>
                                        <TextInput
                                            value={this.state.comments}
                                            keyboardType={'numeric'}
                                            placeholder={''}
                                            style={{
                                                height: 60,
                                                borderColor: '#B4B4B4',
                                                borderWidth: 1,
                                                marginLeft: 85,
                                                marginTop: 15,
                                                borderRadius: 5,
                                                width: 330
                                            }}
                                            onChangeText={comments => this.setState({comments})}
                                        />

                                    </View>
                                    <View>
                                        <View style={{marginLeft: 60, marginTop: 30, flexDirection: 'row'}}>
                                            <Text style={styles.year}>Bin No</Text>
                                            <Text style={{color: 'red'}}>*</Text>
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
                                                name={''}
                                                defaultItem={''}
                                                value={''}
                                                data={this.state.bin_no}
                                                color="#686868"
                                            />
                                        </View>

                                    </View>

                                    <View>
                                        <View style={{marginLeft: 60, marginTop: 30, flexDirection: 'row'}}>
                                            <Text style={styles.year}>Consignment</Text>
                                            <Text style={{color: 'red'}}>*</Text>
                                        </View>
                                        <TextInput
                                            value={this.state.consignment}
                                            keyboardType={'numeric'}
                                            placeholder={''}
                                            style={{
                                                height: 40,
                                                borderColor: '#B4B4B4',
                                                borderWidth: 1,
                                                marginLeft: 60,
                                                marginTop: 15,
                                                borderRadius: 5,
                                                width: 150
                                            }}
                                            onChangeText={consignment => this.setState({consignment})}
                                        />

                                    </View>
                                    <View style={{marginLeft: 60, marginTop: 30, flexDirection: 'row'}}>
                                        <Text style={styles.year}>Contains B Potato</Text>
                                        <CheckBox/>
                                    </View>

                                </View> :
                                <View>
                                    {this.state.radioButton === 'Semi' ?
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View>
                                                <Text style={styles.comments}>Comments</Text>
                                                <TextInput
                                                    value={this.state.comments}
                                                    keyboardType={'numeric'}
                                                    placeholder={''}
                                                    style={{
                                                        height: 60,
                                                        borderColor: '#B4B4B4',
                                                        borderWidth: 1,
                                                        marginLeft: 85,
                                                        marginTop: 15,
                                                        borderRadius: 5,
                                                        width: 330
                                                    }}
                                                    onChangeText={comments => this.setState({comments})}
                                                />

                                            </View>
                                            <View>
                                                <View style={{marginLeft: 60, marginTop: 30, flexDirection: 'row'}}>
                                                    <Text style={styles.year}>Consignment</Text>
                                                    <Text style={{color: 'red'}}>*</Text>
                                                </View>
                                                <TextInput
                                                    value={this.state.consignment}
                                                    keyboardType={'numeric'}
                                                    placeholder={''}
                                                    style={{
                                                        height: 40,
                                                        borderColor: '#B4B4B4',
                                                        borderWidth: 1,
                                                        marginLeft: 60,
                                                        marginTop: 15,
                                                        borderRadius: 5,
                                                        width: 150
                                                    }}
                                                    onChangeText={consignment => this.setState({consignment})}
                                                />

                                            </View>
                                            <View style={{marginLeft: 60, marginTop: 30, flexDirection: 'row'}}>
                                                <Text style={styles.year}>Contains B Potato</Text>
                                                <CheckBox/>
                                            </View>
                                        </View> :
                                        <View>
                                            {this.state.radioButton === 'Split' ?
                                                <View style={{flex: 1}}>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <View>
                                                            <Text style={styles.comments}>Comments</Text>
                                                            <TextInput
                                                                value={this.state.comments}
                                                                keyboardType={'numeric'}
                                                                placeholder={''}
                                                                style={{
                                                                    height: 60,
                                                                    borderColor: '#B4B4B4',
                                                                    borderWidth: 1,
                                                                    marginLeft: 85,
                                                                    marginTop: 15,
                                                                    borderRadius: 5,
                                                                    width: 330
                                                                }}
                                                                onChangeText={comments => this.setState({comments})}
                                                            />

                                                        </View>
                                                        <View>
                                                            <View style={{
                                                                marginLeft: 60,
                                                                marginTop: 30,
                                                                flexDirection: 'row'
                                                            }}>
                                                                <Text style={styles.year}>Bin No</Text>
                                                                <Text style={{color: 'red'}}>*</Text>
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
                                                                    name={''}
                                                                    defaultItem={''}
                                                                    value={''}
                                                                    data={this.state.bin_no}
                                                                    color="#686868"
                                                                />
                                                            </View>

                                                        </View>
                                                        <View>
                                                            <View style={{
                                                                marginLeft: 60,
                                                                marginTop: 30,
                                                                flexDirection: 'row'
                                                            }}>
                                                                <Text style={styles.year}>% to Bin </Text>
                                                                <Text style={{color: 'red'}}>*</Text>
                                                            </View>
                                                            <TextInput
                                                                value={this.state.percent_bin}
                                                                keyboardType={'numeric'}
                                                                placeholder={''}
                                                                style={{
                                                                    height: 40,
                                                                    borderColor: '#B4B4B4',
                                                                    borderWidth: 1,
                                                                    marginLeft: 60,
                                                                    marginTop: 15,
                                                                    borderRadius: 5,
                                                                    width: 150
                                                                }}
                                                                onChangeText={percent_bin => this.setState({percent_bin})}
                                                            />
                                                        </View>

                                                        <View>
                                                            <View style={{
                                                                marginLeft: 60,
                                                                marginTop: 30,
                                                                flexDirection: 'row'
                                                            }}>
                                                                <Text style={styles.year}>% to Semi </Text>
                                                                <Text style={{color: 'red'}}>*</Text>
                                                            </View>
                                                            <TextInput
                                                                value={this.state.percent_semi}
                                                                keyboardType={'numeric'}
                                                                placeholder={''}
                                                                style={{
                                                                    height: 40,
                                                                    borderColor: '#B4B4B4',
                                                                    borderWidth: 1,
                                                                    marginLeft: 60,
                                                                    marginTop: 15,
                                                                    borderRadius: 5,
                                                                    width: 150
                                                                }}
                                                                onChangeText={percent_semi => this.setState({percent_semi})}
                                                            />
                                                        </View>


                                                    </View>
                                                    <View style={{flexDirection: 'column'}}>
                                                        <View style={{flexDirection: 'row'}}>
                                                            <View>
                                                                <View style={{
                                                                    marginLeft: 85,
                                                                    marginTop: 30,
                                                                    flexDirection: 'row'
                                                                }}>
                                                                    <Text style={styles.year}>Consignment</Text>
                                                                    <Text style={{color: 'red'}}>*</Text>
                                                                </View>
                                                                <TextInput
                                                                    value={this.state.consignment}
                                                                    keyboardType={'numeric'}
                                                                    placeholder={''}
                                                                    style={{
                                                                        height: 40,
                                                                        borderColor: '#B4B4B4',
                                                                        borderWidth: 1,
                                                                        marginLeft: 85,
                                                                        marginTop: 15,
                                                                        borderRadius: 5,
                                                                        width: 150
                                                                    }}
                                                                    onChangeText={consignment => this.setState({consignment})}
                                                                />

                                                            </View>
                                                            <View style={{
                                                                marginLeft: 60,
                                                                marginTop: 30,
                                                                flexDirection: 'row'
                                                            }}>
                                                                <Text style={styles.year}>Contains B Potato</Text>
                                                                <CheckBox/>
                                                            </View>
                                                        </View>

                                                    </View>
                                                </View> :
                                                <View>
                                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                                        <View>
                                                            <Text style={styles.comments}>Comments</Text>
                                                            <TextInput
                                                                value={this.state.comments}
                                                                keyboardType={'numeric'}
                                                                placeholder={''}
                                                                style={{
                                                                    height: 60,
                                                                    borderColor: '#B4B4B4',
                                                                    borderWidth: 1,
                                                                    marginLeft: 85,
                                                                    marginTop: 15,
                                                                    borderRadius: 5,
                                                                    width: 330
                                                                }}
                                                                onChangeText={comments => this.setState({comments})}
                                                            />

                                                        </View>
                                                        <View>
                                                            <View style={{
                                                                marginLeft: 60,
                                                                marginTop: 30,
                                                                flexDirection: 'row'
                                                            }}>
                                                                <Text style={styles.year}>Bin No</Text>
                                                                <Text style={{color: 'red'}}>*</Text>
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
                                                                    name={''}
                                                                    defaultItem={''}
                                                                    value={''}
                                                                    data={this.state.bin_no}
                                                                    color="#686868"
                                                                />
                                                            </View>

                                                        </View>
                                                        <View>
                                                            <View style={{
                                                                marginLeft: 60,
                                                                marginTop: 30,
                                                                flexDirection: 'row'
                                                            }}>
                                                                <Text style={styles.year}>No Of Boxes</Text>
                                                                <Text style={{color: 'red'}}>*</Text>
                                                            </View>
                                                            <TextInput
                                                                value={this.state.box_no}
                                                                keyboardType={'numeric'}
                                                                placeholder={''}
                                                                style={{
                                                                    height: 40,
                                                                    borderColor: '#B4B4B4',
                                                                    borderWidth: 1,
                                                                    marginLeft: 60,
                                                                    marginTop: 15,
                                                                    borderRadius: 5,
                                                                    width: 150
                                                                }}
                                                                onChangeText={box_no => this.setState({box_no})}
                                                            />

                                                        </View>
                                                        <View>
                                                            <View style={{
                                                                marginLeft: 60,
                                                                marginTop: 30,
                                                                flexDirection: 'row'
                                                            }}>
                                                                <Text style={styles.year}>Consignment</Text>
                                                                <Text style={{color: 'red'}}>*</Text>
                                                            </View>
                                                            <TextInput
                                                                value={this.state.consignment}
                                                                keyboardType={'numeric'}
                                                                placeholder={''}
                                                                style={{
                                                                    height: 40,
                                                                    borderColor: '#B4B4B4',
                                                                    borderWidth: 1,
                                                                    marginLeft: 60,
                                                                    marginTop: 15,
                                                                    borderRadius: 5,
                                                                    width: 150
                                                                }}
                                                                onChangeText={consignment => this.setState({consignment})}
                                                            />

                                                        </View>

                                                    </View>
                                                    <View style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                                        <Text style={styles.year}>Contains B Potato</Text>
                                                        <CheckBox/>
                                                    </View>

                                                </View>
                                            }

                                        </View>


                                    }
                                </View>
                            }
                            <View style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                marginTop: 30,
                                marginBottom: 50,
                                marginRight: 50
                            }}>
                                <Image source={require('../assets/Submit.png')}/>
                            </View>
                        </View> :
                        <View>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Line No </Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 338}}>
                                    <Text style={styles.year}>Truck</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 348}}>
                                    <Text style={styles.year}>Truck Load %</Text>
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
                                        name={''}
                                        defaultItem={''}
                                        value={''}
                                        data={this.state.line_no}
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
                                        name={''}
                                        defaultItem={''}
                                        value={''}
                                        data={this.state.truck}
                                        color="#686868"
                                    />
                                </View>
                                <TextInput
                                    value={this.state.truck_load}
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
                                    onChangeText={box_no => this.setState({box_no})}
                                />
                            </View>
                            <View>
                                <Text style={styles.comments}>Comments</Text>
                                <TextInput
                                    value={this.state.btruck_comments}
                                    keyboardType={'numeric'}
                                    placeholder={''}
                                    style={{
                                        height: 60,
                                        borderColor: '#B4B4B4',
                                        borderWidth: 1,
                                        marginLeft: 85,
                                        marginTop: 15,
                                        borderRadius: 5,
                                        width: 330
                                    }}
                                    onChangeText={btruck_comments => this.setState({btruck_comments})}
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
        shipping:{
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
        year: {
            fontFamily: ' Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 20,
            color: '#686868',
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
        add: {
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
            width: 100,
        },
        adds: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            color: '#634720',
            borderRadius: 2,
            height:34,
            width:100,
            textAlign:'center',
            paddingTop:10
        },
        btruck: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            borderRadius: 2,
            color: '#634720',
            height: 36,
            width: 100,
            textAlign: 'center',
            paddingTop: 10,
        },
        btrucks: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 12,
            lineHeight: 14,
            borderRadius: 2,
            color: '#FFFFFF',
            height:34,
            width:100,
            textAlign:'center',
            paddingTop:10
        },
        bin:{
            fontFamily:' Poppins',
            fontStyle:'normal',
            fontWeight:'normal',
            fontSize:14,
            lineHeight:20,
            color:'#686868',
            marginTop:10,
        },
        comments:{
            fontFamily: ' Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 20,
            color: '#686868',
            marginTop:30,
            marginLeft:85
        },
        bin_no:{
            fontFamily: ' Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 20,
            color: '#686868',
            marginTop:30,
            marginLeft:60
        },
        summary: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
            borderWidth: 0.5,
            width: 100,
            height: 35,
            borderColor: '#686868',
            marginRight: 30,
            backgroundColor: '#634720',
            color: 'white',
            marginTop: 20,
            textAlign: 'center',
            paddingTop: 7,
            borderRadius: 2,
        },
    }
)
