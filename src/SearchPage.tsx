import {
  Facets,
  ResultsCount,
  SearchBar,
  StandardCard,
  VerticalResults,
  Geolocation,
  HierarchicalFacet,
} from "@yext/search-ui-react";

const SearchPage = () => {
  return (
    <div className="fixed w-full px-28 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <SearchBar placeholder="Search here..."></SearchBar>
      <div className="flex gap-4">
        <div className="w-1/3">
          <div className="flex flex-col">
            <Facets>
              <HierarchicalFacet
                fieldId="c_appliances"
                showOptionCounts={true}
              />
            </Facets>
          </div>
        </div>
        <div className="w-2/3">
          <ResultsCount />
          <VerticalResults CardComponent={StandardCard} />
          <Geolocation />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
