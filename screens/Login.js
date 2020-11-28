import React,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity, Alert,Text,Modal,ScrollView, KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'
import db from '../config'
export default class Loginscreen extends Component{
    constructor(){
        super();
        this.state={
            loginid:"",
            password:"",
            firstname:"",
            lastname:"",
            address:"",
            contact:"",
            confirmpassword:"",
            isModalVisible:false
        }
    }
    
    login=(loginid,password)=>{
firebase.auth().signInWithEmailAndPassword(loginid,password).then(()=>{
  
    return(
        Alert.alert("Successesfully loggedin")
    )
})
.catch((error)=>{
    var errorcode=error.code;
    var errormessage=error.message
    return Alert.alert(errormessage)
    
})
      
    }
    signup=(loginid,password,confirmpassword)=>{
        if(password!==confirmpassword){
         return   Alert.alert("password doesn't match")
        }
        else{
        firebase.auth().createUserWithEmailAndPassword(loginid,password).then(()=>{
            db.collection("users").add({
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                contact:this.state.contact,
                loginid:this.state.loginid,
            })
            return Alert.alert("User added sucessfully",""
            [{text:'ok',onPress:()=>{this.setState({'isModalVisible':false})}}]
            )
        })
        .catch((error)=>{
            var errorcode=error.code;
            var errormessage=error.message
            return Alert.alert(errormessage)
            
        })}

    }
    showmodal=()=>{
        return(
            <Modal
            visible={this.state.isModalVisible}
            transparent= {true}
            animationType="fade"
            >
                <View style={styles.modalContainer}>
                    <ScrollView>
                        <KeyboardAvoidingView>
                            <Text style={{fontWeight:'bold',alignItems:'center',alignContent:'center',marginLeft:125}}>Register</Text>
                            <TextInput style={styles.formTextInput} placeholder={"First Name"}
                            maxLength={15}
                            onChangeText={(text)=>{
                                this.setState({firstname:text})
                            }}
                            
                            />
                            <TextInput style={styles.formTextInput}placeholder={"Last Name"}
                            maxLength={15}
                            onChangeText={(text)=>{
                                this.setState({lastname:text})
                            }}
                            
                            />
                            <TextInput style={styles.formTextInput} placeholder={"Address"}
                             multiline={true}
                            onChangeText={(text)=>{
                                this.setState({address:text})
                            }}
                            
                            />
                            <TextInput style={styles.formTextInput} placeholder={"Contact"}
                            maxLength={15}
                            keyboardType={"numeric"}
                            onChangeText={(text)=>{
                                this.setState({contact:text})
                            }}
                            
                            />
                            <TextInput style={styles.formTextInput} placeholder={"Login id"}
                           
                            onChangeText={(text)=>{
                                this.setState({loginid:text})
                            }}
                            
                            />
                               <TextInput style={styles.formTextInput} placeholder={"Password"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({password:text})
                            }}
                            
                            />
                               <TextInput style={styles.formTextInput} placeholder={"Confirm Password"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({confirmpassword:text})
                            }}
                            
                            />
                            <View>
                                <TouchableOpacity style={styles.button} onPress={()=>{
                                    this.setState({isModalVisible:false})
                                    
                                }}>
                                <Text>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                            <TouchableOpacity style={styles.button} onPress={()=>{
                                    this.signup(this.state.loginid,this.state.password,this.state.confirmpassword)
                                    
                                }}>
                                <Text>Register</Text>
                                </TouchableOpacity>
                            
                            </View>

                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
    render(){
        return(
            
            <View >
                <View >
                <Text>Barter App</Text>
            </View>
                {this.showmodal()}
                <TextInput style={styles.loginBox} placeholder="Login id"
                 keyboardType="email-address"
                 onChangeText={(text)=>{
                  this.setState({loginid:text})
                 }}
                 
                 />
                 <TextInput style={styles.loginBox} placeholder="password"
                 secureTextEntry={true}
                 onChangeText={(text)=>{
                  this.setState({password:text})
                 }}
                 />
                 <TouchableOpacity style={styles.button} onPress={()=>{
                   this.login(this.state.loginid,this.state.password)
                 }}><Text>Login</Text></TouchableOpacity>
                 
                 <TouchableOpacity style={styles.button} onPress={()=>{
                     this.setState({isModalVisible:true})
                    }}><Text>Signup</Text></TouchableOpacity>
   
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4AADFF',
        alignItems: 'center',
        justifyContent: 'center'
      },
      profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#ff3d00'
      },
      loginBox:{
        width: 300,
        height:40,
        borderBottomWidth: 1.5,
        borderColor : '#4AADFF',
        fontSize:20,
        
        margin:10,
        paddingLeft:10
      },
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      modalTitle :{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#4AADFF',
        margin:50
      },
      modalContainer:{
        flex:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#4AADFF",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#4AADFF',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'#0071BC',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
     
      button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#0071BC",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      }
     })