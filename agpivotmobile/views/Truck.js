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
    TouchableHighlight, ScrollView, BackHandler,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {NavigationActions, StackActions} from 'react-navigation';
import Spinner from 'react-native-spinkit';
import NetInfo from '@react-native-community/netinfo';
import {baseUrl} from '../constants/BaseUrl';
import Modal from "react-native-modal";
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('window');

export default class Truck extends React.Component {

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
            truck: '',
            isDisplayLogout: false,
            selected_truck: '',
            post_data_truck: '',
            length: 0,
            prev_length: '',
            net_info: false,
            day_summary: '',
            width: width,
            height: height,
            isUpdate: false,
            local_summary: '',
            last_accumulated_acres: '',
            comb_last_harvested: 0,
        };
        this.gotoDataEntryScreen = this.gotoDataEntryScreen.bind(this);
        this.checkNetInfo = this.checkNetInfo.bind(this);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount(): void {
        const initial = Orientation.getInitialOrientation();
        console.log("The Screen is in:", initial);
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
                    truck: (JSON.parse(value)).trucks_choices[this.state.operator_name]
                });
                AsyncStorage.getItem('postDataInfo').then((value) => {
                    this.setState({
                        post_data_truck: JSON.parse(value),
                    });
                    if(JSON.parse(value) !== null) {
                        this.setState({
                            length: JSON.parse(value).length,
                            prev_length: JSON.parse(value).length,
                        })
                    }
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
        let intervalId  = setInterval(this.checkNetInfo, 60000);
        this.setState({ intervalId: intervalId })
    }

    componentWillUnmount(): void {
        clearInterval(this.state.intervalId)
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
        this.setState({
            length: 0,
            post_data_truck: ''
        })
    }

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
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            this.setState({
                net_info: state.isConnected,
            });
            if(state.isConnected) {
                if(this.state.length !== 0 && this.state.prev_length === this.state.length) {
                    fetch(baseUrl + "/harvest", {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + this.state.user_credentials.token,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.state.post_data_truck),
                    }).then((response) => response.json())
                        .then((responseJson) => {
                            if (responseJson.error !== true) {
                                AsyncStorage.setItem("SummaryData", JSON.stringify(responseJson));
                                AsyncStorage.removeItem("lastHarvestedAcres");
                                AsyncStorage.setItem("lastHarvestedAcres", JSON.stringify(responseJson.daySummary.accum_list));
                                this.setState({
                                    day_summary: responseJson,
                                });
                                AsyncStorage.removeItem('postDataInfo').then((value) => {
                                    console.log("The data is Uploaded & deleted", responseJson);
                                    this.setState({
                                        length: 0,
                                        post_data_truck: '',
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

    gotoDataEntryScreen(item) {
        console.log("The Selected Truck is:", item);
        for(var key in this.state.truck) {
            if(this.state.truck[key] === item) {
                console.log("The keys & values are:", key, item);
                let key_in_object = {};
                key_in_object[key] = item;
                this.setState({
                    selected_truck: key_in_object,
                });
                this.props.navigation.replace('Data',{ harvester_name: this.state.harvester_name, operator_name: this.state.operator_name, field: this.state.field, comb: this.state.comb, truck: key_in_object, length: this.state.length, onNavigateBack: this.handleOnNavigateBack.bind(this) });
            }
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
        console.log("I am logging out");
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
                        console.log("Data of harvest table is:", responseJson);
                        AsyncStorage.setItem("harvestInfo", JSON.stringify(responseJson));
                    } else {
                        alert("The field info can't be synced right now, Please try after some time!");
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
        const data = Object.values(this.state.truck);
        console.log("The local summary in Truck Screen is:", this.state.local_summary, this.state.comb);
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
                    {this.state.truck !== '' && this.state.local_summary !== '' ?
                            <View style={styles.container}>
                                <Text style={{
                                    fontSize: 35,
                                    fontWeight: 'bold',
                                    fontFamily: 'Poppins',
                                    lineHeight: 40,
                                    color: 'black',
                                    textAlign: 'center' }}>
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
                                            {/*<View>*/}
                                            {/*    <View style={{flexDirection: 'row'}}>*/}
                                            {/*        <Image source={require('../assets/no-wifi.png')} style={{width: 30}}/>*/}
                                            {/*        <Text>*/}
                                            {/*            No Internet*/}
                                            {/*        </Text>*/}
                                            {/*    </View>*/}
                                            {/*</View>*/}
                                            <View style={{borderBottomWidth: 0, flexDirection: 'row', borderWidth: 1, borderRadius: 5, borderColor: '#DFDFDF', width: 300}}>
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
                                                    <Text stye={[{fontWeight: '700', textAlign: 'center',
                                                        color: '#5B626B',
                                                        fontSize: 18,
                                                        fontFamily: 'Poppins',}]}>
                                                        Last 10 Records
                                                    </Text>
                                                </View>
                                                <View style={{borderTopWidth: 1, height: 0, borderColor: '#DEE2E6', zIndex: -1, marginLeft: 10, marginRight: 10, marginTop: 6, marginBottom: 2}}/>
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
                                                <View style={{borderTopWidth: 1, height: 0, borderColor: '#DEE2E6', zIndex: -1, marginLeft: 10, marginRight: 10, marginTop: 6, marginBottom: 2}}/>
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
                                        <View style={{marginLeft: 5}}>
                                            <View style={styles.row}>
                                                <Text style={[{marginRight: 20,
                                                    color: '#3DB371',
                                                    fontSize: 15,
                                                    lineHeight: 30,
                                                    fontFamily: 'Poppins',}]}>
                                                    {Object.values(this.state.harvester_name)[0]}
                                                </Text>
                                                <Text style={[{marginRight: 20,
                                                    color: '#3DB371',
                                                    fontSize: 15,
                                                    lineHeight: 30,
                                                    fontFamily: 'Poppins',}]}>
                                                    {Object.values(this.state.field)[0]}
                                                </Text>
                                                <Text style={{marginRight: 20,
                                                    color: '#3DB371',
                                                    fontSize: 15,
                                                    lineHeight: 30,
                                                    fontFamily: 'Poppins',}}>
                                                    {Object.values(this.state.comb)[0]}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{flex: 1, justifyContent: 'flex-start', marginLeft: 20, marginRight: 10, marginTop: 30}}>
                                            <Text style={{color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '700'}}>
                                                Select Truck
                                            </Text>
                                            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                                                <View style={{ zIndex: 10000000, height: 0.6 * this.state.height, marginRight: 50}}>
                                                <FlatList
                                                    data={data}
                                                    numColumns={4}
                                                    extraData={this.state}
                                                    renderItem={({item}) =>
                                                        <LinearGradient start={{x: 0.5, y: 0}} end={{x: 2, y: 0}}
                                                            colors={['#634720', '#C99349']}
                                                            style={{width: this.state.width / 8, margin: 7}}>
                                                            <TouchableOpacity onPress={() => this.gotoDataEntryScreen(item)}>
                                                    <View style={{
                                                        width: this.state.width / 9,
                                                        alignSelf: 'center',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderRadius: 5,
                                                        height: 80 }}>
                                                    <Text style={{
                                                        color: 'white',
                                                        fontSize: 16,
                                                        lineHeight: 25,
                                                        fontFamily: 'Poppins',
                                                        textAlign: 'center'}}>
                                                        {item}
                                                    </Text>
                                                </View>
                                                </TouchableOpacity>
                                                </LinearGradient>
                                                }
                                                keyExtractor={(index) => index.toString()}
                                                />
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
                            </View>
                         :
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
    trucks_table_text: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Poppins',
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Poppins',
        textAlign: 'center'
    }
});
