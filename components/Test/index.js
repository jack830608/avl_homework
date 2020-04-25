import React, { useState, useEffect } from 'react';
import { Container } from './style';
import Button from '@material-ui/core/Button';
import axios from 'axios'

export default (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    return (
        <Container>
            <div>
                name:<input onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                email:<input onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                mobile:<input onChange={(e) => setMobile(e.target.value)} />
            </div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    const data = {
                        name,
                        email,
                        mobile
                    }
                    axios.post('/register', data).then((res) => {
                        console.log(res)
                    })
                }}>
                submit
            </Button>
        </Container>
    )
}