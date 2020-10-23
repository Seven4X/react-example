import React, { useEffect } from 'react'


const Item: React.FC<any> = (props) => {
    console.log('---render Memo' + props.id)
    useEffect(() => {
        console.log('useEffect Memo....' + props.id)
    }, []);
    return (
        <div>
            <span>{props.id}</span> |

            <span>{props.count}</span>
        </div>

    )
}


export default React.memo(Item)