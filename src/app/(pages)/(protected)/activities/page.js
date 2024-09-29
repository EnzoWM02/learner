import ActivitiesList from "src/app/(pages)/(protected)/activities/constants/ActivitiesList";

export default function Activities() {
  return (
    <div> 
      {ActivitiesList.map((activity, index) => {
        return <div key={index}>{activity.title}</div>;
      })}
    </div>
  );
}
