
const Quote = (props) => {
    return (                  
      <div>
        <blockquote>
          {props.quote}
          <footer>{props.author}</footer>
        </blockquote>
      </div>);
}
 
export default Quote;