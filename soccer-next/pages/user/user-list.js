import axios from 'axios';
import { useEffect,useState } from 'react';
import style from '../common/style/table.module.css'


const Table = ({ columns, colspan, data}) => {
   
    return (
      <table className={style.table}>
        <thead>
          <tr className={style.tr}>
            {columns.map((column) => (
                <th key={column.username} className={style.td}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
                { data.length == 0  ?<td colSpan={colspan} className={style.td}>데이터가 없습니다</td>
                :data.map((user) => (
                  <tr className={style.tr} key={user.username}>
                  <td className={style.td}>{user.username}</td>
                  <td className={style.td}>{user.password}</td>
                  <td className={style.td}>{user.name}</td>
                  <td className={style.td}>{user.telephone}</td>
                  </tr>
                ))}
        </tbody>
      </table>
    );
  }
  
export default function UserList(){
    const columns = ["Username", "Password", "Name", "Telephone"];
    const [data, setData] = useState([])

    const proxy = 'http://localhost:5000'

    useEffect(() => {
      axios.get(proxy + '/api/user/list').then(res => {
        setData(res.data.users)
      }).catch(err => {})
    }, [])  

    return(<>
        <h1>사용자 목록</h1>  
        <div className={style.td}>
        <Table columns={columns} colspan={columns.length} data={data}/>
        </div>
        </>)
}