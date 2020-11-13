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
export class CuttingRecords extends React.Component {
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
                    "seed_cut": "03-30-2019 \n 15:45:24",
                    "seed_grower": "Jorde Certified Seed, LLC",
                    "variety": "Red",
                    "color": "Red Norland",
                    "load_details": "1480/1 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": " 2 ",
                    "seed_cut": "03-30-2019 \n 15:45:24",
                    "seed_grower": "Jorde Certified Seed, LLC",
                    "variety": "Red",
                    "color": "Red Norland",
                    "load_details": "1480/3 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": " 3 ",
                    "seed_cut": "03-30-2019 \n 16:14:47",
                    "seed_grower": "Jorde Certified Seed, LLC",
                    "variety": "Red",
                    "color": "Red Norland",
                    "load_details": "1480/2 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": " 4 ",
                    "seed_cut": "03-27-2019 \n 11:56:00",
                    "seed_grower": "Norbest Farms",
                    "variety": "GOlden",
                    "color": "Golden Colomba",
                    "load_details": "1518/1 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": " 5 ",
                    "seed_cut": "03-28-2019 \n 11:56:00",
                    "seed_grower": "Jorde Certified Seed, LLC",
                    "variety": "Russet",
                    "color": "Russet Goldrush",
                    "load_details": "1482/1 - Seed Cutter -\n\n" +
                        "1482/2 - Seed Cutter -\n\n" +
                        "1482/3 - Seed Cutter -\n\n" +
                        "1482/4 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": " 6 ",
                    "seed_cut": "03-28-2019 \n 11:54:00",
                    "seed_grower": "Hafner Seed Farms",
                    "variety": "Russet",
                    "color": "Russet Norkotah Standard",
                    "load_details": "1511/1 - Seed Cutter -\n\n" +
                        "1511/2 - Seed Cutter -\n\n" +
                        "1511/3 - Seed Cutter -\n\n" +
                        "1511/4 - Seed Cutter -\n\n" +
                        "1511/5 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": " 7 ",
                    "seed_cut": "03-29-2019 \n 14:53:00",
                    "seed_grower": "Bula Potato Farms",
                    "variety": "Russet",
                    "color": "Russet Umatilla",
                    "load_details": "1490/2 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": " 8 ",
                    "seed_cut": "03-29-2019 \n 14:53:00",
                    "seed_grower": "Bula Potato Farms",
                    "variety": "Russet",
                    "color": "Russet Caribou",
                    "load_details": "1490/3 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": " 9 ",
                    "seed_cut": "04-05-2019 \n 10:26:59",
                    "seed_grower": "Bula Potato Farms",
                    "variety": "Russet",
                    "color": "Russet Reveille",
                    "load_details": "1490/1 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "10",
                    "seed_cut": "04-05-2019 \n 10:28:42",
                    "seed_grower": "Jorde Certified Seed, LLC",
                    "variety": "Russet",
                    "color": "Russet Labelle",
                    "load_details": "1514/0 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "11",
                    "seed_cut": "04-01-2019 \n 14:53:00",
                    "seed_grower": "Bula Potato Farms",
                    "variety": "Russet",
                    "color": "Russet Silverton",
                    "load_details": "1515/1 - Seed Cutter -\n\n" +
                        "1515/2 - Seed Cutter -\n\n" +
                        "1515/3 - Bin - 01\n\n" +
                        "1515/4 - Bin - 01",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "12",
                    "seed_cut": "04-02-2019 \n 12:10:00",
                    "seed_grower": "Schroeder Bros(RPE)",
                    "variety": "Russet",
                    "color": "Russet Silverton",
                    "load_details": "1521/1 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "13",
                    "seed_cut": "03-30-2019 \n 15:45:24",
                    "seed_grower": "Schroeder Bros(RPE)",
                    "variety": "Russet",
                    "color": "Russet Silverton",
                    "load_details": "1521/3 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "14",
                    "seed_cut": "03-30-2019 \n 15:45:24",
                    "seed_grower": "Schroeder Bros(RPE)",
                    "variety": "Russet",
                    "color": "Russet Silverton",
                    "load_details": "1521/2 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "15",
                    "seed_cut": "03-30-2019 \n 15:45:24",
                    "seed_grower": "Schroeder Bros(RPE)",
                    "variety": "Russet",
                    "color": "Russet Silverton",
                    "load_details": "1521/4 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "16",
                    "seed_cut": "03-30-2019 \n 15:45:24",
                    "seed_grower": "Schroeder Bros(RPE)",
                    "variety": "Russet",
                    "color": "Russet Silverton",
                    "load_details": "1521/5 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "17",
                    "seed_cut": "03-30-2019 \n 15:45:24",
                    "seed_grower": "Schroeder Bros(RPE)",
                    "variety": "Russet",
                    "color": "Russet Silverton",
                    "load_details": "1521/6 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "18",
                    "seed_cut": "03-30-2019 \n 15:45:24",
                    "seed_grower": "Schroeder Bros(RPE)",
                    "variety": "Russet",
                    "color": "Russet Silverton",
                    "load_details": "1521/7 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "19",
                    "seed_cut": "03-30-2019 \n 15:45:24",
                    "seed_grower": "Schroeder Bros(RPE)",
                    "variety": "red",
                    "color": "Russet Silverton",
                    "load_details": "1521/8 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                },
                {
                    "no": "20",
                    "seed_cut": "03-30-2019 \n 15:45:24",
                    "seed_grower": "Schroeder Bros(RPE)",
                    "variety": "Russet",
                    "color": "Russet Silverton",
                    "load_details": "1521/9 - Seed Cutter -",
                    "Whole": "",
                    "Sample": "",
                    "destination": "",
                }
                ],
            wholesize:[
                {
                    one:{
                        under:{"quantity":"2","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    two:{
                        under:{"quantity":"7","weight":"0.39"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    three:{
                        under:{"quantity":"0","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    four: {
                        under: {"quantity": "0", "weight": "0.0"},
                        two: {"quantity": "0", "weight": "0.0"},
                        six: {"quantity": "0", "weight": "0.0"},
                        above: {"quantity": "0", "weight": "0.0"},
                    },
                    five:{
                        under:{"quantity":"0","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    six:{
                        under:{"quantity":"0","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    seven:{
                        under:{"quantity":"0","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    eight:{
                        under:{"quantity":"0","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    nine:{
                        under:{"quantity":"0","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    ten:{
                        under:{"quantity":"2","weight":"0.62"},
                        two:{"quantity":"10","weight":"3.15"},
                        six:{"quantity":"15","weight":"7.16"},
                        above:{"quantity":"11","weight":"8.41"},
                    },
                    eleven:{
                        under:{"quantity":"5","weight":"0.93"},
                        two:{"quantity":"22","weight":"6.02"},
                        six:{"quantity":"20","weight":"9.05"},
                        above:{"quantity":"1","weight":"0.64"},
                    },
                    tweleve:{
                        under:{"quantity":"5","weight":"0.93"},
                        two:{"quantity":"22","weight":"6.02"},
                        six:{"quantity":"20","weight":"9.05"},
                        above:{"quantity":"1","weight":"0.64"},
                    },

                    thirteen:{
                        under:{"quantity":"2","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    fourteen:{
                        under:{"quantity":"2","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    fifteen:{
                        under:{"quantity":"2","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    sixteen:{
                        under:{"quantity":"2","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    seventeen:{
                        under:{"quantity":"2","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    eighteen:{
                        under:{"quantity":"2","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    nineteen:{
                        under:{"quantity":"2","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },
                    twenty:{
                        under:{"quantity":"2","weight":"0.0"},
                        two:{"quantity":"0","weight":"0.0"},
                        six:{"quantity":"0","weight":"0.0"},
                        above:{"quantity":"0","weight":"0.0"},
                    },


                },
            ],
            isOpenModal:false,
            isOpenSecondModal:false,
            isOpenThirdModal:false,
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
                                <TouchableHighlight onPress={()=>this.sort('seed_cut')}>
                                <Text style={styles.cutting}>Seed Cut Date</Text>
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
                            <View style={{flexDirection:'row',marginLeft:65}}>
                                <TouchableHighlight onPress={() => this.sort('color')}>
                                <Text style={styles.cutting}>Color/Variety</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:65}}>
                                <TouchableHighlight onPress={() =>this.sort('load_details')}>
                                <Text style={styles.cutting}>Load Details</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:90}}>
                                <TouchableHighlight onPress={() =>this.sort('whole')}>
                                <Text style={styles.cutting}>Whole Seed Size{'\n'} Profile Details</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:90}}>
                                <TouchableHighlight onPress={() =>this.sort('sample')}>
                                <Text style={styles.cutting}>Sample Cut Size{'\n'} Profile Details</Text>
                                </TouchableHighlight>
                                <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                                <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:110}}>
                                <TouchableHighlight onPress={() =>this.sort('destination')}>
                                <Text style={styles.cutting}>Destination</Text>
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
                                            <Text style={styles.seed_cut}>{item.seed_cut}</Text>
                                            <Text style={styles.seed_grower}>{item.seed_grower}</Text>
                                            <Text style={styles.variety}>{item.variety}</Text>
                                            <Text style={styles.color}>{item.color}</Text>
                                            <Text style={styles.load_details}>{item.load_details}</Text>
                                            <TouchableHighlight onPress={() =>this.OpenModal()}>
                                            <Text style={styles.whole}>Whole Seed Size Profile</Text>
                                            </TouchableHighlight>
                                            <TouchableHighlight onPress={() =>this.OpenSecondModal()}>
                                            <Text style={styles.sample}>Sample Cut Size Profile</Text>
                                            </TouchableHighlight>
                                            <TouchableHighlight onPress={() =>this.OpenThirdModal()}>
                                            <Text style={styles.destination}>View</Text>
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
                                 <Text style={styles.seed_cutting}>Seed Cutting</Text>
                                 <TouchableHighlight onPress={() =>this.setState({isOpenModal:false})}>
                                 <Text style={styles.close}>Close</Text>
                                 </TouchableHighlight>
                             </View>
                             <View style={{borderWidth:0.3,borderColor:'#D7D9E0',height:0}}/>
                             <Text style={styles.whole_seed}>Whole Seed Size Profile Details</Text>
                             <View style={{borderWidth:0.3,borderColor:'#D7D9E0',height:0}}/>
                             <View style={{flexDirection:'row'}}>
                                 <Text style={styles.details}>Sample</Text>
                                 <Text style={styles.details_size}>Size</Text>
                                 <Text style={styles.details_under}>Under 2"</Text>
                                 <Text style={styles.details_two}>2" - 6 oz</Text>
                                 <Text style={styles.details_six}>6 - 10 oz</Text>
                                 <Text style={styles.details_above}>Above 10 oz</Text>
                             </View>
                             <View style={{flexDirection:'row'}}>
                                 <Text style={styles.one}>1</Text>
                                 <View >
                                     <Text style={styles.weight}>Quantity	</Text>
                                     <View style={{borderWidth:0.3,borderColor:'#D7D9E0',height:0}}/>
                                     <Text style={styles.weight}>Weight</Text>
                                     <View style={{borderWidth:0.3,borderColor:'#D7D9E0',height:0}}/>
                                     <Text style={styles.weight}>Comments	</Text>
                                 </View>
                                 <FlatList
                                 data={this.state.wholesize}
                                 renderItem={({item}) =>(
                                     <View style={{flexDirection:'row',marginTop:15,color:'#686868'}}>
                                         <Text>{item.one}</Text>
                                     </View>

                                 )}
                                 keyExtractor={(item)=>item.toString()}
                                 extraData={this.state}
                                 />

                             </View>

                         </View>
                     </Modal>
                        <Modal
                            isVisible={this.state.isOpenSecondModal}

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
                                    <Text style={styles.seed_cutting}>Seed Cutting</Text>
                                    <TouchableHighlight onPress={() =>this.setState({isOpenSecondModal:false})}>
                                        <Text style={styles.close}>Close</Text>
                                    </TouchableHighlight>
                                </View>
                                <View style={{borderWidth:0.3,borderColor:'#D7D9E0',height:0}}/>
                                <Text style={styles.whole_seed}>Sample Cut Size Profile Details</Text>
                                <View style={{borderWidth:0.3,borderColor:'#D7D9E0',height:0}}/>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.details}>Sample</Text>
                                    <Text style={styles.details_size}>Size</Text>
                                    <Text style={styles.details_under}>Under 1.35"	</Text>
                                    <Text style={styles.details_two}>1.35" -2"</Text>
                                    <Text style={styles.details_six}>2"-2.5"</Text>
                                    <Text style={styles.details_six}>2.5"-3"</Text>
                                    <Text style={styles.details_above}>Above 3"</Text>
                                </View>
                                <View style={{borderWidth:0.3,borderColor:'#D7D9E0',height:0}}/>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.one}>1</Text>
                                    <View >
                                        <Text style={styles.weight}>Quantity	</Text>
                                        <View style={{borderWidth:0.3,borderColor:'#D7D9E0',height:0}}/>
                                        <Text style={styles.weight}>Weight</Text>
                                        <View style={{borderWidth:0.3,borderColor:'#D7D9E0',height:0}}/>
                                        <Text style={styles.weight}>Comments	</Text>
                                    </View>

                                </View>

                            </View>
                        </Modal>
                        <Modal
                            isVisible={this.state.isOpenThirdModal}

                            style={{
                                marginTop:40,
                                width:600,
                                backgroundColor: 'white',
                                borderColor: 'black',
                                borderWidth:1,
                                marginLeft:300,
                                marginBottom:500,
                                paddingTop: 0
                            }}>
                            <View style={{marginTop: 0, bottom: 0,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={styles.seed_cutting}>Seed Cutting</Text>
                                <TouchableHighlight onPress={() =>this.Close()}>
                                    <Text style={styles.close}>Close</Text>
                                </TouchableHighlight>
                                <View>
                                    <Text>Destination</Text>
                                    <Text>TrailerNo#</Text>
                                </View>
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
    seed_cut:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:50,
        width:120,
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
        marginLeft:50,
        width:100,
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
    load_details:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
    },
    whole:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:60,
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
    }


})
