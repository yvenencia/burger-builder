import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import '../../styles/styles.scss'

const Layout = (props) => {
    return (
        <Auxiliary>
            <div>
                Toolbar, sideDrawer, Backdrop
            </div>
            <main className="Content">
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout
