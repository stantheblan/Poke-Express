const React = require('react')
class Index extends React.Component {
    render() {
        const myStyle = {
                color: '#ffffff',
                backgroundColor: '#000000',
                };     
        const {pokemon} = this.props
        return (
            <div>
                <h1 style={myStyle}>Here is the list of Pokemon</h1>
                <ul>
                    {pokemon.map((poke, i) => {
                        return (
                            <li key={i}>
                            <a href={`/pokemon/${poke.id}`}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</a><br></br>
                            <a href = {`/pokemon/${poke._id}/edit`}>Edit This Poke</a>
                            {/* Delete here */}
                            <form action = {`/pokemon/${poke._id}?_method=DELETE`} method = "POST">
                                <input type = "submit" value = "Delete this Poke"/>
                            </form>
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/pokemon/new">Create a New pokE</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index 