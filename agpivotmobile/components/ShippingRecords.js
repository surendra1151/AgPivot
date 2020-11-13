import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ScrollView,
    FlatList,
    Alert,

} from 'react-native';
import {DropDown} from "../components/DropDownOne";
import Modal from "react-native-modal";
import LinearGradient from "react-native-linear-gradient";
export class ShippingRecords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:[
                "10",
                "25",
                "50",
                "100"
            ],
            table:[
                {
                    "Record": " 1 ",
                    "date": "08-01-2019",
                    "time": "06:32",
                    "location":"Arena",
                    "color": "Golden Colomba",
                    "seed": "Norbest Farms",
                    "harvester": "Jeff Vossekuil",
                    "truck": "85-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"first load of 2019 semi #5316",
                    "consignment":"",
                },
                {
                    "Record": " 2 ",
                    "date": "08-01-2019",
                    "time": "06:32",
                    "location":"Arena",
                    "color": "Golden Colomba",
                    "seed": "Norbest Farms",
                    "harvester": "Jeff Vossekuil",
                    "truck": "96-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"first load of 2019 semi #5316",
                    "consignment":"",
                },
                {
                    "Record": " 3 ",
                    "date": "08-01-2019",
                    "time": "06:32",
                    "location":"Arena",
                    "color": "Golden Colomba",
                    "seed": "Norbest Farms",
                    "harvester": "Jeff Vossekuil",
                    "truck": "95-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"first load of 2019 semi #5316",
                    "consignment":"",
                },
                {
                    "Record": " 4 ",
                    "date": "08-01-2019",
                    "time": "06:32",
                    "location":"Arena",
                    "color": "Golden Colomba",
                    "seed": "Norbest Farms",
                    "harvester": "Jeff Vossekuil",
                    "truck": "10-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"first load of 2019 semi #5316",
                    "consignment":"",
                },
                {
                    "Record": " 5 ",
                    "date": "08-01-2019",
                    "time": "06:32",
                    "location":"Arena",
                    "color": "Golden Colomba",
                    "seed": "Norbest Farms",
                    "harvester": "Jeff Vossekuil",
                    "truck": "92-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"Semi #4852 Should be truck 95",
                    "consignment":"",
                }, {
                    "Record": " 6 ",
                    "date": "08-01-2019",
                    "time": "08:22",
                    "location":"Arena",
                    "color": "Golden Colomba",
                    "seed": "Norbest Farms",
                    "harvester": "Jeff Vossekuil",
                    "truck": "92-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"Semi #4852 Should be truck 99",
                    "consignment":"",
                }, {
                    "Record": " 7 ",
                    "date": "08-01-2019",
                    "time": "08:50",
                    "location":"Arena",
                    "color": "Golden Colomba",
                    "seed": "Norbest Farms",
                    "harvester": "Jeff Vossekuil",
                    "truck": "96-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"Semi #4842 1/4 99, 92, 85",
                    "consignment":"",
                },
                {
                    "Record": " 8 ",
                    "date": "08-01-2019",
                    "time": "08:50",
                    "location":"Arena",
                    "color": "Red Norland",
                    "seed": "J.D. Miller Seed Farm",
                    "harvester": "Jeff Vossekuil",
                    "truck": "99-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"Semi#4836 Truck 96 Drop, tube in trailer",
                    "consignment":"",
                }, {
                    "Record": " 9 ",
                    "date": "08-01-2019",
                    "time": "08:50",
                    "location":"Arena",
                    "color": "Red Norland",
                    "seed": "J.D. Miller Seed Farm",
                    "harvester": "Jeff Vossekuil",
                    "truck": "92-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"Semi#4836 Truck 99 Drop, tube in trailer",
                    "consignment":"",
                }, {
                    "Record": "10",
                    "date": "08-01-2019",
                    "time": "09:13",
                    "location":"Arena",
                    "color": "Red Norland",
                    "seed": "J.D. Miller Seed Farm",
                    "harvester": "Jeff Vossekuil",
                    "truck": "95-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"first load of 2019 semi #5316",
                    "consignment":"",
                }, {
                    "Record": "11",
                    "date": "08-01-2019",
                    "time": "09:36",
                    "location":"Arena",
                    "color": "Red Norland",
                    "seed": "J.D. Miller Seed Farm",
                    "harvester": "Jeff Vossekuil",
                    "truck": "92-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"first load of 2019 semi #5316",
                    "consignment":"",
                },
                {
                    "Record": "12",
                    "date": "08-01-2019",
                    "time": "10:10",
                    "location":"Arena",
                    "color": "Red Norland",
                    "seed": "J.D. Miller Seed Farm",
                    "harvester": "Jeff Vossekuil",
                    "truck": "96-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"67.3",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"first load of 2019 semi #5316",
                    "consignment":"",
                },
                {
                    "Record": "13",
                    "date": "08-01-2019",
                    "time": "10:10",
                    "location":"Arena",
                    "color": "Red Norland",
                    "seed": "J.D. Miller Seed Farm",
                    "harvester": "Jeff Vossekuil",
                    "truck": "85-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"73",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"truck 95",
                    "consignment":"",
                },
                {
                    "Record": "14",
                    "date": "08-01-2019",
                    "time": "10:10",
                    "location":"Arena",
                    "color": "Red Norland",
                    "seed": "J.D. Miller Seed Farm",
                    "harvester": "Jeff Vossekuil",
                    "truck": "92-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"73",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"truck 99",
                    "consignment":"",
                }, {
                    "Record": "15",
                    "date": "08-01-2019",
                    "time": "10:10",
                    "location":"Arena",
                    "color": "Red Norland",
                    "seed": "J.D. Miller Seed Farm",
                    "harvester": "Jeff Vossekuil",
                    "truck": "85-Oshkosh Truck",
                    "line":"0",
                    "bin":"",
                    "temp":"73",
                    "destination":"semi",
                    "box":"",
                    "weight":"300",
                    "operators":"",
                    "equipments":"",
                    "comments":"truck 92 Semi Drop trailer#4837 tube in",
                    "consignment":"",
                },
            ],
            truck_table:[
                {
                    "Record": " 1 ",
                    "date": "08-28-2019",
                    "time": "11:21",
                    "truck":"96-Oshkosh Truck",
                    "load": "75",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "Hope this works!",
                    "storage":"",
                    "operators":"",
                    "equipments":"",

                },
                {
                    "Record": " 2 ",
                    "date": "08-29-2019",
                    "time": "06:46",
                    "truck":"65-Oshkosh Truck",
                    "load": "75",
                    "line": "1",
                    "color": "Red Norland\n" +
                        "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                },
                {
                    "Record": " 3 ",
                    "date": "08-29-2019",
                    "time": "08:59",
                    "truck":"62-Oshkosh Truck",
                    "load": "50",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                },
                {
                    "Record": " 4 ",
                    "date": "08-30-2019",
                    "time": "10:33",
                    "truck":"73-Oshkosh Truck",
                    "load": "80",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                },
                {
                    "Record": " 5 ",
                    "date": "09-03-2019",
                    "time": "15:38",
                    "truck":"215-Oshkosh Truck",
                    "load": "90",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                }, {
                    "Record": " 6 ",
                    "date": "09-03-2019",
                    "time": "15:38",
                    "truck":"91-Oshkosh Truck",
                    "load": "60",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                }, {
                    "Record": " 7 ",
                    "date": "09-03-2019",
                    "time": "15:38",
                    "truck":"87-Oshkosh Truck",
                    "load": "70",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                },
                {
                    "Record": " 8 ",
                    "date": "09-04-2019",
                    "time": "08:50",
                    "truck":"215-Oshkosh Truck",
                    "load": "50",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                }, {
                    "Record": " 9 ",
                    "date": "09-05-2019",
                    "time": "07:39",
                    "truck":"62-Oshkosh Truck",
                    "load": "60",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                }, {
                    "Record": "10",
                    "date": "09-06-2019",
                    "time": "06:47",
                    "truck":"65-Oshkosh Truck",
                    "load": "75",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                }, {
                    "Record": "11",
                    "date": "09-06-2019",
                    "time": "13:29",
                    "truck":"91-Oshkosh Truck",
                    "load": "65",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                },
                {
                    "Record": "12",
                    "date": "09-09-2019",
                    "time": "06:54",
                    "truck":"65-Oshkosh Truck",
                    "load": "65",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "Entered late, these A trucks were not accounted for on Friday",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                },
                {
                    "Record": "13",
                    "date": "09-09-2019",
                    "time": "14:12",
                    "truck":"73-Oshkosh Truck",
                    "load": "15",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                },
                {
                    "Record": "14",
                    "date": "09-09-2019",
                    "time": "14:12",
                    "truck":"65-Oshkosh Truck",
                    "load": "75",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                },
                {
                    "Record": "15",
                    "date": "09-09-2019",
                    "time": "14:12",
                    "truck":"65-Oshkosh Truck",
                    "load": "80",
                    "line": "1",
                    "color": "Russet Goldrush",
                    "comments": "",
                    "storage":"",
                    "operators":"",
                    "equipments":"",
                },
            ],

            isOpenModal:false,
            currentSort: 'no',
            currentSortDir: 'asc',
            shipping:"farm",
            isOpenSecondModal:false,
            isOpenThirdModal:false,

        }

    }

    OpenModal(){
        this.setState({isOpenModal:true});
    }
    OpenSecondModal(){
        this.setState({isOpenSecondModal:true});
    }
    OpenThirdModal(){
        this.setState({isOpenThirdModal:true});
    }

    Close(){
        console.log('working?',this.state.isOpenThirdModal)
        this.setState({isOpenThirdModal:false});
    }
    sort(key) {
        console.log(
            'working',
            key,
            this.state.currentSort,
            this.state.currentSortDir,
        );
        if (key === this.state.currentSort) {
            console.log('I am in same currentSort', this.state.currentSortDir);
            if (this.state.currentSortDir === 'asc') {
                this.setState({currentSortDir: 'desc'});
            } else {
                this.setState({currentSortDir: 'asc'});
            }
        }
        this.setState({
            currentSort: key,
        });
        console.log(
            'is it working',
            this.state.currentSort,
            this.state.currentSortDir,
        );
        if (this.state.currentSortDir === 'desc') {
            const data = {name: key, sortby: 'asc'};
            this.state.table.sort((a, b) => {
                let modifier = 1;
                if (data.sortby === 'asc') {
                    modifier = -1;
                }
                if (a[data.name] < b[data.name]) {
                    return -1 * modifier;
                }
                if (a[data.name] > b[data.name]) {
                    return 1 * modifier;
                }
                return this.state.table;
            });
        } else {
            const data = {name: key, sortby: 'desc'};
            this.state.table.sort((a, b) => {
                let modifier = 1;
                if (data.sortby === 'asc') {
                    modifier = -1;
                }
                if (a[data.name] < b[data.name]) {
                    return -1 * modifier;
                }
                if (a[data.name] > b[data.name]) {
                    return 1 * modifier;
                }
                return this.state.table;
            });
        }
        console.log('values:', this.state.currentSort, this.state.currentSortDir);
    }
    shipping(name){
        if (name==='farm'){
            this.setState({shipping:'farm'})
        }
        else if (name==='btruck'){
            this.setState({shipping:'btruck'})
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.show}>Show</Text>
                        <View style={{width:50}}>
                            <DropDown name={"select"} value={"10"} defaultItem={"10"} data={this.state.show}/>
                        </View>
                        <Text style={styles.entries}>entries</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.search}>search:</Text>
                        <TextInput
                            style={{
                                height:30,
                                width:225,
                                marginRight:24,
                                borderWidth:0.6,
                                marginTop:20,
                                borderTopWidth:0.6,
                                borderLeftWidth:0.5,
                                borderRightWidth:0.8,
                                borderBottomWidth:0.6

                            }}/>

                    </View>

                </View>
                {this.state.shipping === 'farm' ?
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 85, marginTop: 20, borderWidth: 0.8}}>
                        <TouchableHighlight onPress={() => this.shipping('farm')}>
                            <LinearGradient
                                start={{x: 0.5, y: 0}}
                                end={{x: 2, y: 0}}
                                colors={['#634720', '#C99349']}>
                                <Text style={styles.storage}>Farm Storage</Text>
                            </LinearGradient>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight onPress={() => this.shipping('btruck')}>
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
                                marginTop: 20,
                                borderRightWidth: 0.8,
                            }}>
                            <Text style={styles.btruck}>B Truck</Text>
                        </View>
                    </TouchableHighlight>

                </View> :
                    <View style={{flexDirection: 'row'}}>
                        <TouchableHighlight onPress={() => this.shipping('farm')}>
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
                                    marginTop: 20,
                                    borderRightWidth: 0.8,
                                    marginLeft: 85
                                }}>
                                <Text style={styles.storages}>Farm Storage</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.shipping('btruck')}>
                            <View style={{marginTop: 20, borderWidth: 0.8}}>
                                <LinearGradient
                                    start={{x: 0.5, y: 0}}
                                    end={{x: 2, y: 0}}
                                    colors={['#634720', '#C99349']}>
                                    <Text style={styles.btrucks}>B Truck</Text>
                                </LinearGradient>
                            </View>
                        </TouchableHighlight>
                    </View>
                }
                {this.state.shipping === 'farm' ?
                    <ScrollView horizontal={true} vertical={true} scrollEnabled={true}
                                onContentSizeChange={this.onContentSizeChange}>
                        <View style={{flex: 1}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableHighlight onPress={() => this.sort('no')}>
                                        <Text style={styles.yash}>Record ID</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 50}}>
                                    <TouchableHighlight onPress={() => this.sort('date')}>
                                        <Text style={styles.shipping}>Date</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('time')}>
                                        <Text style={styles.shipping}>Time</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('location')}>
                                        <Text style={styles.shipping}>Location</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('color')}>
                                        <Text style={styles.shipping}>Color</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('seed')}>
                                        <Text style={styles.shipping}>Seed Grower</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 70}}>
                                    <TouchableHighlight onPress={() => this.sort('harvestor')}>
                                        <Text style={styles.shipping}>Harvestor</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 80}}>
                                    <TouchableHighlight onPress={() => this.sort('truck')}>
                                        <Text style={styles.shipping}>Truck</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 70}}>
                                    <TouchableHighlight onPress={() => this.sort('line')}>
                                        <Text style={styles.shipping}>Line No</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('bin')}>
                                        <Text style={styles.shipping}>Bin No</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('temp')}>
                                        <Text style={styles.shipping}>Pulp Temp</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('destination')}>
                                        <Text style={styles.shipping}>Destination</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('box')}>
                                        <Text style={styles.shipping}>Box No</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('weight')}>
                                        <Text style={styles.shipping}>Approximate Weight</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('operators')}>
                                        <Text style={styles.shipping}>Operators</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 70}}>
                                    <TouchableHighlight onPress={() => this.sort('equipments')}>
                                        <Text style={styles.shipping}>Equipments</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('comments')}>
                                        <Text style={styles.shipping}>Comments</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>
                                <View style={{flexDirection: 'row', marginLeft: 60}}>
                                    <TouchableHighlight onPress={() => this.sort('consignment')}>
                                        <Text style={styles.shipping}>Consignment</Text>
                                    </TouchableHighlight>
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/>
                                </View>


                            </View>
                            <View style={{
                                borderWidth: 1,
                                height: 0,
                                borderColor: '#D7D9E0',
                                marginLeft: 100,
                                marginTop: 10
                            }}/>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <FlatList
                                    data={this.state.table}
                                    renderItem={({item}) => (
                                        <View>
                                            <View style={{flexDirection: 'row', marginTop: 10, color: '#686868'}}>
                                                <Text style={styles.record}> {item.Record}</Text>
                                                <Text style={styles.date}>{item.date}</Text>
                                                <Text style={styles.time}>{item.time}</Text>
                                                <Text style={styles.location}>{item.location}</Text>
                                                <Text style={styles.color}>{item.color}</Text>
                                                <Text style={styles.seed}>{item.seed}</Text>
                                                <Text style={styles.harvestor}>{item.harvester}</Text>
                                                <Text style={styles.truck}>{item.truck}</Text>
                                                <Text style={styles.line}>{item.line}</Text>
                                                <Text style={styles.bin}>{item.bin}</Text>
                                                <Text style={styles.temp}>{item.temp}</Text>
                                                <Text style={styles.desti}>{item.destination}</Text>
                                                <Text style={styles.box}>{item.box}</Text>
                                                <Text style={styles.weigh}>{item.weight}</Text>
                                                <View>
                                                    <TouchableHighlight onPress={() => this.OpenModal()}>
                                                        <View>
                                                            <Text style={styles.view}>View</Text>
                                                            <Text style={styles.operator}>Operators</Text>
                                                        </View>
                                                    </TouchableHighlight>
                                                </View>
                                                <View>
                                                    <TouchableHighlight onPress={() => this.OpenSecondModal()}>
                                                        <View>
                                                            <Text style={styles.view}>View</Text>
                                                            <Text style={styles.operator}>Equipments</Text>
                                                        </View>
                                                    </TouchableHighlight>
                                                </View>
                                                <Text style={styles.comments}>{item.comments}</Text>
                                                <Text style={styles.consignment}>{item.consignment}</Text>


                                            </View>
                                            <View style={{
                                                borderWidth: 1,
                                                height: 0,
                                                borderColor: '#D7D9E0',
                                                marginLeft: 100,
                                                marginTop: 10
                                            }}/>
                                        </View>
                                    )}
                                    keyExtractor={(item) => item.toString()}
                                    extraData={this.state}
                                />

                            </View>
                            <Modal
                                isVisible={this.state.isOpenModal}
                                style={{
                                    marginTop: 40,
                                    width: 600,
                                    backgroundColor: 'white',
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    marginLeft: 300,
                                    marginBottom: 400,
                                    paddingTop: 0
                                }}>
                                <View style={{flex: 0}}>
                                    <View style={{
                                        marginTop: 0,
                                        bottom: 0,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                        <TouchableHighlight onPress={() => this.setState({isOpenModal: false})}>
                                            <Text style={styles.close}>Close</Text>
                                        </TouchableHighlight>
                                    </View>

                                </View>
                            </Modal>
                            <Modal
                                isVisible={this.state.isOpenSecondModal}
                                style={{
                                    marginTop: 40,
                                    width: 600,
                                    backgroundColor: 'white',
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    marginLeft: 300,
                                    marginBottom: 400,
                                    paddingTop: 0
                                }}>
                                <View style={{flex: 0}}>
                                    <View style={{
                                        marginTop: 0,
                                        bottom: 0,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                        <TouchableHighlight onPress={() => this.setState({isOpenSecondModal: false})}>
                                            <Text style={styles.close}>Close</Text>
                                        </TouchableHighlight>
                                    </View>

                                </View>
                            </Modal>
                        </View>
                    </ScrollView> :
                    <View>
                        <ScrollView horizontal={true} vertical={true} scrollEnabled={true}
                                    onContentSizeChange={this.onContentSizeChange}>
                            <View style={{flex: 1,marginBottom:200}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <TouchableHighlight onPress={() => this.sort('no')}>
                                            <Text style={styles.yash}>Record ID</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 50}}>
                                        <TouchableHighlight onPress={() => this.sort('date')}>
                                            <Text style={styles.shipping}>Date</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 60}}>
                                        <TouchableHighlight onPress={() => this.sort('time')}>
                                            <Text style={styles.shipping}>Time</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 60}}>
                                        <TouchableHighlight onPress={() => this.sort('location')}>
                                            <Text style={styles.shipping}>Truck</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 60}}>
                                        <TouchableHighlight onPress={() => this.sort('color')}>
                                            <Text style={styles.shipping}>Truck Load%</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 60}}>
                                        <TouchableHighlight onPress={() => this.sort('seed')}>
                                            <Text style={styles.shipping}>Line No</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 70}}>
                                        <TouchableHighlight onPress={() => this.sort('harvestor')}>
                                            <Text style={styles.shipping}>Color</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 100}}>
                                        <TouchableHighlight onPress={() => this.sort('truck')}>
                                            <Text style={styles.shipping}>Comments</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 70}}>
                                        <TouchableHighlight onPress={() => this.sort('line')}>
                                            <Text style={styles.shipping}>Storage Trucks</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 60}}>
                                        <TouchableHighlight onPress={() => this.sort('bin')}>
                                            <Text style={styles.shipping}>Operators</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 60}}>
                                        <TouchableHighlight onPress={() => this.sort('temp')}>
                                            <Text style={styles.shipping}>Equipments</Text>
                                        </TouchableHighlight>
                                        <Image source={require('../assets/Uparrow.png')}
                                               style={{marginTop: 44, marginLeft: 7.67,}}/>
                                        <Image source={require('../assets/Downarrow.png')}
                                               style={{marginTop: 44, marginLeft: 3}}/>
                                    </View>
                                </View>
                                <View style={{
                                    borderWidth: 1,
                                    height: 0,
                                    borderColor: '#D7D9E0',
                                    marginLeft: 100,
                                    marginTop: 10
                                }}/>
                                <View style={{ flexDirection: 'column'}}>
                                    <FlatList
                                        data={this.state.truck_table}
                                        renderItem={({item}) => (
                                            <View>
                                                <View style={{flexDirection: 'row', marginTop: 10, color: '#686868'}}>
                                                    <Text style={styles.record}> {item.Record}</Text>
                                                    <Text style={styles.date}>{item.date}</Text>
                                                    <Text style={styles.time}>{item.time}</Text>
                                                    <Text style={styles.b_truck}>{item.truck}</Text>
                                                    <Text style={styles.b_load}>{item.load}</Text>
                                                    <Text style={styles.b_line}>{item.line}</Text>
                                                    <Text style={styles.b_color}>{item.color}</Text>
                                                    <Text style={styles.b_comments}>{item.comments}</Text>
                                                    <View>
                                                        <TouchableHighlight onPress={() => this.OpenModal()}>
                                                            <View>
                                                                <Text style={styles.storage_view}>View</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    </View>
                                                    <View>
                                                        <TouchableHighlight onPress={() => this.OpenSecondModal()}>
                                                            <View>
                                                                <Text style={styles.operator_view}>View</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    </View>
                                                    <View>
                                                        <TouchableHighlight onPress={() => this.OpenThirdModal()}>
                                                            <View>
                                                                <Text style={styles.equipment_view}>View</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    </View>


                                                </View>
                                                <View style={{
                                                    borderWidth: 1,
                                                    height: 0,
                                                    borderColor: '#D7D9E0',
                                                    marginLeft: 100,
                                                    marginTop: 10
                                                }}/>
                                            </View>
                                        )}
                                        keyExtractor={(item) => item.toString()}
                                        extraData={this.state}
                                    />

                                </View>
                                <Modal
                                    isVisible={this.state.isOpenModal}
                                    style={{
                                        marginTop: 40,
                                        width: 600,
                                        backgroundColor: 'white',
                                        borderColor: 'black',
                                        borderWidth: 1,
                                        marginLeft: 300,
                                        marginBottom: 400,
                                        paddingTop: 0
                                    }}>
                                    <View style={{flex: 0}}>
                                        <View style={{
                                            marginTop: 0,
                                            bottom: 0,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                            <TouchableHighlight onPress={() => this.setState({isOpenModal: false})}>
                                                <Text style={styles.close}>Close</Text>
                                            </TouchableHighlight>
                                        </View>

                                    </View>
                                </Modal>
                                <Modal
                                    isVisible={this.state.isOpenSecondModal}
                                    style={{
                                        marginTop: 40,
                                        width: 600,
                                        backgroundColor: 'white',
                                        borderColor: 'black',
                                        borderWidth: 1,
                                        marginLeft: 300,
                                        marginBottom: 400,
                                        paddingTop: 0
                                    }}>
                                    <View style={{flex: 0}}>
                                        <View style={{
                                            marginTop: 0,
                                            bottom: 0,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                            <TouchableHighlight onPress={() => this.setState({isOpenSecondModal: false})}>
                                                <Text style={styles.close}>Close</Text>
                                            </TouchableHighlight>
                                        </View>

                                    </View>
                                </Modal>
                                <Modal
                                    isVisible={this.state.isOpenThirdModal}
                                    style={{
                                        marginTop: 40,
                                        width: 600,
                                        backgroundColor: 'white',
                                        borderColor: 'black',
                                        borderWidth: 1,
                                        marginLeft: 300,
                                        marginBottom: 400,
                                        paddingTop: 0
                                    }}>
                                    <View style={{flex: 0}}>
                                        <View style={{
                                            marginTop: 0,
                                            bottom: 0,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                            <TouchableHighlight onPress={() => this.setState({isOpenThirdModal: false})}>
                                                <Text style={styles.close}>Close</Text>
                                            </TouchableHighlight>
                                        </View>

                                    </View>
                                </Modal>
                            </View>
                        </ScrollView>
                    </View>
                }
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text style={styles.list}>Showing 1 to 15 of 15 entries</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.prev}>Prev</Text>
                        <Text style={styles.num}> 1</Text>
                        <Text style={styles.num}> 2</Text>
                        <Text style={styles.next}>Next</Text>

                    </View>
                </View>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    show: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#686868',
        marginLeft: 100,
        marginTop: 20,
    },
    entries: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#686868',
        marginTop: 20,
        marginLeft: 10,
    },
    search: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#686868',
        marginTop: 20,
        marginRight: 10,
    },
    yash: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#686868',
        marginLeft: 100,
        marginTop: 39,
    },
    shipping: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#686868',
        marginTop: 39,
    },
    record:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:100,
        width:50,
    },
    date:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:72,
        width:100,
    },
    time:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:30,
        width:75,
    },
    location:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:45,
        width:80,
        paddingLeft:7,
    },
    color:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:58,
        width:100,
        paddingRight:15
    },
    seed:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:35,
        width:100,
        paddingRight:15
    },
    harvestor:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:50,
        width:120,
        paddingRight:15
    },
    truck:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:30,
        width:150,
        paddingRight:15
    },
    line:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:30,
        width:30,
        paddingRight:15
    },
    bin:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:30,
        width:50,
        paddingRight:15
    },
    temp:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:150,
        width:75,
        paddingRight:15
    },
    desti:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:80,
        width:75,
        paddingRight:15
    },
    box:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:140,
        width:50,
        paddingRight:15
    },
    weigh:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:60,
        width:75,
        paddingRight:15
    },
    comments:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:60,
        width:150,
        paddingRight:60
    },
    consignment:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:140,
        width:50,
        paddingRight:15
    },
    view:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:90,
        width:50,
        paddingRight: 15,
        borderBottomWidth:1,
        height:25,
        borderColor:'#634720',
        color:'#634720',
        textAlign:'center',
    },
    operator:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:90,
        // width:60,
        paddingRight: 15,
        borderBottomWidth:1,
        height:25,
        borderColor:'#634720',
        color:'#634720',
        textAlign:'center',
    },
    sample:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:40,
        width:170,
        paddingRight: 15,
        borderWidth:1,
        height:35,
        backgroundColor:'#634720',
        color:'white',
        textAlign:'center',
        paddingTop:7,
        paddingLeft:7
    },
    destination:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:100,
        width:60,
        borderWidth:1,
        backgroundColor:'#634720',
        color:'white',
        height:30,
        textAlign:'center',
        paddingTop:5
    },
    seed_cutting:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        color: '#686868',
        marginLeft:10
    },
    close:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        borderWidth:1,
        backgroundColor:'#634720',
        color:'white',
        width:60,
        height:30,
        textAlign: 'center',
        paddingTop: 4,
        marginTop:5,
        marginRight: 10
    },
    whole_seed:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        color: '#686868',
        marginLeft:10,
    },
    details:{
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#5b626b',
        marginLeft:10
    },
    details_size:{
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#5b626b',
        marginLeft:30
    },
    details_under:{
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#5b626b',
        marginLeft:30
    },
    details_two:{
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#5b626b',
        marginLeft:30
    },
    details_six:{
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#5b626b',
        marginLeft:30
    },
    details_above:{
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#5b626b',
        marginLeft:30
    },
    one:{
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color:'#686868',
        marginLeft:15
    },
    weight: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color:'#686868',
    },
    list:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:12,
        lineHeight:20,
        marginLeft:100,
        color:'#686868'
    },
    prev:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:12,
        lineHeight:20,
        color:'#634720',
        marginRight:15,

    },
    num:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:12,
        lineHeight:20,
        color:'#686868',
        borderWidth:1,
        borderColor:'#D7D9E0',
        borderRadius:2,
        width:20,
        paddingLeft:2
    },
    next:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:12,
        lineHeight:20,
        color:'#634720',
        marginRight:24,
        marginLeft:15
    },
    storage: {
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
        width: 100,
    },
    storages: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        color: '#634720',
        borderRadius: 2,
        height:34,
        width:100,
        textAlign:'center',
        paddingTop:10
    },
    btruck: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        borderRadius: 2,
        color: '#634720',
        height: 36,
        width: 100,
        textAlign: 'center',
        paddingTop: 10,
    },
    btrucks: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        borderRadius: 2,
        color: '#FFFFFF',
        height:34,
        width:100,
        textAlign:'center',
        paddingTop:10
    },
    b_truck:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:20,
        width:150,
        paddingRight:15
    },
    b_load:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:30,
        width:50,
        paddingRight:15
    },
    b_line:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:100,
        width:30,
        paddingRight:15
    },
    b_color:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:75,
        width:150,
    },
    b_comments:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:25,
        width:150,
    },
    storage_view:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:50,
        width:50,
        paddingRight: 15,
        borderBottomWidth:1,
        height:25,
        borderColor:'#634720',
        color:'#634720',
        textAlign:'center',
    },
    operator_view:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:110,
        width:50,
        paddingRight: 15,
        borderBottomWidth:1,
        height:25,
        borderColor:'#634720',
        color:'#634720',
        textAlign:'center',
    },
    equipment_view:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:105,
        width:50,
        paddingRight: 15,
        borderBottomWidth:1,
        height:25,
        borderColor:'#634720',
        color:'#634720',
        textAlign:'center',
    },



})
