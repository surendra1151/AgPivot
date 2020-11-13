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
export class ManagementRecords extends React.Component {
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
                    "date":"09-09-2019",
                    "time":"07:23",
                    "location":"Grand Marsh",
                    "line":"4",
                    "operators":"Dale Grimm\n" +
                        "Jeffrey Huber",
                    "equipments":"2200 Milestone Expandable Conveyor M70T #994 70'X30\"\n" +
                        "2201 Ll Bin Piler 36\" X 50' (Wagner Piler)\n" +
                        "2255 Double L 2019 Even Flow Tub\n" +
                        "232 Conveyor - Tare Elevator 25' Mayo\n" +
                        "234 Collector - Double L 878\n" +
                        "236 Conveyor - Telescoping Double L\n" +
                        "238 Conveyor - Portable Double L\n" +
                        "248 72\" Double L Collector\n" +
                        "257 Telescoping Conveyor Double L",
                },
                {
                    "no":" 2 ",
                    "date":"09-09-2019",
                    "time":"13:29",
                    "location":"Friesland",
                    "line":"7",
                    "operators":"Kirk Dornfeld\n" +
                        "Mark Randall",
                    "equipments":"15101 Double L Conveyor Mod 809 30\"\" Straight\n" +
                        "15150 Double L Telescope Conveyor 30\"\" Mod\n" +
                        "15227 Piler 36\" Double L",
                },
                {
                    "no":" 3 ",
                    "date":"09-09-2019",
                    "time":"13:53",
                    "location":"Friesland",
                    "line":"6",
                    "operators":"Duane Katsma\n" +
                        "Larry Bahr",
                    "equipments":"15100 \"Double L Conveyor Mod 809 30\"\" Straight\"\n" +
                        "15200 Piler 30\" Double L\n" +
                        "15330 Miedema Piler System (1 Piler, 4 Conveyors)",
                },
                {
                    "no":" 4 ",
                    "date":"09-17-2019",
                    "time":"12:15",
                    "location":"Arena",
                    "line":"2",
                    "operators":"Beau Hartline\n" +
                        "Jim Pruessing",
                    "equipments":"229 CONVEYOR - 38' DOUBLE L\n" +
                        "253 2010 Piler Double L\n" +
                        "265 Collector Double L",
                },
                {
                    "no":" 5 ",
                    "date":"09-19-2019",
                    "time":"15:15",
                    "location":"Grand Marsh",
                    "line":"5",
                    "operators":"Jeffrey Huber",
                    "equipments":"222 Double L 36\" Piler\n" +
                        "2251 Spudnik Sizer / Dirt Eliminator 60\"",
                },
                {
                    "no":" 6 ",
                    "date":"09-30-2019",
                    "time":"10:24",
                    "location":"Friesland",
                    "line":"8",
                    "operators":"Duane Katsma\n" +
                        "Larry Bahr",
                    "equipments":"15200 Piler 30\" Double L",
                },
                {
                    "no":" 7 ",
                    "date":"10-14-2019",
                    "time":"15:18",
                    "location":"Arena",
                    "line":"1",
                    "operators":"Frankie Lambert\n" +
                        "Jim Pruessing",
                    "equipments":"222 Double L 36\" Piler\n" +
                        "225 EVEN-FLO BIN - GALLENBERG (BLUE TUB)\n" +
                        "2250 Spudnik 995 Multi Sep Eliminator 60\"\n" +
                        "243 Piler - 36\" Double L\n" +
                        "244 Piler - 36\" Double L\n",
                },
                {
                    "no":" 8 ",
                    "date":"10-16-2019",
                    "time":"17:13",
                    "location":"Arena",
                    "line":"3",
                    "operators":"Frankie Lambert\n" +
                        "Jim Pruessing",
                    "equipments":"235 Even-Flo Tub Double L\n" +
                        "243 Piler - 36\" Double L\n" +
                        "255 Telescoping Conveyor Double L\n" +
                        "258 Conveyor Double L\n" +
                        "263 Mayo Elevator",
                },
                {
                    "no":" 9 ",
                    "date":"10-18-2019",
                    "time":"09:31",
                    "location":"Arena",
                    "line":"0",
                    "operators":"Frankie Lambert\n" +
                        "Jim Pruessing",
                    "equipments":"262 Evenflo Tub Double L\n" +
                        "270 2017 Spudnik 84\" Collector\n" +
                        "272 2018 Spudnik Piler\n" +
                        "274 2019 Spudnik Telescoping Conveyor\n" +
                        "275 2019 Spudnik Straight Conveyor",
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
                            <View style={{flexDirection:'row',marginLeft:60}}>
                                <TouchableHighlight onPress={() =>this.sort('date')}>
                                    <Text style={styles.vine}>date</Text>
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
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('time')}>
                                    <Text style={styles.vine}>time</Text>
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
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('location')}>
                                    <Text style={styles.vine}>location</Text>
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
                                <TouchableHighlight onPress={() => this.sort('line')}>
                                    <Text style={styles.vine}>line</Text>
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
                            <View style={{flexDirection:'row',marginLeft:80}}>
                                <TouchableHighlight onPress={() =>this.sort('operators')}>
                                    <Text style={styles.vine}>operators</Text>
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
                            <View style={{flexDirection:'row',marginLeft:120}}>
                                <TouchableHighlight onPress={() =>this.sort('equipments')}>
                                    <Text style={styles.vine}>equipments</Text>
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

                        </View>
                        <View style={{borderWidth:1,height:0,borderColor:'#D7D9E0',marginLeft:100,marginTop:10}}/>
                        <View style={{ flex:1,flexDirection:'column'}}>
                            <FlatList
                                data={this.state.table}
                                renderItem={({item})=>(
                                    <View>
                                        <View style={{flexDirection:'row',marginTop:10,color:'#686868'}}>
                                            <Text style={styles.no}> {item.no}</Text>
                                            <Text style={styles.date}>{item.date}</Text>
                                            <Text style={styles.time}>{item.time}</Text>
                                            <Text style={styles.location}>{item.location}</Text>
                                            <Text style={styles.line}>{item.line}</Text>
                                            <Text style={styles.operators}>{item.operators}</Text>
                                            <Text style={styles.equipments}>{item.equipments}</Text>
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
        vine: {
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
        date: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 30,
            width: 75,
        },
        time: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 70,
            width: 75,
        },
        location: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 35,
            width: 100,
            paddingLeft: 7,
        },
        line: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 70,
            width: 50,
            paddingRight: 15
        },
        operators: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 65,
            width: 100,

        },
        equipments: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 60,
            width: 300,
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
