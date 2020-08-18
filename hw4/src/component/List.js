import React from 'react'
import ListEntry from './ListEntry'

 function List(props) {
    return (
        <div className = 'container1' >
            <div className = "list"> List</div>
            
            
            <div className = 'titles' >
                <div> ID &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </div>
                <div> Username &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</div>
                <div> Image &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
            </div>

            
            
            
            {props.list.map((list, index) =><ListEntry list = {list} key = {list.id}  getSingleData = {props.getSingleData}/>)}
            
        </div>
    )
}


export default List