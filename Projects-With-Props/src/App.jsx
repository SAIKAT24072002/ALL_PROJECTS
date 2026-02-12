import Logo from "./assets/adobe.jpeg";
import Cards from "./components/Cards";

function App() {
  const jobOpenings = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$70/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      company: "Meta",
      datePosted: "5 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$95/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      company: "Amazon",
      datePosted: "3 weeks ago",
      post: "Backend Software Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$60/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      company: "Apple",
      datePosted: "1 week ago",
      post: "iOS Engineer",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$110/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      company: "Netflix",
      datePosted: "10 weeks ago",
      post: "Data Engineer",
      tag1: "Contract",
      tag2: "Senior",
      pay: "$85/hr",
      location: "Remote (India)",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      company: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Solutions Architect",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$120/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      company: "NVIDIA",
      datePosted: "4 days ago",
      post: "Research Engineer - Deep Learning",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$130/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      company: "Tesla",
      datePosted: "2 weeks ago",
      post: "Embedded Software Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$75/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      company: "Salesforce",
      datePosted: "5 weeks ago",
      post: "Full Stack Developer",
      tag1: "Part-time",
      tag2: "Junior",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: Logo,
      company: "Adobe",
      datePosted: "3 days ago",
      post: "UX Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$65/hr",
      location: "Bengaluru, India",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-black">
        <div className="flex flex-wrap gap-4 p-6">
          {jobOpenings &&
            jobOpenings.map((items) => (
              <Cards
                key={items.id}
                brandLogo={items.brandLogo}
                company={items.company}
                datePosted={items.datePosted}
                post={items.post}
                tag1={items.tag1}
                tag2={items.tag2}
                pay={items.pay}
                location={items.location}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;

{
  /*
male a array of objects of job openings, I want properties like brandLogo, name of company, date posted(like 5 days ago, 10 weeks ago), post, tag1(like part time or full time), tag2(like senior level or junior level),pay(in dollars per hours), location(like mumbai India)

make sure these companies are maang or faang or some big tech gaints
  
*/
}
