import Head from 'next/head'
import React from 'react'

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Head>
                    <title>Weather app - {this.props.title || ''}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
            </div>
        )
    }
}


export default Header