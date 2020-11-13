/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  ActivityIndicator,
  Image,
  AsyncStorage,
  YellowBox,
  TouchableOpacity,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import {baseUrl} from '../constants/BaseUrl';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-spinkit';
import Orientation from 'react-native-orientation';
// import { height, width} from '../constants/constant';

const {width, height} = Dimensions.get('window');

console.disableYellowBox = true;

type Props = {};
export default class Login extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
      isShowPassword: false,
      width: width,
      height: height,
      isScreenLoading: true,
      post_data: '',
      day_summary: '',
      isLoading: false,
      most_used: '',
    };
    this.Login = this.Login.bind(this);
  }

  componentWillMount() {
    const initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      // this.setState({
      //     width: this.state.height,
      //     height: this.state.width,
      // })
      // do something
      this.setState({
        width: height,
        height: width,
      });
      alert('working',this.state.most_used)
    } else {
      // do something else
    }
  }

  componentDidMount() {
    this.mounted = true;
    // this locks the view to Portrait Mode
    // Orientation.lockToPortrait();

    // this locks the view to Landscape Mode
    Orientation.lockToLandscape();

    // this unlocks any previous locks to all Orientations
    // Orientation.unlockAllOrientations();

    Orientation.addOrientationListener(this._orientationDidChange);

    setTimeout(() => {
      this.setTimePassed();
    }, 4000);
    setTimeout(() => {
      this.CheckLoginInformation();
    }, 3000);
    this.setTimePassed = this.setTimePassed.bind(this);
    this.CheckLoginInformation = this.CheckLoginInformation.bind(this);
  }

  setTimePassed() {
    this.setState({isScreenLoading: false});
  }

  CheckLoginInformation() {
    AsyncStorage.getItem('loginCredentials').then(value => {
      // Update State
      this.setState({
        storage_data: JSON.parse(value),
      });
      if (this.state.storage_data !== null) {
        this.props.navigation.replace('TabNav');
      } else {
      }
    });
  }

  _orientationDidChange = orientation => {
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout
    } else {
      // do something with portrait layout
    }
  };

  componentWillUnmount() {
    (this.mounted = false),
      Orientation.getOrientation((err, orientation) => {
        console.log(`Current Device Orientation: ${orientation}`);
      });

    // Remember to remove listener
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  Login() {
    this.setState({
      isLoading: true,
    });
    fetch(baseUrl + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.error !== true) {
          this.setState({
            isLoading: false,
          });
          AsyncStorage.setItem(
            'loginCredentials',
            JSON.stringify(responseJson),
          );
        //  Alert.alert('token is:', responseJson.token);
          fetch(baseUrl + '/harvest-data', {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + responseJson.token,
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(responseJson => {
              if (responseJson.error !== true) {
                AsyncStorage.setItem(
                  'harvestInfo',
                  JSON.stringify(responseJson),
                );
                AsyncStorage.setItem('postDataInfo', this.state.post_data);
                AsyncStorage.setItem('SummaryData', this.state.day_summary);
                AsyncStorage.setItem('mostUsed', this.state.most_used);
                this.props.navigation.replace('TabNav');
              } else {
                alert('Invalid Credentials!');
                this.setState({
                  isError: true,
                  isLogin: false,
                  isLoading: false,
                });
                return responseJson;
              }
            })
            .catch(error => {
              console.error(error);
            });
          this.props.navigation.replace('TabNav');
        } else {
          alert('Invalid Credentials!');
          this.setState({
            isError: true,
            isLogin: false,
          });
          return responseJson;
        }
      })
      .catch(error => {
        console.error(error);
      });
    this.props.navigation.replace('TabNav');
  }

  showForgotPasswordPage() {}

  render() {
    return (
      <KeyboardAwareScrollView>
        {this.state.isScreenLoading ? (
          <ScrollView>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                flexGrow: 1,
                zIndex: 2,
                height: this.state.height,
              }}>
              <Image
                source={require('../assets/AgPivot.png')}
                style={{
                  width: 300,
                  height: 100,
                  alignItems: 'center',
                  marginTop: 50,
                  marginLeft: 0.38 * Dimensions.get('window').width,
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 0.2 * this.state.height,
                  flex: 1,
                }}>
                <Spinner size={100} type={'ThreeBounce'} color={'#634720'} />
              </View>
            </View>
          </ScrollView>
        ) : (
          <View>
            {this.state.isLoading ? (
              <View style={{flex: 1, zIndex: 1}}>
                <Modal style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Spinner size={100} type={'ThreeBounce'} color={'#634720'} />
                </Modal>
              </View>
            ) : (
              <View />
            )}
            <View style={{flex: 1, zIndex: -1}}>
              <View style={{zIndex: -1, flex: 1}}>
                <Image
                  source={require('../assets/LoginBG.png')}
                  style={{width: this.state.width, height: this.state.height}}
                />
              </View>
              <View style={styles.content}>
                <Image
                  source={require('../assets/WelcomeMessage.png')}
                  style={{width: 403, height: 53}}
                />
                <Text style={[{top: 30}, styles.user_pass_text]}>Username</Text>
                <TextInput
                  style={[{width: 0.25 * this.state.width}, styles.text_input]}
                  placeholderTextColor="#A7A7A7"
                  value={this.state.username}
                  onChangeText={username => this.setState({username: username})}
                  editable={true}
                  autoCapitalize="none"
                  maxLength={10000}
                />
                <Text style={[{top: 12}, styles.user_pass_text]}>Password</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({isShowPassword: !this.state.isShowPassword})
                  }
                  style={{
                    zIndex: 10000,
                    marginLeft: 0.2 * this.state.width,
                    top: 2,
                  }}>
                  <Image
                    source={require('../assets/ShowPassword.png')}
                    style={{width: 31, height: 17}}
                  />
                </TouchableOpacity>
                {this.state.isShowPassword ? (
                  <TextInput
                    style={[
                      {
                        bottom: 37,
                        borderTopWidth: 0,
                        width: 0.25 * this.state.width,
                      },
                      styles.text_input,
                    ]}
                    placeholderTextColor="#A7A7A7"
                    secureTextEntry={false}
                    value={this.state.password}
                    onChangeText={password =>
                      this.setState({password: password})
                    }
                    editable={true}
                    autoCapitalize="none"
                    maxLength={10000}
                  />
                ) : (
                  <TextInput
                    style={[
                      {
                        bottom: 37,
                        borderTopWidth: 0,
                        width: 0.25 * this.state.width,
                      },
                      styles.text_input,
                    ]}
                    placeholderTextColor="#A7A7A7"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password =>
                      this.setState({password: password})
                    }
                    editable={true}
                    autoCapitalize="none"
                    maxLength={10000}
                  />
                )}
                {/*<View style={[{bottom: 10}, styles.remember_text_container]}>*/}
                {/*    <View style={styles.remember_text_container}>*/}
                {/*        <TouchableOpacity onPress={() => {*/}
                {/*            this.setState({rememberMe: !this.state.rememberMe})*/}
                {/*        }}>*/}
                {/*            {this.state.rememberMe ?*/}
                {/*                <Image source={require('../assets/RememberMeShow.png')}*/}
                {/*                       style={{width: 16}}/> :*/}
                {/*                <Image source={require('../assets/RememberMeHide.png')}*/}
                {/*                       style={{width: 16}}/>*/}
                {/*            }*/}
                {/*        </TouchableOpacity>*/}
                {/*        <Text style={[{marginLeft: 5}, styles.remember_text]}>*/}
                {/*            Remember me*/}
                {/*        </Text>*/}
                {/*    </View>*/}
                {/*    <View style={{marginLeft: 0.096 * this.state.width}}>*/}
                {/*        <TouchableOpacity onPress={() => this.showForgotPasswordPage()}>*/}
                {/*            <Text style={styles.remember_text}>*/}
                {/*                Forgot Password?*/}
                {/*            </Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*    </View>*/}
                {/*</View>*/}
                <LinearGradient
                  start={{x: 0.5, y: 0}}
                  end={{x: 2, y: 0}}
                  colors={['#634720', '#C99349']}
                  style={{width: 136, height: 36, marginTop: 25}}>
                  <TouchableOpacity
                    onPress={() => this.Login()}
                    style={{width: 136, height: 36}}>
                    <View
                      style={{
                        borderRadius: 2,
                        width: 136,
                        height: 36,
                        paddingTop: 7,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          fontSize: 12,
                          lineHeight: 18,
                          fontWeight: 'bold',
                        }}>
                        Login
                      </Text>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
                <View style={{marginTop: 0.3 * this.state.height}}>
                  <View style={{marginTop: 30, flexDirection: 'row'}}>
                    <Image
                      source={require('../assets/AgPivot.png')}
                      style={{width: 173, marginRight: 15}}
                    />
                    <Text
                      style={{
                        color: '#A7A7A7',
                        lineHeight: 20,
                        fontSize: 12,
                        fontFamily: 'Poppins',
                        top: 35,
                        marginRight: 5,
                      }}>
                      Powered by
                    </Text>
                    <Image
                      source={require('../assets/Agrometrics_name.png')}
                      style={{top: 38, width: 130, height: 16}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 80,
    marginLeft: 50,
    zIndex: 100000,
    position: 'absolute',
  },
  user_pass_text: {
    color: '#A7A7A7',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    left: 20,
    zIndex: 10000,
  },
  text_input: {
    paddingTop: 25,
    height: 58,
    borderColor: '#A7A7A7',
    borderWidth: 1,
    fontSize: 14,
    paddingLeft: 20,
    color: 'black',
    lineHeight: 21,
    borderRadius: 2,
    textAlign: 'left',
    backgroundColor: 'white',
    fontFamily: 'Poppins',
  },
  remember_text_container: {
    flexDirection: 'row',
  },
  remember_text: {
    fontSize: 12,
    lineHeight: 18,
    color: '#454545',
    fontFamily: 'Poppins',
  },
});
