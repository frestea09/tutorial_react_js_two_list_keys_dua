import React from 'react'
import Content from './Component/Content'
import Header from './Component/Header'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      username : 'ilman',
      threshold : true,
      count : 0,
    }
    this.getChangeName = this.getChangeName.bind(this)
    this.getLogOut = this.getLogOut.bind(this)
    this.tambahCount = this.tambahCount.bind(this)
  }
  tambahCount(){
    this.setState(
      {
        count : this.state.count + 1
      }
    )
  }
  getLogOut(){
    this.setState(
      {
        threshold  : false,
      }
    )
  }
  getChangeName(){
    this.setState(
      {
        username:'ilman ganteng'
      },
    )
  }
  render(){
    let statusPengguna = 'logout'
    if(this.state.threshold){
      statusPengguna = 'login'
    }
    return(
      <div className='App'>
          <Header namaPengguna = {this.state.username} metodeUbahNama = {this.getChangeName}/>
          <Content statusPengguna = {statusPengguna} metodeLogout = {this.getLogOut} bilanganCount = {this.state.count} tambahCount = {this.tambahCount}/>
      </div>
    )
  }
}
export default App