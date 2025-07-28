import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/SM-Rakibul-Hasan-Rakib/job-hunter/refs/heads/main/public/data/jobs.json"
    )
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center">Featured Jobs {jobs.length}</h2>
      {jobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
    </div>
  );
};

export default FeaturedJobs;
