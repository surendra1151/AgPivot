import React,{Component} from 'react';
import {Text,Image,View, StyleSheet,TouchableHighlight,TextInput,ScrollView,FlatList} from 'react-native';
import {DropDown} from './DropDownOne';

export  class Records extends React.Component{
    constructor(props){
        super(props);
        this.state={
         show:[
              "10",
              "25",
              "50",
             "100"

         ],
            currentsort:'no',
            currentSortDir:'asc',
         table:[ {  "no":" 1 ",
                    "year":"2019",
                   "operation":"Discing",
                    "field":"051",
                     "operator":"Seasonal Labor",
                     "Date":"04-03-2019",
                      "Time":"09:15",
                      "Tractor":"125-Challenger \n Mt655C Tractor" ,
                       "starthours":"4261",
                       "implements":"119-Case lh Disc",
                        "endhours":"4304.1",
                        "usagehours":"43.1  ",
                        "preparedacres":"55.15",
                         "stopdate":"04-03-2019",
                         "stoptime":"15:22",
                         "status":"stop"
         },
             {
                 "no":" 2 ",
                 "year":"2019",
                 "operation":"Discing",
                 "field":"024",
                 "operator":"Jim pruessing ",
                 "Date":"04-03-2019",
                 "Time":"12:00",
                 "Tractor":"125-Challenger \n Mt655C Tractor" ,
                 "starthours":"4265.9",
                 "implements":"119-Case lh Disc ,\nJim pruessing, \n 125-challenger \n Mt655C Tractor",
                 "endhours":"4269.8",
                 "usagehours":"3.9   ",
                 "preparedacres":"53.44",
                 "stopdate":"04-03-2019",
                 "stoptime":"15:54",
                 "status":"stop"
             },
             {
                 "no":" 3 ",
                 "year":"2019",
                 "operation":"Chisel\nPlowing",
                 "field":"024",
                 "operator":"Jim pruessing",
                 "Date":"04-04-2019",
                 "Time":"08:39",
                 "Tractor":"147-Case 600\n Quadtrac Tractor\t" ,
                 "starthours":"0",
                 "implements":"150-Wil Rich Chisel Plow",
                 "endhours":"3.46",
                 "usagehours":"-822\n.85",
                 "preparedacres":"55.43",
                 "stopdate":"04-04-2019",
                 "stoptime":"11:51",
                 "status":"stop"
             },
             {
             "no":" 4 ",
            "year":"2019",
            "operation":"Chisel\nPlowing",
            "field":"023",
            "operator":"Jim pruessing",
            "Date":"04-05-2019",
            "Time":"08:39",
            "Tractor":"147-Case 600\n Quadtrac Tractor\t" ,
            "starthours":"0",
            "implements":"150-Wil Rich Chisel Plow",
            "endhours":"3.02",
            "usagehours":"3.02",
            "preparedacres":"45.55",
            "stopdate":"04-05-2019",
            "stoptime":"11:51",
            "status":"stop"
            },

             { "no":" 5 ",
            "year":"2019",
            "operation":"Chisel\nPlowing",
            "field":"051",
            "operator":"Jim pruessing",
            "Date":"04-04-2019",
            "Time":"10:28",
            "Tractor":"147-Case 600\n Quadtrac Tractor\t" ,
            "starthours":"2416",
            "implements":"130-Hiller-Harriston\n 2025, 150-Wil Rich Chisel Plow,\n Jim Pruessing, 147-Case 600 Quadtrac\n Tractor",
            "endhours":"2418.8",
            "usagehours":"2.8   ",
            "preparedacres":"29",
            "stopdate":"04-05-2019",
            "stoptime":"13:16",
            "status":"stop"
           },
             {
             "no":" 6 ",
            "year":"2019",
            "operation":"Chisel\nPlowing",
            "field":"071",
            "operator":"Jim pruessing",
            "Date":"04-06-2019",
            "Time":"09:12",
            "Tractor":"147-Case 600\n Quadtrac Tractor\t" ,
            "starthours":"2419.9",
            "implements":"150-Wil Rich Chisel Plow\n, Jim Pruessing, 147-Case 600-\n Quadtrac Tractor",
            "endhours":"2426",
            "usagehours":"6.1   ",
            "preparedacres":"64.78",
            "stopdate":"04-06-2019",
            "stoptime":"16:33",
            "status":"stop"
             },
             {
                 "no":" 7 ",
                 "year":"2019",
                 "operation":"Chisel\nPlowing",
                 "field":"013",
                 "operator":"Jim pruessing",
                 "Date":"04-10-2019",
                 "Time":"11;05",
                 "Tractor":"125-Challenger \n Mt655C Tractor" ,
                 "starthours":"4272.3",
                 "implements":"119-Case Ih Disc,\n Jim Pruessing, 125-\nChallenger Mt655C Tractor",
                 "endhours":"4274.3",
                 "usagehours":"2    ",
                 "preparedacres":"20.43",
                 "stopdate":"04-10-2019",
                 "stoptime":"13:04",
                 "status":"stop"
             },
             {
                 "no":" 8 ",
                 "year":"2019",
                 "operation":"Chisel\nPlowing",
                 "field":"025",
                 "operator":"Jim pruessing",
                 "Date":"04-15-2019",
                 "Time":"16:02",
                 "Tractor":"147-Case 600\n Quadtrac Tractor\t" ,
                 "starthours":"2435",
                 "implements":"150-Wil Rich Chisel Plow\n, Jim Pruessing, 147-Case 600-\n Quadtrac Tractor",
                 "endhours":"4308.5",
                 "usagehours":"1873.5",
                 "preparedacres":"45.55",
                 "stopdate":"04-15-2019",
                 "stoptime":"08:08",
                 "status":"stop"
             },
             {
                 "no":" 9 ",
                 "year":"2019",
                 "operation":"Chisel\nPlowing",
                 "field":"013",
                 "operator":"Jim pruessing",
                 "Date":"04-16-2019",
                 "Time":"08:12",
                 "Tractor":"125-Challenger\n Mt655C Tractor" ,
                 "starthours":"4277.8",
                 "implements":"119-Case Ih Disc, Jim Pruessing, 125-Challenger Mt655C Tractor",
                 "endhours":"4278.6",
                 "usagehours":"0.8   ",
                 "preparedacres":"66:39",
                 "stopdate":"04-16-2019",
                 "stoptime":"09:04",
                 "status":"stop"
             },
             {
                 "no":"10",
                 "year":"2019",
                 "operation":"Chisel\nPlowing",
                 "field":"013",
                 "operator":"Jim pruessing",
                 "Date":"04-16-2019",
                 "Time":"09:11",
                 "Tractor":"147-Case 600\n Quadtrac Tractor\t" ,
                 "starthours":"2431.5",
                 "implements":"150-Wil Rich Chisel Plow\n, Jim Pruessing, 147-Case 600-\n Quadtrac Tractor",
                 "endhours":"2436.4",
                 "usagehours":"4.9   ",
                 "preparedacres":"66.34",
                 "stopdate":"04-16-2019",
                 "stoptime":"14:08",
                 "status":"stop"
             },
             {
                 "no": "11",
                 "year": "2019",
                 "operation": "Chisel\nPlowing",
                 "field": "059",
                 "operator": "Jim pruessing",
                 "Date": "04-17-2019",
                 "Time": "06:53",
                 "Tractor": "147-Case 600\n Quadtrac Tractor\t",
                 "starthours": "2436.8",
                 "implements": "150-Wil Rich Chisel Plow\n, Jim Pruessing, 147-Case 600-\n Quadtrac Tractor",
                 "endhours": "2443.9",
                 "usagehours": "7.9   ",
                 "preparedacres": "101.83",
                 "stopdate": "04-17-2019",
                 "stoptime": "16:46",
                 "status": "stop",
             },
             {
                 "no": "12",
                 "year": "2019",
                 "operation": "Chisel\nPlowing",
                 "field": "017",
                 "operator": "Jim pruessing",
                 "Date": "04-18-2019",
                 "Time": "07:02",
                 "Tractor": "147-Case 600\n Quadtrac Tractor\t",
                 "starthours": "2444.3",
                 "implements": "150-Wil Rich Chisel Plow\n, Jim Pruessing, 147-Case 600-\n Quadtrac Tractor",
                 "endhours": "2454",
                 "usagehours": "9.7   ",
                 "preparedacres": "139.98",
                 "stopdate": "04-18-2019",
                 "stoptime": "10:20",
                 "status": "stop"
             },
             {
             "no":"13",
            "year":"2019",
            "operation":"Chisel\nPlowing",
            "field":"018",
            "operator":"Jim pruessing",
            "Date":"04-19-2019",
            "Time":"07:09",
            "Tractor":"147-Case 600\n Quadtrac Tractor\t" ,
            "starthours":"2454.8",
            "implements":"150-Wil Rich Chisel Plow\n, Jim Pruessing, 147-Case 600-\n Quadtrac Tractor",
            "endhours":"2460.5",
            "usagehours":"5.7  ",
            "preparedacres":"61.18",
            "stopdate":"04-19-2019",
            "stoptime":"17:50",
            "status":"stop"
    },
             {
                 "no": "14",
                 "year": "2019",
                 "operation": "Row \nMarking",
                 "field": "Parr/A-2",
                 "operator": "Joe Huber",
                 "Date": "04-19-2019",
                 "Time": "06:35",
                 "Tractor": "2102-John Deere\n 8360 Tractor",
                 "starthours": "915",
                 "implements": "2141-Hinniker \nRow Marker, Joe-\n Huber, 2102-John-\nDeere 8360 Tractor",
                 "endhours": "924.9",
                 "usagehours": "9.9  ",
                 "preparedacres": "197.4",
                 "stopdate": "04-19-2019",
                 "stoptime": "09:15",
                 "status": "stop",
             },
             {
             "no":"15",
            "year":"2019",
            "operation":"Row Marking",
            "field":"Kent 220",
            "operator":"Joe Huber",
            "Date":"04-15-2019",
            "Time":"17:47",
            "Tractor":"2102-John Deere \n8360 Tractor" ,
            "starthours":"890",
            "implements":"2141-Hinniker Row Marker, Joe Huber, 2102-John Deere 8360 Tractor",
            "endhours":"",
            "usagehours":"0   ",
            "preparedacres":"",
            "stopdate":"04-19-2019",
            "stoptime":"00:00",
            "status":"start"
    }
         ]
        }
    }
    sort(key){
        console.log('working', key, this.state.currentsort, this.state.currentSortDir);
        if (key===this.state.currentsort){
            console.log("I am in same currentsort", this.state.currentSortDir)
            if (this.state.currentSortDir === 'asc'){
                this.setState({ currentSortDir: 'desc',});
            }
            else {
                this.setState({ currentSortDir: 'asc'})
            }
        }
        this.setState({
            currentsort: key,
        });
        console.log("is it working",this.state.currentsort,this.state.currentSortDir)
        if(this.state.currentSortDir === 'desc') {
            const data = {'name': key, 'sortby': 'asc'};
            this.state.table.sort((a,b) => {
                let modifier = 1;
                if (data.sortby === 'asc') modifier = -1;
                if (a[data.name] < b[data.name]) return -1 * modifier;
                if (a[data.name] > b[data.name]) return 1 *modifier;
                return this.state.table;
            });
        }
        else {
            const data = { 'name': key, 'sortby': 'desc'}
            this.state.table.sort((a,b) => {
                let modifier = 1;
                if (data.sortby === 'asc') modifier = -1;
                if (a[data.name] < b[data.name]) return -1 * modifier;
                if (a[data.name] > b[data.name]) return 1 *modifier;
                return this.state.table;
            });
        }
        console.log("values:", this.state.currentsort, this.state.currentSortDir);
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
                <View style={{ flexDirection:'row',marginRight: 50}}>
                    <TouchableHighlight onPress={()=>this.sort('no')}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.yash}>#</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67, }}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/>:
                            < Image source = {require('../assets/down.png')} style={{marginTop:44,marginLeft:3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=> this.sort('year')}>
                    <View style={{flexDirection:'row',marginLeft:70}}>
                        <Text style={styles.farmpo}>Year</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir==='asc'?
                        <Image source={require('../assets/Downarrow.png')} style={{marginTop:44,marginLeft:3}}/>:
                            <Image source={require('../assets/down.png')} style={{marginTop:44,marginLeft:3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('operation')}>
                    <View style={{flexDirection:'row',marginLeft:45}}>
                        <Text style={styles.farmpo}>Operation</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')}
                                   style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('field')}>
                    <View style={{flexDirection:'row',marginLeft:40}}>
                        <Text style={styles.farmpo}> Field</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('operator')}>
                    <View style={{flexDirection:'row',marginLeft:65}}>
                        <Text style={styles.farmpo}> Operator</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')}
                                   style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('Date')}>
                    <View style={{flexDirection:'row',marginLeft:65}}>
                        <Text style={styles.farmpo}> Date</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('Time')}>
                    <View style={{flexDirection:'row',marginLeft:70}}>
                        <Text style={styles.farmpo}> Time</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')}
                                   style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('Tractor')}>
                    <View style={{flexDirection:'row',marginLeft:90}}>
                        <Text style={styles.farmpo}> Tractor</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')}
                                   style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('starthours')}>
                    <View style={{flexDirection:'row',marginLeft:110 }}>
                        <Text style={styles.farmpo}> Start
                            {'\n'}
                            Hours</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')}
                                   style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('implements')}>
                    <View style={{flexDirection:'row',marginLeft:55}}>
                        <Text style={styles.farmpo}> Implements</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')}
                                   style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('endhours')}>
                    <View style={{flexDirection:'row',marginLeft:87}}>
                        <Text style={styles.farmpo}> End
                            {'\n'}
                            Hours</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')}
                                   style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('usagehours')}>
                    <View style={{flexDirection:'row',marginLeft:60}}>
                        <Text style={styles.farmpo}> Usage
                            {'\n'}
                            Hours</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')}
                                   style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('preparedacres')}>
                    <View style={{flexDirection:'row',marginLeft:65}}>
                        <Text style={styles.farmpo}> Prepared
                            {'\n'}
                            Acres</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')}
                                   style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('stopdate')}>
                    <View style={{flexDirection:'row',marginLeft:75}}>
                        <Text style={styles.farmpo}> Stop{'\n'}Date</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                        <Image source={require('../assets/Downarrow.png')} style={{marginTop:44,marginLeft:3}}/>:
                            <Image source={require('../assets/down.png')} style={{marginTop:44,marginLeft:3}}/>
                            }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('stoptime')}>
                    <View style={{flexDirection:'row',marginLeft:85}}>
                        <Text style={styles.farmpo}> Stop{'\n'}
                            Time</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')}
                                   style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.sort('status')}>
                    <View style={{flexDirection:'row',marginLeft:70}}>
                        <Text style={styles.farmpo}> Status</Text>
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/up.png')} style={{marginTop: 44, marginLeft: 7.67}}/> :
                            <Image source={require('../assets/Uparrow.png')} style={{marginTop: 44, marginLeft: 7.67}}/>
                        }
                        {this.state.currentSortDir === 'asc' ?
                            <Image source={require('../assets/Downarrow.png')} style={{marginTop: 44, marginLeft: 3}}/> :
                            <Image source={require('../assets/down.png')} style={{marginTop: 44, marginLeft: 3}}/>
                        }
                    </View>
                    </TouchableHighlight>
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
                                <Text style={styles.operation}>{item.operation}</Text>
                                <Text style={styles.field}>{item.field}</Text>
                                <Text style={styles.operator}>{item.operator}</Text>
                                <Text style={styles.date}>{item.Date}</Text>
                                <Text style={styles.time}>{item.Time}</Text>
                                <Text style={styles.tractor}>{item.Tractor}</Text>
                                <Text style={styles.starthours}>{item.starthours}</Text>
                                <Text style={styles.implements}>{item.implements}</Text>
                                <Text style={styles.endhours}>{item.endhours}</Text>
                                <Text style={styles.usagehours}>{item.usagehours}</Text>
                                <Text style={styles.preparedacres}>{item.preparedacres}</Text>
                                <Text style={styles.stopdate}>{item.stopdate}</Text>
                                <Text style={styles.stoptime}>{item.stoptime}</Text>
                                <Text style={styles.status}>{item.status}</Text>
                                <Image source={require('../assets/Change.png')} style={{marginLeft:10}}/>
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
                    <Text style={styles.list}>Showing 1 to 10 of 135 entries</Text>
                    <View  style={{flexDirection:'row'}}>
                        <Text style={styles.prev}> Prev</Text>
                        <Text style={styles.one}> 1</Text>
                        <Text style={styles.one}> 2</Text>
                        <Text style={styles.one}> 3</Text>
                        <Text style={styles.one}> 4</Text>
                        <Text style={styles.one}> 5</Text>
                        <Text style={styles.one}> 6</Text>
                        <Text style={styles.one}> 7</Text>
                        <Text style={styles.one}> 8</Text>
                        <Text style={styles.one}> 9</Text>
                        <Text style={styles.one}> 10</Text>
                        <Text style={styles.next}> Next</Text>
                    </View>


                </View>


            </View>
        )
    }

}
const  styles= StyleSheet.create({
    show:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        color:'#686868',
        marginLeft:100,
        marginTop:20,
    },
    entries:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        color:'#686868',
        marginTop:20,
        marginLeft:10,
    },
    search:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        color:'#686868',
        marginTop:20,
        marginRight:10,
    },
    yash:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        color:'#686868',
        marginLeft:100,
        marginTop:39,
    },
    farmpo:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        color:'#686868',
        marginTop:39,
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
    year:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:60,
        width:50,
    },
    operation:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:52,
        width:50
    },
    field: {
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:75,
        width:50,
        paddingLeft:7,
    },
    operator:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:70,
        width:125,
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
        paddingRight: 15,
    },
    time:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:30,
        width:75,
    },tractor:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:63,
        width:150
    },
    starthours:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:22,
        width:75,
        paddingLeft:20
    },
    implements:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:57,
        width:150,

    },
    endhours:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:45,
        width:75,
    },
    usagehours:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:55,
        width:125,
    },
    preparedacres: {
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:10,
        width:75,
    },
    stopdate:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:70,
        width:120
    },
    stoptime:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:35,
        width:75,
    },
    status:{
        fontFamily:'poppins',
        fontWeight:'normal',
        fontStyle:'normal',
        fontSize:14,
        lineHeight:20,
        marginLeft:65,
        width:50
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
    one:{

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

