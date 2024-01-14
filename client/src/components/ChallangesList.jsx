const ChallengesList = ({ wheelData }) => {
  return (
    <div className="flex justify-center">
      <ul className="flex flex-col gap-4 w-4/5">
        {wheelData.map((data) => {
          const { challenge, style, option } = data;
          return (
            <li key={option} className={`bg-[${style.backgroundColor}]/90 p-4 rounded`}>
              <h3 className="text-black text-lg">{challenge}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChallengesList;
