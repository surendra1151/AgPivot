import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Picker,
    FlatList,
    AsyncStorage, Dimensions, BackHandler,
} from 'react-native';
import { DropDown } from '../components/DropDownTwo';
import LinearGradient from "react-native-linear-gradient";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {NavigationActions, StackActions} from 'react-navigation';
import Spinner from 'react-native-spinkit';
import Modal from "react-native-modal";
import NetInfo from '@react-native-community/netinfo';
import {baseUrl} from '../constants/BaseUrl';
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('window');

export default class FieldVariety extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        const params = this.props.navigation.state.params;
        this.state = {
            user_credentials: '',
            operator_name: params.operator_name,
            harvester_name: params.name,
            fields: '',
            comb_options: '',
            selected_comb_options: '',
            selectedField: '',
            selectedComb: '',
            isDisplayLogout: false,
            isUpdate: false,
            isOpenDropDown: false,
            searchValue: '',
            searched_data: '',
            selectedGrower: '',
            post_data_field: '',
            length: 0,
            prev_length: 0,
            net_info: false,
            width: width,
            height: height,
            last_accumulated_acres: '',
        };
        this.getData = this.getData.bind(this);
        this.getTrucks = this.getTrucks.bind(this);
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
        // BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        AsyncStorage.getItem('loginCredentials').then((value) => {
            // Update State
            this.setState({
                user_credentials: JSON.parse(value)
            });
            AsyncStorage.getItem('harvestInfo').then((value) => {
                // Update State
                this.setState({
                    fields: (JSON.parse(value)).fieldOptions[this.state.operator_name],
                    comb_options: (JSON.parse(value)).combOptions
                });
                AsyncStorage.getItem('postDataInfo').then((value) => {
                    this.setState({
                        post_data_field: JSON.parse(value),
                    })
                    if(JSON.parse(value) !== null) {
                        this.setState({
                            length: JSON.parse(value).length,
                            prev_length: JSON.parse(value).length,
                        })
                    }
                    AsyncStorage.getItem("lastHarvestedAcres").then((value) => {
                        this.setState({
                            last_accumulated_acres: JSON.parse(value),
                        })
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
        // let intervalId  = setInterval(this.checkNetInfo, 60000);
        // this.setState({ intervalId: intervalId })
    }

    componentWillUnmount(): void {
        // clearInterval(this.state.intervalId)
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
        // this.setState({
        //     length: 0,
        //     post_data_field: ''
        // })
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
                if (this.state.length === this.state.prev_length && this.state.length !== 0) {
                    fetch(baseUrl + "/harvest", {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + this.state.user_credentials.token,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.state.post_data_field),
                    }).then((response) => response.json())
                        .then((responseJson) => {
                            if (responseJson.error !== true) {
                                AsyncStorage.setItem("SummaryData", JSON.stringify(responseJson));
                                AsyncStorage.removeItem("lastHarvestedAcres");
                                AsyncStorage.setItem("lastHarvestedAcres", JSON.stringify(responseJson.daySummary.accum_list));
                                AsyncStorage.removeItem('postDataInfo').then((value) => {
                                    console.log("The data is Uploaded & deleted", responseJson);
                                    this.setState({
                                        length: 0,
                                        post_data_field: '',
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

    getData(value, name) {
        if(name === 'Fields') {
            for(var key in this.state.fields) {
                if(this.state.fields[key] === value) {
                    console.log("The keys & values are:", key, value);
                    let key_in_object = {};
                    key_in_object[key] = value;
                    this.setState({
                        selectedField: key_in_object,
                    });
                    let combs = this.state.comb_options[key];
                    this.setState({
                        selected_comb_options: combs,
                        isUpdate: !this.state.isUpdate,
                        searched_data: Object.values(combs),

                        selectedGrower: '',
                        selectedComb: '',
                    });
                }
            }
        }
    }

    getTrucks() {
        this.props.navigation.navigate('Truck',{harvester_name: this.state.harvester_name, operator_name: this.state.operator_name, field: this.state.selectedField, comb: this.state.selectedComb, onNavigateBack: this.handleOnNavigateBack.bind(this) });
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


    opendropdown() {
        this.setState({
            isOpenDropDown: true,
        })
    }

    selectedItem(value) {
        this.setState({
            selectedGrower: value,
            isOpenDropDown: false,
        });
        for(var key in this.state.selected_comb_options) {
            if(this.state.selected_comb_options[key] === value) {
                console.log("The keys & values are:", key, value);
                let key_in_object = {};
                key_in_object[key] = value;
                this.setState({
                    selectedComb: key_in_object,
                });
            }
        }
    }

    searchData(data) {
        console.log();
        this.setState({
            searchValue: data,
        });
        var filtered_data = this.state.data.filter(name => name.includes(data));
        this.setState({
            searched_data: filtered_data,
        })
    }

    render() {
        console.log("Fields are:", this.state.selectedField, this.state.selectedComb);
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
                        <ScrollView style={{flexGrow: 1, zIndex: -1}}>
                            {this.state.fields !== '' && this.state.comb_options !== '' ?
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
                                    <View style={[{marginTop: 50}, styles.row]}>
                                        <View style={{marginRight: 30, left: 0.11*this.state.width}}>
                                            <View>
                                                <Text style={{
                                                    color: 'black',
                                                    textAlign: 'left',
                                                    fontSize: 14,
                                                    fontFamily: 'Poppins',
                                                    paddingBottom: 22,
                                                    fontWeight: '500'
                                                }}>
                                                    Field Number
                                                </Text>
                                                <DropDown name={"Fields"} data={Object.values(this.state.fields)}
                                                             defaultItem={'Select'} sendData={this.getData}/>
                                            </View>
                                        </View>
                                    </View>
                                    {this.state.selected_comb_options !== '' ?
                                        <View style={[{marginTop: 30}, styles.row]}>
                                            <View style={{marginRight: 30, left: 0.11*this.state.width}}>
                                                <View>
                                                    <Text style={{
                                                        color: 'black',
                                                        textAlign: 'left',
                                                        fontSize: 14,
                                                        fontFamily: 'Poppins',
                                                        fontWeight: '500',
                                                        top: 15
                                                    }}>
                                                        Color/variety, Grower
                                                    </Text>
                                                    {console.log("values of selected combs is:", Object.values(this.state.selected_comb_options))}
                                                    {/*<Dropdown name={"Combinations"}*/}
                                                    {/*          data={Object.values(this.state.selected_comb_options)}*/}
                                                    {/*          defaultItem={'Select'} sendData={this.getData}/>*/}
                                                    <View>
                                                        <Image source={require('../assets/Dropdown.png')} style={[{left: 0.27*this.state.width,},styles.dropdown]}/>
                                                        <TouchableOpacity onPress={() => this.opendropdown()} style={styles.text_input}>
                                                            <View style={{
                                                                width: 0.30 * this.state.width,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                borderColor: '#CED4DA',
                                                                borderRadius: 3,
                                                                marginTop: 5,
                                                                color: 'black' }}>
                                                                <Text style={{paddingLeft: 10, color: 'black', fontSize: 13, paddingTop: 11}}>
                                                                    {this.state.selectedGrower}
                                                                </Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <KeyboardAwareScrollView>
                                                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginLeft: 0.5*this.state.width, zIndex: 100000}}>
                                                                <Modal isVisible={this.state.isOpenDropDown} onBackdropPress={() => this.setState({ isOpenDropDown: false })} style={{marginTop: 50, marginLeft: this.state.width/2-160, backgroundColor: 'white', height: 0, borderWidth: 1, borderColor: 'black', width: 300}}>
                                                                    <TextInput
                                                                        placeholder={'Search'}
                                                                        value={this.state.searchValue}
                                                                        editable = {true}
                                                                        onChangeText={(data)=>this.searchData(data)}
                                                                        style={{backgroundColor: '#c6c6c6', color: 'black', fontSize: 15, padding: 15, marginTop: 10, margin: 10, marginBottom: 0}}
                                                                    />
                                                                    <View style={{position: 'relative', borderBottomWidth: 1, borderBottomColor: '#C6C6C6'}}>
                                                                        <Text style={{textAlign: 'center', fontSize: 25, color: 'black', paddingTop: 15, paddingBottom: 10}}>
                                                                            Select a Value
                                                                        </Text>
                                                                    </View>
                                                                    <ScrollView style={{flexGrow: 1, flex: 1}}>
                                                                        {this.state.searched_data.map((text, index) =>
                                                                            <TouchableOpacity key={index} onPress={() => this.selectedItem(text)}>
                                                                                <View style={{borderBottomWidth: 1, borderBottomColor: '#f2f2f2'}}>
                                                                                    <Text style={{fontSize: 20, color: 'black', paddingTop: 10, paddingBottom: 10, paddingLeft: 15}}>
                                                                                        {text}
                                                                                    </Text>
                                                                                </View>
                                                                            </TouchableOpacity>
                                                                        )}
                                                                    </ScrollView>
                                                                </Modal>
                                                            </View>
                                                        </KeyboardAwareScrollView>
                                                    </View>
                                                </View>
                                            </View>
                                        </View> :
                                        <View/>
                                    }
                                    <View>
                                        {this.state.selectedField !== '' && this.state.selectedComb !== '' ?
                                            <LinearGradient start={{x: 0.5, y: 0}} end={{x: 2, y: 0}}
                                                            colors={['#634720', '#C99349']}
                                                            style={[{width: this.state.width / 4}, styles.submitButton]}>
                                                <TouchableOpacity onPress={() => this.getTrucks()}>
                                                    <View style={{
                                                        borderRadius: 5,
                                                        width: this.state.width / 4,
                                                        height: 50,
                                                        alignSelf: 'center',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>
                                                        <Text style={styles.submit}>
                                                            Show Trucks
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </LinearGradient> :
                                            <View style={[{width: this.state.width / 4}, styles.submitButton]}>
                                                <View style={{
                                                    borderRadius: 5,
                                                    width: this.state.width / 4,
                                                    height: 50,
                                                    alignSelf: 'center',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'grey'
                                                }}>
                                                    <Text style={styles.submit}>
                                                        Show Trucks
                                                    </Text>
                                                </View>
                                            </View>
                                        }
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
    text_container: {
        marginTop: 50,
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
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: '#634720',
        paddingTop: 20,
        paddingBottom: 20,
        padding: 30,
        width: 300,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButton: {
        marginTop: 100
    },
    submit: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Poppins',
        textAlign: 'center',
        lineHeight: 40,
        color: 'white'
    },
    dropdown: {
        zIndex: 10000,
        width: 20,
        height: 20,
        top: 35
    },
});
