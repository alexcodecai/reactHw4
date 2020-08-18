import React from 'react'
import Avatar from '@material-ui/core/Avatar';



function ListEntry(props) {
    
    // function getDetail(name) {
    //     // props.getSingleData(name);
    //     console.log(name);
    // }


    return (
        <div>
            
            <div className = 'content'>
            
            <div>{props.list.id} </div>
            {/* <div>{props.list.login} </div> */}
            <button onClick = { (e) => props.getSingleData(e, props.list.login)} > {props.list.login} </button>
            <Avatar className = "avatar" src={props.list.avatar_url} />
            </div>
           
        </div>
    )
}





export default ListEntry