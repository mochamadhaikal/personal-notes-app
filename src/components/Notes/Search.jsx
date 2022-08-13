import React from 'react';
 
export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onSearchEventHandler(e) {
    const search = e.target.value;
    this.setState({ search });
    this.props.onSearch(this.state.search);
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.search} onChange={this.onSearchEventHandler} placeholder="Cari catatan ..."/>
     </>
    )
  }
}