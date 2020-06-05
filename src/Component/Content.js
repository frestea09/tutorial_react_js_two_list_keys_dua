import React from 'react'
import Mahasiswa from './Mahasiswa'
function Content(props){
    const listMahasiswa = [
        {
            id:1,
            name:'ilman',
            age:25
        },
    ]
    const dataMahasiswa = listMahasiswa.map(mahasiswa=><Mahasiswa key={mahasiswa.id} name={mahasiswa.name}/>)
    return(
        <div>
            {dataMahasiswa}
            <h3>Content</h3>
            <p>{props.statusPengguna}</p>
            <button onClick={props.metodeLogout}>Logout</button>
            <h3>Count : {props.bilanganCount}</h3>
            <button onClick={props.tambahCount}>Tambah</button>
        </div>
    )
}
export default Content