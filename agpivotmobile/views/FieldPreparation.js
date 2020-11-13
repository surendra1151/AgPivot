import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Picker, AsyncStorage,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
import {DropDown} from '../components/DropDownOne';
import {Records} from '../components/Records';
import {NavigationActions, StackActions} from "react-navigation";

export default class FieldPreparation extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      fieldPrepare: 'start',
      date: '2016-08-16',
      time: '',
      value: '',
      recordScreen: 'entry',
      operation: [
        'Deep Tilling',
        'Chisel Plowing',
        'Discing',
        'Dry Corner Mowing',
        'Fall Tilling',
        'Headland Discing',
        'Row Marking',
        'Stalk Chopping',
      ],
      year: ['2018', '2019'],
      field: [
        '002',
        '003',
        '013',
        '017',
        '018',
        '023',
        '024',
        '025',
        '051',
        '052',
        '055',
        '059',
        '071',
        '072',
        '124',
        '175',
        '183',
        '184',
        '191',
        'A-3 205',
        'A-4 207',
        'Bonnett Little/East 210',
        'Kent 220',
        'Parks',
        'Tracy North',
        'Parr/A-2',
      ],
      tractor: [
        '102-Case 7130 Tractor',
        '116-Case 8950 Tractor',
        '122-Case 9370 Tractor',
        '125-Challenger Mt665C Tractor',
        '126-Challenger Mt765C Tractor',
        '132-Challenger Mt765D Tractor',
        '146-Challenger Mt765E Tractor',
        '147-Case 600 Quadtrac Tractor',
        '2101-Challenger Mt765E Tractor',
        'Tractor-2016 Challenger Mt555E',
      ],
      implements: [
        '109-Tye Paratiller',
        '117-Brillion Chisel Plow',
        '118-Brillion Plow Packer ',
        '119-Case Ih Disc',
        '130-Hiller-Harriston 2025',
        '133-Woods Mower',
        '142-Dominator Disc',
        '144-Artsway Stalk Chopper',
        '150-Wil Rich Chisel Plow',
      ],
      identifyfields: [
        'Joe Huber-Row Marking-Kent 220-2019',
        'Terry Jankie-Chisel Plowing-A-4 207-2019',
        'Jim Pruessing-Discing-024-2019',
        'Jim Pruessing-Discing-023-2019',
        'Jim Pruessing-Discing-072-2019',
        'Jim Pruessing Deep Tilling-059-2019',
      ],
    };
  }
     /* checking condition start or stop */
  fieldPrepare(name) {
    console.log('I am updating the fieldPrepare');
    if (name === 'start') {
      this.setState({
        fieldPrepare: 'start',
      });
    } else if (name === 'stop') {
      this.setState({
        fieldPrepare: 'stop',
      });
    }
  }
  /*  checking condition entry or records */
  recordScreen(name) {
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
              style={{borderRadius: 50,marginRight:20}}
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
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.home}>Home</Text>
          <Text style={styles.divison}>/</Text>
          <Text style={styles.edit}>Edit Profile</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.state.recordScreen === 'entry' ? (
            <Text style={styles.field}>Field Preparation</Text>
          ) : (
            <Text style={styles.field}>Field Preparation Table</Text>
          )}

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View
              style={{
                marginTop: 18,
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <TouchableHighlight onPress={() => this.recordScreen('entry')}>
                <Image source={require('../assets/Entry.png')} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.recordScreen('records')}>
                <Image
                  source={require('../assets/Records.png')}
                  style={{marginLeft: 20, marginRight: 24}}
                />
              </TouchableHighlight>
            </View>
          </View>
        </View>
        {this.state.recordScreen !== 'entry' ? (
          <Records />
        ) : (
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              {this.state.fieldPrepare === 'start' ? (
                <View style={{flexDirection: 'row'}}>
                  <TouchableHighlight
                    onPress={() => this.fieldPrepare('start')}>
                    <View
                      style={{
                        marginLeft: 100,
                        marginTop: 41,
                        borderWidth: 0.8,
                      }}>
                      <LinearGradient
                        start={{x: 0.5, y: 0}}
                        end={{x: 2, y: 0}}
                        colors={['#634720', '#C99349']}>
                        <Text style={styles.start}>Start</Text>
                      </LinearGradient>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => this.fieldPrepare('stop')}>
                    <View
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderColor: '#634720',
                        borderWidth: 0.8,
                        marginTop: 41,
                        borderRightWidth: 0.8,
                      }}>
                      <Text style={styles.stop}>Stop</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              ) : (
                <View style={{flexDirection: 'row'}}>
                  <TouchableHighlight
                    onPress={() => this.fieldPrepare('start')}>
                    <View
                      style={{
                        marginLeft: 100,
                        marginTop: 41,
                        borderWidth: 0.8,
                      }}>
                      <Text style={styles.starts}>Start</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => this.fieldPrepare('stop')}>
                    <View
                      style={{
                        backgroundColor: '#634720',
                        marginTop: 41,
                        borderRightWidth: 0.8,
                      }}>
                      <Text style={styles.stops}>Stop</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              )}
            </View>

            {this.state.fieldPrepare === 'start' ? (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 370,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 100,
                      marginTop: 15,
                    }}>
                    <Text style={styles.year}>Year</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 100,
                      marginTop: 15,
                    }}>
                    <Text style={styles.year}>Operation</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 100,
                      marginTop: 15,
                    }}>
                    <Text style={styles.year}>Field</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      width: 330,
                      marginLeft: 100,
                      borderColor: '#B4B4B4',
                      borderRadius: 5,
                      borderWidth: 1,
                      marginTop: 30,
                      paddingBottom: 25,
                      height: 40,
                    }}>
                    <View>
                      <DropDown
                        name={'2018'}
                        defaultItem={'2018'}
                        value={'2018'}
                        data={this.state.year}
                        color={'#686868'}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: 330,
                      borderColor: '#B4B4B4',
                      borderRadius: 5,
                      borderWidth: 1,
                      marginTop: 30,
                      paddingBottom: 25,
                      height: 40,
                      marginLeft: 40,
                    }}>
                    <View>
                      <DropDown
                        name={'Deep Tilling'}
                        defaultItem={'Deep Tilling'}
                        value={'Deep Tilling'}
                        data={this.state.operation}
                        color={'#686868'}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: 330,
                      borderColor: '#B4B4B4',
                      borderRadius: 5,
                      borderWidth: 1,
                      marginTop: 30,
                      paddingBottom: 25,
                      height: 40,
                      marginLeft: 45,
                    }}>
                    <DropDown
                      name={'002'}
                      defaultItem={'002'}
                      value={'002'}
                      data={this.state.field}
                      color={'#686868'}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 370,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 100,
                      marginTop: 15,
                    }}>
                    <Text style={styles.year}>Date</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 126,
                      marginTop: 15,
                      marginRight: 10,
                    }}>
                    <Text style={styles.year}>Time</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 145,
                      marginTop: 15,
                    }}>
                    <Text style={styles.year}>Tractor</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <DatePicker
                    style={{
                      width: 330,
                      marginLeft: 100,
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
                      marginLeft: 40,
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
                        paddingLeft: 220,
                        height: 40,
                      },
                      dateText: {
                        color: '#686868',
                      },
                    }}
                    onDateChange={time => {
                      this.setState({time: time});
                    }}
                  />
                  <View
                    style={{
                      width: 330,
                      borderColor: '#B4B4B4',
                      borderRadius: 5,
                      borderWidth: 1,
                      marginTop: 15,
                      paddingBottom: 25,
                      height: 40,
                      marginLeft: 45,
                      color: '#686868',
                    }}>
                    <DropDown
                      name={'102-Case 7130 Tractor'}
                      defaultItem={'102-Case 7130 Tractor'}
                      value={'102-Case 7130 Tractor'}
                      data={this.state.tractor}
                      color={'#686868'}
                    />
                  </View>
                </View>
                <View style={{flexDirection: 'row', marginRight: 370}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 100,
                      marginTop: 15,
                    }}>
                    <Text style={styles.year}>Start Hours</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 280,
                      marginTop: 15,
                    }}>
                    <Text style={styles.year}>Implements</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <TextInput
                      value={this.state.value}
                      keyboardType={'numeric'}
                      placeholder={''}
                      style={{
                        height: 40,
                        borderColor: '#B4B4B4',
                        borderWidth: 1,
                        width: 330,
                        marginLeft: 100,
                        marginTop: 15,
                      }}
                      onChangeText={value => this.setState({value})}
                    />
                  </View>
                  <View
                    style={{
                      height: 40,
                      borderWidth: 1,
                      marginLeft: 45,
                      marginTop: 15,
                      borderColor: '#B4B4B4',
                      width: 700,
                      borderRightWidth: 1,
                      paddingBottom: 25,
                    }}>
                    <View>
                      <DropDown
                        name={'102-Case 7130 Tractor'}
                        defaultItem={''}
                        value={'102-Case 7130 Tractor'}
                        data={this.state.implements}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 40,
                    marginTop: 15,
                    borderRadius: 2,
                    borderWidth: 0.5,
                    backgroundColor: '#634720',
                    height: 40,
                    width: 100,
                  }}>
                  <Text style={styles.submit}>Submit</Text>
                </View>
              </View>
            ) : (
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      marginLeft: 100,
                      marginTop: 30,
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.identify}>
                      Identify Fields (Operator-Operation-Field-Year)
                    </Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                  <View
                    style={{
                      marginTop: 30,
                      flexDirection: 'row',
                      marginRight: 230,
                    }}>
                    <Text style={styles.identify}>Stop Date</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      width: 650,
                      borderColor: '#B4B4B4',
                      borderRadius: 5,
                      borderWidth: 1,
                      marginTop: 20,
                      paddingBottom: 30,
                      paddingLeft: 15,
                      height: 40,
                      marginLeft: 100,
                      marginRight: 45,
                    }}>
                    <DropDown
                      name={'Joe Huber-Row Marking-Kent 220-2019'}
                      defaultItem={'Joe Huber-Row Marking-Kent 220-2019'}
                      value={'Joe Huber-Row Marking-Kent 220-2019'}
                      data={this.state.identifyfields}
                    />
                  </View>
                  <View style>
                    <DatePicker
                      style={{
                        width: 220,
                        marginRight: 100,
                        marginTop: 25,
                        borderColor: '#B4B4B4',
                        color: '#686868',
                        borderRadius: 5,
                        fontSize: 40,
                        textAlign: 'flex-start',
                      }}
                      date={this.state.date}
                      mode="date"
                      placeholder="select date"
                      format="YYYY-MM-DD"
                      androidMode="default"
                      minDate="1900-01-01"
                      maxDate="2050-12-31"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      showIcon={false}
                      customStyles={{
                        dateInput: {
                          paddingRight: 100,
                          color: '#686868',
                          height: 40,
                          borderRadius: 2,
                          width: 220,
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
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      marginLeft: 100,
                      marginTop: 30,
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.identify}>Stop Time</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                  <View
                    style={{
                      marginTop: 30,
                      marginLeft: 330,
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.identify}>End Hours</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                  <View
                    style={{
                      marginTop: 30,
                      marginRight: 0,
                      flexDirection: 'row',
                      marginLeft: 333,
                    }}>
                    <Text style={styles.identify}>Prepared Hours</Text>
                    <Text style={{color: 'red'}}>*</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <DatePicker
                      style={{
                        width: 220,
                        marginTop: 20,
                        borderColor: '#B4B4B4',
                        marginLeft: 100,
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
                  <View style={{flexDirection: 'row'}}>
                    <TextInput
                      value={this.state.value}
                      keyboardType={'numeric'}
                      placeholder={''}
                      style={{
                        height: 40,
                        borderColor: '#B4B4B4',
                        borderWidth: 1,
                        width: 220,
                        marginLeft: 208,
                        marginTop: 20,
                        borderRightWidth: 0.8,
                        borderRadius: 2,
                      }}
                      onChangeText={value => this.setState({value})}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput
                      value={this.state.value}
                      keyboardType={'numeric'}
                      placeholder={''}
                      style={{
                        height: 40,
                        borderColor: '#B4B4B4',
                        borderWidth: 1,
                        width: 220,
                        marginLeft: 215,
                        marginTop: 15,
                        borderRightWidth: 0.8,
                        borderRadius: 2,
                      }}
                      onChangeText={value => this.setState({value})}
                    />
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 100,
                    marginTop: 20,
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.identify}>Usage Hours</Text>
                  <Text style={{color: 'red'}}>*</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    value={this.state.value}
                    keyboardType={'numeric'}
                    placeholder={''}
                    style={{
                      height: 40,
                      borderColor: '#B4B4B4',
                      borderWidth: 1,
                      width: 220,
                      marginLeft: 100,
                      marginTop: 15,
                      borderRadius: 2,
                    }}
                    onChangeText={value => this.setState({value})}
                  />
                  <View
                    style={{
                      alignSelf: 'flex-end',
                      marginRight: 205,
                      marginTop: 10,
                    }}>
                    <Image source={require('../assets/Submit.png')} />
                  </View>
                </View>
              </View>
            )}
          </View>
        )}
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
    marginLeft: 100,
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
  field: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 36,
    color: '#686868',
    marginLeft: 100,
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
    height:34,
    width: 82,
    textAlign: 'center',
    paddingTop:10
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
    height:34,
    width:82,
    color: '#634720',
    paddingTop:10,
    textAlign:'center',


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
  identify: {
    fontFamily: ' Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 20,
    color: '#686868',
  },
  submit: {
    fontFamily: ' Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 10,
  },
});
