import React, { Component } from 'react'

class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timePassed: 0
        }
    }

    async componentDidUpdate() {
        if (this.state.timePassed % 5 === 0) {
            const res = await fetch('/api/groupStats')
            const groupStats = await res.json()
            console.log('receiving\n', groupStats)
            // this.setState(state => ({
            //     data: groupStats
            // }))
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState(state => ({
            timePassed: state.timePassed + 1
        })), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                {this.state.data && Object.keys(this.state.data).map(
                    groupName => (<div key={groupName}>
                        {groupName}
                    </div>))}
            </>
        )
    }
}

export default Group