import React,{useEffect} from 'react'

const PageNotFound = () => {

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if(isAuthenticated  && isAuthenticated === 'false') {
            const basicNav = document.getElementById('basicdetails');
            basicNav.classList.add('hide');
        }
    })

    return (
        <div>
           OOps page not found 
        </div>
    )
}

export default PageNotFound
