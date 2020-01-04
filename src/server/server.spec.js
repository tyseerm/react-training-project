import { addNewSkill, updateSkill } from "./server";

(async function testAddSkill() {
  await addNewSkill({
    id: "s1234",
    owner: "e1",
    name: "angularjs",
    years: 3
  });

  await updateSkill({
    id: "s1234",
    owner: "e1",
    name: "angular",
    years: 5
  });
})();
