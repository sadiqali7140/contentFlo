import React from "react";
import "./postCard.css";
import "../../index.css";

let data = {
  image_url:
    "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  title: "Title",
  upload_date: "upload date",
  caption: "Caption",
  short_desciption: "Description is this",
  approved: true,
};

function PostCard({ setselectedpostcard }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      //first time call when page opens
      await getContent();
    }

    setHeaders({
      "Content-Type": "application/json",
      "x-access-token": sessionStorage.getItem("x-token"),
    });

    fetchMyAPI();
  }, []);

  async function getContent() {
    let response = await axios.get(
      "http://localhost:3000/api/content/" + { id }
    );
    setContent(response.data.data);
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setselectedpostcard(data._id)
        }}
      >
        <div className="Heading">
          <div className="ContentCard">
            <div className="ContentContainer">
              <div className="ImageContainer">
                <img src={content.image_url} alt="new"></img>
              </div>
              <div className="MetaData">
                <div className="Title">
                  <h1 className="primary-font">{content.title}</h1>
                  <h4 className="primary-font">{content.date}</h4>
                </div>
                <p className="primary-font">{content.short_desciption}</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
//missing approval icon & tags

export default PostCard;
