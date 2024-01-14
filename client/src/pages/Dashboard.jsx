import { useState, useEffect, useContext } from "react";
import { getResolutionSubjects } from "../controllers/getResultionSubjects";
import { getResolutionChallenges } from "../controllers/getResolutionChallenges";
import { DashboardContext } from "../contexts/DashboardContext";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);

  const navigate = useNavigate();
  const { setAvailableChallenges } = useContext(DashboardContext);

  useEffect(() => {
    async function fetchData() {
      const response = await getResolutionSubjects();

      if (response[0]) {
        const { subjects } = response[0];
        setSubjects(subjects);

        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const fetchChallenges = async (subject) => {
    setLoading(true)
    const response = await getResolutionChallenges(subject);

    if (response[0]) {
      const challenges = [...response[0]]
      console.log("Challenges", challenges)
      setAvailableChallenges(challenges)
      setLoading(false)
      navigate("/dashboard/challenges")
    } else {
      console.log(response[1])
      setLoading(false)
    }
  }

  if (loading)
    return <h3 className="heading text-3xl text-white">Loading...</h3>;

  return (
    <div className="container mx-auto mt-12">
      <div className="flex justify-center mt-12">
        <div className="bg-gray-700/70 rounded-3xl w-4/5 px-20 py-12 pb-24">
          <h3 className="heading font-bold text-white text-4xl text-center mb-16">Select Your Interests</h3>
          <ul className="flex flex-col gap-8">
            {subjects.map((subject) => {
              return (
                <li
                  className="border-2 border-white hover:bg-white/10 px-4 py-5 rounded cursor-pointer"
                  key={subject.id}
                  onClick={() => fetchChallenges(subject.subject)}
                >
                  <p className="text-white text-xl">{subject.subject}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
