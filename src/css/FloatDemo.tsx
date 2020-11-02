import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
border-color:#61dafb;
background-color: blue;
overflow: auto;

`

const Children = styled.div`
background-color: #5f0910;
height: 68px;
float: right;
width: 68px;
margin-right: 29px;
margin-top: 20px;
`
const Children2 = styled.div`
background-color: #c79c6a;
height: 68px;
float: right;
width: 68px;
margin-right: 12px;

`

const FloatDemo: React.FC<any> = (props) => {


    return (
        <Wrapper>
            <Children2>1</Children2>
            <Children>2</Children>
        </Wrapper>
    )
}

export default FloatDemo