import React, { Component } from 'react';

class ProductLines extends Component{

  componentDidMount(){
    const pl = this.props.match.params.productLine
    const url = `${window.apiHost}/productlines/${pl}/get`;
  }

  render(){
    console.log(this.props);
    return(
      <h1>Welcome to the {this.props.match.params.productLine} page</h1>
    )
  }

}

function mapStateToProps(state){
  return{
    pl: state.pl
  }
}

export default connect(mapStateToProps)(ProductLines);
