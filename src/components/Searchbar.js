import React  from "react";

class Searchbar extends React.Component {
  state = {
    term: ''
  }

  submitSearch = (e) => {
    e.preventDefault()
    
    this.props.handleSubmitSearch(this.state.term)
  }


  render () {
    return (
      <div className="ui inverted segment">
        <form className="ui form inverted" onSubmit={this.submitSearch}>
          <div className="ui fluid inverted transparent icon input">
            <i className="search icon"></i>
            <input className="" type="text" placeholder="Search..." value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}  style={{ color: '#ffffff'}} />
          </div>
        </form>
      </div>
    )
  }
}

export default Searchbar