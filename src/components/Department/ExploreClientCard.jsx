import quote from "../../assets/quote.png";

const ExploreClientCard = (props) => {
  return (
    <div>
        <div className="translate-y-20">
          <img width={100} src={quote} alt="" />
        </div>
      <section className="mx-5 my-10 p-6 border-dashed border-2 border-secondary">
        
        <div>
          <p className="max-w-md mb-4">{props.text}</p>
          
          <div className="flex">
            <div>
              <img
                width={40}
                src={props.image}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="text-sm">
              <div className="font-bold">{props.name} </div> <div>{props.doc}</div>
            </div>
          </div>
        </div>
     
      </section>
    </div>
  );
};

export default ExploreClientCard;
