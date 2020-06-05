import React from 'react'

class Header extends React.Component{
    render(){
        return(
            <div className='Header'>
                <h3>Hello {this.props.namaPengguna}</h3>
                <button onClick={this.props.metodeUbahNama}>Change Name</button>
            </div>
        )
    }
}
export default Header