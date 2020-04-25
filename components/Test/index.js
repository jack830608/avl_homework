import React, { useState, useEffect } from 'react';
import { Container, Left, Right, Content, In, InFrame, InBox } from './style';

export default (props) => {
    const [border, setBorder] = useState(false)
    return (
        <Container>
            <Left></Left>
            <Right>
                <Content>
                    <InBox>
                        <InFrame style={{ borderColor: border === 1 ? 'rgb(89,189,190)' : 'rgb(58,60,64)' }}>
                            <In
                                id="I1"
                                placeholder="1"
                                onClick={() => setBorder(1)}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    if (!isNaN(e.target.value)) {
                                        document.getElementById('I2').focus()
                                    } else if (e.target.value === '.' || e.target.value === '/') {
                                        document.getElementById('I2').focus()
                                    } else {
                                        document.getElementById('I1').value = ''
                                    }
                                }}
                            />
                        </InFrame>
                        <InFrame style={{ borderColor: border === 2 ? 'rgb(89,189,190)' : 'rgb(58,60,64)' }}>
                            <In
                                id="I2"
                                placeholder="2"
                                onClick={() => setBorder(2)}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    if (!isNaN(e.target.value)) {
                                        document.getElementById('I3').focus()
                                    } else if (e.target.value === '.' || e.target.value === '/') {
                                        document.getElementById('I3').focus()
                                    } else {
                                        document.getElementById('I2').value = ''
                                    }
                                }}
                            />
                        </InFrame>
                        <InFrame style={{ borderColor: border === 3 ? 'rgb(89,189,190)' : 'rgb(58,60,64)' }}>
                            <In
                                id="I3"
                                placeholder="3"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    if (!isNaN(e.target.value)) {
                                        document.getElementById('I4').focus()
                                    } else if (e.target.value === '.' || e.target.value === '/') {
                                        document.getElementById('I4').focus()
                                    } else {
                                        document.getElementById('I3').value = ''
                                    }
                                }}
                            />
                        </InFrame>
                        <InFrame style={{ borderColor: border === 4 ? 'rgb(89,189,190)' : 'rgb(58,60,64)' }}>
                            <In
                                id="I4"
                                placeholder="4"
                                onClick={() => setBorder(4)}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    if (!isNaN(e.target.value)) {
                                        document.getElementById('I1').blur()
                                        document.getElementById('I2').blur()
                                        document.getElementById('I3').blur()
                                        document.getElementById('I4').blur()
                                    } else if (e.target.value === '.' || e.target.value === '/') {
                                        document.getElementById('I1').blur()
                                        document.getElementById('I2').blur()
                                        document.getElementById('I3').blur()
                                        document.getElementById('I4').blur()
                                    } else {
                                        document.getElementById('I4').value = ''
                                    }
                                }}
                            />
                        </InFrame>
                    </InBox>
                </Content>
            </Right>
        </Container>
    )
}