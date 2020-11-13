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
export class PlantingRecords extends React.Component {
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
                    "field":"025",
                    "seed":"J.D. Miller Seed Farm",
                    "variety":"Red",
                    "color":"Red Norland",
                    "planting":"04-16-2019",
                    "acres":"37.8",
                    "planned":"12.6",
                },
                {
                    "no":" 2 ",
                    "field":"025",
                    "seed":"Norbest Farms",
                    "variety":"Red",
                    "color":"Golden Colomba",
                    "planting":"04-16-2019",
                    "acres":"19.25",
                    "planned":"12.6",
                },
                {
                    "no":" 3 ",
                    "field":"025",
                    "seed":"Norbest Farms",
                    "variety":"Golden",
                    "color":"Golden Colomba",
                    "planting":"04-16-2019",
                    "acres":"11.6",
                    "planned":"12.2"
                },
                {
                    "no":" 4 ",
                    "field":"025",
                    "seed":"J.D. Miller Seed Farm",
                    "variety":"Golden",
                    "color":"Russet Goldrush",
                    "planting":"04-16-2019",
                    "acres":"7.68",
                    "planned":"12.2"
                },
                {
                    "no":" 5 ",
                    "field":"059",
                    "seed":"J.D. Miller Seed Farm",
                    "variety":"Russet",
                    "color":"Russet Goldrush",
                    "planting":"04-17-2019",
                    "acres":"27.44",
                    "planned":"14.4"
                },
                {
                    "no":" 6 ",
                    "field":"059",
                    "seed":"J.D. Miller Seed Farm",
                    "variety":"Russet",
                    "color":"Russet Goldrush",
                    "planting":"04-18-2019",
                    "acres":"32.99",
                    "planned":"14.4"
                },
                {
                    "no":" 7 ",
                    "field":"059",
                    "seed":"Real Potatoes",
                    "variety":"Russet",
                    "color":"Russet Pacific",
                    "planting":"04-18-2019",
                    "acres":"13.59",
                    "planned":"14.4"
                },
                {
                    "no":" 8 ",
                    "field":"059",
                    "seed":"Bula Potato Farms",
                    "variety":"Russet",
                    "color":"Russet Ranger",
                    "planting":"04-18-2019",
                    "acres":"13.59",
                    "planned":"13.1"
                },
                {
                    "no":" 9 ",
                    "field":"059",
                    "seed":"Bula Potato Farms",
                    "variety":"Russet",
                    "color":"Russet Caribou",
                    "planting":"04-18-2019",
                    "acres":" 0 ",
                    "planned":"12.3"
                },
                {
                    "no":"10",
                    "field":"059",
                    "seed":"Bula Potato Farms",
                    "variety":"Russet",
                    "color":"Russet Umatilla",
                    "planting":"04-18-2019",
                    "acres":" 0 ",
                    "planned":"12.4"
                },
                {
                    "no":"11",
                    "field":"059",
                    "seed":"Hafner Seed Farms",
                    "variety":"Russet",
                    "color":"Russet Norkotah Standard",
                    "planting":"04-18-2019",
                    "acres":" 1 ",
                    "planned":"12.4"
                },
                {
                    "no":"12",
                    "field":"059",
                    "seed":"J.D. Miller Seed Farm",
                    "variety":"Russet",
                    "color":"Russet Goldrush",
                    "planting":"04-18-2019",
                    "acres":"34",
                    "planned":"11.9"
                },
                {
                    "no":"13",
                    "field":"059",
                    "seed":"Real Potatoes",
                    "variety":"Russet",
                    "color":"Russet Pacific",
                    "planting":"04-18-2019",
                    "acres":"20.43",
                    "planned":"11.9"
                },
                {
                    "no":"14",
                    "field":"059",
                    "seed":"Bula Potato Farms",
                    "variety":"Russet",
                    "color":"Russet Ringle",
                    "planting":"04-18-2019",
                    "acres":"34",
                    "planned":""
                },
                {
                    "no":"15",
                    "field":"059",
                    "seed":"Bula Potato Farms",
                    "variety":"Russet",
                    "color":"Russet Reveille",
                    "planting":"04-18-2019",
                    "acres":"20.43",
                    "planned":"11.9"
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
                            <View style={{flexDirection:'row',marginLeft:40}}>
                                <TouchableHighlight onPress={() =>this.sort('crop')}>
                                    <Text style={styles.planting}>Field</Text>
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
                            <View style={{flexDirection:'row',marginLeft:50}}>
                                <TouchableHighlight onPress={() =>this.sort('field')}>
                                    <Text style={styles.planting}>Seed Grower</Text>
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
                            <View style={{flexDirection:'row',marginLeft:50}}>
                                <TouchableHighlight onPress={() =>this.sort('seed')}>
                                    <Text style={styles.planting}>Variety</Text>
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
                            <View style={{flexDirection:'row',marginLeft:58}}>
                                <TouchableHighlight onPress={() => this.sort('variety')}>
                                    <Text style={styles.planting}>Color/Variety</Text>
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
                            <View style={{flexDirection:'row',marginLeft:60}}>
                                <TouchableHighlight onPress={() =>this.sort('color')}>
                                    <Text style={styles.planting}>Planting Date</Text>
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
                            <View style={{flexDirection:'row',marginLeft:50}}>
                                <TouchableHighlight onPress={() =>this.sort('kill')}>
                                    <Text style={styles.planting}>Acres Planted</Text>
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
                            <View style={{flexDirection:'row',marginLeft:50}}>
                                <TouchableHighlight onPress={() =>this.sort('acres')}>
                                    <Text style={styles.planting}>Planned Spacing</Text>
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
                                            <Text style={styles.field}>{item.field}</Text>
                                            <Text style={styles.seed}>{item.seed}</Text>
                                            <Text style={styles.variety}>{item.variety}</Text>
                                            <Text style={styles.color}>{item.color}</Text>
                                            <Text style={styles.plant}>{item.planting}</Text>
                                            <Text style={styles.acres}>{item.acres}</Text>
                                            <Text style={styles.planned}>{item.planned}</Text>
                                        </View>
                                        <View
                                            style={{
                                                borderWidth: 1,
                                                height: 0,
                                                borderColor: '#D7D9E0',
                                                marginLeft: 85,
                                                marginTop: 10,
                                            }}
                                        />
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
        planting: {
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
        field: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 35,
            width: 75,
        },
        seed: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 25,
            width: 100,
        },
        variety: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 50,
            width: 75,
            paddingLeft: 7,
        },
        color: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 58,
            width: 150,
            paddingRight: 15
        },
        plant: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 25,
            width: 80,

        },
        acres: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 90,
            width: 125,
        },
        planned: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 55,
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
