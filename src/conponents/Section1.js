
function Section1(props){
    return <section className={props.sectionClass}>
            <h3>
                {props.sectionTitle}
            </h3>
            <div>
                {props.sectionItem}
            </div>
         
        </section>; 
  }

  export default Section1;