import Team from '../team.js';
import Bowman from '../bowman.js';
import Swordsman from '../swordsman.js';
import Magician from '../magician.js';
import Daemon from '../daemon.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

describe('class Team should:', () => {
  test('add character to the team', () => {
    const testPerson = new Bowman('Testname');
    const testTeam = new Team();
    testTeam.add(testPerson);
    expect(testTeam.members.has(testPerson)).toBe(true);
  });

  test('make unpossible to add the same character twice', () => {
    const testPerson = new Swordsman('Testname');
    const testTeam = new Team();
    testTeam.add(testPerson);
    expect(() => {
      testTeam.add(testPerson);
    }).toThrow(
      'Добавление невозможно.Такой персонаж уже является членом Вашей команды.'
    );
  });

  test(' be able to add many characters to the team (addAll)', () => {
    const testPerson1 = new Magician('Testname');
    const testPerson2 = new Daemon('Testname');
    const testPerson3 = new Undead('Testname');
    const testTeam = new Team();
    testTeam.addAll(testPerson1, testPerson2, testPerson3);
    expect(testTeam.members.size).toEqual(3);
  });

  test('check characters to be added are unique', () => {
    const testPerson1 = new Magician('Testname');
    const testPerson2 = new Daemon('Testname');
    const testPerson3 = new Undead('Testname');
    const testPerson4 = new Zombie('Testname');
    const testTeam = new Team();
    testTeam.add(testPerson1);
    testTeam.add(testPerson2);
    testTeam.add(testPerson3);
    testTeam.add(testPerson4);
    testTeam.addAll(testPerson1, testPerson2, testPerson3);
    expect(testTeam.members.size).toEqual(4);
  });

  test('make array from Set TestTeam', () => {
    const testPerson1 = new Magician('Testname');
    const testPerson2 = new Daemon('Testname');
    const testPerson3 = new Undead('Testname');
    const testPerson4 = new Zombie('Testname');
    const testTeam = new Team();
    testTeam.addAll(testPerson1, testPerson2, testPerson3, testPerson4);
    const array = testTeam.toArray();
    expect(array).toEqual([testPerson1, testPerson2, testPerson3, testPerson4]);
  });
});
