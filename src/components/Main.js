import { Header } from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'


/*Silakan edit code di bawah agar dapat menampilkan daftar buku baru dari API secara dinamis */
/* HINT : Gunakan mapping array */
export const Main = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.itbook.store/1.0/new")
      .then((res) => {
        setData(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <div
          className="d-flex justify-content-end flex-column"
          style={{ alignItems: "center" }}
        >
          <h5 style={{ width: "48rem", marginTop: "50px" }}>New Arrival</h5>
          {/*Berikut ini merupakan template untuk membuat book card, silakan diedit sesuai kebutuhan */}
          {data.map((post) => (
            <>
            <div className="card flex-row flex-wrap" style={{width:"48rem",marginTop:"50px"}} onClick={()=>{navigate('/book/'+post.isbn13)}} >
                    <div className="card-header border-0">
                        <img src={post.image} alt="Buku.jpg" width="200" height="220" class="px-4"/>
                    </div>
                    <div className="card-block p-4" style={{width:"50%"}}>
                        <h4 className="card-title">{post.title}</h4>
                        <p className="card-text">{post.subtitle}</p>
                        <p className="text-muted">{post.isbn13}</p>
                        <h5>{post.price}</h5>
                    </div>
                </div>
            </>
                     
          ))}
          
        </div>
      </div>
    </>
  );
};
