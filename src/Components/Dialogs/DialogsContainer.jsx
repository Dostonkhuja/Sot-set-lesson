import React from 'react'
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

let mapStateToProps=(state)=>{
    return {
        dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: (newMessage)=>{
            dispatch(sendMessageCreator(newMessage))
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

