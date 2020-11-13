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
} from 'react-native';
import {DropDown} from "../components/DropDownOne";
import Modal from "react-native-modal";
export class HillingRecords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSort: 'no',
            currentSortDir: 'asc',
            show:[
                "10",
                "25",
                "50",
                "100"
            ],
            table:[
                {
                    "no":" 1 ",
                     "year":"2019",
                    "field":"059",
                    "color":"Russet Goldrush",
                    "date":"2019-05-14",
                    "time":"21:25",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"6390",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"6400.6",
                    "acres":"100.51"
                },
                {
                    "no":" 2 ",
                    "year":"2019",
                    "field":"017",
                    "color":"Russet Norkotah Standard",
                    "date":"2019-05-16",
                    "time":"12:30",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"6401.5",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"6414",
                    "acres":"138.63"

                },
                {
                    "no":" 3 ",
                    "year":"2019",
                    "field":"072",
                    "color":"Russet Goldrush",
                    "date":"2019-05-20",
                    "time":"13:49",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"6415",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"6447.6",
                    "acres":"166.48"

                },
                {
                    "no":" 4 ",
                    "year":"2019",
                    "field":"Kent 220",
                    "color":"Russet Silverton",
                    "date":"2019-05-20",
                    "time":"18:20",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"1003",
                    "equipment":"2145-Oliver Dahlman Hiller",
                    "status":"stop",
                    "end_hours":"1014",
                    "acres":"161"

                },
                {
                    "no":" 5 ",
                    "year":"2019",
                    "field":"052",
                    "color":"Russet Norkotah Co 8",
                    "date":"2019-05-22",
                    "time":"08:30",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"6430.8",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"6455.4",
                    "acres":"89.17"

                },
                {
                    "no":" 6 ",
                    "year":"2019",
                    "field":"Parks",
                    "color":"Russet Goldrush",
                    "date":"2019-05-23",
                    "time":"07:58",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"1016.7",
                    "equipment":"2145-Oliver Dahlman Hiller",
                    "status":"stop",
                    "end_hours":"1020.5",
                    "acres":"44"

                },
                {
                    "no":" 7 ",
                    "year":"2019",
                    "field":"052",
                    "color":"Russet Norkotah Co 8",
                    "date":"2019-05-23",
                    "time":"10:12",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"6430.8",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"6468.7",
                    "acres":"140.57"

                },
                {
                    "no":" 8 ",
                    "year":"2019",
                    "field":"055",
                    "color":"Russet Norkotah Tx 296",
                    "date":"2019-05-23",
                    "time":"10:38",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"0",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"6473.9",
                    "acres":"47.01"

                },
                {
                    "no":" 9 ",
                    "year":"2019",
                    "field":"025",
                    "color":"Red Norland",
                    "date":"2019-05-04",
                    "time":"14:15",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"6455.6",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"6479.8",
                    "acres":"54.44"

                },
                {
                    "no":"10",
                    "year":"2019",
                    "field":"003",
                    "color":"Russet Norkotah Tx 296",
                    "date":"2019-05-25",
                    "time":"06:24",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"6469.1",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"6485.4",
                    "acres":"42.41"

                },
                {
                    "no":"11",
                    "year":"2019",
                    "field":"023",
                    "color":"Russet Silverton",
                    "date":"2019-05-28",
                    "time":"12:23",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"1026.2",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"6491",
                    "acres":"50.28"

                },
                {
                    "no":"12",
                    "year":"2019",
                    "field":"Parr/A-2",
                    "color":"Russet Silverton",
                    "date":"2019-05-29",
                    "time":"07:26",
                    "tractor":"2101-Challenger Mt765E Tractor",
                    "operator":"Jacob Huber",
                    "start_hours":"6474.4",
                    "equipment":"2145-Oliver Dahlman Hiller",
                    "status":"stop",
                    "end_hours":"1042.2",
                    "acres":"259.04"

                }, {
                    "no":"13",
                    "year":"2019",
                    "field":"024",
                    "color":"Russet Norkotah Tx 296",
                    "date":"2019-05-28",
                    "time":"12:23",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"1043",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"6507.6",
                    "acres":"29.75"

                },
                {
                    "no":"14",
                    "year":"2019",
                    "field":"A-3 205",
                    "color":"Russet Silverton",
                    "date":"2019-05-30",
                    "time":"12:13",
                    "tractor":"2101-Challenger Mt765E Tractor",
                    "operator":"Jacob Huber",
                    "start_hours":"6485.6",
                    "equipment":"2145-Oliver Dahlman Hiller",
                    "status":"stop",
                    "end_hours":"",
                    "acres":""

                },
                {
                    "no":"15",
                    "year":"2019",
                    "field":"002",
                    "color":"Fingerling Little Giant",
                    "date":"2019-05-30",
                    "time":"08:26",
                    "tractor":"126-Challenger Mt765C Tractor",
                    "operator":"Jim Pruessing",
                    "start_hours":"1051",
                    "equipment":"124-Harriston Hiller",
                    "status":"stop",
                    "end_hours":"",
                    "acres":""

                },
            ]
        }
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
                <ScrollView horizontal={true}   vertical={true} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableHighlight onPress={() => this.sort('no')}>
                                    <Text style={styles.yash}>#</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/> :
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:30}}>
                                <TouchableHighlight onPress={() =>this.sort('year')}>
                                    <Text style={styles.hilling}>Year</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/> :
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:40}}>
                                <TouchableHighlight onPress={() =>this.sort('field')}>
                                    <Text style={styles.hilling}>Field</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67,}}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/> :
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:85}}>
                                <TouchableHighlight onPress={() =>this.sort('color')}>
                                    <Text style={styles.hilling}>Color</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67}}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/> :
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:105}}>
                                <TouchableHighlight onPress={() => this.sort('date')}>
                                    <Text style={styles.hilling}>Date</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')}
                                           style={{marginTop: 44, marginLeft: 7.67}}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/> :
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('time')}>
                                    <Text style={styles.hilling}>Time</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67 }}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/> :
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('tractor')}>
                                    <Text style={styles.hilling}>Hilling Tractor</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{
                                        marginTop: 44,
                                        marginLeft: 7.67
                                    }}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/> :
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('operator')}>
                                    <Text style={styles.hilling}>Hilling Opertaor</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{
                                        marginTop: 44,
                                        marginLeft: 7.67
                                    }}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')}
                                           style={{marginTop: 44, marginLeft: 3}}/> :
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70,width:80}}>
                                <TouchableHighlight onPress={() =>this.sort('start_hours')}>
                                    <Text style={styles.hilling}>Start Track Hours</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67 }}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>:
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('equipment')}>
                                    <Text style={styles.hilling}>Hiller Equipment</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67 }}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>:
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('status')}>
                                    <Text style={styles.hilling}>Status</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67 }}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>:
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:60,width:80}}>
                                <TouchableHighlight onPress={() =>this.sort('end_hours')}>
                                    <Text style={styles.hilling}>End Tractor Hours</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67 }}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>:
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                            <View style={{flexDirection:'row',marginLeft:80}}>
                                <TouchableHighlight onPress={() =>this.sort('acres')}>
                                    <Text style={styles.hilling}>Hilled Acres</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67 }}/>
                                }
                                {this.state.currentSortDir === 'asc' ?
                                    <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>:
                                    <Image
                                        source={require('../assets/down.png')}
                                        style={{marginTop: 44, marginLeft: 3}}
                                    />
                                }
                            </View>
                        </View>
                        <View style={{borderWidth:1,height:0,borderColor:'#D7D9E0',marginLeft:100,marginTop:10}}/>
                        <View style={{ flex:1,flexDirection:'column'}}>
                            <FlatList
                                data={this.state.table}
                                renderItem={({item})=>(
                                    <View>
                                        <View style={{flexDirection:'row',marginTop:10,color:'#686868'}}>
                                            <Text style={styles.no}> {item.no}</Text>
                                            <Text style={styles.year}>{item.year}</Text>
                                            <Text style={styles.field}>{item.field}</Text>
                                            <Text style={styles.color}>{item.color}</Text>
                                            <Text style={styles.date}>{item.date}</Text>
                                            <Text style={styles.time}>{item.time}</Text>
                                            <Text style={styles.tractor}>{item.tractor}</Text>
                                            <Text style={styles.operator}>{item.operator}</Text>
                                            <Text style={styles.start_hours}>{item.start_hours}</Text>
                                            <Text style={styles.equipment}>{item.equipment}</Text>
                                            <Text style={styles.status}>{item.status}</Text>
                                            <Text style={styles.end_hours}>{item.end_hours}</Text>
                                            <Text style={styles.acres}>{item.acres}</Text>


                                        </View>
                                        <View style={{borderWidth:1,height:0,borderColor:'#D7D9E0',marginLeft:100,marginTop:10}}/>
                                    </View>
                                )}
                                keyExtractor={(item)=>item.toString()}
                                extraData={this.state}
                            />

                        </View>
                    </View>
                </ScrollView>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text style={styles.list}>Showing 1 to 15 of 100 entries</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.prev}>Prev</Text>
                        <Text style={styles.num}> 1</Text>
                        <Text style={styles.num}> 2</Text>
                        <Text style={styles.num}> 3</Text>
                        <Text style={styles.num}> 4</Text>
                        <Text style={styles.next}>Next</Text>

                    </View>
                </View>

            </View>
        )
    }
}
const styles=StyleSheet.create(
    {
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
        hilling: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            color: '#686868',
            marginTop: 39,
        },
        no: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 95,
            width: 50,
        },
        year: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 20,
            width: 75,
        },
        field: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 25,
            width: 100,
        },
        color: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 5,
            width: 150,
            paddingLeft: 7,
        },
        date: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 30,
            width: 100,
            paddingRight: 15
        },
        time: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 43,
            width: 80,

        },
        tractor: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 45,
            width: 125,
        },
        operator: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 70,
            width: 130,
        },
        start_hours: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 60,
            width: 50,
        },
        equipment: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 90,
            width: 150,
        },
        status: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 62,
            width: 50,
        },
        end_hours: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 75,
            width: 50,
        },
        acres: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 115,
            width: 50,
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
        }
    }
)
