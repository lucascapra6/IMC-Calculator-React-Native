import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxForm: {
        height:'100%',
        width:'100%',
        alignItems:"center",
        bottom:0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#ffffff',
        padding:20,
        marginTop:30
    },
    form: {
        width:'100%',
        height:'auto',
        padding:10,
        alignItems:'center'
    },
    formLabel: {
        color:'#000000',
        fontSize:18,
        paddingLeft:10,
        marginTop:10,
    },
    input: {
        width:'90%',
        borderRadius:50,
        backgroundColor:'#f6f6f6',
        height:40,
        padding:10
    },
    buttonCalculator: {
        backgroundColor:"#ef3d6b",
        width:'90%',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        paddingTop:10,
        paddingBottom:10
    },
    textButtonCalculator: {
        fontSize:20,
        color:"#ffffff",
    },
    errorMesage: {
       fontSize:12,
        color:'red',
        fontWeight:"bold",
        alignSelf:'flex-start',
        marginLeft:30
    },
    resultForm: {
        width:"100%",
        height:"40%",
        alignItems:"center",
    },
    listImcs: {
        marginTop:20
    },
    resultImcItem: {
      width:'100%',
        height:50,
        fontSize:26,
        color:'red',
        borderBottomColor:'#ef3d6b',
        borderBottomWidth: 1,
        borderStyle:"dashed"
    },
    currentDate: {
        fontSize: 20,
        color:'black'
    }
})

export default styles