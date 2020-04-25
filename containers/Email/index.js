import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios'

export default (props) => {
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    return (
        <div>
            <br/>
            <div>
                Topic:<input onChange={(e) => setSubject(e.target.value)} />
            </div>
            <br/>
            <div>
                Content:<textarea onChange={(e) => setBody(e.target.value)} />
            </div>
            <br/>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    const data = {
                        subject,
                        body,
                    }
                    axios.post('/email', data).then((res) => {
                        console.log(res)
                        if(res.data === 'success'){
                            alert('發送成功')
                        }else{
                            alert('發送失敗')
                        }
                    })
                }}>
                submit
            </Button>
        </div>
    );
}