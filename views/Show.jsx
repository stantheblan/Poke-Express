const React = require('react')
class Show extends React.Component {
    render() {
        let { pokemon } = this.props
        return (
            <div>
                <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            </div>
        )
    }
}

module.exports = Show 