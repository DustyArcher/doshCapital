import { DataContext } from 'context/DataContext';
import React,{useEffect, useState, useContext} from 'react';

const useAuthCheck = () => {
    const [authChecked, setAuthChecked]=useState<boolean>(false)
    const {userInfo, setUserInfo}=useContext(DataContext)

    useEffect(()=>{
        const localAuth = localStorage.getItem("doshToken")
        if(localAuth){
            setUserInfo(JSON.parse(localAuth))
                    }

                    setAuthChecked(true)
    },[])
    return authChecked
};

export default useAuthCheck;