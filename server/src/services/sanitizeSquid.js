export const sanitizeSquid = ({ name, species, experiencePoints, specialPower }) => {
  const squid = {
    name: name.trim(),
    species: species.trim(),
    experiencePoints: parseInt(experiencePoints.trim()),
    specialPower: specialPower.trim(),
  };

  return squid;
};
