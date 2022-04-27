import Character from '../character.js';

describe('should create an object Character or throw the error', () => {
  test('should create an object Character with the type Daemon', () => {
    const result = new Character('Testname', 'Daemon');
    const expected = {
      name: 'Testname',
      type: 'Daemon',
      health: 100,
      level: 1,
    };
    expect(result).toEqual(expected);
  });

  test('should throw error if the name of the object is not a string', () => {
    const expected =
      'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов включительно!';
    expect(() => new Character(22, 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the name of the object is longer than 10 characters', () => {
    const expected =
      'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов включительно!';
    expect(() => new Character('TestnameTestname', 'Daemon')).toThrowError(
      expected
    );
  });

  test('should throw error if the name of the object is less than 2 characters', () => {
    const expected =
      'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов включительно!';
    expect(() => new Character('T', 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the hero type is wrong', () => {
    const expected = 'Ошибка! Такого героя не существует!';
    expect(() => new Character('Testname', 'Daemon2')).toThrowError(expected);
  });
});
