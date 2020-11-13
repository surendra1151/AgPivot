import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Dimensions,
  TextInput, AsyncStorage,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {DropDown} from '../components/DropDownOne';
import DatePicker from 'react-native-datepicker';
import {SeedRecords} from '../components/SeedRecords';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationActions, StackActions} from 'react-navigation';

export default class SeedPlan extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      recordScreen: 'entry',
      year: ['2019', '2020'],
      field: ['Arena', 'Grand Marsh'],
      date: '2019-10-23',
      seed: [
        'Baginski',
        'Baginski & Sons',
        'Bula Potato Farms',
        'Bushman Riverside Ranch',
        'C.k Jespersen Farms',
        'Colorado-kist Farms',
        'Creekside Farms',
        'Creekside Potato Farms',
        'Hafner Seed Farms',
        'J.D.Miller Seed Farm',
        'Jorde Certified Seed.LLC',
        'Karren Farms',
        'Kroeker Farms',
        'Mahogany Creek Farms',
        'Norbest Farms',
        'Parkland/Pinery Farms',
        'Pinery Farms',
        'Real Potatoes',
        'Schroeder Bros',
        'Schroeder Bros(RPE)',
        'Salanum International,INC',
        'Sun Rain Varieties',
        'Trembling Prairie Farms',
        'West Edmonton Seed',
        'Potatoes',
      ],
      variety: ['Fingerling', 'Golden', 'Red', 'Russet', 'White'],
      color: [
        'Fingerling Little Giant',
        'Fingerling Red Cecile',
        'Fingerling Red Cersia',
      ],
      value: '',
      checked: 'Acres',
    };
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
    const {checked} = this.state;
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.home}>Home</Text>
            <Text style={styles.divison}>/</Text>
            <Text style={styles.edit}>Edit Profile</Text>
          </View>
          <Text style={styles.summary}>Summary</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.state.recordScreen === 'entry' ? (
            <Text style={styles.seed}>Seed Plan</Text>
          ) : (
            <Text style={styles.seed}>Seed Plan Table</Text>
          )}
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
        {this.state.recordScreen !== 'entry' ? (
          <SeedRecords />
        ) : (
          <View>
            <View style={{flexDirection: 'row', marginRight: 300}}>
              <View
                style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                <Text style={styles.crop}>Crop Year</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 30, marginLeft: 325}}>
                <Text style={styles.crop}>Field Location</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 30, marginLeft: 295}}>
                <Text style={styles.crop}>Planned Date</Text>
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
                <View>
                  <DropDown
                    name={'2019'}
                    defaultItem={'2019'}
                    value={'2019'}
                    data={this.state.year}
                    color={'#686868'}
                  />
                </View>
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
                <View>
                  <DropDown
                    name={'Arena'}
                    defaultItem={'Arena'}
                    value={'Arena'}
                    data={this.state.field}
                    color={'#686868'}
                  />
                </View>
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
            </View>
            <View style={{flexDirection: 'row', marginRight: 300}}>
              <View
                style={{marginLeft: 85, marginTop: 15, flexDirection: 'row'}}>
                <Text style={styles.crop}>Seed Grower</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 15, marginLeft: 305}}>
                <Text style={styles.crop}>Variety</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 15, marginLeft: 340}}>
                <Text style={styles.crop}>Color/Variety</Text>
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
                <View>
                  <DropDown
                    name={'Baginski'}
                    defaultItem={'Baginski'}
                    value={'Baginski'}
                    data={this.state.seed}
                    color={'#686868'}
                  />
                </View>
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
                <View>
                  <DropDown
                    name={'Fingerling'}
                    defaultItem={'Fingerling'}
                    value={'Fingerling'}
                    data={this.state.variety}
                    color={'#686868'}
                  />
                </View>
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
                <View>
                  <DropDown
                    name={'Fingerling Little Giant'}
                    defaultItem={'Fingerling Little Giant'}
                    value={'Fingerling Little Giant'}
                    data={this.state.color}
                    color={'#686868'}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginRight: 300}}>
              <View
                style={{marginLeft: 85, marginTop: 15, flexDirection: 'row'}}>
                <Text style={styles.crop}>Grower Country</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 15, marginLeft: 292}}>
                <Text style={styles.crop}>Grower State</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 15, marginLeft: 300}}>
                <Text style={styles.crop}>Grower City</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginLeft: 85, marginTop: 15}}>
                <Text style={styles.country}>USA</Text>
              </View>
              <View style={{marginLeft: 60, marginTop: 15}}>
                <Text style={styles.country}>ID</Text>
              </View>
              <View style={{marginLeft: 60, marginTop: 15}}>
                <Text style={styles.country}>Idaho Falls</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginRight: 300}}>
              <View
                style={{marginLeft: 85, marginTop: 15, flexDirection: 'row'}}>
                <Text style={styles.crop}>Speed Spacing(inches)</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 15, marginLeft: 240}}>
                <Text style={styles.crop}>Expected Cut Size(oz)</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 15, marginLeft: 247}}>
                <Text style={styles.crop}>Seeding Rate</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
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
                  width: 330,
                  marginLeft: 85,
                  marginTop: 15,
                  borderRadius: 5,
                }}
                onChangeText={value => this.setState({value})}
              />
              <TextInput
                value={this.state.value}
                keyboardType={'numeric'}
                placeholder={''}
                style={{
                  height: 40,
                  borderColor: '#B4B4B4',
                  borderWidth: 1,
                  width: 330,
                  marginLeft: 60,
                  marginTop: 15,
                  borderRadius: 5,
                }}
                onChangeText={value => this.setState({value})}
              />
              <TextInput
                value={this.state.value}
                keyboardType={'numeric'}
                placeholder={''}
                style={{
                  height: 40,
                  borderColor: '#B4B4B4',
                  borderWidth: 1,
                  width: 330,
                  marginLeft: 60,
                  marginTop: 15,
                  borderRadius: 5,
                }}
                onChangeText={value => this.setState({value})}
              />
            </View>
            <View style={{flexDirection: 'row', marginRight: 300}}>
              <View
                style={{marginLeft: 85, marginTop: 15, flexDirection: 'row'}}>
                <Text style={styles.crop}>Estimated Project</Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              {this.state.checked === 'Acres' ? (
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginLeft: 273,
                  }}>
                  <Text style={styles.crop}>Planned CWT</Text>
                  <Text style={{color: 'red'}}>*</Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginLeft: 273,
                  }}>
                  <Text style={styles.crop}>Planned Acres</Text>
                  <Text style={{color: 'red'}}>*</Text>
                </View>
              )}
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginTop: 3, marginLeft: 90, size: 1}}>
                  <RadioButton
                    value="Acres"
                    color={'#686868'}
                    status={checked === 'Acres' ? 'checked' : 'unchecked'}
                    onPress={() => {
                      this.setState({checked: 'Acres'});
                    }}
                  />
                </View>
                <Text style={styles.acres}>Acres</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginTop: 3, marginLeft: 10}}>
                  <RadioButton
                    value="CWT"
                    color={'#686868'}
                    status={checked === 'CWT' ? 'checked' : 'unchecked'}
                    onPress={() => {
                      this.setState({checked: 'CWT'});
                    }}
                  />
                </View>
                <Text style={styles.acres}>CWT</Text>
              </View>
              {this.state.checked === 'Acres' ? (
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    value={this.state.value}
                    keyboardType={'numeric'}
                    placeholder={''}
                    style={{
                      height: 40,
                      borderColor: '#B4B4B4',
                      borderWidth: 1,
                      width: 330,
                      marginLeft: 240,
                      marginTop: 15,
                      borderRadius: 5,
                    }}
                    onChangeText={value => this.setState({value})}
                  />
                  <View style={{marginLeft: 285, marginTop: 15}}>
                    <Image source={require('../assets/Submit.png')} />
                  </View>
                </View>
              ) : (
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    value={this.state.value}
                    keyboardType={'numeric'}
                    placeholder={''}
                    style={{
                      height: 40,
                      borderColor: '#B4B4B4',
                      borderWidth: 1,
                      width: 400,
                      marginLeft: 240,
                      marginTop: 15,
                      borderRadius: 5,
                    }}
                    onChangeText={value => this.setState({value})}
                  />
                  <View style={{marginLeft: 215, marginTop: 15}}>
                    <Image source={require('../assets/Submit.png')} />
                  </View>
                </View>
              )}
            </View>
            {this.state.checked === 'Acres' ? (
              <Text style={styles.projected}>Projected acres in Acres</Text>
            ) : (
              <Text style={styles.projectedc}>Projected CWT is</Text>
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
  crop: {
    fontFamily: ' Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#686868',
  },
  country: {
    fontFamily: ' Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#686868',
    borderWidth: 1,
    height: 40,
    width: 330,
    borderColor: '#B4B4B4',
    borderRadius: 5,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: '#e9ecef',
  },
  acres: {
    fontFamily: ' Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#686868',
    marginTop: 10,
  },
  projected: {
    fontFamily: ' Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: '#686868',
    alignSelf: 'center',
    marginRight: 180,
    marginTop: 15,
  },
  projectedc: {
    fontFamily: ' Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: '#686868',
    alignSelf: 'center',
    marginRight: 200,
    marginTop: 15,
  },
});
