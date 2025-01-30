function GoYanks() {
  return (
    <div>
      <TempHeader
        title="Let's Go Yankees"
        bgColor="#003087"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/New_York_Yankees_Primary_Logo.svg/1200px-New_York_Yankees_Primary_Logo.svg.png"
      />
    </div>
  );
}

// export async function RandomQuote() {
//   const data = await fetch(
//     "https://api.api-ninjas.com/v1/quotes?category=happiness"
//   );
//   console.log(data.json());

//   return <TempHeader />;
// }

export function TempHeader({ title, subheader, bgColor, imageUrl, bgImage }) {
  const styles = {
    backgroundColor: bgColor,
    backgroundImage: `url(${bgImage})`,
    padding: "2%",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: "5px",
    margin: "25px auto",
    borderRadius: "2px",
    maxWidth: "600px",
  };
  return (
    <div className="temp-header" style={styles}>
      {title && (
        <h1>
          {title}{" "}
          {imageUrl && (
            <img style={{ marginLeft: "10px" }} src={imageUrl} height={35} />
          )}
        </h1>
      )}

      {subheader && <h2>{subheader}</h2>}
    </div>
  );
}

export default GoYanks;
