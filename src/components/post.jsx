import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Post({ image, createdAt, autor, text, comments }) {
  const [like, setLike] = useState(0);

  console.log("Click en el botón de Like");

  return (
    <div className="col-sm-5 col-md-4 col-lg-3">
      <div className="card m-2">
        <img src={image} className="card-img-top" alt="Imagen del post" />
        <div className="card-body">
          <h5 className="card-time">{createdAt}</h5>
          <button
            onClick={() => {
              setLike(like + 1);
            }}
            className="btn btn-danger"
          >
            {" "}
            <i className="bi bi-heart-fill me-2"></i>
            <>{like}k</>
          </button>
          <p className="card-author">
            <b>{autor}</b>
          </p>
          <p className="card-text">{text}</p>
          <p className="card-comments">
            <i className="bi bi-chat-right"></i> {comments}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
