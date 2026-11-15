// Q(tema, [pregunta es, en], opciones es, opciones en (o null si son iguales), índice correcto, [explicación es, en])
const Q = (tema, q, oes, oen, a, x) => {
  if (oes.length !== 4 || (oen && oen.length !== 4) || a < 0 || a > 3) throw new Error("Pregunta mal formada: " + q[0]);
  return { tema, q: { es: q[0], en: q[1] }, o: { es: oes, en: oen || oes }, a, x: { es: x[0], en: x[1] } };
};
module.exports = { Q };
