/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import {
  GetHeadConfig,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import "../index.css";
import SearchPage from "../components/SearchPage";

export const config: TemplateConfig = {
  name: "search",
};

export const getPath = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: " Search",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};

const Search: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <>
      <PageLayout>
        <div className="centered-container">
          <SearchPage></SearchPage>
        </div>
      </PageLayout>
    </>
  );
};

export default Search;
