import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Switch,Surface,List,TextInput,useTheme,Avatar} from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
export default function App() {
  const { colors } = useTheme();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  //const [isRemarksFocused, setRemarksFocused] = useState(false);
  const keyboardDidShowListener = Keyboard.addListener(
    'keyboardDidShow',
    () => {
      setKeyboardVisible(true); // or some other action
     
    }
  );
  const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
      setKeyboardVisible(false); // or some other action
    }
  );
  const renderCamara_FileUpload=()=> {
    return (
      <> 
        <View 
        
        style={[styles.button, {backgroundColor: colors.background   }]}>

              <TouchableOpacity
                  style={styles.btn}
                  //onPress={openCamera}
                                  >
              <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.btn}
              > 

                  <Text style={[styles.textbtn, {
                      color:'#fff'
                  }]}>      <Icon size={30} name="photo-camera" color="white" />
                  Take Photo </Text>

              </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.btn}
                  
                                  >
              <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.btn}
              > 
                  <Text style={[styles.textbtn, {
                      color:'#fff'
                  }]}>    <Icon size={30} name="photo" color="white" />
                  Choose Image </Text>

              </LinearGradient>
              </TouchableOpacity>

              
              <TouchableOpacity
                  style={styles.btn}
                                  >
              <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.btn}
              > 
                  <Text style={[styles.textbtn, {
                      color:'#fff'
                  }]}><Feather name="paperclip" style={styles.icon} color="white" /> 
                  Attach PDF file </Text>
              </LinearGradient>
              </TouchableOpacity>
          
          </View>

{/* 
          <View style={[styles.body, {
              backgroundColor: colors.background
          },
          {borderColor: {color: colors.text  }}
          
          
          
          ]}> 
                        
      
      

          <FlatList
            data={state.docListData}
            keyExtractor={(docItem) => docItem.id}
            renderItem={({ item }) => {             
              return (
                <TouchableOpacity
                  //onPress={() => console.log("selected")}
                >
                  <View style={styles.row}>
                  <TouchableOpacity //onPress={() => console.log("selected")}
                  >                  
                  {setfileTypeIcon(item)}                         
                    </TouchableOpacity>   
                    
                    <Text  style={[styles.title, {color: colors.text  }]}  >
                      {item.name}                     
                    </Text>   
                    <TouchableOpacity onPress={() =>
  Alert.alert(`Delete ?`,`Are you sure want to delete the  file ' ${item.name} ' ?`,      
  [        
    { text: "YES", onPress: () => removeDocsUri(item.uri) },
  ]
)

                        }>
                      <Feather style={[styles.icon, {color: colors.text  }]} name="trash" />
                    </TouchableOpacity>    
                  </View>
                </TouchableOpacity>
              );
            }}
          />        
          </View>   
*/}

        </>
    );
}
     
const renderDriverUri=()=> {    
  return (      
    <>  
      <Avatar.Image style={styles.imagesDriverChecker}
                          
                            size={80}
                        />            
   <Text style={[styles.ImageText, {color: colors.text  }]} >Driver</Text>
   </>    
  )

}
const renderCheckerUri=()=> {  
return (      
<>  
  <Avatar.Image style={styles.imagesDriverChecker}
                      
                        size={80}
                    />            
<Text style={[styles.ImageText, {color: colors.text  }]} >Checker</Text>
</>    
)

} 

  return (
     <SafeAreaView style={styles.safeContainerStyle}>  
     
     <ScrollView 
     ref={ref => {this.scrollView = ref}}
     style={styles.scrollViewStyle} keyboardShouldPersistTaps={'always'}>  
    
     <View style={[Platform.select({ ios: { zIndex: 2 } })]}>
          <AutocompleteDropdown   
                    clearOnFocus={false}          
                    direction={Platform.select({ ios: 'down' })} 
                    onSelectItem={(item) => {            
                      if(item!=null){             
                        updateState("checkerID",item.id);

                        const selectedObj=state.checkerList.find(c=>{return c.checkerID==item.id });
                        if(selectedObj){ 
                          updateState("setcheckerUrl",selectedObj.photoUrl)  
                        }
                      }          
                    }}
                    
          useFilter={false} 
            textInputProps={{
              placeholder:"Type Checker Employee Code",
                autoCorrect: false,
                mode: "outlined",
              autoCapitalize: "none",
              style: {
                backgroundColor:  colors.text=="#333333"? "#ffffff":"#333333",
                color: colors.text,
                borderStyle: 'solid',
                borderWidth:.8
              }
            } }
            inputHeight={55}             
            rightButtonsContainerStyle={{              
              right: 8,
              height: 30,
              top: 10,
              alignSelfs: "center",
              backgroundColor: colors.text=="#333333"? "#ffffff":"#333333"
            }}
            ClearIconComponent={
              <Feather name="x-circle" 
              size={18} color={colors.text} onPress={() =>{
              updateState("checkerID",0)
              updateState("setcheckerUrl", defaultImageUrl)
              }}
              />
            }
            />
          </View>
     <View style={styles.imagesView}>    
          <View >
                  {renderDriverUri()}
                </View>                
                <View>
                  {renderCheckerUri()}
                </View>
            </View>
     <View style={[Platform.select({ ios: { zIndex: 0 } })]}>
        <TextInput
                   label="Claim Remarks"
                   onFocus={() =>{ 
                  //  if(!isKeyboardVisible)
                  //   {
                      this.scrollView.scrollToEnd({animated: true});
                   // }
                  } }
                   multiline={true}
                   //number0OfLines={3}
                   maxLength={500}
                   mode={"outlined"}
                 />  
       </View>
       <View style={[Platform.select({ ios: { zIndex: 0 } })]}>
         {    
        
         <View>{renderCamara_FileUpload()}</View>
         }
   </View>
                 
      
       <View style={styles.button}>
   

                 <TouchableOpacity
                     style={styles.btn}
                                     >
                 <LinearGradient
                     colors={['#08d4c4', '#01ab9d']}
                     style={styles.btn}
                 >
                     <Text style={[styles.textbtn, {
                         color:'#fff'
                     }]}>SUBMIT CLAIM</Text>
                 </LinearGradient>
                 </TouchableOpacity>
             </View> 
    </ScrollView>  
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
      </SafeAreaView> 
          
         
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeContainerStyle: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignContent:"center",
    marginTop: StatusBar.currentHeight
  },
  scrollViewStyle: {
    //backgroundColor: Colors.lighter,
    //paddingRight: Platform.OS === 'ios' ? 10 : 0,
  },
  btn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},

button: {
  alignItems: 'center',
  marginTop: 10
},
});
