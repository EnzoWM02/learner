export default function calculateLevelService(
  user,
  returnNextLevelExperience = false
) {
  const baseExperience = 100;
  const experienceGrowthRate = 1.2;
  let userExperience = user.experience;

  if (userExperience === 0) {
    return 1;
  }

  let level = 1;
  let requiredExperience = baseExperience;
  let accumulatedLevelExperience = 0;

  while (userExperience >= requiredExperience) {
    accumulatedLevelExperience += requiredExperience;
    userExperience -= requiredExperience;
    level++;
    requiredExperience = Math.floor(
      baseExperience * Math.pow(experienceGrowthRate, level - 1)
    );
  }

  if (returnNextLevelExperience) {
    return {
      actualLevelExperience: user.experience - accumulatedLevelExperience,
      nextLevelRequiredExperience: requiredExperience,
    };
  }

  return level;
}
