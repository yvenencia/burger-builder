import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Auxiliary from '../../hoc/Auxiliary'

class BurgerBuilder extends Component {
    static propTypes = {
    }

    render() {
        return (
            <Auxiliary>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;