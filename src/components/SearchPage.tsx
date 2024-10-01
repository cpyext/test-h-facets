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
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
        <SearchBar />
        <div className="flex">
          <div className="w-1/3 pr-16">
            <Facets hierarchicalFieldIds={["c_appliances"]} /></div>
          <div className="w-2/3">
            <VerticalResults CardComponent={StandardCard} /></div>
        </div>
      </div>
    </div>
  );
};



export default SearchPage;
