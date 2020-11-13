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
export class HarvestRecords extends React.Component {
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
                    "farm": "Alsum",
                    "date": "09-09-2019",
                    "time": "07:28",
                    "field": "018",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"Dirt",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                },
                {
                    "Record": " 2 ",
                    "farm": "Alsum",
                    "date": "09-09-2019",
                    "time": "07:33",
                    "field": "018",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                },
                {
                    "Record": " 3 ",
                    "farm": "Alsum",
                    "date": "09-09-2019",
                    "time": "07:37",
                    "field": "059",
                    "color": "Russet",
                    "seed": "J.D. Miller Seed Farm",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                },
                {
                    "Record": " 4 ",
                    "farm": "Alsum",
                    "date": "09-09-2019",
                    "time": "07:42",
                    "field": "059",
                    "color": "Russet",
                    "seed": "J.D. Miller Seed Farm",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                },
                {
                    "Record": " 5 ",
                    "farm": "Alsum",
                    "date": "09-16-2019",
                    "time": "06:41",
                    "field": "017",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                }, {
                    "Record": " 6 ",
                    "farm": "Alsum",
                    "date": "09-16-2019",
                    "time": "08:42",
                    "field": "017",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                }, {
                    "Record": " 7 ",
                    "farm": "Alsum",
                    "date": "09-16-2019",
                    "time": "08:02",
                    "field": "017",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                },
                {
                    "Record": " 8 ",
                    "farm": "Alsum",
                    "date": "09-16-2019",
                    "time": "08:02",
                    "field": "017",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                }, {
                    "Record": " 9 ",
                    "farm": "Alsum",
                    "date": "09-16-2019",
                    "time": "08:02",
                    "field": "017",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                }, {
                    "Record": "10",
                    "farm": "Alsum",
                    "date": "09-16-2019",
                    "time": "08:02",
                    "field": "017",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                }, {
                    "Record": "11",
                    "farm": "Alsum",
                    "date": "09-16-2019",
                    "time": "08:02",
                    "field": "017",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                },
                {
                    "Record": "12",
                    "farm": "Alsum",
                    "date": "09-17-2019",
                    "time": "06:56",
                    "field": "017",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"",
                },
                {
                    "Record": "13",
                    "farm": "Alsum",
                    "date": "09-17-2019",
                    "time": "06:56",
                    "field": "059",
                    "color": "Russet",
                    "seed": "Schroeder Bros",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"Slight IBS at stem end of 1 potato Loaded on truck..not in bin 8",
                },
                {
                    "Record": "14",
                    "farm": "Alsum",
                    "date": "09-17-2019",
                    "time": "06:56",
                    "field": "059",
                    "color": "Russet",
                    "seed": "Hafner Seed Farms",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"Slight browning at stem end. Loaded on truck... not in bin 8",
                }, {
                    "Record": "15",
                    "farm": "Alsum",
                    "date": "09-17-2019",
                    "time": "06:56",
                    "field": "059",
                    "color": "Russet",
                    "seed": "Hafner Seed Farms",
                    "hollow": "NA",
                    "scab": "NA",
                    "defect":"NA",
                    "internal":"NA",
                    "bin":"08",
                    "sampling":"",
                    "comments":"HH found in 6-18 oz size. IBS in 10-14 oz. Loaded on truck.... not in bin 8",
                },
            ],

            isOpenModal:false,
            currentSort: 'no',
            currentSortDir: 'asc',

        }

    }

    OpenModal(){
        this.setState({isOpenModal:true});
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
                                <TouchableHighlight onPress={() =>this.sort('no')}>
                                    <Text style={styles.yash}>Record ID</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:50}}>
                                <TouchableHighlight onPress={()=>this.sort('farm')}>
                                    <Text style={styles.harvest}>Farm</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:45}}>
                                <TouchableHighlight onPress={() => this.sort('date')}>
                                    <Text style={styles.harvest}>Date</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:75}}>
                                <TouchableHighlight onPress={() =>this.sort('time')}>
                                    <Text style={styles.harvest}>Time</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:60}}>
                                <TouchableHighlight onPress={() => this.sort('field')}>
                                    <Text style={styles.harvest}>Field</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:60}}>
                                <TouchableHighlight onPress={() =>this.sort('color')}>
                                    <Text style={styles.harvest}>Color</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('seed')}>
                                    <Text style={styles.harvest}>Seed Grower</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('hallow')}>
                                    <Text style={styles.harvest}>Hallow Heart Weight</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:50}}>
                                <TouchableHighlight onPress={() =>this.sort('scab')}>
                                    <Text style={styles.harvest}>Scab Weight</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:60}}>
                                <TouchableHighlight onPress={() =>this.sort('defect')}>
                                    <Text style={styles.harvest}>Other Defect</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:60}}>
                                <TouchableHighlight onPress={() =>this.sort('internal')}>
                                    <Text style={styles.harvest}>Internal Discoloration</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:60}}>
                                <TouchableHighlight onPress={() =>this.sort('bin')}>
                                    <Text style={styles.harvest}>Bin</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:60}}>
                                <TouchableHighlight onPress={() =>this.sort('sampling')}>
                                    <Text style={styles.harvest}>Suppling Summary</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:60}}>
                                <TouchableHighlight onPress={() =>this.sort('comments')}>
                                    <Text style={styles.harvest}>Comments</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>


                        </View>
                        <View style={{borderWidth:1,height:0,borderColor:'#D7D9E0',marginLeft:100,marginTop:10}}/>
                        <View style={{ flex:1,flexDirection:'column'}}>
                            <FlatList
                                data={this.state.table}
                                renderItem={({item})=>(
                                    <View>
                                        <View style={{flexDirection:'row',marginTop:10,color:'#686868'}}>
                                            <Text style={styles.record}> {item.Record}</Text>
                                            <Text style={styles.farm}>{item.farm}</Text>
                                            <Text style={styles.date}>{item.date}</Text>
                                            <Text style={styles.time}>{item.time}</Text>
                                            <Text style={styles.field}>{item.field}</Text>
                                            <Text style={styles.color}>{item.color}</Text>
                                            <Text style={styles.seed}>{item.seed}</Text>
                                            <Text style={styles.hallow}>{item.hollow}</Text>
                                            <Text style={styles.scab}>{item.scab}</Text>
                                            <Text style={styles.defect}>{item.defect}</Text>
                                            <Text style={styles.internal}>{item.internal}</Text>
                                            <Text style={styles.bin}>{item.bin}</Text>
                                            <TouchableHighlight onPress={() =>this.OpenModal()}>
                                                <Text style={styles.view}>View</Text>
                                            </TouchableHighlight>
                                            <Text style={styles.comments}>{item.comments}</Text>

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
                                <View style={{marginTop: 0, bottom: 0,flexDirection:'row',justifyContent:'space-between'}}>
                                    <TouchableHighlight onPress={() =>this.setState({isOpenModal:false})}>
                                        <Text style={styles.close}>Close</Text>
                                    </TouchableHighlight>
                                </View>

                            </View>
                        </Modal>
                    </View>
                </ScrollView>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text style={styles.list}>Showing 1 to 14 of 14 entries</Text>
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
    harvest: {
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
    farm:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:85,
        width:75,
    },
    date:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:20,
        width:100,
    },
    time:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:35,
        width:80,
        paddingLeft:7,
    },
    field:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:45,
        width:100,
        paddingRight:15
    },
    color:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:15,
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
    hallow:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:110,
        width:50,
        paddingRight:15
    },
    scab:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:140,
        width:50,
        paddingRight:15
    },
    defect:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:120,
        width:50,
        paddingRight:15
    },
    internal:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:120,
        width:50,
        paddingRight:15
    },
    bin:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:140,
        width:50,
        paddingRight:15
    },
    comments:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:130,
        width:150,
        paddingRight:60
    },
    view:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:70,
        width:60,
        paddingRight: 15,
        borderWidth:1,
        height:25,
        backgroundColor:'#634720',
        color:'white',
        textAlign:'center',
        paddingTop:3,
        paddingLeft:7
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
    }


})
