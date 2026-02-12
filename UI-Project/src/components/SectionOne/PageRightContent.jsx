import PicOne from "../../assets/picOne.jpg";
import PicThree from "../../assets/picThree.jpg";
import PicTwo from "../../assets/picTwo.jpg";
import Card from "../Cards/Card";

const PageRightContent = () => {
  const cardsContent = [
    {
      id: 1,
      imgSrc: PicOne,
      imgAlt: "Lady working in office",
      badge: "1",
      description:
        "Prime customers that have access to bank credit and are satisfied with the current product",
      primaryBtnLabel: "Satisfied",
      secondaryIconClass: "ri-arrow-right-line",
      backgroundColor: "orange",
    },
    {
      id: 2,
      imgSrc: PicTwo,
      imgAlt: "Team collaborating",
      badge: "2",
      description:
        "Customers who are considering upgrade options and want faster disbursal times",
      primaryBtnLabel: "Interested",
      primaryBtnLink: "/interested/2",
      secondaryIconClass: "ri-arrow-right-line",
      secondaryBtnLink: "/details/2",
      backgroundColor: "darkGreen",
    },
    {
      id: 3,
      imgSrc: PicThree,
      imgAlt: "Person using laptop",
      badge: "3",
      description:
        "New customers with first-time transactions who need onboarding help",
      primaryBtnLabel: "Onboard",
      primaryBtnLink: "/onboard/3",
      secondaryIconClass: "ri-arrow-right-line",
      secondaryBtnLink: "/details/3",
      backgroundColor: "blue",
    },
  ];
  return (
    <div className="w-2/3 h-full p-6 flex gap-8">
      {cardsContent &&
        cardsContent.map((item) => (
          <Card
            key={item.id}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            badge={item.badge}
            description={item.description}
            primaryBtnLabel={item.primaryBtnLabel}
            secondaryIconClass={item.secondaryIconClass}
            backgroundColor={item.backgroundColor}
          />
        ))}
    </div>
  );
};

export default PageRightContent;
