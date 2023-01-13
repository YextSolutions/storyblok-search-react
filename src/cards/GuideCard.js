import { CardProps } from "@yext/search-ui-react";

const GuideCard = CardProps => {

  console.log(CardProps)

    return (
        <div className="flex flex-col px-4 py-4 border items-center">
        <img className="w-1/4" src={CardProps.result.rawData.primaryPhoto.image.sourceUrl} alt={CardProps.result.rawData.name} />
          <div className="text-center">
            <h3 className= "font-bold">
            <a href="https://localhost:3000/guides"> {CardProps.result.name} </a>
            </h3>
          </div>
          <div className="text-center">
            <p className="italic"> Author: {CardProps.result.rawData.c_author[0].name} </p>
            <p>{CardProps.result.rawData.shortDescription}</p>
          </div>
        </div>
      );
    };

export default GuideCard