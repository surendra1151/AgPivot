import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  ScrollView,
  FlatList, AsyncStorage,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DropDown} from '../components/DropDownOne';
import DatePicker from 'react-native-datepicker';
import {RadioButton } from 'react-native-paper';
import {CuttingRecords} from "../components/CuttingRecords";
import {NavigationActions, StackActions} from "react-navigation";

export default class SeedCutting extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      year: [
          "2019",
        "2020",
      ],
      seedCutting: "start",
      date: "2019-10-25",
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
      variety: [],
      color: [],
      identifyfields: [],
      operator: [
        "Beau Hartline",
        "Charles Stone",
        "Contract Labor",
        "Dale Grimm",
        "Duane Kalsma",
        "Frankie Lambart",
        "Greg Hogan",
        "Jacob Huber",
        "Jeff Vossekuil",
        "Jeffery Huber",
        "Jim Pruessing",
        "Joe Huber",
        "Kirk Dornfield",
        "Larry Bahr",
        "Mark Randall",
        "Scot Ehlert",
        "Seasonal Labor",
        "Terry Janke",
        "Trevor Frey",
      ],
      implements: [
          "224-Milestone Seed Cutter",
        "2240-Milestone Seed Cutter"
      ],
      bin:[
        "01",
        "02",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "20",
        "21",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "North Shed",
        "Potato World",
        "8",
        "3",
        "4",
        "5",
        "7",
        "9",
        "22",
        "23"
      ],
      temp:"",
      disinfeted:[
        "yes",
        "no"
      ],
      comment:"",
      truck:[
        "2302-Brown Dump Truck",
        "10-Chevrolet Truck",
        "At02-Chevrolet Pickup Truck",
        "At09-Dodge Pickup Truck",
        "At12-Ford Pickup Truck",
        "22-Ford Truck",
        "18-Ford Truck",
        "14-Ford Truck",
        "16-Ford Truck",
        "24-Frieghtliner Truck",
        "21-Frieghtliner Truck",
        "55-International Truck",
        "76-International Truck",
        "105-International Truck",
        "70T-International Dump Truck",
        "72T-International Dump Truck",
        "15-International Truck",
        "19-International Truck",
        "2-International Truck",
        "806-International Truck",
        "810-International Truck",
        "811-International Truck",
        "83-Mack Truck",
        "8-Mack Truck",
        "10-Oshkosh Truck",
        "11-Oshkosh Truck",
        "12-Oshkosh Truck",
        "14-Oshkosh Truck",
        "61-Oshkosh Truck",
        "62-Oshkosh Truck",
        "63-Oshkosh Truck",
        "65-Oshkosh Truck",
        "67-Oshkosh Truck",
        "69-Oshkosh Truck",
        "70-Oshkosh Truck",
        "73-Oshkosh Truck",
        "74-Oshkosh Truck",
        "75-Oshkosh Truck",
        "78-Oshkosh Truck",
        "79-Oshkosh Truck",
        "80-Oshkosh Truck",
        "81-Oshkosh Truck",
        "82-Oshkosh Truck",
        "84-Oshkosh Dump Truck",
        "85-Oshkosh Truck",
        "86-Oshkosh Truck",
        "87-Oshkosh Truck",
        "88-Oshkosh Truck",
        "89-Oshkosh Truck",
        "91-Oshkosh Truck",
        "92-Oshkosh Truck",
        "93-Oshkosh Truck",
        "95-Oshkosh Truck",
        "96-Oshkosh Truck",
        "97-Oshkosh Truck",
        "98-Oshkosh Truck",
        "99-Oshkosh Truck",
        "215-Oshkosh Truck",
        "1-Peterbilt Truck",
        "17-Westernstar Truck",
        "9-2304-White Road Boss Truck",
        "14-Oshkosh Truck",
        "23-International"
      ],
      truck_temp:"",
      radioButton:"Bin",
      checked:"Bin",
      trailer:[
          "4001",
         "4002",
         "4602",
        "4602",
        "4605",
        "4801",
        "4802",
        "4803",
        "4804",
        "4805",
        "4807",
        "4808",
        "4809",
        "4810",
        "4812",
        "4813",
        "4814",
        "4815",
        "4816",
        "4817",
        "4818",
        "4822",
        "4823",
        "4824",
        "4826",
        "4828",
        "4829",
        "4830",
        "4831",
        "4832",
        "4833",
        "4834",
        "4835",
        "4836",
        "4837",
        "4838",
        "4839",
        "4840",
        "4841",
        "4842",
        "4843",
        "4844",
        "4845",
        "4846",
        "4847",
        "4848",
        "4849",
        "4850",
        "4851",
        "4852",
        "4853",
        "4854",
        "4855",
        "4856",
        "4857",
        "4858",
        "4859",
        "5303",
        "5304",
        "5305",
        "5306",
        "5307",
        "5308",
        "5309",
        "5310",
        "5311",
        "5312",
        "5313",
        "5314",
        "5315",
        "5316",
        "5317",
        "5318",
        "5319",
        "5320",
        "5321",
        "5322",
        "5323",
        "5324",
        "5325",
        "5326",
        "5327",
        "5328",
        "5329",
        "5330",
       "Grower Trailer",
      ],
      trailer_temp:"",
      trailer_comment:"",
      recordScreen:"entry",

    };
  }
  /* checking condition start or stop */
  seedCutting(name) {
    if (name === 'start') {
      this.setState({seedCutting: 'start'});
    } else if (name === 'stop') {
      this.setState({seedCutting: 'stop'});
    }
  }
  /*  checking condition for radiobutton */
  radioButton(name){
    if (name==='Bin'){
      this.setState({radioButton:'Bin',checked:'Bin'});
    }
    else if (name==='Truck'){
      this.setState({radioButton:'Truck',checked: 'Truck'});
    }
    else if (name==='Trailer'){
      this.setState({radioButton:'Trailer',checked:'Trailer'});
    }

  }
  /*  checking condition entry or records */
  recordScreen(name){
    if(name==='entry'){
      this.setState({recordScreen:'entry'})
    }
    else if(name==='records'){
      this.setState({recordScreen:'records'})
    }
  }
  AgPivot(){
    this.props.navigation.replace('Home');
  }
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

  render() {
    const {checked } = this.state;
    return (
      <View style={{flex: 1}}>
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
              style={{borderRadius: 50,marginRight: 20}}
            />
            <TouchableHighlight onPress={()=>this.logout()}>
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
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.home}>Home</Text>
            <Text style={styles.divison}>/</Text>
            <Text style={styles.edit}>Edit Profile</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.state.recordScreen === 'entry' ?
              <Text style={styles.seed}>Seed Cutting</Text> :
              <Text style={styles.seed}>Seed Cutting Table</Text>
          }
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            {this.state.recordScreen==='entry'?
            <View style={{marginTop: 18, flexDirection: 'row'}}>
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
            <View style={{flexDirection: 'row', marginRight: 30,marginTop:18}}>
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
        {this.state.recordScreen !== 'entry' ?
            <CuttingRecords/> :
            <View>
              {this.state.seedCutting === 'start' ?
                  <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight onPress={() => this.seedCutting('start')}>
                      <View style={{marginLeft: 85, marginTop: 41, borderWidth: 0.8}}>
                        <LinearGradient
                            start={{x: 0.5, y: 0}}
                            end={{x: 2, y: 0}}
                            colors={['#634720', '#C99349']}>
                          <Text style={styles.start}>Start</Text>
                        </LinearGradient>
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.seedCutting('stop')}>
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
                  <View style={{flexDirection:'row'}}>
                  <TouchableHighlight onPress={() => this.seedCutting('start')}>
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
                          marginLeft:85
                        }}>
                      <Text style={styles.starts}>Start</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => this.seedCutting('stop')}>
                <View style={{ marginTop: 41, borderWidth: 0.8}}>
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
              {this.state.seedCutting === 'start' ? (
                  <ScrollView style={{flexGrow:1}}>
                  <View  style={{marginBottom: 200, paddingBottom: 50}}>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                      <View
                          style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                        <Text style={styles.year}>Year</Text>
                        <Text style={{color: 'red'}}>*</Text>
                      </View>
                      <View
                          style={{flexDirection: 'row', marginTop: 30, marginLeft: 360}}>
                        <Text style={styles.year}>Seed Grower</Text>
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
                            name={'Baginski'}
                            defaultItem={'Baginski'}
                            value={'Baginski'}
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
                            name={''}
                            defaultItem={''}
                            value={''}
                            data={this.state.variety}
                            color="#686868"
                        />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                      <View
                          style={{marginLeft: 85, marginTop: 15, flexDirection: 'row'}}>
                        <Text style={styles.year}>Color/Variety</Text>
                        <Text style={{color: 'red'}}>*</Text>
                      </View>
                    </View>

                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                      <View style={{marginRight: 30}}>
                        <LinearGradient
                            start={{x: 0.5, y: 0}}
                            end={{x: 2, y: 0}}
                            colors={['#634720', '#C99349']}>
                          <Text style={styles.identify}>Identify</Text>
                        </LinearGradient>
                      </View>
                    </View>
                    <View style={{marginLeft: 85, marginTop: 15, flexDirection: 'row'}}>
                      <Text style={styles.year}>Select Load</Text>
                      <Text style={{color: 'red'}}>*</Text>
                    </View>
                    <View>
                      <TextInput
                          value={this.state.value}
                          keyboardType={'alphanumeric'}
                          placeholder={''}
                          style={{
                            height: 60,
                            borderColor: '#B4B4B4',
                            borderWidth: 1,
                            marginLeft: 85,
                            marginTop: 15,
                            borderRadius: 5,
                            marginRight: 30,
                          }}
                          onChangeText={value => this.setState({value})}
                      />
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 300}}>
                      <View
                          style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                        <Text style={styles.year}>Year</Text>
                        <Text style={{color: 'red'}}>*</Text>
                      </View>
                      <View
                          style={{flexDirection: 'row', marginTop: 30, marginLeft: 360}}>
                        <Text style={styles.year}>Operator</Text>
                        <Text style={{color: 'red'}}>*</Text>
                      </View>
                      <View
                          style={{flexDirection: 'row', marginTop: 30, marginLeft: 330}}>
                        <Text style={styles.year}>Implements/Machines</Text>
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
                            name={'224-Milestone Seed Cutter'}
                            defaultItem={'224-Milestone Seed Cutter'}
                            value={'224-Milestone Seed Cutter'}
                            data={this.state.implements}
                            color="#686868"
                        />
                      </View>
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
                  </ScrollView>
              ) : (
                  <ScrollView style={{flexGrow:1}}>
                    <View style={{marginBottom: 200, paddingBottom: 50}}>
                      <View style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                        <Text style={styles.year}>
                          Identify Fields (Year - Grower - Variety - Color - Operator)
                        </Text>
                        <Text style={{color: 'red'}}>*</Text>
                      </View>
                      <View
                          style={{
                            marginLeft: 85,
                            borderColor: '#B4B4B4',
                            borderRadius: 5,
                            borderWidth: 1,
                            marginTop: 15,
                            paddingBottom: 25,
                            marginRight: 30,
                            height: 40,
                          }}>
                        <DropDown
                            name={''}
                            defaultItem={''}
                            value={''}
                            data={this.state.identifyfields}
                            color="#686868"
                        />
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{marginLeft: 85, marginTop: 15, flexDirection: 'row'}}>
                          <Text style={styles.year}>Stop Date&Time</Text>
                          <Text style={{color: 'red'}}>*</Text>
                        </View>
                        <View style={{marginLeft: 285, marginTop: 15, flexDirection: 'row'}}>
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
                            date={this.state.datetime}
                            mode="datetime"
                            placeholder="select date"
                            format="YYYY-MM-DD HH:mm"
                            androidMode="default"
                            minDate="1900-01-01"
                            maxDate="2050-12-31"
                            // minuteInterval={1}
                            // is24Hour={true}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{

                              dateInput: {
                                paddingRight: 195,
                                color: '#686868',
                                height: 40,
                                borderRadius: 5

                              },
                              dateText: {
                                color: '#686868',
                                flexDirection: 'row'
                              }
                              // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(datetime) => {
                              this.setState({datetime: datetime})
                            }}
                        />
                        <View>
                          <TextInput
                              value={this.state.usagehours}
                              keyboardType={'numeric'}
                              placeholder={''}
                              style={{
                                width: 330,
                                height: 40,
                                borderColor: '#B4B4B4',
                                borderWidth: 1,
                                marginLeft: 60,
                                marginTop: 15,
                                borderRadius: 5,
                                marginRight: 30,
                              }}
                              onChangeText={(usagehours) => this.setState({usagehours})}
                          />
                        </View>
                      </View>
                      <Text style={styles.whole}>Whole Seed Size Profile</Text>
                      <View style={{
                        borderWidth: 0.3,
                        borderColor: 'B4B4B4',
                        marginLeft: 85,
                        marginRight: 30,
                        marginTop: 15
                      }}/>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Text style={styles.size}>Size</Text>
                        </View>
                        <View style={{marginLeft: 100}}>
                          <Text style={styles.size}>Under 2"</Text>
                        </View>
                        <View style={{marginLeft: 110}}>
                          <Text style={styles.size}>2" - 6 oz</Text>
                        </View>
                        <View style={{marginLeft: 110}}>
                          <Text style={styles.size}>6 - 10 oz</Text>
                        </View>
                        <View style={{marginLeft: 110}}>
                          <Text style={styles.size}>Above 10 oz</Text>
                        </View>
                        <View>
                          <Text style={styles.size}>Actions</Text>
                        </View>
                      </View>
                      <View style={{
                        borderWidth: 0.3,
                        borderColor: 'B4B4B4',
                        marginLeft: 85,
                        marginRight: 30,
                        marginTop: 15
                      }}/>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 100}}>
                        <Text style={styles.quantity}>Quantity{'\n'}(count)</Text>
                        <TextInput
                            value={this.state.under}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 150,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(under) => this.setState({under})}
                        />
                        <TextInput
                            value={this.state.two}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 150,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(two) => this.setState({two})}
                        />
                        <TextInput
                            value={this.state.six}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 150,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(six) => this.setState({six})}
                        />
                        <TextInput
                            value={this.state.ten}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 150,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                              marginRight: 30,
                            }}
                            onChangeText={(ten) => this.setState({ten})}
                        />
                      </View>
                      <View style={{borderWidth: 0.3, borderColor: 'B4B4B4', marginLeft: 85, marginRight: 30}}/>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 100}}>
                        <Text style={styles.quantity}>Weight{'\n'}(lbs)</Text>
                        <TextInput
                            value={this.state.weight_under}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 150,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                              marginLeft: 10
                            }}
                            onChangeText={(weight_under) => this.setState({weight_under})}
                        />
                        <TextInput
                            value={this.state.weight_two}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 150,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(weight_two) => this.setState({weight_two})}
                        />
                        <TextInput
                            value={this.state.six}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 150,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(weight_six) => this.setState({weight_six})}
                        />
                        <TextInput
                            value={this.state.ten}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 150,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                              marginRight: 30,
                            }}
                            onChangeText={(weight_ten) => this.setState({weight_ten})}
                        />
                      </View>
                      <View style={{borderWidth: 0.3, borderColor: 'B4B4B4', marginLeft: 85, marginRight: 30}}/>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.quantity}>Comments</Text>
                        <TextInput
                            value={this.state.comments}
                            keyboardType={'alphanumeric'}
                            placeholder={''}
                            style={{
                              width: 900,
                              height: 50,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                              marginLeft: 85,
                            }}
                            onChangeText={(comments) => this.setState({comments})}
                        />

                      </View>
                      <Text style={styles.samples}>ADD MORE SAMPLES</Text>
                      <View style={{
                        borderWidth: 0.3,
                        borderColor: 'B4B4B4',
                        marginLeft: 85,
                        marginRight: 30,
                        marginTop: 15
                      }}/>
                      <Text style={styles.whole}>Sample Cut Size Profile</Text>
                      <View style={{
                        borderWidth: 0.3,
                        borderColor: 'B4B4B4',
                        marginLeft: 85,
                        marginRight: 30,
                        marginTop: 15
                      }}/>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Text style={styles.size}>Size</Text>
                        </View>
                        <View style={{marginLeft: 85}}>
                          <Text style={styles.size}>Under 1.35</Text>
                        </View>
                        <View style={{marginLeft: 45}}>
                          <Text style={styles.size}>1.35" -2"</Text>
                        </View>
                        <View style={{marginLeft: 55}}>
                          <Text style={styles.size}>2"-2.5"</Text>
                        </View>
                        <View style={{marginLeft: 65}}>
                          <Text style={styles.size}>2.5"-3"</Text>
                        </View>
                        <View style={{marginLeft: 55}}>
                          <Text style={styles.size}>Above 3"</Text>
                        </View>
                        <View style={{marginLeft: 10}}>
                          <Text style={styles.size}>Actions</Text>
                        </View>
                      </View>
                      <View style={{
                        borderWidth: 0.3,
                        borderColor: 'B4B4B4',
                        marginLeft: 85,
                        marginRight: 30,
                        marginTop: 15
                      }}/>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 120}}>
                        <Text style={styles.quantity}>Count</Text>
                        <TextInput
                            value={this.state.count_one}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 120,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                              marginLeft: 55
                            }}
                            onChangeText={(count_one) => this.setState({count_one})}
                        />
                        <TextInput
                            value={this.state.count_two}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 120,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(count_two) => this.setState({count_two})}
                        />
                        <TextInput
                            value={this.state.count_three}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 120,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(count_three) => this.setState({count_three})}
                        />
                        <TextInput
                            value={this.state.count_four}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 120,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(count_four) => this.setState({count_four})}
                        />
                        <TextInput
                            value={this.state.count_five}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 120,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                              marginRight: 30,
                            }}
                            onChangeText={(count_five) => this.setState({count_five})}
                        />
                      </View>
                      <View style={{borderWidth: 0.3, borderColor: 'B4B4B4', marginLeft: 85, marginRight: 30}}/>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 120}}>
                        <Text style={styles.quantity}>Weight{'\n'}(lbs)</Text>
                        <TextInput
                            value={this.state.lbs_one}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 120,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                              marginLeft: 50
                            }}
                            onChangeText={(lbs_one) => this.setState({lbs_one})}
                        />
                        <TextInput
                            value={this.state.lbs_two}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 120,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(lbs_two) => this.setState({lbs_two})}
                        />
                        <TextInput
                            value={this.state.lbs_three}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 120,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(lbs_three) => this.setState({lbs_three})}
                        />
                        <TextInput
                            value={this.state.lbs_four}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 120,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                            }}
                            onChangeText={(lbs_four) => this.setState({lbs_four})}
                        />
                        <TextInput
                            value={this.state.lbs_five}
                            keyboardType={'numeric'}
                            placeholder={''}
                            style={{
                              width: 120,
                              height: 40,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                              marginRight: 30,
                            }}
                            onChangeText={(lbs_five) => this.setState({lbs_five})}
                        />
                      </View>
                      <View style={{borderWidth: 0.3, borderColor: 'B4B4B4', marginLeft: 85, marginRight: 30}}/>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.quantity}>Comments</Text>
                        <TextInput
                            value={this.state.comments}
                            keyboardType={'alphanumeric'}
                            placeholder={''}
                            style={{
                              width: 877,
                              height: 50,
                              borderColor: '#B4B4B4',
                              borderWidth: 0.7,
                              borderRadius: 5,
                              marginLeft: 92,
                            }}
                            onChangeText={(comments) => this.setState({comments})}
                        />

                      </View>
                      <Text style={styles.samples}>ADD MORE SAMPLES</Text>
                      <View style={{
                        borderWidth: 0.3,
                        borderColor: 'B4B4B4',
                        marginLeft: 85,
                        marginRight: 30,
                        marginTop: 15
                      }}/>
                      <Text style={styles.whole}>Destination Details</Text>
                      <Text style={styles.quantity}>Destination</Text>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{marginLeft: 85, flexDirection: 'row'}}>
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
                              status={checked === 'Truck' ? 'checked' : 'unchecked'}
                              onPress={() => this.radioButton('Truck')}
                          />
                          <Text style={styles.bin}>Truck</Text>
                        </View>
                        <View style={{marginLeft: 10, flexDirection: 'row'}}>
                          <RadioButton
                              value="Trailer"
                              color={'#686868'}
                              status={checked === 'Trailer' ? 'checked' : 'unchecked'}
                              onPress={() => this.radioButton('Trailer')}
                          />
                          <Text style={styles.bin}>Trailer</Text>
                        </View>
                      </View>
                      {this.state.radioButton === 'Bin' ?
                          <View>
                            <View style={{flexDirection: 'row'}}>
                              <Text style={styles.bin_no}>Bin No #</Text>
                              <Text style={styles.temp}>Bin Storage Temp (F)</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <View style={{
                                width: 120,
                                marginLeft: 85,
                                borderColor: '#B4B4B4',
                                borderRadius: 5,
                                borderWidth: 1,
                                marginTop: 15,
                                paddingBottom: 25,
                                height: 40
                              }}>
                                <DropDown name={"01"} defaultItem={"01"} value={"01"} data={this.state.bin}
                                             color="#686868"/>
                              </View>
                              <TextInput
                                  value={this.state.temp}
                                  keyboardType={'numeric'}
                                  placeholder={''}
                                  style={{
                                    width: 330,
                                    height: 40,
                                    borderColor: '#B4B4B4',
                                    borderWidth: 0.7,
                                    borderRadius: 5,
                                    marginLeft: 60,
                                    marginTop: 15
                                  }}
                                  onChangeText={(temp) => this.setState({temp})}
                              />

                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <Text style={styles.disinfeted}>Disinfeted</Text>
                              <Text style={styles.comments}>Comments</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <View style={{
                                width: 330,
                                marginLeft: 85,
                                borderColor: '#B4B4B4',
                                borderRadius: 5,
                                borderWidth: 1,
                                marginTop: 15,
                                paddingBottom: 25,
                                height: 40
                              }}>
                                <DropDown name={"yes"} defaultItem={"yes"} value={"yes"}
                                             data={this.state.disinfeted}
                                             color="#686868"/>
                              </View>
                              <TextInput
                                  value={this.state.comment}
                                  keyboardType={'numeric'}
                                  placeholder={''}
                                  style={{
                                    width: 440,
                                    height: 50,
                                    borderColor: '#B4B4B4',
                                    borderWidth: 0.7,
                                    borderRadius: 5,
                                    marginLeft: 60,
                                    marginTop: 15
                                  }}
                                  onChangeText={(comment) => this.setState({comment})}
                              />
                            </View>
                          </View> :
                          <View>
                            {this.state.radioButton === 'Truck' ?
                                <View>
                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.bin_no}>Truck No #</Text>
                                    <Text style={styles.truck_temp}>Truck Storage Temp (F)</Text>
                                  </View>
                                  <View style={{flexDirection: 'row'}}>
                                    <View style={{
                                      width: 200,
                                      marginLeft: 85,
                                      borderColor: '#B4B4B4',
                                      borderRadius: 5,
                                      borderWidth: 1,
                                      marginTop: 15,
                                      paddingBottom: 25,
                                      height: 40
                                    }}>
                                      <DropDown name={"2302-Brown Dump Truck"} defaultItem={"2302-Brown Dump Truck"}
                                                   value={"2302-Brown Dump Truck"} data={this.state.truck}
                                                   color="#686868"/>
                                    </View>
                                    <TextInput
                                        value={this.state.truck_temp}
                                        keyboardType={'numeric'}
                                        placeholder={''}
                                        style={{
                                          width: 400,
                                          height: 40,
                                          borderColor: '#B4B4B4',
                                          borderWidth: 0.7,
                                          borderRadius: 5,
                                          marginLeft: 60,
                                          marginTop: 15
                                        }}
                                        onChangeText={(truck_temp) => this.setState({truck_temp})}
                                    />
                                  </View>
                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.disinfeted}>Disinfeted</Text>
                                    <Text style={styles.truck_comments}>Comments</Text>
                                  </View>
                                  <View style={{flexDirection: 'row'}}>
                                    <View style={{
                                      width: 400,
                                      marginLeft: 85,
                                      borderColor: '#B4B4B4',
                                      borderRadius: 5,
                                      borderWidth: 1,
                                      marginTop: 15,
                                      paddingBottom: 25,
                                      height: 40
                                    }}>
                                      <DropDown name={"yes"} defaultItem={"yes"} value={"yes"}
                                                   data={this.state.disinfeted}
                                                   color="#686868"/>
                                    </View>
                                    <TextInput
                                        value={this.state.comment}
                                        keyboardType={'numeric'}
                                        placeholder={''}
                                        style={{
                                          width: 440,
                                          height: 50,
                                          borderColor: '#B4B4B4',
                                          borderWidth: 0.7,
                                          borderRadius: 5,
                                          marginLeft: 60,
                                          marginTop: 15,
                                        }}
                                        onChangeText={(comment) => this.setState({comment})}
                                    />

                                  </View>
                                </View> :
                                <View>
                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.bin_no}>Trailer No #</Text>
                                    <Text style={styles.trailer_temp}>Trailer Storage Temp (F)</Text>
                                  </View>
                                  <View style={{flexDirection: 'row'}}>
                                    <View style={{
                                      width: 140,
                                      marginLeft: 85,
                                      borderColor: '#B4B4B4',
                                      borderRadius: 5,
                                      borderWidth: 1,
                                      marginTop: 15,
                                      paddingBottom: 25,
                                      height: 40
                                    }}>
                                      <DropDown name={"4001"} defaultItem={"4001"} value={"4001"}
                                                   data={this.state.trailer}
                                                   color="#686868"/>
                                    </View>
                                    <TextInput
                                        value={this.state.trailer_temp}
                                        keyboardType={'numeric'}
                                        placeholder={''}
                                        style={{
                                          width: 350,
                                          height: 40,
                                          borderColor: '#B4B4B4',
                                          borderWidth: 0.7,
                                          borderRadius: 5,
                                          marginLeft: 60,
                                          marginTop: 15
                                        }}
                                        onChangeText={(trailer_temp) => this.setState({trailer_temp})}
                                    />

                                  </View>
                                  <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.disinfeted}>Disinfeted</Text>
                                    <Text style={styles.trailer_comments}>Comments</Text>
                                  </View>
                                  <View style={{flexDirection: 'row', marginBottom: 100}}>
                                    <View style={{
                                      width: 350,
                                      marginLeft: 85,
                                      borderColor: '#B4B4B4',
                                      borderRadius: 5,
                                      borderWidth: 1,
                                      marginTop: 15,
                                      paddingBottom: 25,
                                      height: 40
                                    }}>
                                      <DropDown name={"yes"} defaultItem={"yes"} value={"yes"}
                                                   data={this.state.disinfeted}
                                                   color="#686868"/>
                                    </View>
                                    <TextInput
                                        value={this.state.trailer_comment}
                                        keyboardType={'numeric'}
                                        placeholder={''}
                                        style={{
                                          width: 460,
                                          height: 50,
                                          borderColor: '#B4B4B4',
                                          borderWidth: 0.7,
                                          borderRadius: 5,
                                          marginLeft: 60,
                                          marginTop: 15
                                        }}
                                        onChangeText={(trailer_comment) => this.setState({trailer_comment})}
                                    />
                                  </View>
                                </View>
                            }
                          </View>


                      }
                      <View style={{alignItems: 'flex-end', marginTop: 30, marginBottom: 50, marginRight: 50}}>
                        <Image source={require('../assets/Submit.png')}/>
                      </View>

                    </View>
                  </ScrollView>
              )}
            </View>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
  seed: {
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
  year: {
    fontFamily: ' Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#686868',
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
  whole:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 20,
    marginTop:15,
    marginLeft:85,
    color:'#B4B4B4'
  },
  size:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:20,
    color:'#686868',
    marginLeft:85,
    marginTop:15
  },
  quantity:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:16,
    lineHeight:20,
    color:'#686868',
    marginLeft:85,
    marginTop:5
  },
  samples:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:16,
    lineHeight:20,
    color:'white',
    borderWidth:1,
    backgroundColor:'#634720',
    height:30,
    width:175,
    marginLeft:85,
    marginTop:15,
    textAlign:'center',
    paddingTop:5
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
  bin_no:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:20,
    color:'#686868',
    marginTop:30,
    marginLeft:85
  },
  temp:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:20,
    color:'#686868',
    marginTop:30,
    marginLeft:127
  },
  disinfeted:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:20,
    color:'#686868',
    marginTop:30,
    marginLeft:85
  },
  comments:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:20,
    color:'#686868',
    marginTop:30,
    marginLeft:325
  },
  truck_temp:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:20,
    color:'#686868',
    marginTop:30,
    marginLeft:195,
  },
  truck_comments:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:20,
    color:'#686868',
    marginTop:30,
    marginLeft:390,
  },
  trailer_temp:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:20,
    color:'#686868',
    marginTop:30,
    marginLeft:127
  },
  trailer_comments:{
    fontFamily:' Poppins',
    fontStyle:'normal',
    fontWeight:'normal',
    fontSize:14,
    lineHeight:20,
    color:'#686868',
    marginTop:30,
    marginLeft:350
  }
});
