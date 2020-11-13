import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Dimensions,
    AsyncStorage
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationActions,StackActions} from "react-navigation";

const {width, height} = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      button: 'addMostUsed',
      mostUsed: [],
    };
  }
  /* checking condition  addmost or save or edit */

  addMostUsed(name) {
    if (this.state.mostUsed.length === 0) {
      if (name === 'addMostUsed') {
        this.setState({
          button: 'save',
        });
      } else if (name === 'Save') {
        this.setState({
          button: 'Edit',

        });
      } else if (name === 'Edit') {
        this.setState({button: 'addMostUsed'});
      }
    }
    else {
      if (name === 'addMostUsed') {
        this.setState({
          button: 'save',
        });
      } else if (name === 'Save') {
        this.setState({
          button: 'Edit',

        });
      } else if (name === 'Edit') {
        this.setState({button: 'save'});
      }
    }
    // const most_used = this.state.mostused;
    // most_used.push('Seed Plan');
    // this.setState({mostUsed: most_used});
  }
   /*  checking length  of circle images  and pushing  elements
   1)assuming inital length  and most used as empty  it checks the condtion and if length is less than 5 and pushes the modules to circle images
    we select
    2)update the state and storing in async storage  with how many modules selected
    3)if the condition false then show a alert message
    */
  mostUsed(name) {
    let length = this.state.mostUsed.length;
    if (length < 5) {
      const most_used = this.state.mostUsed;
      most_used.push(name);
      this.setState({mostUsed: most_used});
      AsyncStorage.setItem('mostUsed', JSON.stringify(most_used));
        AsyncStorage.getItem('mostUsed').then((value)  =>{
        })
    } else {
      Alert.alert('Please delete Some most used elements to update');
    }
    // const index = this.state.mostUsed.indexOf(name);
    // this.state.mostUsed.slice(index, 1);
  }
   /*  displaying elements in circles
     1)checking the length of mostused if it is not more than in 5
     2)checking the condtion for each modules
      3)displaying the modules we are selecting
   */
  printElements(index) {
    if (this.state.mostUsed[index] === 'Seed Plan') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedPlan')}>
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Seedplan.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={[styles.leaf]}>Seed Plan</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Field Preparation') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('Field Preparation')}>
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Fieldpreparation.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Field Preparation</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Seed Cutting') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedCutting')}>
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Fieldpreparation.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Seed CUtting</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Seed Hauling') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedHauling')}>
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Seedhauling.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Seed Hauling</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Yield Sampling') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedPlan')}>
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Yieldsampling.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Yield Sampling</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Fertigation') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedPlan')}>
        <View style={{width: width / 10, height: 40}}>
          <Image source={require('../assets/Ferti.png')} style={styles.newc} />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Fertigation</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Vine Desiccation') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedPlan')}>
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Vinedessication.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Vine Desiccation</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Harvest') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('Harvest')}>
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Harvestimage.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Harvest</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Planting') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedPlan')}>
        <View style={{width: width / 10, height: 40}}>
          <Image source={require('../assets/Plant.png')} style={styles.newc} />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Planting</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Planting Plan') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedPlan')}>
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Plantingplan.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Planting Plan</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Hilling') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedPlan')}>
        <View style={{width: width / 10, height: 40}}>
          <Image source={require('../assets/Hill.png')} style={styles.newc} />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Hilling</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Harvest Sampling') {
      return (
          <TouchableHighlight >
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Harvestsampling.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Harvest Sampling</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Shipping / Storage') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedPlan')}>
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Storage.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Shipping / Storage</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Line Management') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedPlan')}>
        <View style={{width: width / 10, height: 40}}>
          <Image
            source={require('../assets/Linemanagement.png')}
            style={styles.newc}
          />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Line Management</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    } else if (this.state.mostUsed[index] === 'Fumigation Plan') {
      return (
          <TouchableHighlight onPress={() =>this.openEntries('SeedPlan')}>
        <View style={{width: width / 10, height: 40}}>
          <Image source={require('../assets/Fumi.png')} style={styles.newc} />
          <View style={{right: 40}}>
            <Text style={styles.leaf}>Fumigation Plan</Text>
          </View>
        </View>
          </TouchableHighlight>
      );
    }
  }
   /*  deleting elements from circles
      1)taking the state to an variable
      2)deleting the items  that  we are selecting modules and updating the state
      3) storing the data in async storage
   */
  delete(name) {
    let index = this.state.mostUsed.indexOf(name);
    let array_of_most_used = this.state.mostUsed;
    array_of_most_used.splice(index, 1);
    this.setState({
      mostUsed: array_of_most_used,
    });
    AsyncStorage.setItem('mostUsed', JSON.stringify(array_of_most_used))
  }
   /*  navigating to another modules
     checking the condtion to which screen we need to navigate */
  openEntries(name) {
    if (name === 'Field Preparation') {
      this.props.navigation.navigate('Field');
    } else if (name === 'SupportPage') {
      this.props.navigation.navigate('SupportPage');
    } else if (name === 'SeedPlan') {
      this.props.navigation.navigate('SeedPlan');
    } else if (name === 'SeedCutting') {
      this.props.navigation.navigate('SeedCutting');
    } else if (name === 'Harvest') {
      this.props.navigation.navigate('Harvest');
    } else if (name==='SeedHauling'){
        this.props.navigation.navigate('SeedHauling');
    }
    else if (name ==='YieldSampling'){
      this.props.navigation.navigate('YieldSampling');
    }
    else if (name ==='Fertigation'){
      this.props.navigation.navigate('Fertigation');
    }
    else if (name ==='VineDesiccation'){
      this.props.navigation.navigate('VineDesiccation');
    }
    else if (name ==='Planting'){
      this.props.navigation.navigate('Planting');
    }
    else if (name ==='PlantingPlan'){
      this.props.navigation.navigate('PlantingPlan');
    }
    else if (name ==='Hilling'){
      this.props.navigation.navigate('Hilling');
    }
    else if (name ==='HarvestSampling'){
      this.props.navigation.navigate('HarvestSampling');
    }
    else if (name ==='Shipping'){
      this.props.navigation.navigate('Shipping');
    }
    else if (name ==='LineManagement'){
      this.props.navigation.navigate('LineManagement');
    }
    else if (name ==='FumigationPlan'){
      this.props.navigation.navigate('FumigationPlan');
    }
    else if (name==='agpivot'){
      this.props.navigation.navigate('HomeScreen')
    }





  }
   /* getting the values from async storage and saving and displaying the modules we saved after closing the app also */
    componentWillMount(){
     AsyncStorage.getItem('mostUsed').then((value)  =>{
         if (value === null){
         }
         else {
             this.setState({mostUsed: JSON.parse(value)});
         }
     })
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
            <TouchableHighlight onPress={() =>this.openEntries('agpivot')}>
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
          <TouchableHighlight onPress={() => this.openEntries('SupportPage')}>
            <Text
              style={{
                borderWidth: 0.5,
                height: 20,
                borderColor: 'black',
                marginRight: 20,
                marginTop: 15,
              }}>
              {' '}
              supportPage
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {this.state.button !== 'save' ? (
            <View>
              {this.state.mostUsed[0] === undefined ? (
                <View style={styles.add}>
                  <Image
                    source={require('../assets/Add.png')}
                    style={styles.circle}
                  />
                </View>
              ) : (
                <View
                  style={{
                    borderRadius: 50,
                    width: 45,
                    marginLeft: 136,
                    marginTop: 40,
                  }}>
                  {this.printElements(0)}
                </View>
              )}
            </View>
          ) : (
            <View style={styles.plus}>
              {this.state.mostUsed[0] === undefined ? (
                <Image
                  source={require('../assets/Circle.png')}
                  style={styles.round}
                />
              ) : (
                <View>{this.printElements(0)}</View>
              )}
            </View>
          )}
          {this.state.button !== 'save' ? (
            <View>
              {this.state.mostUsed[1] === undefined ? (
                <View style={styles.add}>
                  <Image
                    source={require('../assets/Add.png')}
                    style={styles.circle}
                  />
                </View>
              ) : (
                <View
                  style={{
                    borderRadius: 50,
                    width: 45,
                    marginLeft: 136,
                    marginTop: 40,
                  }}>
                  {this.printElements(1)}
                </View>
              )}
            </View>
          ) : (
            <View style={styles.plus}>
              {this.state.mostUsed[1] === undefined ? (
                <Image
                  source={require('../assets/Circle.png')}
                  style={styles.round}
                />
              ) : (
                <View>{this.printElements(1)}</View>
              )}
            </View>
          )}
          {this.state.button !== 'save' ? (
            <View>
              {this.state.mostUsed[2] === undefined ? (
                <View style={styles.add}>
                  <Image
                    source={require('../assets/Add.png')}
                    style={styles.circle}
                  />
                </View>
              ) : (
                <View
                  style={{
                    borderRadius: 50,
                    width: 45,
                    marginLeft: 136,
                    marginTop: 40,
                  }}>
                  {this.printElements(2)}
                </View>
              )}
            </View>
          ) : (
            <View style={styles.plus}>
              {this.state.mostUsed[2] === undefined ? (
                <Image
                  source={require('../assets/Circle.png')}
                  style={styles.round}
                />
              ) : (
                <View>{this.printElements(2)}</View>
              )}
            </View>
          )}
          {this.state.button !== 'save' ? (
            <View>
              {this.state.mostUsed[3] === undefined ? (
                <View style={styles.add}>
                  <Image
                    source={require('../assets/Add.png')}
                    style={styles.circle}
                  />
                </View>
              ) : (
                <View
                  style={{
                    borderRadius: 50,
                    width: 45,
                    marginLeft: 136,
                    marginTop: 40,
                  }}>
                  {this.printElements(3)}
                </View>
              )}
            </View>
          ) : (
            <View style={styles.plus}>
              {this.state.mostUsed[3] === undefined ? (
                <Image
                  source={require('../assets/Circle.png')}
                  style={styles.round}
                />
              ) : (
                <View>{this.printElements(3)}</View>
              )}
            </View>
          )}
          {this.state.button !== 'save' ? (
            <View>
              {this.state.mostUsed[4] === undefined ? (
                <View style={styles.add}>
                  <Image
                    source={require('../assets/Add.png')}
                    style={styles.circle}
                  />
                </View>
              ) : (
                <View
                  style={{
                    borderRadius: 50,
                    width: 45,
                    marginLeft: 136,
                    marginTop: 40,
                  }}>
                  {this.printElements(4)}
                </View>
              )}
            </View>
          ) : (
            <View style={styles.plus}>
              {this.state.mostUsed[4] === undefined ? (
                <Image
                  source={require('../assets/Circle.png')}
                  style={styles.round}
                />
              ) : (
                <View style={{height: 45}}>{this.printElements(4)}</View>
              )}
            </View>
          )}
          {this.state.mostUsed.length === 0 ?
          <View>
          {this.state.button === 'addMostUsed' ? (
            <TouchableHighlight onPress={() => this.addMostUsed('addMostUsed')}>
              <Text style={styles.most}>Add Most Used</Text>
            </TouchableHighlight>
          ) : (
            <View>
              {this.state.button === 'save' ? (
                <TouchableHighlight onPress={() => this.addMostUsed('Save')}>
                  <Text style={styles.style}> Save</Text>
                </TouchableHighlight>
              ) : (
                <TouchableHighlight onPress={() => this.addMostUsed('Edit')}>
                  <View style={styles.used}>
                    <Image source={require('../assets/Edit.png')} />
                  </View>
                </TouchableHighlight>
              )}
            </View>
          )}
          </View>:
          <View>
            {this.state.button === 'Edit' || this.state.button ==='addMostUsed' ?
                <View>
                <TouchableHighlight onPress={() => this.addMostUsed('Edit')}>
                  <View style={styles.used}>
                    <Image source={require('../assets/Edit.png')}/>
                  </View>
                </TouchableHighlight>
                </View>:
                <View>
                <TouchableHighlight onPress={() => this.addMostUsed('Save')}>
                  <Text style={styles.style}> Save</Text>
                </TouchableHighlight>
                </View>
            }
          </View>
          }
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#CCCBCB',
            height: 0,
            marginTop: 50,
            marginLeft: 85,
            marginRight: 80,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              height: 350,
              borderWidth: 0.8,
              borderRadius: 4,
              marginTop: 50,
              marginLeft: 85,
              marginRight: 81,
            }}>
            <LinearGradient
              start={{x: 0.5, y: 0}}
              end={{x: 2, y: 0}}
              colors={['#634720', '#C99349']}>
              <View>
                <Text style={styles.seed}>Seed</Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 15,
                  }}
                />
              </View>
            </LinearGradient>
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight
                  onPress={() => this.openEntries('SeedPlan')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingLeft: 20,
                      paddingTop: 14,
                      paddingBottom: 5,
                    }}>
                    <Image source={require('../assets/Seed.png')} />
                    <Text style={styles.seedplan}>Seed plan</Text>
                  </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 4,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight
                  onPress={() => this.openEntries('SeedPlan')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingLeft: 20,
                      paddingTop: 14,
                      paddingBottom: 5,
                    }}>
                    <Image source={require('../assets/Seed.png')} />
                    <Text style={styles.seedplan}>Seed plan</Text>
                  </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Seed Plan') ? (
                  <TouchableHighlight onPress={() => this.delete('Seed Plan')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Seed Plan')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight
                  onPress={() => this.openEntries('Field Preparation')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingLeft: 20,
                      paddingTop: 14,
                    }}>
                    <Image source={require('../assets/sign.png')} />
                    <Text style={styles.seedplan}>Field preparation</Text>
                  </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 4,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight
                  onPress={() => this.openEntries('Field Preparation')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingLeft: 20,
                      paddingTop: 14,
                      paddingBottom: 5,
                    }}>
                    <Image source={require('../assets/sign.png')} />
                    <Text style={styles.seedplan}>Field preparation</Text>
                  </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Field Preparation') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Field Preparation')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Field Preparation')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight
                  onPress={() => this.openEntries('SeedCutting')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingLeft: 20,
                      paddingTop: 14,
                    }}>
                    <Image source={require('../assets/Cut.png')} />
                    <Text style={styles.seedplan}>Seed Cutting</Text>
                  </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 4,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight onPress={() =>this.openEntries('SeedCutting')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Cut.png')} />
                  <Text style={styles.seedplan}>Seed Cutting</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Seed Cutting') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Seed Cutting')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Seed Cutting')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                  <TouchableHighlight onPress={() =>this.openEntries('SeedHauling')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/Vector.png')} />
                  <Text style={styles.seedplan}>Seed Hauling</Text>
                </View>
                  </TouchableHighlight>
              </View>
            ) : (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableHighlight onPress={() =>this.openEntries('SeedHauling')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Vector.png')} />
                  <Text style={styles.seedplan}>Seed Hauling</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Seed Hauling') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Seed Hauling')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Seed Hauling')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              height: 350,
              borderWidth: 0.8,
              borderRadius: 4,
              marginTop: 50,
              marginRight: 100,
              marginLeft: 20,
            }}>
            <LinearGradient
              start={{x: 0.5, y: 0}}
              end={{x: 2, y: 0}}
              colors={['#634720', '#C99349']}>
              <View>
                <Text style={styles.seed}>Production</Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 15,
                  }}
                />
              </View>
            </LinearGradient>
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight onPress={() =>this.openEntries('YieldSampling')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/Yield.png')} />
                  <Text style={styles.seedplan}>Yeild Sampling</Text>
                </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 3,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight onPress={() =>this.openEntries('YeildSampling')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Yield.png')} />
                  <Text style={styles.seedplan}>Yield Sampling</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Yield Sampling') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Yield Sampling')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 30}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Yield Sampling')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight onPress={() =>this.openEntries('Fertigation')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/Fertigation.png')} />
                  <Text style={styles.seedplan}>Fertigation</Text>
                </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 3,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight onPress={() =>this.openEntries('Fertigation')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Fertigation.png')} />
                  <Text style={styles.seedplan}>Fertigation</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Fertigation') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Fertigation')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Fertigation')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight onPress={() =>this.openEntries('VineDesiccation')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/sign.png')} />
                  <Text style={styles.seedplan}>Vine Desiccation</Text>
                </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 3,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight onPress={() =>this.openEntries('VineDesiccation')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/sign.png')} />
                  <Text style={styles.seedplan}>Vine Desiccation</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Vine Desiccation') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Vine Desiccation')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Vine Desiccation')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight onPress={() => this.openEntries('Harvest')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/Harvest.png')} />
                  <Text style={styles.seedplan}>Harvest</Text>
                </View>
                  </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 3,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight onPress={() =>this.openEntries('Harvest')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Harvest.png')} />
                  <Text style={styles.seedplan}>Harvest</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Harvest') ? (
                  <TouchableHighlight onPress={() => this.delete('Harvest')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight onPress={() => this.mostUsed('Harvest')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight onPress={() =>this.openEntries('Planting')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/Planting.png')} />
                  <Text style={styles.seedplan}>Planting</Text>
                </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 3,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight onPress={() =>this.openEntries('Planting')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Planting.png')} />
                  <Text style={styles.seedplan}>Planting</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Planting') ? (
                  <TouchableHighlight onPress={() => this.delete('Planting')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight onPress={() => this.mostUsed('Planting')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight onPress={() =>this.openEntries('PlantingPlan')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/Plan.png')} />
                  <Text style={styles.seedplan}>Planting Plan</Text>
                </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 3,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight onPress={() =>this.openEntries('PlantingPlan')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Plan.png')} />
                  <Text style={styles.seedplan}>Planting Plan</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Planting Plan') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Planting Plan')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Planting Plan')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight onPress={() =>this.openEntries('Hilling')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 7,
                  }}>
                  <Image source={require('../assets/Hilling.png')} />
                  <Text style={styles.seedplan}>Hilling</Text>
                </View>
                </TouchableHighlight>
              </View>
            ) : (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableHighlight onPress={() =>this.openEntries('Hilling')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Hilling.png')} />
                  <Text style={styles.seedplan}>Hilling</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Hilling') ? (
                  <TouchableHighlight onPress={() => this.delete('Hilling')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 35}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight onPress={() => this.mostUsed('Hilling')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 35}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              height: 350,
              borderWidth: 0.8,
              borderRadius: 4,
              marginTop: 50,
              marginRight: 80.5,
            }}>
            <LinearGradient
              start={{x: 0.5, y: 0}}
              end={{x: 2, y: 0}}
              colors={['#634720', '#C99349']}>
              <View>
                <Text style={styles.seed}>Post-Harvest</Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 15,
                  }}
                />
              </View>
            </LinearGradient>
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight  onPress={() =>this.openEntries('HarvestSampling')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/Sampling.png')} />
                  <Text style={styles.seedplan}>Harvest Sampling</Text>
                </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 4,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight onPress={() =>this.openEntries('HarvestSampling')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Sampling.png')} />
                  <Text style={styles.seedplan}> Harvest Sampling</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Harvest Sampling') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Harvest Sampling')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Harvest Sampling')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}

            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight onPress={() => this.openEntries('Shipping')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/Shipping.png')} />
                  <Text style={styles.seedplan}>Shipping/Storage</Text>
                </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 4,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight onPress={() => this.openEntries('Shipping')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Shipping.png')} />
                  <Text style={styles.seedplan}>Shipping / Storage</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Shipping / Storage') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Shipping / Storage')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Shipping / Storage')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight onPress={() =>this.openEntries('LineManagement')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/Line.png')} />
                  <Text style={styles.seedplan}>Line Management</Text>
                </View>
                </TouchableHighlight>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#CCCBCB',
                    height: 10,
                    marginTop: 4,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#CCCBCB',
                }}>
                <TouchableHighlight onPress={() =>this.openEntries('LineManagement')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Line.png')} />
                  <Text style={styles.seedplan}>Line Management</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Line Management') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Line Management')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Line Management')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
            {this.state.button !== 'save' ? (
              <View>
                <TouchableHighlight onPress={() =>this.openEntries('FumigationPlan')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                  }}>
                  <Image source={require('../assets/Fumigation.png')} />
                  <Text style={styles.seedplan}>Fumigation Plan</Text>
                </View>
                </TouchableHighlight>
              </View>
            ) : (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableHighlight onPress={() =>this.openEntries('FumigationPlan')}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 5,
                  }}>
                  <Image source={require('../assets/Fumigation.png')} />
                  <Text style={styles.seedplan}>Fumigation Plan</Text>
                </View>
                </TouchableHighlight>
                {this.state.mostUsed.includes('Fumigation Plan') ? (
                  <TouchableHighlight
                    onPress={() => this.delete('Fumigation Plan')}>
                    <View>
                      <Image
                        source={require('../assets/Minus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    onPress={() => this.mostUsed('Fumigation Plan')}>
                    <View>
                      <Image
                        source={require('../assets/Addplus.png')}
                        style={{height: 40}}
                      />
                      <View
                        style={{borderBottomWidth: 1, borderColor: '#CCCBCB'}}
                      />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            )}
          </View>
        </View>
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
  add: {
    backgroundColor: '#ECECEC',
    borderRadius: 50,
    padding: 10,
    width: 46,
    marginLeft: 85,
    marginTop: 40,
  },
  circle: {
    padding: 10,
    width: 26,
    height: 26,
  },
  most: {
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginRight: 80,
    marginTop: 54,
    padding: 6,
    backgroundColor: '#634720',
    borderRadius: 2,
  },
  style: {
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginRight: 80,
    marginTop: 54,
    padding: 6,
    backgroundColor: '#634720',
    borderRadius: 2,
    paddingLeft: 30,
    paddingRight: 30,
  },
  used: {
    marginRight: 80,
    marginTop: 42,
    padding: 6,
    backgroundColor: '#FFFFFF',
  },
  seed: {
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    marginLeft: 20,
    marginTop: 20,
    color: '#FFFFFF',
  },
  seedplan: {
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 9,
    color: '#634720',
  },
  plus: {
    width: 46,
    marginLeft: 85,
    marginTop: 40,
  },
  round: {
    width: 45.2,
    height: 45,
  },
  leaf: {
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 21,
    color: '#29342E',
    textAlign: 'center',
  },
  newc: {
    height: 45,
    width: 45,
  },
});
