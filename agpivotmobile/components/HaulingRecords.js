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
export class HaulingRecords extends React.Component {
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
                    "farmpo": "1480/1",
                    "crop": "2019",
                    "seed": "Jorde Certified Seed, LLC",
                    "variety": "Red",
                    "actual": "436",
                    "color": "Red Norland",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": " 2 ",
                    "farmpo": "1480/2",
                    "crop": "2019",
                    "seed": "Jorde Certified Seed, LLC",
                    "variety": "Red",
                    "actual": "453",
                    "color": "Red Norland",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": " 3 ",
                    "farmpo": "1480/3",
                    "crop": "2019",
                    "seed": "Jorde Certified Seed, LLC",
                    "variety": "Red",
                    "actual": "420.8",
                    "color": "Red Norland",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": " 4 ",
                    "farmpo": "1518/1",
                    "crop": "2019",
                    "seed": "Norbest Farms",
                    "variety": "Golden",
                    "actual": "395.8",
                    "color": "Golden Colomba",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": " 5 ",
                    "farmpo": "1482/1",
                    "crop": "2019",
                    "seed": "Jorde Certified Seed, LLC",
                    "variety": "Russet",
                    "actual": "437.8",
                    "color": "Russet Goldrush",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": " 6 ",
                    "farmpo": "1482/2",
                    "crop": "2019",
                    "seed": "Jorde Certified Seed, LLC",
                    "variety": "Russet",
                    "actual": "452.6",
                    "color": "Russet Goldrush",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": " 7 ",
                    "farmpo": "1482/3",
                    "crop": "2019",
                    "seed": "Jorde Certified Seed, LLC",
                    "variety": "Russet",
                    "actual": "104.45",
                    "color": "Russet Goldrush",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": " 8 ",
                    "farmpo": "1482/4",
                    "crop": "2019",
                    "seed": "Jorde Certified Seed, LLC",
                    "variety": "Russet",
                    "actual": "25.1",
                    "color": "Russet Goldrush",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": " 9 ",
                    "farmpo": "1490/1",
                    "crop": "2019",
                    "seed": "Bula Potato Farms",
                    "variety": "Russet",
                    "actual": "22.15",
                    "color": "Russet Reveille",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "10",
                    "farmpo": "1490/2",
                    "crop": "2019",
                    "seed": "Bula Potato Farms",
                    "variety": "Russet",
                    "actual": "23.45",
                    "color": "Russet Umatilla",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "11",
                    "farmpo": "1490/3",
                    "crop": "2019",
                    "seed": "Bula Potato Farms",
                    "variety": "Russet",
                    "actual": "467",
                    "color": "Russet Caribou",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "12",
                    "farmpo": "1490/4",
                    "crop": "2019",
                    "seed": "Bula Potato Farms",
                    "variety": "Russet",
                    "actual": "450",
                    "color": "Russet Ringle",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "13",
                    "farmpo": "1511/1",
                    "crop": "2019",
                    "seed": "Hafner Seed Farms",
                    "variety": "Russet",
                    "actual": "513",
                    "color": "Russet Norkotah Standard",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "14",
                    "farmpo": "1511/2",
                    "crop": "2019",
                    "seed": "Hafner Seed Farms",
                    "variety": "Russet",
                    "actual": "395",
                    "color": "Russet Norkotah Standard",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "15",
                    "farmpo": "1511/3",
                    "crop": "2019",
                    "seed": "Hafner Seed Farms",
                    "variety": "Russet",
                    "actual": "494",
                    "color": "Russet Norkotah Standard",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "16",
                    "farmpo": "1511/4",
                    "crop": "2019",
                    "seed": "Hafner Seed Farms",
                    "variety": "Russet",
                    "actual": "425.2",
                    "color": "Russet Norkotah Standard",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "17",
                    "farmpo": "1511/5",
                    "crop": "2019",
                    "seed": "Hafner Seed Farms",
                    "variety": "Russet",
                    "actual": "510",
                    "color": "Russet Norkotah Standard",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "18",
                    "farmpo": "1514/0",
                    "crop": "2019",
                    "seed": "Jorde Certified Seed, LLC",
                    "variety": "Russet",
                    "actual": "396",
                    "color": "Russet Labelle",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "19",
                    "farmpo": "1515/1",
                    "crop": "2019",
                    "seed": "Bula Potato Farms",
                    "variety": "Russet",
                    "actual": "403.2",
                    "color": "Russet Silverton",
                    "order": "",
                    "transport": "",
                },
                {
                    "no": "20",
                    "farmpo": "1515/2",
                    "crop": "2019",
                    "seed": "Bula Potato Farms",
                    "variety": "Russet",
                    "actual": "384",
                    "color": "Russet Silverton",
                    "order": "",
                    "transport": "",
                }
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
                            <TouchableHighlight onPress={() =>this.sort('farmpo')}>
                            <Text style={styles.hauling}>Farm Po #</Text>
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
                            <TouchableHighlight onPress={() =>this.sort('crop')}>
                            <Text style={styles.hauling}>Crop Year</Text>
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
                            <TouchableHighlight onPress={() =>this.sort('seed')}>
                            <Text style={styles.hauling}>Seed Grower</Text>
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
                        <View style={{flexDirection:'row',marginLeft:75}}>
                            <TouchableHighlight onPress={() => this.sort('variety')}>
                            <Text style={styles.hauling}>Variety</Text>
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
                            <TouchableHighlight onPress={() =>this.sort('actual')}>
                            <Text style={styles.hauling}>Actual CWT</Text>
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
                        <View style={{flexDirection:'row',marginLeft:53}}>
                            <TouchableHighlight onPress={() =>this.sort('color')}>
                            <Text style={styles.hauling}>Color/Variety</Text>
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
                        <View style={{flexDirection:'row',marginLeft:60}}>
                            <TouchableHighlight onPress={() =>this.sort('order')}>
                            <Text style={styles.hauling}>Order Details</Text>
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
                        <View style={{flexDirection:'row',marginLeft:60}}>
                            <TouchableHighlight onPress={() =>this.sort('transport')}>
                            <Text style={styles.hauling}>Transport Details</Text>
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
                                            <Text style={styles.farmpo}>{item.farmpo}</Text>
                                            <Text style={styles.crop}>{item.crop}</Text>
                                            <Text style={styles.seed}>{item.seed}</Text>
                                            <Text style={styles.variety}>{item.variety}</Text>
                                            <Text style={styles.actual}>{item.actual}</Text>
                                            <Text style={styles.color}>{item.color}</Text>

                                            <TouchableHighlight onPress={() =>this.OpenModal()}>
                                                <Text style={styles.order}>view</Text>
                                            </TouchableHighlight>
                                            <TouchableHighlight onPress={() =>this.OpenSecondModal()}>
                                                <Text style={styles.transport}>View</Text>
                                            </TouchableHighlight>

                                        </View>
                                        <View style={{borderWidth:1,height:0,borderColor:'#D7D9E0',marginLeft:100,marginTop:10}}/>
                                    </View>
                                )}
                                keyExtractor={(item)=>item.toString()}
                                extraData={this.state}
                            />

                        </View>
                        <Modal
                            isVisible={this.state.isOpenModal}
                            onBackdropPress={() => this.setState({ isOpenModal: false })}
                            style={{
                                marginTop:40,
                                width:600,
                                backgroundColor: 'white',
                                borderColor: 'black',
                                borderWidth:1,
                                marginLeft:300,
                                marginBottom:400,
                                paddingTop: 0
                            }}>
                            <View style={{flex:0}}>

                            </View>
                        </Modal>
                        <Modal
                            isVisible={this.state.isOpenSecondModal}
                            onBackdropPress={() => this.setState({ isOpenSecondModal: false })}
                            style={{
                                marginTop:40,
                                width:600,
                                backgroundColor: 'white',
                                borderColor: 'black',
                                borderWidth:1,
                                marginLeft:300,
                                marginBottom:400,
                                paddingTop: 0
                            }}>
                            <View style={{flex:0}}>

                            </View>
                        </Modal>

                    </View>
                </ScrollView>

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
    hauling: {
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
    farmpo: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 30,
        width: 100,
    },
    crop: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 47,
        width: 100,
    },
    seed: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 15,
        width: 150,
        paddingLeft: 7,
    },
    variety: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 55,
        width: 100,
        paddingRight: 15
    },
    actual: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 37,
        width: 100,

    },
    color: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 40,
        width: 100,
    },
    order: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 80,
        width: 35,
        borderBottomWidth: 1,
        borderColor:'#634720',
        paddingLeft:3,
        color:'#634720',

    },
    transport: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        marginLeft: 130,
        width: 35,
        borderBottomWidth: 1,
        borderColor:'#634720',
        paddingLeft:3,
        color:'#634720'

    },


    });
