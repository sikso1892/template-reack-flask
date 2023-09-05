import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Signin(){
    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    return(
        <>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <h1 style={{ justifyContent: 'center'}}>Sign In</h1>
            </div>
            <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
            <form style={{display:'flex', flexDirection:'column'}} onSubmit={e=>{
                e.preventDefault();
                console.log('TEST')
                // axios 모듈을 활용한 DB 조회
                // redux를 활용하여 user 세팅
            }}>
                <label htmlFor='email'>Email</label>
                <input id='email' name='email' type='email' onChange={e=>{setEmail(e.currentTarget.value)}}/>
                <label htmlFor='password'>Password</label>
                <input id='password' name='password' type='password' onChange={e=>{setEmail(e.currentTarget.value)}}/>
                <br/>
                <div style={{display:'flex', alignItems:'center'}}>
                    <button style={{width:'50%'}} type='submit'>Sign In</button>
                    <button style={{width:'50%'}} onClick={()=>{
                        navigate('/signup')
                    }}>Sign Up</button>  
                </div>
            </form>
            </div>
        </>
    )
}

export default Signin