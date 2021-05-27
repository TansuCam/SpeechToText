import React, {useState,useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

function DataList(){
    const [userList,setUserList] = useState([]);

    const columns = [
        {dataField: '_id', text: 'Id'},
        {dataField: 'name', text: 'Dosya Adı', sort:true, filter:textFilter()},
        {dataField: 'user.name', text: 'Kullanıcı Ad', filter:textFilter()},
        {dataField: 'user.surname', text: 'Soyad', filter:textFilter()},
        {dataField: 'user.email', text: 'E-Posta', filter:textFilter()},
        {dataField: 'token', text: 'Kalan', sort:true},
        {dataField: 'updatedAt', text: 'Oluşturulma Tarihi'}

    ];


    useEffect(() =>{
        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(result => setUserList(result))
        .catch(error => console.log(error));
    },[] )


    return (
        <div className="m-5">
         <BootstrapTable 
         bootstrap4 
         keyField='_id' 
         columns={columns} 
         data ={userList}
         filter={filterFactory()}/>
        </div>
    )

}
export default DataList