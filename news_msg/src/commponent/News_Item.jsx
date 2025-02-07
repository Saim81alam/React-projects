function News_Item({ title, description, src, url }) {
  return (
    <div
      className="card bg-dark text-light mb-3 mx-3 my-3 d-inline-block px-2 py-2"
      style={{ maxWidth: "370px" }}
    >
      <img
        src={
          src
            ? src
            : "https://previews.123rf.com/images/enterline/enterline1611/enterline161100174/66186682-the-word-news-written-in-white-3d-letters-on-a-colorful-background-concept-and-theme.jpg"
        }
        style={{ height: "200px", width: "100%" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : `You should know how to make web requests in your chosen programming language. We have included some crude ways .`.slice(
                0,
                90
              )}
        </p>
        <a href={url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default News_Item;
