import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
import { data } from "react-router-dom";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is for showing only 4 jobs
  const [dataLength, setDataLength] = useState(4);
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
      <div className="grid grid-cols-2 gap-6 mt-10 ml-20">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center mt-10">
        {dataLength < jobs.length && (
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary "
          >
            Show All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;
