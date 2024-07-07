const companies = [
  {
    id: 1,
    name: "Microsoft",
    link: "https://jobs.careers.microsoft.com/global/en/search?lc=Bangalore%2C%20Karnataka%2C%20India&lc=Gurgaon%2C%20Haryana%2C%20India&lc=India&lc=Noida%2C%20Uttar%20Pradesh%2C%20India&lc=Pune%2C%20Maharashtra%2C%20India&p=Software%20Engineering&l=en_us&pg=1&pgSz=20&o=Relevance&flt=true",
  },
  {
    id: 2,
    name: "Nvidia",
    link: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?locationHierarchy1=2fcb99c455831013ea52b82135ba3266&jobFamilyGroup=0c40f6bd1d8f10ae43ffaefd46dc7e78",
  },
  {
    id: 3,
    name: "Google",
    link: "https://www.google.com/about/careers/applications/jobs/results/?location=India&q=%22Software%20Engineer%22",
  },
  {
    id: 4,
    name: "Amazon",
    link: "https://www.amazon.jobs/en/search?offset=0&result_limit=10&sort=relevant&category%5B%5D=software-development&category%5B%5D=operations-it-support-engineering&distanceType=Mi&radius=24km&latitude=&longitude=&loc_group_id=&loc_query=India&base_query=&city=&country=IND&region=&county=&query_options=&",
  },
  {
    id: 5,
    name: "Meta",
    link: "https://www.metacareers.com/jobs?offices[0]=Bangalore%2C%20India&offices[1]=Gurgaon%2C%20India",
  },
  {
    id: 6,
    name: "Netflix",
    link: "https://jobs.netflix.com/search?location=Remote%2C%20United%20States",
  },
  {
    id: 7,
    name: "Accenture",
    link: "https://www.accenture.com/in-en/careers/jobsearch?jk=&sb=1&vw=0&is_rj=0&pg=1&jt=entry-level%20job",
  },
  {
    id: 8,
    name: "Deloitte",
    link: "https://jobsindia.deloitte.com/search/?createNewAlert=false&q=&locationsearch=India&optionsFacetsDD_city=&optionsFacetsDD_customfield2=",
  },
  {
    id: 9,
    name: "Ola Electric",
    link: "https://olacareers.turbohire.co/dashboardv2?orgId=e0c1eb37-eb7a-4ca4-bcc5-d59ce4ce9212&type=0",
  },
  {
    id: 10,
    name: "Swiggy",
    link: "https://careers.swiggy.com/#/careers?career_page_category=Technology",
  },
  {
    id: 11,
    name: "ClassPlus",
    link: "https://classplusapp.com/careers/open-role",
  },
  {
    id: 12,
    name: "PharmEasy",
    link: "https://myhr.darwinbox.in/ms/candidate/careers",
  },
  { id: 13, name: "ChargeBee", link: "https://jobs.chargebee.com/" },
  { id: 14, name: "ShareChat", link: "https://sharechat.com/careers" },
  {
    id: 15,
    name: "CoinSwitch",
    link: "https://recruiterflow.com/coinswitch/jobs",
  },
  {
    id: 16,
    name: "CoinDCX",
    link: "https://careers.coindcx.com/opportunities/openings?",
  },
  { id: 17, name: "Blackbuck", link: "https://www.blackbuck.com/careers.php" },
  { id: 18, name: "Droom", link: "https://droom.in/career" },
  {
    id: 19,
    name: "Godigit",
    link: "https://godigit.darwinbox.in/ms/candidate/careers",
  },
  {
    id: 20,
    name: "Groww",
    link: "https://groww.skillate.com/jobs?page=0&pageSize=10&department=&location=&title=&sortBy=&orderBy=ASC&minExp=0&maxExp=35&jobType=&workplaceType=",
  },
  { id: 21, name: "CRED", link: "https://careers.cred.club/openings" },
  {
    id: 22,
    name: "Unacademy",
    link: "https://unacademy.darwinbox.in/ms/candidate/careers",
  },
  { id: 23, name: "Acko", link: "https://www.acko.com/careers/jobs" },
  { id: 24, name: "Cultfit", link: "https://www.cult.fit/careers" },
  {
    id: 25,
    name: "Car Dekho",
    link: "https://cardekho.darwinbox.in/ms/candidate/main/careers",
  },
  {
    id: 26,
    name: "Make My Trip",
    link: "https://careers.makemytrip.com/prod/jobs",
  },
  {
    id: 27,
    name: "Apna",
    link: "https://apna.co/jobs?location_id=1&location_identifier=1&location_type=CustomLocation&location_name=Anywhere%20in%20India&search=true&text=Software%20Developer&entity_id=259&entity_type=JobTitle",
  },
  { id: 28, name: "Razorpay", link: "https://razorpay.com/jobs/jobs-all/" },
  { id: 29, name: "Upgrad", link: "https://jobs.upgrad.com/" },
  {
    id: 30,
    name: "Delhivery",
    link: "https://delhivery.darwinbox.in/ms/candidate/careers",
  },
  { id: 31, name: "Dunzo", link: "https://www.dunzo.com/careers" },
  {
    id: 32,
    name: "Cars 24",
    link: "https://apply.workable.com/cars24/?lng=en#jobs",
  },
  { id: 33, name: "Rapido", link: "https://www.rapido.bike/Careers" },
  {
    id: 34,
    name: "Flipkart",
    link: "https://www.flipkartcareers.com/#!/joblist",
  },
  { id: 35, name: "Mobikwik", link: "https://www.mobikwik.com/careers" },
];

const container = document.querySelector(".container");

companies.map((company) => {
  return (container.innerHTML += `
    <div class="company-item">
        <a href="${company.link}" target="_blank">${company.name}</a>
    </div>`);
});
