import React, { useEffect, useState } from 'react'
import Item from './Item'
import MemoItem from './MemoItem';


const List: React.FC<any> = (props) => {
    let [count, setCount] = useState(0)
    const [id, setId] = useState<String>("2");
    const [label, setLabel] = useState<String>("label")


    let add = function () {
        setCount(count + 1)
    }
    const changeLabel = () => {
        setLabel("label" + count)
    }
    return (
        <div>
            <div>{label}</div>
            <button onClick={add}>add </button>
            <button onClick={changeLabel}>changLabel </button>

            <br />
            {/* changeLabel Item重绘了 */}
            <Item count={count} id="1" />
            <Item count={count} id="2" />
            {/*  changeLabel MomoItem不会重绘 */}
            <MemoItem count={count} id="3" />
        </div>
    )
}


export default List 