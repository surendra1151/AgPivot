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
export class FertigationRecords extends React.Component {
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
                    "no": " 1 ",
                    "crop":"2019",
                    "field":"Kent 220",
                    "fertilizer":"14-0-4.2-3Ca Liquid Blend",
                    "start_gallons":"1650",
                    "start_degrees":"174",
                    "employee_name":"Jeffrey Huber",
                    "employee_hours":"1",
                    "acres":"160",
                    "stop_gallons":"",
                    "comments":"",
                },
                {
                    "no": " 2 ",
                    "crop":"2019",
                    "field":" 017 ",
                    "fertilizer":"14-0-4.2-3Ca Liquid Blend",
                    "start_gallons":"2866",
                    "start_degrees":"350",
                    "employee_name":"Scot Ehlert",
                    "employee_hours":"1",
                    "acres":"143.3",
                    "stop_gallons":"1925",
                    "comments":"",
                },
                {
                    "no": " 3 ",
                    "crop":"2019",
                    "field":" 059 ",
                    "fertilizer":"14-0-4.2-3Ca Liquid Blend",
                    "start_gallons":"2950",
                    "start_degrees":"",
                    "employee_name":"Scot Ehlert",
                    "employee_hours":"1",
                    "acres":"5",
                    "stop_gallons":"2800",
                    "comments":"",
                },
                {
                    "no": " 4 ",
                    "crop":"2019",
                    "field":" 025 ",
                    "fertilizer":"14-0-4.2-3Ca Liquid Blend",
                    "start_gallons":"1450",
                    "start_degrees":"6",
                    "employee_name":"Scot Ehlert",
                    "employee_hours":"2",
                    "acres":"1",
                    "stop_gallons":"50",
                    "comments":"25East",
                },
                {
                    "no": " 5 ",
                    "crop":"2019",
                    "field":" 017 ",
                    "fertilizer":"14-0-4.2-3Ca Liquid Blend",
                    "start_gallons":"1925",
                    "start_degrees":"350",
                    "employee_name":"Beau Hartline",
                    "employee_hours":"1",
                    "acres":"1",
                    "stop_gallons":"650",
                    "comments":"Came out less than 1/2 first time, sending around again and slowing pivot down some",
                }, {
                    "no": " 6 ",
                    "crop":"2019",
                    "field":"Bonnett Little/East 210",
                    "fertilizer":"14-0-4.2-3Ca Liquid Blend",
                    "start_gallons":"1300",
                    "start_degrees":"1",
                    "employee_name":"Jacob Huber",
                    "employee_hours":"1",
                    "acres":"118",
                    "stop_gallons":"0",
                    "comments":"",
                },
                {
                    "no": " 7 ",
                    "crop":"2019",
                    "field":" 072 ",
                    "fertilizer":"9-0-5.5-4Ca N+ Liquid Blend/Ton",
                    "start_gallons":"3000",
                    "start_degrees":"95",
                    "employee_name":"Jeff Vossekuil",
                    "employee_hours":"1",
                    "acres":"45",
                    "stop_gallons":"2080",
                    "comments":"South 1/2 only",
                }, {
                    "no": " 8 ",
                    "crop":"2019",
                    "field":"parks",
                    "fertilizer":"32% Liquid Nitrogen/Ton",
                    "start_gallons":"1250",
                    "start_degrees":"355",
                    "employee_name":"Jacob Huber",
                    "employee_hours":"1",
                    "acres":"40",
                    "stop_gallons":"875",
                    "comments":"",
                },
                {
                    "no": " 9 ",
                    "crop":"2019",
                    "field":"parks",
                    "fertilizer":"32% Liquid Nitrogen/Ton",
                    "start_gallons":"875",
                    "start_degrees":"180",
                    "employee_name":"Jeffrey Huber",
                    "employee_hours":"1",
                    "acres":"4",
                    "stop_gallons":"",
                    "comments":"Wiper",
                },
                {
                    "no": "10",
                    "crop":"2019",
                    "field":" 052 ",
                    "fertilizer":"9-0-5.5-4Ca N+ Liquid Blend/Ton",
                    "start_gallons":"3000",
                    "start_degrees":"261",
                    "employee_name":"Beau Hartline",
                    "employee_hours":"1",
                    "acres":"1",
                    "stop_gallons":"2310",
                    "comments":"",
                },
                {
                    "no": "11",
                    "crop":"2019",
                    "field":" 052 ",
                    "fertilizer":"9-0-5.5-4Ca N+ Liquid Blend/Ton",
                    "start_gallons":"2310",
                    "start_degrees":"355",
                    "employee_name":"Beau Hartline",
                    "employee_hours":"1",
                    "acres":"1",
                    "stop_gallons":"1200",
                    "comments":"Field 53",
                }, {
                    "no": "12",
                    "crop":"2019",
                    "field":"Tracy North",
                    "fertilizer":"32% Liquid Nitrogen/Ton",
                    "start_gallons":"915",
                    "start_degrees":"355",
                    "employee_name":"Jeffrey Huber",
                    "employee_hours":"1",
                    "acres":"35",
                    "stop_gallons":"700",
                    "comments":"",
                }, {
                    "no": "13",
                    "crop":"2019",
                    "field":" 024 ",
                    "fertilizer":"9-0-5.5-4Ca N+ Liquid Blend/Ton",
                    "start_gallons":"1450",
                    "start_degrees":"272",
                    "employee_name":"Jeff Vossekuil",
                    "employee_hours":"1",
                    "acres":"57",
                    "stop_gallons":"650",
                    "comments":"",
                },
                {
                    "no": "14",
                    "crop":"2019",
                    "field":" 072 ",
                    "fertilizer":"9-0-5.5-4Ca N+ Liquid Blend/Ton",
                    "start_gallons":"3200",
                    "start_degrees":"270",
                    "employee_name":"Jeff Vossekuil",
                    "employee_hours":"1",
                    "acres":"45",
                    "stop_gallons":"2700",
                    "comments":"72 north",
                }, {
                    "no": "15",
                    "crop":"2019",
                    "field":"Parr/A-2",
                    "fertilizer":"32% Liquid Nitrogen/Ton",
                    "start_gallons":"1225",
                    "start_degrees":"0",
                    "employee_name":"Jeffrey Huber",
                    "employee_hours":"1",
                    "acres":"150",
                    "stop_gallons":"",
                    "comments":"A2",
                },
                {
                    "no": "16",
                    "crop":"2019",
                    "field":" 013 ",
                    "fertilizer":"9-0-5.5-4Ca N+ Liquid Blend/Ton",
                    "start_gallons":"1450",
                    "start_degrees":"5",
                    "employee_name":"Jeff Vossekuil",
                    "employee_hours":"1",
                    "acres":"80",
                    "stop_gallons":"2700",
                    "comments":"13 east",
                },
                {
                    "no": "17",
                    "crop":"2019",
                    "field":" 018 ",
                    "fertilizer":"9-0-5.5-4Ca N+ Liquid Blend/Ton",
                    "start_gallons":"2900",
                    "start_degrees":"1",
                    "employee_name":"Greg Hogan",
                    "employee_hours":"1",
                    "acres":"1",
                    "stop_gallons":"1200",
                    "comments":"",
                },
                {
                    "no": "18",
                    "crop":"2019",
                    "field":" 018 ",
                    "fertilizer":"9-0-5.5-4Ca N+ Liquid Blend/Ton",
                    "start_gallons":"1200",
                    "start_degrees":"20",
                    "employee_name":"Greg Hogan",
                    "employee_hours":"1",
                    "acres":"1",
                    "stop_gallons":"350",
                    "comments":"18 south",
                },
                {
                    "no": "19",
                    "crop":"2019",
                    "field":" 003 ",
                    "fertilizer":"9-0-5.5-4Ca N+ Liquid Blend/Ton",
                    "start_gallons":"2300",
                    "start_degrees":"1",
                    "employee_name":"Greg Hogan",
                    "employee_hours":"1",
                    "acres":"144.7",
                    "stop_gallons":"400",
                    "comments":"",
                },
                {
                    "no": "20",
                    "crop":"2019",
                    "field":" 055 ",
                    "fertilizer":"9-0-5.5-4Ca N+ Liquid Blend/Ton",
                    "start_gallons":"1150",
                    "start_degrees":"1",
                    "employee_name":"Jim Pruessing",
                    "employee_hours":"1",
                    "acres":"1",
                    "stop_gallons":"0",
                    "comments":"",
                },







            ],
            isOpenModal:false,
            isOpenSecondModal:false,
            currentSort: 'no',
            currentSortDir: 'asc',
        }
    }
    OpenModal(){
        this.setState({isOpenModal:true});
    }
    OpenSecondModal(){
        this.setState({isOpenSecondModal:true});
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
                            <View style={{flexDirection:'row',marginLeft:35}}>
                                <TouchableHighlight onPress={() =>this.sort('crop')}>
                                    <Text style={styles.fertigation}>Crop Year</Text>
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
                            <View style={{flexDirection:'row',marginLeft:45}}>
                                <TouchableHighlight onPress={() =>this.sort('field')}>
                                    <Text style={styles.fertigation}>Field</Text>
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
                            <View style={{flexDirection:'row',marginLeft:65}}>
                                <TouchableHighlight onPress={() =>this.sort('fertilizer')}>
                                    <Text style={styles.fertigation}>Fertilizer Name</Text>
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
                            <View style={{flexDirection:'row',marginLeft:55}}>
                                <TouchableHighlight onPress={() => this.sort('start_gallons')}>
                                    <Text style={styles.fertigation}>Start Gallons</Text>
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
                            <View style={{flexDirection:'row',marginLeft:55}}>
                                <TouchableHighlight onPress={() =>this.sort('start_degrees')}>
                                    <Text style={styles.fertigation}>Start Degrees</Text>
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
                            <View style={{flexDirection:'row',marginLeft:40}}>
                                <TouchableHighlight onPress={() =>this.sort('employee_name')}>
                                    <Text style={styles.fertigation}>Employee Name</Text>
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
                            <View style={{flexDirection:'row',marginLeft:45}}>
                                <TouchableHighlight onPress={() =>this.sort('employee_hours')}>
                                    <Text style={styles.fertigation}>Employee Hours</Text>
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
                            <View style={{flexDirection:'row',marginLeft:40}}>
                                <TouchableHighlight onPress={() =>this.sort('acres')}>
                                    <Text style={styles.fertigation}>Acres</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{
                                        marginTop: 44,
                                        marginLeft: 7.67,
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
                            <View style={{flexDirection:'row',marginLeft:40}}>
                                <TouchableHighlight onPress={() =>this.sort('stop_gallons')}>
                                    <Text style={styles.fertigation}>Stop Gallons</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{
                                        marginTop: 44,
                                        marginLeft: 7.67,
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
                            <View style={{flexDirection:'row',marginLeft:40}}>
                                <TouchableHighlight onPress={() =>this.sort('comments')}>
                                    <Text style={styles.fertigation}>Comments</Text>
                                </TouchableHighlight>
                                {this.state.currentSortDir === 'asc' ?
                                    <Image
                                        source={require('../assets/up.png')}
                                        style={{marginTop: 44, marginLeft: 7.67}}
                                    /> :
                                    <Image source={require('../assets/Uparrow.png')} style={{
                                        marginTop: 44,
                                        marginLeft: 7.67,
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
                                            <Text style={styles.crop}>{item.crop}</Text>
                                            <Text style={styles.field}>{item.field}</Text>
                                            <Text style={styles.fertilizer}>{item.fertilizer}</Text>
                                            <Text style={styles.start_gallons}>{item.start_gallons}</Text>
                                            <Text style={styles.start_degrees}>{item.start_degrees}</Text>
                                            <Text style={styles.employee_name}>{item.employee_name}</Text>
                                            <Text style={styles.employee_hours}>{item.employee_hours}</Text>
                                            <Text style={styles.acres}>{item.acres}</Text>
                                            <Text style={styles.stop_gallons}>{item.stop_gallons}</Text>
                                            <Text style={styles.comments}>{item.comments}</Text>

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
                    <Text style={styles.list}>Showing 1 to 20 of 100 entries</Text>
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
    fertigation: {
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
    crop: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 30,
        width: 75,
    },
    field: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 47,
        width: 100,
    },
    fertilizer: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 13,
        width: 150,
        paddingLeft: 7,
    },
    start_gallons: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 58,
        width: 100,
        paddingRight: 15
    },
    start_degrees: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 65,
        width: 80,

    },
    employee_name: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 60,
        width: 125,
    },
    employee_hours: {
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
        marginLeft: 90,
        width: 100,
    },
    stop_gallons: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 25,
        width: 100,
    },
    comments: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 20,
        width: 150,
        marginRight: 50
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




});
