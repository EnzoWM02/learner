export function calculateLevelAction(user) {
  const baseExperience = 100;
  const experienceGrowthRate = 1.2;

  if (user.experience === 0) {
    return 1;
  }

  let level = 1;
  let requiredExperience = baseExperience;

  while (user.experience >= requiredExperience) {
    user.experience -= requiredExperience;
    level++;
    requiredExperience = Math.floor(
      baseExperience * Math.pow(experienceGrowthRate, level - 1)
    );
  }

  return level;
}
