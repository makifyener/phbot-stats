import React, { Component } from 'react'
import Link from 'next/Link'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <nav>
                <Link href="/">
                    <a title="Home Page">Home</a>
                </Link>
                <Link href="/about">
                    <a title="About Page">About</a>
                </Link>
            </nav>
        )
    }
}

export default Navbar