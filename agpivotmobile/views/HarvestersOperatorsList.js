import React, { Component } from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image, AsyncStorage, Dimensions, ScrollView, FlatList, BackHandler} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {NavigationActions, StackActions} from 'react-navigation';
import Spinner from 'react-native-spinkit';
import NetInfo from '@react-native-community/netinfo';
import {baseUrl} from '../constants/BaseUrl';
import Modal from "react-native-modal";
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('window');

export default class HarvestersOperatorsList extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        const params = this.props.navigation.state.params;
        this.state = {
            operator_name: params.name,
            user_credentials: '',
            operators: '',
            selected_operators: '',
            isDisplayLogout: false,
            showUpdateButton: false,
            post_data_operator: '',
            length: 0,
            prev_length: 0,
            net_info: false,
            width: width,
            height: height,
            isUpdate: false,
            local_summary: {
                "daySummary": {
                    "operator": '',
                    "date": '',
                    "day_count": 0,
                    "day_acres": 0,
                    "last_ten": [
                    ],
                }
            },
            local_new_summary: {
                "daySummary": {
                    "operator": '',
                    "date": '',
                    "day_count": 0,
                    "day_acres": 0,
                    "last_ten": [
                    ],
                }
            },
            isLoading: false,
        };
        this.showDropDowns = this.showDropDowns.bind(this);
        this.checkNetInfo = this.checkNetInfo.bind(this);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    };

    componentDidMount(): void {
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
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        AsyncStorage.getItem('loginCredentials').then((value) => {
            // Update State
            this.setState({
                user_credentials: JSON.parse(value)
            });
            AsyncStorage.getItem('harvestInfo').then((value) => {
                // Update State
                this.setState({
                    operators: (JSON.parse(value))['operator_choices']
                });
                AsyncStorage.getItem('postDataInfo').then((value) => {
                    this.setState({
                        post_data_operator: JSON.parse(value),
                    });
                    if(JSON.parse(value) !== null) {
                        this.setState({
                            length: JSON.parse(value).length,
                            prev_length: JSON.parse(value).length,
                        })
                    }
                });
                AsyncStorage.getItem("lastTenData").then((value) => {
                    console.log("The value of last Ten data in Harvest operator then:", JSON.parse(value));
                    if(JSON.parse(value) === null ) {

                    }
                    else {
                        this.setState({
                            local_summary: JSON.parse(value),
                        })
                    }
                    console.log("Local summary is:", this.state.local_summary);
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
        });
        // let intervalId  = setInterval(this.checkNetInfo, 60000);
        // this.setState({ intervalId: intervalId })
    }

    componentWillUnmount(): void {
        // clearInterval(this.state.intervalId);
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
        this.setState({
            isLoading: false,
        });
        // this.setState({
        //     length: 0,
        //     post_data_operator: ''
        // })
    };

    handleBackButtonClick() {
        // Registered function to handle the Back Press
        // We are generating an alert to show the back button pressed
        // We can move to any screen. If we want

        this.props.navigation.state.params.onNavigateBack(this.state.length);
        this.props.navigation.goBack();

        // Returning true means we have handled the backpress
        // Returning false means we haven't handled the backpress
        return true;
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
                        body: JSON.stringify(this.state.post_data_operator),
                    }).then((response) => response.json())
                        .then((responseJson) => {
                            if (responseJson.error !== true) {
                                AsyncStorage.setItem("SummaryData", JSON.stringify(responseJson));
                                AsyncStorage.removeItem("lastHarvestedAcres");
                                AsyncStorage.setItem("lastHarvestedAcres", JSON.stringify(responseJson.daySummary.accum_list));
                                AsyncStorage.removeItem('postDataInfo').then((value) => {
                                    this.setState({
                                        length: 0,
                                        post_data_operator: '',
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

    showDropDowns(name) {
        NetInfo.fetch().then(state => {
            this.setState({
                net_info: state.isConnected,
            });
        });
        console.log("Selected key is:", this.state.key);
        this.setState({
            isLoading: true,
        });
        for (var key in this.state.operators) {
            if (this.state.operators[key] === name) {
                console.log("The keys & values are:", key, name);
                let key_in_object = {};
                key_in_object[key] = name;
                this.setState({
                    selected_operators: key_in_object,
                });
                if(this.state.net_info) {
                    /* creation of local_values for summary table starting logic */
                    // AsyncStorage.setItem("lastTenData", JSON.stringify(this.state.local_summary));
                    // AsyncStorage.getItem("lastTenData").then((value) => {
                    //     console.log("value of created Last Ten Records is:", JSON.parse(value));
                    // });
                    if(this.state.local_summary.daySummary.operator !== '') {
                        if(this.state.local_summary.daySummary.operator === key) {
                            AsyncStorage.getItem("lastTenData").then((value) => {
                                console.log("value of created Last Ten Records when already data is there without changing operator:", JSON.parse(value));
                            });
                        }
                        else {
                            AsyncStorage.setItem("lastTenData", JSON.stringify(this.state.local_new_summary));
                            AsyncStorage.getItem("lastTenData").then((value) => {
                                console.log("value of created Last Ten Records is:", JSON.parse(value));
                            });
                        }
                    }
                    else {
                        AsyncStorage.setItem("lastTenData", JSON.stringify(this.state.local_summary));
                        AsyncStorage.getItem("lastTenData").then((value) => {
                            console.log("value of created Last Ten Records is:", JSON.parse(value));
                        });
                    }
                    /* creation of local_values for summary table ending logic */
                    fetch(baseUrl +"/last-accumulated/" + key, {
                        method: "GET",
                        headers: {
                            'Authorization': 'Bearer ' + this.state.user_credentials.token,
                            'Content-Type': 'application/json'
                        },
                    }).then((response) => response.json())
                        .then((responseJson) => {
                            if(responseJson.error !== true) {
                                console.log("value of accum_list is:", responseJson.accum_list);
                                AsyncStorage.removeItem("lastHarvestedAcres");
                                AsyncStorage.setItem("lastHarvestedAcres", JSON.stringify(responseJson.accum_list));
                                this.setState({
                                    isLoading: false,
                                });
                                this.props.navigation.navigate('FieldVariety', {
                                    name: this.state.selected_operators,
                                    operator_name: this.state.operator_name,
                                    onNavigateBack: this.handleOnNavigateBack.bind(this)
                                });
                            }
                            else {
                                alert("Invalid access of API!");
                                this.setState({
                                    isLoading: false,
                                });
                                return responseJson;
                            }
                        })
                        .catch((error) => {
                            console.error(error);
                            this.setState({
                                isLoading: false,
                            });
                        });
                }
                else {
                    alert("Please connect to internet to select Harvester:");
                    this.setState({
                        isLoading: false,
                    });
                }
            }
        }
    };

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
                        AsyncStorage.setItem("SummaryData", responseJson.daySumary);
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
                        {/*{this.state.isDisplayLogout ?*/}
                        {/*    <View style={{*/}
                        {/*        borderWidth: 1,*/}
                        {/*        borderColor: 'black',*/}
                        {/*        width: 200,*/}
                        {/*        padding: 15,*/}
                        {/*        position: 'absolute',*/}
                        {/*        top: 50,*/}
                        {/*        zIndex: 50,*/}
                        {/*        opacity: 1,*/}
                        {/*        right: 3,*/}
                        {/*        backgroundColor: 'white',*/}
                        {/*        paddingRight: 50 }}>*/}
                        {/*        <TouchableOpacity onPress={() => this.profile()} style={{marginBottom: 15}}>*/}
                        {/*            <Text style={{color: 'black', fontSize: 20, opacity: 1, zIndex: 10000}}>*/}
                        {/*                Profile*/}
                        {/*            </Text>*/}
                        {/*        </TouchableOpacity>*/}
                        {/*        <TouchableOpacity onPress={() => this.about()} style={{marginBottom: 15}}>*/}
                        {/*            <Text style={{color: 'black', fontSize: 20, opacity: 1, zIndex: 10000}}>*/}
                        {/*                Update Data*/}
                        {/*            </Text>*/}
                        {/*        </TouchableOpacity>*/}
                        {/*        <TouchableOpacity onPress={() => this.logout()} style={{marginBottom: 5}}>*/}
                        {/*            <Text style={{color: 'black', fontSize: 20, opacity: 1, zIndex: 10000}}>*/}
                        {/*                Logout*/}
                        {/*            </Text>*/}
                        {/*        </TouchableOpacity>*/}
                        {/*    </View> :*/}
                        {/*    <View/>*/}
                        {/*}*/}
                    </View>
                </View>
                <View style={{borderTopWidth: 1, height: 0, width: this.state.width, color: '#c6c6c6', zIndex: -1}}/>
                {!this.state.isLoading ?
                    <ScrollView style={{flexGrow: 1, zIndex: -1}}>
                        {this.state.operators !== '' ?
                            <View style={styles.container}>
                                <View style={{zIndex: -1}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{alignItems: 'center'}}>
                                            <Text style={{
                                                fontSize: 35,
                                                fontWeight: 'bold',
                                                fontFamily: 'Poppins',
                                                lineHeight: 40,
                                                color: 'black',
                                                textAlign: 'center'
                                            }}>
                                                {this.state.operator_name} Harvester
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop: 50, marginBottom: 50}}>
                                    <FlatList
                                        data={Object.values(this.state.operators)}
                                        numColumns={4}

                                        extraData={this.state}
                                        renderItem={({item}) =>
                                            <LinearGradient start={{x: 0.5, y: 0}} end={{x: 2, y: 0}}
                                                            colors={['#634720', '#C99349']}
                                                            style={[{
                                                                marginTop: 30,
                                                                marginRight: 80,
                                                                width: this.state.width / 6,
                                                            }, styles.button]}>
                                                <TouchableOpacity onPress={() => this.showDropDowns(item)}>
                                                    <View style={{
                                                        borderWidth: 1,
                                                        borderRadius: 5,
                                                        borderColor: 'black',
                                                        height: 60,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Text style={styles.text}>
                                                            {item}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        }
                                        keyExtractor={(index) => index.toString()}
                                    />
                                </View>
                            </View> :
                            <View style={{flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Spinner size={100} type={'ThreeBounce'} color={'#634720'} style={{
                                    alignItems: 'center',
                                    flex: 1,
                                    justifyContent: 'center',
                                    marginTop: 0.15 * this.state.height
                                }}/>
                            </View>
                        }
                    </ScrollView> :
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Spinner size={100} type={'ThreeBounce'} color={'#634720'}/>
                    </View>
                }
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
        marginTop: 20,
    },
    text_container: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        fontFamily: 'Poppins',
        color: 'white',
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 80
    },
    button: {
        alignSelf: 'center'
    }
});
