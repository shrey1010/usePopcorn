export default function StarRating({maxRating = 5 }){

    const containerStyle ={display:"flex",alignItems:"center",gap:"16px"}
    const starContainerStyle ={display:"flex",gap:"4px"}
    const textStyle = {lineHeight:"1",margin:"0"}

    return (
      <div style={containerStyle}>
        <div style={starContainerStyle}>
          {Array.from({ length: maxRating }, (_, i) => (
            <span>⭐</span>
          ))}
        </div>
        <p style={textStyle}>maxRating</p>
      </div>
    );
}