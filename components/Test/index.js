import React, { useState, useEffect } from 'react';
import { Container, Left, Right, Content, In, InFrame, InBox } from './style';

export default (props) => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [num3, setNum3] = useState('')
    const [num4, setNum4] = useState('')
    const [border, setBorder] = useState(false)
    return (
        <Container>
            <Left></Left>
            <Right>
                <Content>
                    <InBox>
                        <InFrame style={{borderColor: border === 1 ? 'rgb(89,189,190)' : rgb(58,60,64)}}>
                            <In placeholder="1" />
                        </InFrame>
                        <InFrame style={{borderColor: border === 2 ? 'rgb(89,189,190)' : rgb(58,60,64)}}>
                            <In placeholder="2" />
                        </InFrame>
                        <InFrame style={{borderColor: border === 3 ? 'rgb(89,189,190)' : rgb(58,60,64)}}>
                            <In placeholder="3" />
                        </InFrame>
                        <InFrame style={{borderColor: border === 4 ? 'rgb(89,189,190)' : rgb(58,60,64)}}>
                            <In placeholder="4" />
                        </InFrame>
                    </InBox>
                </Content>
            </Right>
        </Container>
    )
}