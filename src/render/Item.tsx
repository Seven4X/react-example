import React, { useEffect } from 'react'


const Item: React.FC<any> = (props) => {
    console.log('---render' + props.id )
    // count变化时执行
    useEffect(() => {
        console.log('useEffect....count' + props.id)
    }, [props.count]);
    useEffect(() => {
        console.log('useEffect....' + props.id)
    }, []);
    return (
        <div>
            <span>{props.id}</span> |

            <span>{props.count}</span>
        </div>

    )
}


export default Item