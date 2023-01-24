import {
  CardComponent,
  StandardCard,
  VerticalResults,
} from "@yext/search-ui-react";
import { usePageSetupEffect } from "../hooks/usePageSetupEffect";

interface VerticalResultsPageProps {
  verticalKey: string;
  CardComponent?: CardComponent;
}

export const VerticalResultsPage = ({
  verticalKey,
  CardComponent = StandardCard,
}: VerticalResultsPageProps): JSX.Element => {
  usePageSetupEffect(verticalKey);

  return <VerticalResults CardComponent={CardComponent} />;
};
