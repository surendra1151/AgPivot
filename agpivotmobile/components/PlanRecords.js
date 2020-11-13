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
export class PlanRecords extends React.Component {
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
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":" 2 ",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":" 3 ",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":" 4 ",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":" 5 ",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":" 6 ",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":" 7 ",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":" 8 ",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":" 9 ",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":"10",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":"11",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":"12",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                }, {
                    "no":"13",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":"14",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
                },
                {
                    "no":"15",
                    "field":"",
                    "seed":"",
                    "variety":"",
                    "color":"",
                    "crop":"",
                    "planting":"",
                    "location":"",
                    "acres":"",
                    "planned":"",
                    "chemicals":"",
                    "fertilizers":"",
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
                                <TouchableHighlight onPress={() =>this.sort('field')}>
                                    <Text style={styles.pplan}>Field</Text>
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
                                <TouchableHighlight onPress={() =>this.sort('seed')}>
                                    <Text style={styles.pplan}>Seed Grower</Text>
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
                                <TouchableHighlight onPress={() =>this.sort('variety')}>
                                    <Text style={styles.pplan}>Variety</Text>
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
                                <TouchableHighlight onPress={() => this.sort('color')}>
                                    <Text style={styles.pplan}>Color/Variety</Text>
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
                                <TouchableHighlight onPress={() =>this.sort('crop')}>
                                    <Text style={styles.pplan}>Crop Year</Text>
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
                            <View style={{flexDirection:'row',marginLeft:80}}>
                                <TouchableHighlight onPress={() =>this.sort('planting')}>
                                    <Text style={styles.pplan}>Planting Year</Text>
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
                            <View style={{flexDirection:'row',marginLeft:80}}>
                                <TouchableHighlight onPress={() =>this.sort('location')}>
                                    <Text style={styles.pplan}>Location</Text>
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
                                    <Text style={styles.pplan}>Acres</Text>
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
                                <TouchableHighlight onPress={() =>this.sort('planned')}>
                                    <Text style={styles.pplan}>Planned Spacing</Text>
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
                                <TouchableHighlight onPress={() =>this.sort('chemicals')}>
                                    <Text style={styles.pplan}>Chemicals</Text>
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
                                <TouchableHighlight onPress={() =>this.sort('fertilizers')}>
                                    <Text style={styles.pplan}>Fertilizers</Text>
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
                                            <Text style={styles.crop}>{item.field}</Text>
                                            <Text style={styles.field}>{item.seed}</Text>
                                            <Text style={styles.seed}>{item.variety}</Text>
                                            <Text style={styles.variety}>{item.color}</Text>
                                            <Text style={styles.color}>{item.crop}</Text>
                                            <Text style={styles.planting}>{item.planting}</Text>
                                            <Text style={styles.location}>{item.location}</Text>
                                            <Text style={styles.acres}>{item.acres}</Text>
                                            <Text style={styles.planned}>{item.planned}</Text>
                                            <Text style={styles.chemicals}>{item.chemicals}</Text>
                                            <Text style={styles.fertilizers}>{item.fertilizers}</Text>


                                        </View>
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
        pplan: {
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
            marginLeft: 30,
            width: 75,
        },
        seed: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 47,
            width: 100,
        },
        variety: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 13,
            width: 150,
            paddingLeft: 7,
        },
        color: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 58,
            width: 100,
            paddingRight: 15
        },
        crop: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 65,
            width: 80,

        },
        planting: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 60,
            width: 125,
        },
        location: {
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
            marginLeft: 75,
            width: 50,
        },
        planned: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 75,
            width: 50,
        },
        chemicals: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 75,
            width: 50,
        },
        fertilizers: {
            fontFamily: 'poppins',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            marginLeft: 75,
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
