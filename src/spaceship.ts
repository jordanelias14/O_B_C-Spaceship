function sendSpace(name: string, captain: string) {
  const spaceShip = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: [],
  };
  alert(
    `A nave ${spaceShip.name}, comandada por ${spaceShip.captain} saiu em missão`
  );
  return spaceShip;
}

function accelerate(
  targetSpeed: number,
  spaceShip: { name: string; speed: number }
) {
  if (spaceShip.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceShip.name} para ${targetSpeed}...`);
  } else if (spaceShip.speed < targetSpeed) {
    alert(
      `Aumentando a velocidade da ${spaceShip.name} para ${targetSpeed}...`
    );
  } else {
    alert(`Mantendo a velocidade da ${spaceShip.name}`);
  }
}

const spaceshipName = String(prompt("Insira o nome da nave a ser enviada:"));
const spaceshipCaptain = String(prompt("Insira o nome do capitão da nave:"));
const currentShip = sendSpace(spaceshipName, spaceshipCaptain);
console.log("current Ship", currentShip);

const speed = Number(prompt("Insira a velocidade para nave"));
accelerate(speed, currentShip);
