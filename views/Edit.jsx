const React = require('react');

class Edit extends React.Component {
  render() {
    const {pokemon} = this.props
    return (
        <div>     
            <h1>Edit Pokemon page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue = {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}/><br/>
            Img Link: <input type="url" name="img" defaultValue = {pokemon.img}/><br/>
            <input type="submit" value="Submit"/>
            </form>
        </div>);
    }
}

module.exports = Edit;