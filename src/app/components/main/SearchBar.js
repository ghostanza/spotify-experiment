import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      searchType: 'artist',
    }
  }
  queryInput(e){
    this.setState({ searchTerm: e.target.value });
  }
  changeType(e){
    this.setState({ searchType: e.target.value });
  }
  handleSubmit(e){
    var search_box = document.getElementById('search-box'),
        search_options = document.getElementById('search-options');
    e.preventDefault();
    this.props.history.push(`/search/${this.state.searchType}/${encodeURIComponent(this.state.searchTerm)}`);
    this.setState({searchTerm: ''});
    search_box.value='';
    search_box.blur();
    this.props.toggleSearch();
  }
  render() {
      return(
        <div className={`search-bar ${this.props.isActive ? 'active' : ''}`}>
          <form onSubmit={this.handleSubmit.bind(this)} autoComplete='off'>
              <input id="search-box" type='text' autoComplete='off' placeholder='artist, album, playlist...' onChange={this.queryInput.bind(this)}></input>
              <div className='select-wrapper'>
                <select id="search-options" className='select-dropdown' value={this.state.searchType} onChange={this.changeType.bind(this)}>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                    <option value="playlist">Playlist</option>
                    <option value="genre">Genre</option>
                    <option value="label">Label</option>
                </select>
              </div>
              <button type='submit' className='search-btn'>Search</button>
          </form>
        </div>
      )
  }
}

export default withRouter(SearchBar);
