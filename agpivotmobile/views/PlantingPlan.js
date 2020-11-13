import React ,{Component} from 'react';
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
import {PlanRecords} from "../components/PlanRecords";

export default class PlantingPlan extends React.Component{
    static navigationOptions={
        header:null,
    };
    constructor(props) {
        super(props);
        this.state={
            recordScreen:"entry",
            year:[
                "2019",
                "2020"
            ],
            date:"2019-11-10",
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
            seed: [
                "Baginski",
                "Baginski & Sons",
                "Bula Potato Farms",
                "Bushman Riverside Ranch",
                "C.K. Jespersen Farms",
                "Colorado-Kist Farms",
                "Countrywide Potato",
                "Hafner Seed Farms",
                "Jorde Certified Seed.LLC",
                "Karren Farms",
                "Norbest Farms",
                "Parkland/Pinery Farms",
                "Real Potatoes",
                "Schroeder Bros",
                "Schroeder Bros(RPE)",
                "Solanum International.Inc",
                "West Edmonton Seed Potatoes",
            ],
            variety:[
                "Fingerling",
                "Golden",
                "Red",
                "Russet",
                "White"
            ],
            color:[
                "Fingeling Little Giant",
                "Fingerling Red Cecile",
                "Fingerling Red Cerisa"
            ],
            acres:"",
            spacing:"",
            cwt:"",
            emerging_date:"2019-11-10",
            fertilizers:[
                "11-8-5 Micropac Bulk 10.476#/Gal",
                "9-28-4-2s-.1Zn",
                "Amisorb Liquid 10.5#/Gal",
                "Carbonboost/Gal",
                "Chb Premium",
                "Plant-X Bio-sb",
                "Tilt It Blue-Zone-Ultra 6-24-6"
            ],
            fertilizer_rate:[
                "22.5",
                "25",
                "27.5",
                "30"
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

        }
    }
    /* condition for entry or record screen */
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
    /* condition for logout  to move to login screen */
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
                        <Text style={styles.pplan}>Planting Plan</Text>:
                        <Text style={styles.pplan}>Planting Plan Table</Text>
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
                    <PlanRecords/> :
                    <ScrollView style={{flexGrow: 1}}>
                        <View style={{marginBottom: 50, paddingBottom: 50}}>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Crop Year</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 330}}>
                                    <Text style={styles.year}>Date</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 355}}>
                                    <Text style={styles.year}>Field</Text>
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

                            </View>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Seed Grower</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 312}}>
                                    <Text style={styles.year}>Variety</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 341}}>
                                    <Text style={styles.year}>Color/Variety</Text>
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
                                        name="Baginski"
                                        defaultItem="Baginski"
                                        value="Baginski"
                                        data={this.state.seed}
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
                                        name="Fingerling Little Giant"
                                        defaultItem="Fingerling Little Giant"
                                        value="Fingerling Little Giant"
                                        data={this.state.color}
                                        color="#686868"
                                    />
                                </View>

                            </View>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Acres</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 355}}>
                                    <Text style={styles.year}>Spacing</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 335}}>
                                    <Text style={styles.year}>CWT</Text>
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
                                    value={this.state.spacing}
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

                            </View>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Emerging Date</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 298}}>
                                    <Text style={styles.year}>Fertilizers</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 330}}>
                                    <Text style={styles.year}>Fertilizer Rate</Text>
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
                                        name="22.5"
                                        defaultItem="22.5"
                                        value="22.5"
                                        data={this.state.fertilizer_rate}
                                        color="#686868"
                                    />
                                </View>

                            </View>
                            <View style={{flexDirection: 'row', marginRight: 300}}>
                                <View
                                    style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                    <Text style={styles.year}>Chemicals</Text>
                                    <Text style={{color: 'red'}}>*</Text>
                                </View>
                                <View
                                    style={{flexDirection: 'row', marginTop: 30, marginLeft: 323}}>
                                    <Text style={styles.year}>Comments</Text>
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
                                        name="Aframe"
                                        defaultItem="Aframe"
                                        value="Aframe"
                                        data={this.state.chemicals}
                                        color="#686868"
                                    />
                                </View>
                                <TextInput
                                    value={this.state.comments}
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
        pplan:{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
            lineHeight: 36,
            color: '#686868',
            marginLeft: 85,
            marginTop: 20,
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
