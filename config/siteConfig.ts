export type siteConfigProps = typeof siteConfig;
const siteConfig = {
  navLinks: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Team",
      href: "/team",
    },
    {
      title: "Robots",
      href: "/robot",
    },
    // {
    //   title: "Outreach",
    //   href: "/outreach",
    // },
  ],
  siteLinks: {
    sponsors: "/sponsors",
    github: "https://github.com/Ninjas4744-Organization",
    facebook: "https://www.facebook.com/Ninjas4744/?locale=he_IL",
    instagram: "https://www.instagram.com/ninjas4744/?hl=en",
    first: "https://www.firstinspires.org/",
    tba: "https://www.thebluealliance.com/team/4744/",
  },
};

export default siteConfig;
