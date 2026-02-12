import PageLeftContent from "./PageLeftContent";
import PageRightContent from "./PageRightContent";

function PageContent() {
  return (
    <>
      <div className="w-full h-[91vh] flex gap-10 py-10 px-18">
        <PageLeftContent />
        <PageRightContent />
      </div>
    </>
  );
}

export default PageContent;
