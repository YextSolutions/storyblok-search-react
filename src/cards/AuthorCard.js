import { CardProps } from "@yext/search-ui-react";

const AuthorCard = CardProps => {

  console.log(CardProps)

    return (
        <div className="flex flex-col px-4 py-4 border items-center">
        <img className="w-1/4" src={CardProps.result.rawData.primaryPhoto.image.sourceUrl} alt={CardProps.result.name} />
          <div className="text-center">
            <h3 className= "font-bold">
            <a href="https://localhost:3000/author"> {CardProps.result.name} </a>
            </h3>
          </div>
          <div className="text-center">
            <p>{CardProps.result.rawData.richTextDescription}</p>
          </div>
        </div>
      );
    };

export default AuthorCard