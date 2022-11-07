import { useParams } from "react-router-dom";
import { Header } from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";


export const Details = () => {
  //Line Code berikur merupakan fungsi untuk menerima parameter dari URL
  const { isbn } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.itbook.store/1.0/books/" +`${isbn}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Silakan edit code berikut supaya dapat menampilkan buku sesuai dengan parameter ISBN di URL
  return (
    <>
      <div className="container">
        <Header />
        <div
          className="d-flex justify-content-end flex-column"
          style={{ alignItems: "center" }}
        >
          {/*Berikut ini merupakan template untuk informasi buku */}
          <div
            className="card flex-row flex-wrap"
            style={{ width: "50rem", marginTop: "50px" }}
          >
            <div className="card-header border-0">
              <img
                src={data.image}
                alt="Buku.jpg"
                width="250"
                height="270"
                className="px-4"
              />
            </div>
            <div className="card-block p-4" style={{ width: "58%" }}>
              <h4 className="card-title">{data.title}</h4>
              <form>

              </form>
              <tbody>
                <tr>
                  <td>
                    <h6 className="card-text ">Subtitle</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.subtitle}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">Authors</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.authors}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">Publisher</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.publisher}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">Language</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.language}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">ISBN10</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.isbn10}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">ISBN13</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.isbn13}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">Pages</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.pages}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">Year</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.year}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">Rating</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.rating}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">Desc</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.desc}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">Price</h6>
                  </td>
                  <td>
                    <p className="card-text">: {data.price}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="card-text">URL</h6>
                  </td>
                  <td>
                    <p className="card-text">
                      <a href="{data.url}">: {data.url}</a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
