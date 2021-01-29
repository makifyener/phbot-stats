import React, { Component } from 'react'
import Link from 'next/Link'
import './Navbar.scss'

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
                <mark className="badge">
                    Mark!
                </mark>
            </nav>
        )
    }
}

export default Navbar