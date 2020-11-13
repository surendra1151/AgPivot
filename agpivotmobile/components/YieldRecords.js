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
export class YieldRecords extends React.Component {
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
                    "field": "059",
                    "seed_grower": "Real Potatoes",
                    "variety": "Russet",
                    "color": "Russet Pacific",
                    "date": "07-16-2019",
                    "location": "N",
                    "plants": "7",
                    "stems": "16",
                    "comments":"",
                    "sampling":"",
                },
                {
                    "no": " 2 ",
                    "field": "025",
                    "seed_grower": "J.D.Miller Seed Farm",
                    "variety": " Red ",
                    "color": "Red Norland",
                    "date": "07-16-2019",
                    "location": "N",
                    "plants": "7",
                    "stems": "26",
                    "comments":"",
                    "sampling":"",
                },
                {
                    "no": " 3 ",
                    "field": "025",
                    "seed_grower": "J.D.Miller Seed Farm",
                    "variety": " Red ",
                    "color": "Red Norland",
                    "date": "07-16-2019",
                    "location": "N",
                    "plants": "8",
                    "stems": "20",
                    "comments":"vine killed on 7-11-19",
                    "sampling":"",
                },
                {
                    "no": " 4 ",
                    "field": "025",
                    "seed_grower": "Norbest Farms",
                    "variety": "Golden",
                    "color": "Golden Colomba",
                    "date": "07-16-2019",
                    "location": "N",
                    "plants": "7",
                    "stems": "26",
                    "comments":"",
                    "sampling":"",
                },
                {
                    "no": " 5 ",
                    "field": "025",
                    "seed_grower": "Norbest Farms",
                    "variety": "Golden",
                    "color": "Golden Colomba",
                    "date": "07-16-2019",
                    "location": "N",
                    "plants": "6",
                    "stems": "16",
                    "comments":"vine killed on 7-11-19",
                    "sampling":"",
                },
                {
                    "no": " 6 ",
                    "field": "059",
                    "seed_grower": "Real Potatoes",
                    "variety": "Russet",
                    "color": "Russet Pacific",
                    "date": "07-25-2019",
                    "location": "NW",
                    "plants": "7",
                    "stems": "21",
                    "comments":"Vines are going down, not much life left",
                    "sampling":"",
                },
                {
                    "no": " 7 ",
                    "field": "059",
                    "seed_grower": "Real Potatoes",
                    "variety": "Russet",
                    "color": "Russet Pacific",
                    "date": "07-23-2019",
                    "location": "N",
                    "plants": "8",
                    "stems": "23",
                    "comments":"",
                    "sampling":"",
                },
                {
                    "no": " 8 ",
                    "field": "175",
                    "seed_grower": "Creek Side Potato Farms",
                    "variety": " Red ",
                    "color": "Red Rooster",
                    "date": "10-01-2019",
                    "location": "SW",
                    "plants": "7",
                    "stems": "23",
                    "comments":"Defect is IBS, generally located in the cambium layer. Rooster variety is heavily netted, so scab is not easy to detect.",
                    "sampling":"",
                },
                {
                    "no": " 9 ",
                    "field": "175",
                    "seed_grower": "Creek Side Potato Farms",
                    "variety": " Red ",
                    "color": "Red Rooster",
                    "date": "10-01-2019",
                    "location": "NW",
                    "plants": "6",
                    "stems": "32",
                    "comments":"Defect is Internal Brown Spot. Rooster variety skin is heavily netted.",
                    "sampling":"",
                },
                {
                    "no": "10",
                    "field": "175",
                    "seed_grower": "Creek Side Potato Farms",
                    "variety": " Red ",
                    "color": "Red Rooster",
                    "date": "10-01-2019",
                    "location": "SE",
                    "plants": "7",
                    "stems": "33",
                    "comments":"Defect is IBS.",
                    "sampling":"",
                },
                {
                    "no": "11 ",
                    "field": "175",
                    "seed_grower": "Creek Side Potato Farms",
                    "variety": " Red ",
                    "color": "Red Rooster",
                    "date": "10-01-2019",
                    "location": "NE",
                    "plants": "7",
                    "stems": "38",
                    "comments":"Defect is IBS.",
                    "sampling":"",
                },
                {
                    "no": "12",
                    "field": "002",
                    "seed_grower": "Schroeder Bros",
                    "variety": "Golden",
                    "color": "Golden Soraya",
                    "date": "10-22-2019",
                    "location": "E",
                    "plants": "7",
                    "stems": "25",
                    "comments":"Estimated stem count",
                    "sampling":"",
                },
                {
                    "no": "13",
                    "field": "002",
                    "seed_grower": "Schroeder Bros",
                    "variety": "Golden",
                    "color": "Golden Soraya",
                    "date": "10-22-2019",
                    "location": "W",
                    "plants": "7",
                    "stems": "25",
                    "comments":"Estimated stem count",
                    "sampling":"",
                },
                {
                    "no": "14",
                    "field": "002",
                    "seed_grower": "Bula Potato Farms",
                    "variety": "Fingerling",
                    "color": "Fingerling Little Giant",
                    "date": "11-22-2019",
                    "location": "SW",
                    "plants": "89",
                    "stems": "56",
                    "comments":"",
                    "sampling":"",
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
                                    <Text style={styles.yash}>#</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:50}}>
                                <TouchableHighlight onPress={()=>this.sort('field')}>
                                    <Text style={styles.cutting}>Field</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:45}}>
                                <TouchableHighlight onPress={() => this.sort('seed_grower')}>
                                    <Text style={styles.cutting}>Seed Grower</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:85}}>
                                <TouchableHighlight onPress={() =>this.sort('variety')}>
                                    <Text style={styles.cutting}>Variety</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() => this.sort('color')}>
                                    <Text style={styles.cutting}>Color</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:100}}>
                                <TouchableHighlight onPress={() =>this.sort('date')}>
                                    <Text style={styles.cutting}>Date</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:80}}>
                                <TouchableHighlight onPress={() =>this.sort('location')}>
                                    <Text style={styles.cutting}>Location</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('plants')}>
                                    <Text style={styles.cutting}>No Plants</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:70}}>
                                <TouchableHighlight onPress={() =>this.sort('stems')}>
                                    <Text style={styles.cutting}>No Stems</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:60}}>
                                <TouchableHighlight onPress={() =>this.sort('comments')}>
                                    <Text style={styles.cutting}>Comments</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:115,paddingRight:50}}>
                                <TouchableHighlight onPress={() =>this.sort('sampling')}>
                                    <Text style={styles.cutting}>Sampling Size</Text>
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
                                            <Text style={styles.no}> {item.no}</Text>
                                            <Text style={styles.field}>{item.field}</Text>
                                            <Text style={styles.seed_grower}>{item.seed_grower}</Text>
                                            <Text style={styles.variety}>{item.variety}</Text>
                                            <Text style={styles.color}>{item.color}</Text>
                                            <Text style={styles.date}>{item.date}</Text>
                                            <Text style={styles.location}>{item.location}</Text>
                                            <Text style={styles.plants}>{item.plants}</Text>
                                            <Text style={styles.stems}>{item.stems}</Text>
                                            <Text style={styles.comments}>{item.comments}</Text>

                                            <TouchableHighlight onPress={() =>this.OpenModal()}>
                                                <Text style={styles.view}>View Samplings</Text>
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
    cutting: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#686868',
        marginTop: 39,
    },
    no:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:95,
        width:50,
    },
    field:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:45,
        width:75,
    },
    seed_grower:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:20,
        width:150,
    },
    variety:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:40,
        width:80,
        paddingLeft:7,
    },
    color:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:40,
        width:150,
        paddingRight:15
    },
    date:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:20,
        width:120,
        paddingRight:15
    },
    location:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:45,
        width:50,
        paddingRight:15
    },
    plants:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:105,
        width:50,
        paddingRight:15
    },
    stems:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:100,
        width:50,
        paddingRight:15
    },
    comments:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:70,
        width:150,
        paddingRight:15
    },
    view:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:60,
        width:140,
        paddingRight: 15,
        borderWidth:1,
        height:35,
        backgroundColor:'#634720',
        color:'white',
        textAlign:'center',
        paddingTop:7,
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
