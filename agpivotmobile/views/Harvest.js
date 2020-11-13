import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Image,
    AsyncStorage,
    Dimensions,
    TextInput, ScrollView,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Modal from 'react-native-modal';
import LinearGradient from "react-native-linear-gradient";
import {NavigationActions, StackActions} from 'react-navigation';
import {baseUrl} from '../constants/BaseUrl';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('window');

export default class Harvest extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isDisplayLogout: false,
            user_credentials: '',
            harvest_info: '',
            showUpdateButton: false,
            post_data_harvest: '',
            length: 0,
            prev_length: 0,
            net_info: false,
            width: width,
            height: height,
            isUpdate: false,
        };
        this.showArenaHarvesters = this.showArenaHarvesters.bind(this);
        this.profile = this.profile.bind(this);
        this.about = this.about.bind(this);
        this.updateBackend = this.updateBackend.bind(this);
        this.checkNetInfo = this.checkNetInfo.bind(this);
    }

    componentDidMount(): void {
        /*this.setInterval( () => {
            this.checkNetInfo();
        }, 300000);*/
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
            })
        } else {
            // do something else
        }
        AsyncStorage.getItem('loginCredentials').then((value) => {
            // Update State
            this.setState({
                user_credentials: JSON.parse(value)
            });
            AsyncStorage.getItem('harvestInfo').then((value) => {
                // Update State
                this.setState({
                    harvest_info: JSON.parse(value)
                });
                AsyncStorage.getItem('postDataInfo').then((value) => {
                    this.setState({
                        post_data_harvest: JSON.parse(value),
                    });
                    if(JSON.parse(value) !== null) {
                        this.setState({
                            length: JSON.parse(value).length,
                            prev_length: JSON.parse(value).length
                        })
                    }
                    AsyncStorage.getItem("SummaryData").then((value) => {
                        }
                    );
                });
            });
        });
        // setTimeout(() => {
        //     this.checkNetInfo();
        // },1000);
        NetInfo.fetch().then(state => {
            this.setState({
                net_info: state.isConnected,
            });
        })
        /*let intervalId  = setInterval(this.checkNetInfo, 60000);
        this.setState({ intervalId: intervalId })*/
    }

    componentWillUnmount(): void {
        /*clearInterval(this.state.intervalId)
        this.setState({
            length: 0,
            post_data_harvest: ''
        })*/
    }

    checkNetInfo(name) {
        NetInfo.fetch().then(state => {
            this.setState({
                net_info: state.isConnected,
            });
            if(state.isConnected) {
                if (this.state.length === this.state.prev_length && this.state.length !== 0) {
                    fetch(baseUrl + "/harvest", {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + this.state.user_credentials.token,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.state.post_data_harvest),
                    }).then((response) => response.json())
                        .then((responseJson) => {
                            if (responseJson.error !== true) {
                                AsyncStorage.setItem("SummaryData", JSON.stringify(responseJson));
                                AsyncStorage.removeItem("lastHarvestedAcres");
                                AsyncStorage.setItem("lastHarvestedAcres", JSON.stringify(responseJson.daySummary.accum_list));
                                AsyncStorage.getItem("SummaryData").then((value) => {
                                    }
                                );
                                AsyncStorage.removeItem('postDataInfo').then((value) => {
                                    this.setState({
                                        length: 0,
                                        post_data_harvest: '',
                                        isUpdate: !this.state.isUpdate
                                    })
                                });
                            } else {
                                alert("The data entered is not accepted!");
                                this.setState({
                                    isError: true,
                                    isLogin: false,
                                });
                                return responseJson;
                            }
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }
                else {
                    // console.log("There is no Data to get synced in TruckUpdated Screen:", state.isConnected);
                }
            }
            else {
                // console.log("There is no net to do post API in Truck Updated Screen is:", state.isConnected);
                // if(name === "onPress") {
                //     alert("Please connect to internet to post data:");
                // }
            }
        });
    };

    showArenaHarvesters(name) {
        if(name === 'Arena') {
            this.props.navigation.navigate('Operators',{name: 'Arena', onNavigateBack: this.handleOnNavigateBack.bind(this)});
            // this.props.navigation.navigate('Operators',{name: 'Arena'});
        }
        else {
            this.props.navigation.navigate('Operators',{name: 'Grand Marsh', onNavigateBack: this.handleOnNavigateBack.bind(this) });
            // this.props.navigation.navigate('Operators',{name: 'Grand Marsh'});
        }
    }

    handleOnNavigateBack = (length) => {
        this.setState({
            length
        })
    };

    printImage() {
        return (
            <View>
                <View style={{marginRight: 30, borderWidth: 1,
                    borderColor: '#ffffff',
                    borderRadius: 50,
                    padding: 12}} >
                    <TouchableOpacity onPress={()=>this.displayLogout()}>
                        <Image source={require('../assets/Alsum.png')} style={{width: 30, height: 30, borderRadius: 50}}/>
                    </TouchableOpacity>
                </View>
                {this.state.isDisplayLogout ?
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginLeft: 0.5*this.state.width, zIndex: 100000}}>
                            <Modal isVisible={this.state.isDisplayLogout} onBackdropPress={() => this.setState({ isDisplayLogout: false })} style={{marginBottom: this.state.height/3, marginTop: this.state.height/5, marginLeft: this.state.width/2-160, backgroundColor: 'white', height: 50, borderWidth: 1, borderColor: 'black', width: 300}}>
                                <View style={{alignItems: 'center'}}>
                                    <LinearGradient start={{x: 0.5, y: 0}} end={{x: 2, y: 0}} colors={['#634720', '#C99349']} style={[{width: 150}]}>
                                        <TouchableOpacity onPress={()=>this.logout()} style={{width: 150}}>
                                            <View style={{borderWidth: 1,
                                                borderRadius: 5,
                                                borderColor: 'black',
                                                paddingTop: 20,
                                                paddingBottom: 20,
                                                padding: 30,
                                                alignItems: 'center'}}>
                                                <Text style={styles.text}>
                                                    {/*{this.state.harvest_info['location'][1][1]}*/}
                                                    Logout
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                    <TouchableOpacity onPress={()=>this.about()} style={{marginBottom: 15, zIndex: 1, marginTop: 50}}>
                                        <Text style={{color: 'black', fontSize: 20}}>
                                            Update Field Info
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View> :
                    <View/>
                }
            </View>
        )
    }

    displayLogout() {
        if (this.state.isDisplayLogout) {
            this.setState({
                isDisplayLogout: false,
            })
        }
        else {
            this.setState({
                isDisplayLogout: true,
            })
        }
    }

    logout() {
        if(this.state.length !== 0) {
            alert("There are un-synced records, logout is possible only after syncing all records!")
        }
        else {
            AsyncStorage.removeItem('loginCredentials').then((value) => {
                AsyncStorage.removeItem('harvestInfo').then((value) => {} );
                AsyncStorage.removeItem('SummaryData').then((value) => {} );
                AsyncStorage.removeItem('postDataInfo').then((value) => {} );
                AsyncStorage.removeItem('lastHarvestedAcres').then((value) => {} );
                AsyncStorage.removeItem('lastTenData').then((value) => {} );
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({routeName: 'Login'})],
                    });
                    this.props.navigation.dispatch(resetAction);
                }
            );
        }
    }

    profile() {
        // this.props.navigation.navigate('Profile', {user_credentials: this.state.user_Credentials, commodity: "POTATO"});
    }

    about() {
        // this.props.navigation.navigate('About', {user_credentials: this.state.user_Credentials, commodity: "POTATO"});
        NetInfo.fetch().then(state => {
            this.setState({
                net_info: state.isConnected,
            });
        });
        this.setState({
            isDisplayLogout: false,
        });
        if(this.state.net_info) {
            fetch(baseUrl + "/harvest-data", {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + this.state.user_credentials.token,
                    'Content-Type': 'application/json'
                },
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.error !== true) {
                        AsyncStorage.setItem("harvestInfo", JSON.stringify(responseJson));
                    } else {
                        alert("The field can't be synced right now, Please try after some time!");
                        this.setState({
                            isError: true,
                            isLogin: false,
                        });
                        return responseJson;
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        else {
            alert("Connect to Data & again try to get data!");
        }
    }

    updateBackend() {
        // this.setState({
        //     showUpdateButton: !this.state.showUpdateButton,
        // })
    }

    goToHomeScreen() {
            // const resetAction = StackActions.reset({
            //     index: 0,
            //     actions: [NavigationActions.navigate({routeName: 'Harvest'})],
            // });
            // this.props.navigation.dispatch(resetAction);
    }

    render() {
        console.log("The Data to post is:", this.state.post_data_harvest)
        return(
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', height: 50}}>
                    <TouchableOpacity onPress={()=>this.goToHomeScreen()}>
                        <View style={{marginLeft: 30, top: 6}}>
                            <Image source={require('../assets/AgPivot.png')} style={{height: 28, width: 80.62, marginTop: 5}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginTop: 10}}>
                        <Text style={{color: '#979797', fontSize: 10, fontWeight: '700', textAlign: 'center', left: 43, fontFamily: 'Poppins', top: 15, lineHeight: 15}}>
                            Integrated Farm Management Made Easy
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#333333', fontSize: 18, lineHeight: 15, marginRight: 5, textAlign: 'center', paddingTop: 20}}>
                            {this.state.user_credentials.username}
                        </Text>
                        <View>
                            {this.printImage()}
                        </View>
                        <TouchableOpacity onPress={()=>this.checkNetInfo("onPress")} style={{flexDirection: 'row', right: 25}}>
                            <View style={{borderRadius: 50, width: 20, height: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', top: 5, left: 22, zIndex: 100000}}>
                                <Text style={{color: 'white', fontSize: 14, fontWeight: '700', fontFamily: 'Poppins'}}>
                                    {this.state.length}
                                </Text>
                            </View>
                            <Image source={require('../assets/Sync.png')} style={{height: 30, width: 30, top: 10, right: 10, zIndex: -1}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{borderTopWidth: 1, height: 0, width: this.state.width, color: '#c6c6c6', zIndex: -1}}/>
                <View style={{zIndex: -1, marginTop: 20}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{
                            fontSize: 35,
                            fontWeight: 'bold',
                            fontFamily: 'Poppins',
                            lineHeight: 40,
                            color: 'black',
                            textAlign: 'center' }}>
                            SELECT LOCATION
                        </Text>
                    </View>
                </View>
                <View style={[{marginTop: 0.3*this.state.height,},styles.container]}>
                    <View style={styles.text_container}>
                        <LinearGradient start={{x: 0.5, y: 0}} end={{x: 2, y: 0}} colors={['#634720', '#C99349']} style={[{marginRight: 80, width: 300}]}>
                            <TouchableOpacity onPress={()=>this.showArenaHarvesters('Arena')} style={{width: 300}}>
                                <View style={{borderWidth: 1,
                                    borderRadius: 5,
                                    borderColor: 'black',
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    padding: 30,
                                    alignItems: 'center'}}>
                                    <Text style={styles.text}>
                                        {/*{this.state.harvest_info['location'][0][1]}*/}
                                        Arena
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient start={{x: 0.5, y: 0}} end={{x: 2, y: 0}} colors={['#634720', '#C99349']} style={[{marginLeft: 80, width: 300}]}>
                            <TouchableOpacity onPress={()=>this.showArenaHarvesters('GrandMarsh')} style={{width: 300}}>
                                <View style={{borderWidth: 1,
                                    borderRadius: 5,
                                    borderColor: 'black',
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    padding: 30,
                                    alignItems: 'center'}}>
                                    <Text style={styles.text}>
                                        {/*{this.state.harvest_info['location'][1][1]}*/}
                                        Grand Marsh
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        zIndex: -1,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text_container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 25,
        fontFamily: 'Poppins',
        lineHeight: 40,
        color: 'white',
        textAlign: 'center'
    },
    button: {
        width: 300,
    }
});
