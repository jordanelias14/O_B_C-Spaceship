type PlanetSituation =
  | "Habitado"
  | "Habitável"
  | "Inabitável"
  | "Inexplorado"
  | "";

type PlanetCoordinates = [number, number, number, number];

type Planet = {
  name: string;
  coordinates: PlanetCoordinates;
  situation: PlanetSituation;
  satellites: string[];
};

const planets: Planet[] = [];

function addPlanet(
  name: string,
  coordinates: PlanetCoordinates,
  situation: PlanetSituation
) {
  planets.push({
    name,
    coordinates,
    situation,
    satellites: [],
  });
  alert(`O planeta ${name} foi adicionado com sucesso`);
}

function findPlanet(name: string) {
  const planet = planets.find((ele) => ele.name == name);
  return planet ?? false;
}

function updateSituation(situation: PlanetSituation, planet: Planet) {
  planet.situation = situation;

  alert(
    `A situação do planeta ${planet.name} foi atualizada para ${situation}`
  );
}

function addSatellite(name: string, planet: Planet) {
  planet.satellites.push(name);
  alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}`);
}

function removeSatellite(name: string, planet: Planet) {
  planet.satellites = planet.satellites.filter(
    (satellite) => satellite !== name
  );
  alert(`O satálite ${name} foi removido do planeta ${planet.name}`);
}

function prompSituation() {
  let situation: PlanetSituation = "";
  let validSituation = false;

  while (!validSituation) {
    const situationInput = prompt(
      "Informe a situação do planeta:\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado"
    );

    switch (situationInput) {
      case "1":
        situation = "Habitado";
        validSituation = true;
        break;
      case "2":
        situation = "Habitável";
        validSituation = true;
        break;
      case "3":
        situation = "Inabitável";
        validSituation = true;
        break;
      case "4":
        situation = "Inexplorado";
        validSituation = true;
        break;
      default:
        alert("Situação inválida!");
        break;
    }
  }

  return situation;
}

function promptPlanet(callbackFn: (planet: Planet) => void) {
  const planetName = String(prompt("Informe o nome do planeta:"));
  const planet = findPlanet(planetName);

  if (planet) {
    callbackFn(planet);
  } else {
    alert("Planeta não encontrado");
  }
}

function firstOption() {
  const name = String(prompt("Informe o nome do planeta:"));
  const coordA = Number(prompt("Informe a primeira coordenada"));
  const coordB = Number(prompt("Informe a segunda coordenada"));
  const coordC = Number(prompt("Informe a terceira coordenada"));
  const coordD = Number(prompt("Informe a quarta coordenada"));

  const situation = prompSituation();
  const confirmation = confirm(
    `Confirma o registro do planeta ${name}?\nCoordenadas: (${coordA}, ${coordB}, ${coordC}, ${coordD})\nSituação: ${situation}`
  );

  if (confirmation) {
    addPlanet(name, [coordA, coordB, coordC, coordD], situation);
  }
}

function secondOption() {
  promptPlanet((planet) => {
    const situation = prompSituation();
    updateSituation(situation, planet);
  });
}

function thirdOption() {
  promptPlanet((planet) => {
    const satellite = String(prompt("Informe o nome do satétile"));
    addSatellite(satellite, planet);
  });
}

function fourthOption() {
  promptPlanet((planet) => {
    const satelliteRemove = String(
      prompt("Informe o nome do satétile a ser removido")
    );
    removeSatellite(satelliteRemove, planet);
  });
}

function fifthOption() {
  let list = "Planetas:\n";
  planets.forEach((planet) => {
    list += `
				Nave: ${planet.name}
				Coordenadas: ${planet.coordinates}
				Situação ${planet.situation}
				Satélites: ${planet.satellites.length}
			`;
    planet.satellites.forEach((sat) => {
      list += `    - ${sat}\n`;
    });
  });
  alert(list);
}

let option = 0;

while (option !== 5) {
  const menu = `Menu\n1 - Registrar um planeta\n2 - Atualizar situação do planeta\n3 - Adicionar um satélite ao planeta\n4 - Remover um satélite ao planeta\n5 - Listar planetas\n6 - Encerrar`;
  option = Number(prompt(menu));
  switch (option) {
    case 1:
      firstOption();
      break;
    case 2:
      secondOption();
      break;
    case 3:
      thirdOption();
      break;
    case 4:
      fourthOption();
      break;
    case 5:
      fifthOption();
      break;
    case 6:
      alert("Encerrando o sistema...");
      break;
    default:
      alert("Opção inválida! Retornando ao painel principal...");
      break;
  }
}
