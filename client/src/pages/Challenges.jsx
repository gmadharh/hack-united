import { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";

import WheelComponent from "../components/Wheel";

const Challenges = () => {
  let { availableChallenges: challenges } = useContext(DashboardContext);

  // if (!challenges)
  //   challenges = [
  //     "1. Set a goal to walk or run a certain distance in a specific time frame, and track your progress daily.",
  //     "2. Challenge yourself to do a certain number of push-ups or squats per day, increasing the number each week.",
  //     "3. Commit to a month-long sugar-free or processed food-free challenge, focusing on whole, nutritious foods.",
  //     "4. Create a workout schedule and stick to it for a month, incorporating both cardiovascular exercises and strength training.",
  //     "5. Challenge yourself to try a new workout or fitness class each week for a month, to keep things exciting and prevent workout boredom.",
  //     "6. Set a goal to drink a certain amount of water each day, and track your intake to ensure you're staying hydrated.",
  //     "7. Make a commitment to practice yoga or meditation every day for a week, focusing on improving flexibility and reducing stress.",
  //     "8. Set a sleep goal for a week, aiming to get a certain number of hours each night and establish a regular sleep routine.",
  //     "9. Challenge yourself to cut out alcohol or caffeine for a month, focusing on the positive impacts it can have on your overall health.",
  //     "10. Set a goal to incorporate more fruits and vegetables into your daily meals, aiming to reach a certain number of servings each day.",
  //   ];

  return (
    <div className="container mx-auto pt-12">
      <div className="flex justify-center">
        <div className="bg-gray-500/20 rounded-3xl	w-4/5">
          <div className="flex flex-col justify-between items-center gap-12 pb-24 pt-10">
            {!challenges ? (
              <h1 className="text-white heading text-4xl">
                No challenges for you!
              </h1>
            ) : (
              <WheelComponent challenges={challenges} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
