import React from 'react'

 function Detail(props) {
     console.log(props.singleData)
    return (
        <div className = "Detail">
            <div>{props.singleData.login ? props.singleData.login : "No Name "}</div>
            <div>{props.singleData.location ? props.singleData.location : "NO LOCATION "}</div>
            <div>{props.singleData.following ? props.singleData.following : "No following "}</div>
            <div>{props.singleData.followers ? props.singleData.followers : "No followers "}</div>
        </div>
    )
}


export default Detail