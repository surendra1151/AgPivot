import React, { Component } from 'react';
import {
    TouchableWithoutFeedback,
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image, AsyncStorage, Dimensions,
    ScrollView, BackHandler,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {NavigationActions, StackActions} from 'react-navigation';
import {baseUrl} from '../constants/BaseUrl';
import Modal from "react-native-modal";
import NetInfo from '@react-native-community/netinfo';
import Orientation from 'react-native-orientation';
import Spinner from 'react-native-spinkit';

const { width, height } = Dimensions.get('window');

export default class DataEntryScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        const params = this.props.navigation.state.params;
        this.state = {
            user_credentials: '',
            operator_name: params.operator_name,
            harvester_name: params.harvester_name,
            field: params.field,
            comb: params.comb,
            truck: params.truck,
            accumulatedAcres: null,
            lastAccumulatedAcres: 0,
            acresHarvested: '0',
            loadPercentage: 100,
            isDisplayLogout: false,
            post_data_dataEntryScreen: [],
            async_post_data: '',
            length: 0,
            prev_length: 0,
            net_info: false,
            day_summary: '',
            height: height,
            width: width,
            isUpdate: false,
            comments: '',
            isComments: false,
            local_summary: '',
            last_accumulated_acres: '',
            comb_last_harvested: 0,
            isLoading: false,
            isSubmit: false,
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

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
            AsyncStorage.getItem('postDataInfo').then((value) => {
                // Update State
                if(JSON.parse(value) !== null) {
                    this.setState({
                        length: JSON.parse(value).length,
                        prev_length: JSON.parse(value).length,
                    })
                }
                this.setState({
                    async_post_data: JSON.parse(value),
                    post_data_dataEntryScreen: JSON.parse(value),
                });
             });
            AsyncStorage.getItem("SummaryData").then((value) => {
                this.setState({
                    day_summary: JSON.parse(value),
                })
            });
            AsyncStorage.getItem("lastTenData").then((value) => {
                this.setState({
                    local_summary: JSON.parse(value),
                })
            });
            AsyncStorage.getItem("lastHarvestedAcres").then((value) => {
                this.setState({
                    last_accumulated_acres: JSON.parse(value),
                });
                let comb = Object.keys(this.state.comb)[0];
                let keys = Object.keys(JSON.parse(value));
                if(keys.includes(comb)) {
                    this.setState({
                        comb_last_harvested: JSON.parse(value)[comb].toFixed(2)
                    })
                }
            })
        });
        console.log("Total data in data entry model is:", this.state.post_data_dataEntryScreen, this.state.day_summary);
        // setTimeout(() => {
        //     this.checkNetInfo();
        // },1000);
        // setInterval(this.checkNetInfo, 300000);
        NetInfo.fetch().then(state => {
            this.setState({
                net_info: state.isConnected,
            });
        });
        let intervalId  = setInterval(this.checkNetInfo, 60000);
        this.setState({ intervalId: intervalId })
    }

    componentWillUnmount(): void {
        clearInterval(this.state.intervalId);
        this.setState({
            length: 0,
            post_data_dataEntryScreen: ''
        });
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        // Registered function to handle the Back Press
        // We are generating an alert to show the back button pressed
        // We can move to any screen. If we want

        // this.props.navigation.state.params.onNavigateBack(this.state.length);
        // this.props.navigation.goBack();

        this.props.navigation.replace('TruckUpdated', {harvester_name: this.state.harvester_name, operator_name: this.state.operator_name, field: this.state.field, comb: this.state.comb, prev_length: this.state.length, onNavigateBack: this.handleOnNavigateBack.bind(this) });

        /*if(this.state.length === 0) {
            this.props.navigation.state.params.onNavigateBack(this.state.length);
            this.props.navigation.goBack();
        }
        else {
            alert('There are un-synced records, field change is possible only on syncing the records!')
        }*/

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
                if (this.state.length !== 0) {
                    fetch(baseUrl + "/harvest", {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + this.state.user_credentials.token,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.state.post_data_dataEntryScreen),
                    }).then((response) => response.json())
                        .then((responseJson) => {
                            if (responseJson.error !== true) {
                                AsyncStorage.setItem("SummaryData", JSON.stringify(responseJson));
                                AsyncStorage.removeItem("lastHarvestedAcres");
                                AsyncStorage.setItem("lastHarvestedAcres", JSON.stringify(responseJson.daySummary.accum_list));
                                console.log("The data of day summary response in truck page is:", responseJson);
                                this.setState({
                                    day_summary: responseJson,
                                    length: 0,
                                    isUpdate: !this.state.isUpdate,
                                });
                                AsyncStorage.removeItem('postDataInfo').then((value) => {
                                    console.log("The data is Uploaded & deleted", responseJson);
                                    this.setState({
                                        length: 0,
                                        post_data_dataEntryScreen: '',
                                        isUpdate: !this.state.isUpdate,
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

    pushData(data) {
        NetInfo.fetch().then(state => {
            this.setState({
                net_info: state.isConnected,
            });
            if(state.isConnected) {
                if (this.state.length !== 0) {
                    fetch(baseUrl + "/harvest", {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + this.state.user_credentials.token,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data),
                    }).then((response) => response.json())
                        .then((responseJson) => {
                            if (responseJson.error !== true) {
                                AsyncStorage.setItem("SummaryData", JSON.stringify(responseJson));
                                AsyncStorage.setItem("lastHarvestedAcres", JSON.stringify(responseJson.daySummary.accum_list));
                                console.log("The data of day summary response in truck page is:", responseJson);
                                this.setState({
                                    day_summary: responseJson,
                                    isSubmit: false,
                                });
                                AsyncStorage.removeItem('postDataInfo').then((value) => {
                                    console.log("The data is Uploaded & deleted", responseJson);
                                    this.setState({
                                        length: 0,
                                        post_data_dataEntryScreen: '',
                                        isUpdate: !this.state.isUpdate,
                                        isSubmit: false,
                                    })
                                });
                                this.props.navigation.replace('TruckUpdated', {harvester_name: this.state.harvester_name, operator_name: this.state.operator_name, field: this.state.field, comb: this.state.comb, prev_length: this.state.length, onNavigateBack: this.handleOnNavigateBack.bind(this) });
                            } else {
                                alert("The data entered is not accepted!");
                                this.setState({
                                    isError: true,
                                    isLogin: false,
                                    isSubmit: false,
                                });
                                return responseJson;
                            }
                        })
                        .catch((error) => {
                            console.error(error);
                            this.setState({
                                isSubmit: false
                            })
                        });
                }
                else {
                    console.log("There is no Data to get synced in TruckUpdated Screen:", state.isConnected);
                    this.setState({
                        isSubmit: false
                    });
                    this.props.navigation.replace('TruckUpdated', {harvester_name: this.state.harvester_name, operator_name: this.state.operator_name, field: this.state.field, comb: this.state.comb, prev_length: this.state.length, onNavigateBack: this.handleOnNavigateBack.bind(this) });
                }
            }
            else {
                this.setState({
                    isSubmit: false
                });
                console.log("There is no net to do post API in Truck Updated Screen is:", state.isConnected);
                this.props.navigation.replace('TruckUpdated', {harvester_name: this.state.harvester_name, operator_name: this.state.operator_name, field: this.state.field, comb: this.state.comb, prev_length: this.state.length, onNavigateBack: this.handleOnNavigateBack.bind(this) });
            }
        });
    }

    handleOnNavigateBack = (length) => {
        this.setState({
            length
        })
    };

    accumulatedAcres(number) {
        if(number !== '.') {
            if (number === 'delete') {
                if (this.state.accumulatedAcres !== null) {
                    let value = this.state.accumulatedAcres;
                    value = value.toString();
                    let new_value = value.slice(0, -1);
                    this.setState({
                        accumulatedAcres: new_value,
                        acresHarvested: (parseFloat(new_value) - parseFloat(this.state.comb_last_harvested).toFixed(2)).toString()
                    })
                }
            } else {
                if (this.state.accumulatedAcres === null) {
                    let value = number.toString();
                    this.setState({
                        accumulatedAcres: value,
                        acresHarvested: ((parseFloat(value) - parseFloat(this.state.comb_last_harvested)).toFixed(2)).toString()
                    });
                } else {
                    let value = this.state.accumulatedAcres;
                    value = value.toString() + number.toString();
                    this.setState({
                        accumulatedAcres: value,
                        acresHarvested: ((parseFloat(value) - parseFloat(this.state.comb_last_harvested)).toFixed(2)).toString()
                    });
                }
            }
        }
        else {
            if (this.state.accumulatedAcres !== null) {
                let value = this.state.accumulatedAcres;
                value = value.toString() + number.toString();
                let new_value = value;
                this.setState({
                    accumulatedAcres: new_value,
                })
            }
        }
        // this.updatedAcresHarvested();
    }

    // updatedAcresHarvested() {
    //     if(this.state.acresHarvested !== '') {
    //         let acresHarvested = this.state.acresHarvested;
    //         const accumulatedAcres = parseFloat(this.state.accumulatedAcres);
    //         let totalAcresHarvested = acresHarvested + accumulatedAcres;
    //         this.setState({
    //             acresHarvested: totalAcresHarvested,
    //         });
    //     }
    //     else {
    //         this.setState({
    //             acresHarvested: this.state.accumulatedAcres,
    //         });
    //     }
    // }

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

    goBack() {
        this.setState({
            isSubmit: true,
        });
        AsyncStorage.removeItem("postDataInfo").then((value) => {
            console.log("value of Async Data when deleting the data is:", JSON.parse(value))
        });
        this.updateLastHarvestedAcres();
        /*let last_accumulated_without_update = this.state.last_accumulated_acres;
        let key_comb_selected = Object.keys(this.state.comb)[0];
        last_accumulated_without_update[key_comb_selected] = this.state.accumulatedAcres;
        AsyncStorage.removeItem("lastHarvestedAcres");
        AsyncStorage.setItem("lastHarvestedAcres", JSON.stringify(last_accumulated_without_update));*/
        /*var day = new Date();
        var year = day.getFullYear();
        var month = day.getMonth()+1;
        var date = day.getDate();
        var hours = day.getHours();
        var minutes = day.getMinutes();
        var present_day = month + '-' + date + '-' + year;
        var present_time = hours + ':' + minutes;
        let prev_data;
        if(this.state.length > 0) {
            prev_data = this.state.post_data_dataEntryScreen;
            let data = {
                "date": present_day,
                "time": present_time,
                "truck": Object.keys(this.state.truck)[0],
                "comments": this.state.comments,
                "acres_harvested": this.state.accumulatedAcres-this.state.comb_last_harvested,
                "full_perc": parseFloat(this.state.loadPercentage),
                "fieldinfo_id": Object.keys(this.state.comb)[0],
                "operator": Object.keys(this.state.harvester_name)[0],
                "acres_accumulated": this.state.accumulatedAcres
            };
            prev_data.push(data);
            this.setState({
                async_post_data: prev_data,
            });
        }
        else {
            prev_data = [];
            let data = {
                "date": present_day,
                "time": present_time,
                "truck": Object.keys(this.state.truck)[0],
                "comments": this.state.comments,
                "acres_harvested": this.state.accumulatedAcres-this.state.comb_last_harvested,
                "full_perc": parseFloat(this.state.loadPercentage),
                "fieldinfo_id": Object.keys(this.state.comb)[0],
                "operator": Object.keys(this.state.harvester_name)[0],
                "acres_accumulated": this.state.accumulatedAcres
            };
            prev_data.push(data);
            this.setState({
                async_post_data: prev_data,
            });
        }*/

        /* creation of local_values for summary table starting */

        /*const local_values = this.state.local_summary;
        if(local_values.daySummary.date !== '') {
            if (local_values.daySummary.date === present_day) {
                if(local_values.daySummary.last_ten.length <= 10) {
                    local_values.daySummary.day_count = local_values.daySummary.day_count + 1;
                    local_values.daySummary.day_acres = local_values.daySummary.day_acres + (this.state.accumulatedAcres - this.state.comb_last_harvested);
                    const data = local_values.daySummary.last_ten;
                    data.unshift({
                        "truck": Object.values(this.state.truck)[0],
                        "acres_harvested": (this.state.accumulatedAcres - this.state.comb_last_harvested)
                    });
                    local_values.daySummary.last_ten = data;
                }
                else {
                    local_values.daySummary.last_ten.pop();
                    local_values.daySummary.day_count = local_values.daySummary.day_count + 1;
                    local_values.daySummary.day_acres = local_values.daySummary.day_acres + (this.state.accumulatedAcres - this.state.comb_last_harvested);
                    const data = local_values.daySummary.last_ten;
                    data.unshift({
                        "truck": Object.values(this.state.truck)[0],
                        "acres_harvested": (this.state.accumulatedAcres - this.state.comb_last_harvested)
                    });
                    local_values.daySummary.last_ten = data;
                }
            }
            else {
                local_values.daySummary.date = present_day;
                local_values.daySummary.day_count = 1;
                local_values.daySummary.day_acres = local_values.daySummary.day_acres + (this.state.accumulatedAcres - this.state.comb_last_harvested);
                let data = [] ;
                data.unshift({
                    "truck": Object.values(this.state.truck)[0],
                    "acres_harvested": this.state.accumulatedAcres-this.state.lastAccumulatedAcres
                });
                local_values.daySummary.last_ten = data;
            }
        }
        else {
            local_values.daySummary.date = present_day;
            local_values.daySummary.day_count = 1;
            local_values.daySummary.day_acres = (this.state.accumulatedAcres-this.state.comb_last_harvested);
            const data = [];
            data.unshift({
                "truck": Object.values(this.state.truck)[0],
                "acres_harvested": this.state.accumulatedAcres-this.state.comb_last_harvested
            });
            local_values.daySummary.last_ten = data;
        }
        AsyncStorage.setItem("lastTenData", JSON.stringify(local_values));*/

        /* creation of local_values for summary table ending logic */

        this.setState({
            length: this.state.length + 1,
        });
        // console.log("Data on pushing is in Data Entry Screen is:", prev_data);
        // AsyncStorage.setItem("postDataInfo", JSON.stringify(prev_data));
        // AsyncStorage.getItem("postDataInfo").then((value) => {
        //     this.pushData(prev_data)
        //     // console.log("value of Async Data when local storage updated is:", JSON.parse(value))
        // });
        // this.props.navigation.replace('TruckUpdated', {harvester_name: this.state.harvester_name, operator_name: this.state.operator_name, field: this.state.field, comb: this.state.comb, prev_length: this.state.length });
    }

    updateLastHarvestedAcres() {
        console.log("Values before updating last Harvested Acres is:", this.state.last_accumulated_acres);
        let last_accumulated_without_update = this.state.last_accumulated_acres;
        let key_comb_selected = Object.keys(this.state.comb)[0];
        if( last_accumulated_without_update.key_comb_selected === undefined ) {
            last_accumulated_without_update[key_comb_selected] = parseFloat(this.state.accumulatedAcres);
        }
        else {
            last_accumulated_without_update[key_comb_selected] = parseFloat(this.state.accumulatedAcres);
        }
        AsyncStorage.removeItem("lastHarvestedAcres");
        AsyncStorage.setItem("lastHarvestedAcres", JSON.stringify(last_accumulated_without_update));
        console.log("Values after updating last Harvested Acres is:", last_accumulated_without_update);
        this.updateLastTenData();
    }

    updateLastTenData() {
        var day = new Date();
        var year = day.getFullYear();
        var month = day.getMonth()+1;
        var date = day.getDate();
        var present_day = month + '-' + date + '-' + year;
        const local_values = this.state.local_summary;
        if(local_values.daySummary.date !== '') {
            if (local_values.daySummary.date === present_day) {
                if(local_values.daySummary.last_ten.length < 10) {
                    local_values.daySummary.day_count = local_values.daySummary.day_count + 1;
                    local_values.daySummary.day_acres = (parseFloat(local_values.daySummary.day_acres)+ parseFloat(this.state.acresHarvested)).toFixed(2);
                    local_values.daySummary.operator = Object.keys(this.state.harvester_name)[0];
                    const data = local_values.daySummary.last_ten;
                    data.unshift({
                        "truck": Object.values(this.state.truck)[0],
                        "acres_harvested": parseFloat(this.state.accumulatedAcres).toFixed(2)
                    });
                    local_values.daySummary.last_ten = data;
                }
                else {
                    local_values.daySummary.last_ten.pop();
                    local_values.daySummary.day_count = local_values.daySummary.day_count + 1;
                    local_values.daySummary.day_acres = (parseFloat(local_values.daySummary.day_acres) + parseFloat(this.state.acresHarvested)).toFixed(2);
                    local_values.daySummary.operator = Object.keys(this.state.harvester_name)[0];
                    const data = local_values.daySummary.last_ten;
                    data.unshift({
                        "truck": Object.values(this.state.truck)[0],
                        "acres_harvested": parseFloat(this.state.accumulatedAcres).toFixed(2)
                    });
                    local_values.daySummary.last_ten = data;
                }
            }
            else {
                local_values.daySummary.date = present_day;
                local_values.daySummary.day_count = 1;
                local_values.daySummary.day_acres = (parseFloat(local_values.daySummary.day_acres) + parseFloat(this.state.acresHarvested)).toFixed(2);
                local_values.daySummary.operator = Object.keys(this.state.harvester_name)[0];
                let data = [] ;
                data.unshift({
                    "truck": Object.values(this.state.truck)[0],
                    "acres_harvested": parseFloat(this.state.accumulatedAcres).toFixed(2)
                });
                local_values.daySummary.last_ten = data;
            }
        }
        else {
            local_values.daySummary.date = present_day;
            local_values.daySummary.day_count = 1;
            local_values.daySummary.day_acres = parseFloat(this.state.acresHarvested).toFixed(2);
            local_values.daySummary.operator = Object.keys(this.state.harvester_name)[0];
            const data = [];
            data.unshift({
                "truck": Object.values(this.state.truck)[0],
                "acres_harvested": parseFloat(this.state.accumulatedAcres).toFixed(2)
            });
            local_values.daySummary.last_ten = data;
        }
        AsyncStorage.setItem("lastTenData", JSON.stringify(local_values));
        this.updatePostDataInfo();
    }

    updatePostDataInfo() {
        var day = new Date();
        var year = day.getFullYear();
        var month = day.getMonth()+1;
        var date = day.getDate();
        var hours = day.getHours();
        var minutes = day.getMinutes();
        var present_day = month + '-' + date + '-' + year;
        var present_time = hours + ':' + minutes;
        let prev_data;
        if(this.state.length > 0) {
            prev_data = this.state.post_data_dataEntryScreen;
            let data = {
                "date": present_day,
                "time": present_time,
                "truck": Object.keys(this.state.truck)[0],
                "comments": this.state.comments,
                "acres_harvested": parseFloat(this.state.acresHarvested),
                "full_perc": parseFloat(this.state.loadPercentage),
                "fieldinfo_id": Object.keys(this.state.comb)[0],
                "operator": Object.keys(this.state.harvester_name)[0],
                "acres_accumulated": parseFloat(this.state.accumulatedAcres)
            };
            prev_data.push(data);
            this.setState({
                async_post_data: prev_data,
            });
        }
        else {
            prev_data = [];
            let data = {
                "date": present_day,
                "time": present_time,
                "truck": Object.keys(this.state.truck)[0],
                "comments": this.state.comments,
                "acres_harvested": parseFloat(this.state.acresHarvested),
                "full_perc": parseFloat(this.state.loadPercentage),
                "fieldinfo_id": Object.keys(this.state.comb)[0],
                "operator": Object.keys(this.state.harvester_name)[0],
                "acres_accumulated": parseFloat(this.state.accumulatedAcres)
            };
            prev_data.push(data);
            this.setState({
                async_post_data: prev_data,
            });
        }
        this.setState({
            length: this.state.length + 1,
        });
        console.log("Data on pushing is in Data Entry Screen is:", prev_data);
        AsyncStorage.setItem("postDataInfo", JSON.stringify(prev_data));
        AsyncStorage.getItem("postDataInfo").then((value) => {
            this.pushData(prev_data)
            // console.log("value of Async Data when local storage updated is:", JSON.parse(value))
        });
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

    openCommentsModal() {
        this.setState({
            isComments: true,
        })
    }

    render() {
        console.log("last harvested acres in Data Entry Screen is:", this.state.comb_last_harvested, this.state.comb, this.state.last_accumulated_acres, this.state.acresHarvested);
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
                        {/*        paddingRight: 50*/}
                        {/*    }}>*/}
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
                <ScrollView style={{flexGrow: 1}}>
                    {this.state.local_summary !== '' && !this.state.isLoading && this.state.last_accumulated_acres !== '' ?
                        <View style={styles.container}>
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
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 3, paddingLeft: 50}}>
                                    {/*<View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>*/}
                                    {/*    <Text style={{*/}
                                    {/*        color: 'black',*/}
                                    {/*        fontSize: 18,*/}
                                    {/*        lineHeight: 30,*/}
                                    {/*        fontFamily: 'Poppins' }}>*/}
                                    {/*        Summary coming soon...*/}
                                    {/*    </Text>*/}
                                    {/*</View>*/}
                                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                                        {/*<View style={{bottom: 10}}>*/}
                                        {/*    <Text style={{*/}
                                        {/*        color: 'black',*/}
                                        {/*        fontSize: 18,*/}
                                        {/*        lineHeight: 30,*/}
                                        {/*        fontFamily: 'Poppins'*/}
                                        {/*    }}>*/}
                                        {/*        Summary*/}
                                        {/*    </Text>*/}
                                        {/*</View>*/}
                                        <View style={{
                                            borderBottomWidth: 0,
                                            flexDirection: 'row',
                                            borderWidth: 1,
                                            borderRadius: 5,
                                            borderColor: '#DFDFDF',
                                            width: 300
                                        }}>
                                            <View style={{width: 300}}>
                                                <Text style={[{fontWeight: 'bold'}, styles.trucks_table_text]}>
                                                    Day Total
                                                </Text>
                                                <View style={{
                                                    borderTopWidth: 1,
                                                    height: 0,
                                                    borderColor: '#DEE2E6',
                                                    zIndex: -1
                                                }}/>
                                                <Text style={styles.trucks_table_text}>
                                                    Field Truck: {this.state.local_summary.daySummary.day_count}
                                                </Text>
                                                <Text style={styles.trucks_table_text}>
                                                    Acres Harvested: {this.state.local_summary.daySummary.day_acres}
                                                </Text>
                                            </View>
                                            {/*<View style={{width: 130}}>*/}
                                            {/*    <Text style={[{fontWeight: 'bold'},styles.trucks_table_text]}>*/}
                                            {/*        Seed Lot Total*/}
                                            {/*    </Text>*/}
                                            {/*    <View style={{borderTopWidth: 1, height: 0, borderColor: '#DEE2E6', zIndex: -1}}/>*/}
                                            {/*    <Text style={styles.trucks_table_text}>*/}
                                            {/*        Field Truck: 0*/}
                                            {/*    </Text>*/}
                                            {/*    <Text style={styles.trucks_table_text}>*/}
                                            {/*        Acres: 0*/}
                                            {/*    </Text>*/}
                                            {/*</View>*/}
                                        </View>
                                    </View>
                                    <View style={{width: 300}}>
                                        <View style={{borderWidth: 1, borderRadius: 5, borderColor: '#DFDFDF'}}>
                                            <View style={{alignItems: 'center'}}>
                                                <Text stye={[{
                                                    fontWeight: '700', textAlign: 'center',
                                                    color: '#5B626B',
                                                    fontSize: 18,
                                                    fontFamily: 'Poppins',
                                                }]}>
                                                    Last 10 Records
                                                </Text>
                                            </View>
                                            <View style={{
                                                borderTopWidth: 1,
                                                height: 0,
                                                borderColor: '#DEE2E6',
                                                zIndex: -1,
                                                marginLeft: 10,
                                                marginRight: 10,
                                                marginTop: 6,
                                                marginBottom: 2
                                            }}/>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 1, alignItems: 'center'}}>
                                                    <Text style={[styles.trucks_table_text]}>
                                                        Truck
                                                    </Text>
                                                </View>
                                                <View style={{flex: 1, alignItems: 'center'}}>
                                                    <Text style={[styles.trucks_table_text]}>
                                                        Acres Accumulated
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{
                                                borderTopWidth: 1,
                                                height: 0,
                                                borderColor: '#DEE2E6',
                                                zIndex: -1,
                                                marginLeft: 10,
                                                marginRight: 10,
                                                marginTop: 6,
                                                marginBottom: 2
                                            }}/>
                                            {this.state.local_summary !== '' && this.state.local_summary !== null ?
                                                <View>
                                                    {this.state.local_summary.daySummary.last_ten.length > 0 ?
                                                        <FlatList
                                                            data={this.state.local_summary.daySummary.last_ten}
                                                            extraData={this.state}
                                                            renderItem={({item}) =>
                                                                <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c6c6c6'}}>
                                                                    <View style={{flex: 1, alignItems: 'center'}}>
                                                                        <Text style={[styles.trucks_table_text]}>
                                                                            {item.truck}
                                                                        </Text>
                                                                    </View>
                                                                    <View style={{flex: 1, alignItems: 'center'}}>
                                                                        <Text style={[styles.trucks_table_text]}>
                                                                            {item.acres_harvested}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            }
                                                            keyExtractor={(index) => index.toString()}
                                                        /> :
                                                        <View style={{}}>
                                                            <View style={{flex: 1, alignItems: 'center'}}>
                                                                <Text style={[styles.trucks_table_text]}>

                                                                </Text>
                                                            </View>
                                                        </View>
                                                    }
                                                </View> :
                                                <View style={{}}>
                                                    <View style={{flex: 1, alignItems: 'center'}}>
                                                        <Text style={[styles.trucks_table_text]}>

                                                        </Text>
                                                    </View>
                                                </View>
                                            }
                                        </View>
                                    </View>
                                </View>
                                <View style={{flex: 6}}>
                                    <View>
                                        <View style={styles.row}>
                                            <Text style={[{
                                                marginRight: 5,
                                                color: '#3DB371',
                                                fontSize: 15,
                                                lineHeight: 30,
                                                fontFamily: 'Poppins',
                                            }]}>
                                                {Object.values(this.state.harvester_name)[0]}
                                            </Text>
                                            <Text style={[{
                                                marginRight: 5,
                                                color: '#3DB371',
                                                fontSize: 15,
                                                lineHeight: 30,
                                                fontFamily: 'Poppins',
                                            }]}>
                                                {Object.values(this.state.field)[0]}
                                            </Text>
                                            <Text style={{
                                                marginRight: 20,
                                                color: '#3DB371',
                                                fontSize: 15,
                                                lineHeight: 30,
                                                fontFamily: 'Poppins',
                                            }}>
                                                {Object.values(this.state.comb)[0]}
                                            </Text>
                                        </View>
                                        <Text style={{
                                            marginRight: 20,
                                            marginTop: 10,
                                            color: '#3DB371',
                                            fontSize: 15,
                                            lineHeight: 30,
                                            fontFamily: 'Poppins',
                                        }}>
                                            {Object.values(this.state.truck)[0]}
                                        </Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        marginRight: 80,
                                        marginTop: 5 }}>
                                        <View style={{flex: 5, flexDirection: 'row'}}>
                                            <View style={{flex: 3}}>
                                                <View style={{marginLeft: 0.04 * this.state.width}}>
                                                    <Text style={{
                                                        fontSize: 18,
                                                        fontFamily: 'Poppins',
                                                        fontWeight: 'bold',
                                                        color: 'black'
                                                    }}>
                                                        Accumulated Acres
                                                    </Text>
                                                </View>
                                                <View style={{
                                                    marginLeft: this.state.width / 23,
                                                    marginTop: 5,
                                                    paddingTop: 25,
                                                    height: 50,
                                                    width: 0.15 * this.state.width,
                                                    borderColor: '#A7A7A7',
                                                    alignItems: 'flex-end',
                                                    borderWidth: 1,
                                                    borderRadius: 2,
                                                    backgroundColor: 'white',
                                                }}>
                                                    <Text style={{
                                                        fontSize: 20,
                                                        paddingLeft: 20,
                                                        color: 'black',
                                                        lineHeight: 21,
                                                        fontFamily: 'Poppins',
                                                        bottom: 10,
                                                        right: 12,
                                                        fontWeight: '700'
                                                    }}>
                                                        {this.state.accumulatedAcres}
                                                    </Text>
                                                </View>
                                                <View style={{flexDirection: 'row', marginTop: 22}}>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres(7)}>
                                                        <Text style={styles.number_input}>
                                                            7
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres(8)}>
                                                        <Text style={styles.number_input}>
                                                            8
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres(9)}>
                                                        <Text style={styles.number_input}>
                                                            9
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{flexDirection: 'row', marginTop: 15}}>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres(4)}>
                                                        <Text style={styles.number_input}>
                                                            4
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres(5)}>
                                                        <Text style={styles.number_input}>
                                                            5
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres(6)}>
                                                        <Text style={styles.number_input}>
                                                            6
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{flexDirection: 'row', marginTop: 15}}>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres(1)}>
                                                        <Text style={styles.number_input}>
                                                            1
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres(2)}>
                                                        <Text style={styles.number_input}>
                                                            2
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres(3)}>
                                                        <Text style={styles.number_input}>
                                                            3
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{flexDirection: 'row', marginTop: 15}}>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres(0)}>
                                                        <Text style={styles.number_input}>
                                                            0
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres('.')}>
                                                        <Text style={styles.number_input}>
                                                            .
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={[{width: this.state.width / 12}, styles.number_box]}
                                                        onPress={() => this.accumulatedAcres('delete')}>
                                                        <Image source={require('../assets/Cross.png')}
                                                               style={{width: 35, height: 35}}/>
                                                    </TouchableOpacity>

                                                </View>
                                            </View>
                                            <View style={{flex: 3, alignItems: 'flex-start'}}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <Text style={{
                                                        fontSize: 18,
                                                        fontFamily: 'Poppins',
                                                        fontWeight: 'bold',
                                                        color: 'grey'
                                                    }}>
                                                        Last Accumulated Acres:
                                                    </Text>
                                                    {/*<TextInput*/}
                                                    {/*    style={{*/}
                                                    {/*        marginLeft: 10,*/}
                                                    {/*        paddingTop: 25,*/}
                                                    {/*        height: 30,*/}
                                                    {/*        width: 80,*/}
                                                    {/*        borderBottomColor: '#A7A7A7',*/}
                                                    {/*        borderBottomWidth: 1,*/}
                                                    {/*        fontSize: 14,*/}
                                                    {/*        paddingLeft: 20,*/}
                                                    {/*        color: 'grey',*/}
                                                    {/*        lineHeight: 21,*/}
                                                    {/*        textAlign: 'left',*/}
                                                    {/*        backgroundColor: 'white',*/}
                                                    {/*        fontFamily: 'Poppins',*/}
                                                    {/*    }}*/}
                                                    {/*    placeholderTextColor="#A7A7A7"*/}
                                                    {/*    value={this.state.comb_last_harvested.toString()}*/}
                                                    {/*    editable={false}*/}
                                                    {/*    autoCapitalize='none'*/}
                                                    {/*    maxLength={10000}*/}
                                                    {/*/>*/}
                                                    <View style={{
                                                        marginLeft: 10,
                                                        borderBottomColor: '#A7A7A7',
                                                        borderBottomWidth: 1,
                                                        paddingLeft: 10,
                                                        paddingRight: 10
                                                    }}>
                                                        <Text style={{
                                                            color: 'black',
                                                            textAlign: 'left',
                                                            fontSize: 18,
                                                            fontWeight: 'bold'
                                                        }}>
                                                            {this.state.comb_last_harvested}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View style={{marginTop: 105}}>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <Text style={{
                                                            fontSize: 18,
                                                            fontFamily: 'Poppins',
                                                            fontWeight: 'bold',
                                                            color: 'black',
                                                            marginTop: 12
                                                        }}>
                                                            Acres Harvested:
                                                        </Text>
                                                        <TextInput
                                                            style={{
                                                                marginLeft: 20,
                                                                height: 50,
                                                                paddingTop: 15,
                                                                width: 125,
                                                                borderColor: '#A7A7A7',
                                                                borderWidth: 1,
                                                                fontSize: 14,
                                                                paddingLeft: 20,
                                                                color: 'black',
                                                                borderRadius: 2,
                                                                textAlign: 'left',
                                                                backgroundColor: 'white',
                                                                fontFamily: 'Poppins',
                                                            }}
                                                            placeholderTextColor="#A7A7A7"
                                                            value={this.state.acresHarvested}
                                                            onChangeText={(acresHarvested) => this.setState({acresHarvested: acresHarvested})}
                                                            placeholder={'0'}
                                                            editable={true}
                                                            keyboardType={'numeric'}
                                                            autoCapitalize='none'
                                                            maxLength={10000}
                                                        />
                                                    </View>
                                                    <View style={{flexDirection: 'row', marginTop: 30}}>
                                                        <Text style={{
                                                            fontSize: 18,
                                                            fontFamily: 'Poppins',
                                                            fontWeight: 'bold',
                                                            color: 'black',
                                                            marginTop: 12
                                                        }}>
                                                            Load Percentage:
                                                        </Text>
                                                        <TextInput
                                                            style={{
                                                                marginLeft: 18,
                                                                height: 50,
                                                                width: 125,
                                                                borderColor: '#A7A7A7',
                                                                borderWidth: 1,
                                                                paddingTop: 15,
                                                                fontSize: 14,
                                                                paddingLeft: 20,
                                                                color: 'black',
                                                                borderRadius: 2,
                                                                lineHeight: 21,
                                                                textAlign: 'left',
                                                                backgroundColor: 'white',
                                                                fontFamily: 'Poppins',
                                                            }}
                                                            placeholderTextColor="#A7A7A7"
                                                            value={this.state.loadPercentage.toString()}
                                                            placeHolder={'100'}
                                                            onChangeText={(loadPercentage) => this.setState({loadPercentage: loadPercentage})}
                                                            editable={true}
                                                            keyboardType={'numeric'}
                                                            autoCapitalize='none'
                                                            maxLength={10000}
                                                        />
                                                    </View>
                                                    <View style={{marginTop: 30, marginLeft: 120}}>
                                                        {this.state.comments === '' ?
                                                            <TouchableOpacity style={{
                                                                width: 200,
                                                                height: 50,
                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }} onPress={() => this.openCommentsModal()}>
                                                                <Text style={{
                                                                    fontSize: 16,
                                                                    fontFamily: 'Poppins',
                                                                    fontWeight: 'bold',
                                                                    color: '#634720',
                                                                    textAlign: 'center'
                                                                }}>
                                                                    Add comment
                                                                </Text>
                                                            </TouchableOpacity> :
                                                            <TouchableOpacity style={{
                                                                width: 200,
                                                                height: 50,
                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }} onPress={() => this.openCommentsModal()}>
                                                                <Text style={{
                                                                    fontSize: 16,
                                                                    fontFamily: 'Poppins',
                                                                    fontWeight: 'bold',
                                                                    color: '#634720',
                                                                    textAlign: 'center'
                                                                }}>
                                                                    Show comment
                                                                </Text>
                                                            </TouchableOpacity>
                                                        }
                                                    </View>
                                                    <Modal isVisible={this.state.isComments}
                                                           onBackdropPress={() => this.setState({isComments: false})}
                                                           style={{
                                                               marginTop: 70,
                                                               backgroundColor: 'white',
                                                               height: 0,
                                                               borderWidth: 1,
                                                               borderColor: 'black'
                                                           }}>
                                                        <TextInput
                                                            placeholder={'Enter Comments'}
                                                            value={this.state.comments}
                                                            editable={true}
                                                            multiline={true}
                                                            numberOfLines={10}
                                                            onChangeText={(data) => this.setState({comments: data})}
                                                            style={{
                                                                backgroundColor: 'white',
                                                                color: 'black',
                                                                fontSize: 15,
                                                                padding: 15,
                                                                marginTop: 10,
                                                                margin: 10,
                                                                marginBottom: 0,
                                                                height: 150,
                                                                borderWidth: 1,
                                                                borderRadius: 5,
                                                                borderColor: 'black'
                                                            }}
                                                        />
                                                        <LinearGradient start={{x: 0.5, y: 0}} end={{x: 2, y: 0}}
                                                                        colors={['#634720', '#C99349']} style={{
                                                            width: 150,
                                                            top: 20,
                                                            marginLeft: 0.4 * this.state.width
                                                        }}>
                                                            <TouchableOpacity
                                                                onPress={() => this.setState({isComments: false})}>
                                                                <View style={{
                                                                    backgroundColor: '#634720',
                                                                    paddingTop: 15,
                                                                    paddingBottom: 15,
                                                                    width: 150
                                                                }}>
                                                                    <Text style={[{
                                                                        textAlign: 'center', fontSize: 14,
                                                                        fontFamily: 'Poppins',
                                                                        color: 'white',
                                                                        fontWeight: 'bold',
                                                                    }]}>
                                                                        SUBMIT
                                                                    </Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </LinearGradient>
                                                    </Modal>
                                                {this.state.acresHarvested !== 'NaN' && this.state.acresHarvested !== '0' && this.state.acresHarvested !== '0.0' && this.state.acresHarvested !== '0.00' && !this.state.isSubmit ?
                                                        <LinearGradient start={{x: 0.5, y: 0}} end={{x: 2, y: 0}}
                                                                        colors={['#634720', '#C99349']}
                                                                        style={{width: 125, top: 20, marginLeft: 173}}>
                                                            <TouchableOpacity onPress={() => this.goBack()}>
                                                                <View style={{
                                                                    backgroundColor: '#634720',
                                                                    paddingTop: 15,
                                                                    paddingBottom: 15,
                                                                    width: 125
                                                                }}>
                                                                    <Text style={[{
                                                                        textAlign: 'center', fontSize: 14,
                                                                        fontFamily: 'Poppins',
                                                                        color: 'white',
                                                                        fontWeight: 'bold',
                                                                    }]}>
                                                                        Submit
                                                                    </Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </LinearGradient> :
                                                        <LinearGradient start={{x: 0.5, y: 0}} end={{x: 2, y: 0}}
                                                                        colors={['grey', 'grey']}
                                                                        style={{width: 125, top: 20, marginLeft: 173}}>
                                                            <View style={{
                                                                backgroundColor: 'grey',
                                                                paddingTop: 15,
                                                                paddingBottom: 15,
                                                                width: 125 }}>
                                                                <Text style={[{
                                                                    textAlign: 'center', fontSize: 14,
                                                                    fontFamily: 'Poppins',
                                                                    color: 'white',
                                                                    fontWeight: 'bold', }]}>
                                                                    Submit
                                                                </Text>
                                                            </View>
                                                        </LinearGradient>
                                                    }
                                                </View>
                                            </View>
                                        </View>
                                        {/*<View style={{flex: 2, marginLeft: 10}}>*/}
                                        {/*    <Text stye={[{textDecorationLine: 'underline', fontWeight: '700'},styles.subHeading]}>*/}
                                        {/*        Day Total*/}
                                        {/*    </Text>*/}
                                        {/*    <Text style={styles.subHeading}>*/}
                                        {/*        Empty, No Day Information*/}
                                        {/*    </Text>*/}
                                        {/*    <Text stye={[{textDecorationLine: 'underline', fontWeight: '700', marginTop: 50},styles.subHeading]}>*/}
                                        {/*        Seed Lot Total*/}
                                        {/*    </Text>*/}
                                        {/*    <Text style={styles.subHeading}>*/}
                                        {/*        Empty, No Seed Lot Information*/}
                                        {/*    </Text>*/}
                                        {/*</View>*/}
                                    </View>
                                </View>
                            </View>
                        </View> :
                        <View style={{flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Spinner size={100} type={'ThreeBounce'} color={'#634720'} style={{alignItems: 'center', flex: 1, justifyContent: 'center', marginTop: 0.15*this.state.height}}/>
                        </View>
                    }
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 20,
        zIndex: -1
    },
    row: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subHeading: {
        color: '#634720',
        fontSize: 18,
        lineHeight: 30,
        fontFamily: 'Poppins',
    },
    text_input: {
    },
    number_box: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#EBEBEB',
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 8,
    },
    number_input: {
        fontSize: 27,
        fontFamily: 'Poppins',
        color: 'black',
        fontWeight: '700',
    },
    trucks_table_text: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Poppins',
        textAlign: 'center',
    },
});
