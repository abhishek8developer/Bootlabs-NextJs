const jobs = [
    {
      title: "Senior Frontend Developer - WordPress",
      description:
        "Job Overvirew: Bootlabs is looking for an ambitious and self-driven Senior Front-end Developer who is motivated to combine the art of design with the art...",
      city: "Bangalore",
    },
    {
      title: "Associate Software Engineer - ReactJS",
      description:
        "Job Overvirew: We are looking for some fresh software developer to train and develop react development skills in-house which is hard to find in a",
      city: "Bangalore",
    },
    {
      title: "Sr. Digital Content writer",
      description:
        "Job Overvirew: We are looking for candidates who posses strong writing, editing and competitive research skills to join as an SEO content writer.",
      city: "Bangalore",
    },
    {
      title: "Social Media Marketing Manager",
      description:
        "Job Overvirew: The Social Media Marketing Manager is both a creative and strategic role. You'll help shape our social strategy, bringing the Bootlabs brand",
      city: "Bangalore",
    },
  ]
export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).end(JSON.stringify({ data }))
    } else {
        res.status(200).end(JSON.stringify({ message: 'Hello world' }))
    }
}