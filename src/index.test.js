import objectLeaves from './index';

const src = {
  foo: 'bar',
  array: [
    {
      name: 'John',
      lastName: 'Doe',
    },
    [
      {
        person: {
          name: 'Jane',
          age: 20,
          dogs: [
            { name: 'Mandy' },
            { name: 'Cyndy' },
          ],
          isHappy: true,
        },
      },
      {
        oranges: 10,
      },
    ],
  ],
  1: 'number',
  true: 'boolean',
};

const expected = [
  'foo',
  'array[0].name',
  'array[0].lastName',
  'array[1][0].person.name',
  'array[1][0].person.age',
  'array[1][0].person.dogs[0].name',
  'array[1][0].person.dogs[1].name',
  'array[1][0].person.isHappy',
  'array[1][1].oranges',
  '1',
  'true',
];

test('objectLeaves must get all leaves', () => {
  const actual = objectLeaves(src);
  expect(actual.sort()).toEqual(expected.sort());
});

test('objectLeaves must return an empty array', () => {
  const stringValue = objectLeaves('ciao');
  const numberValue = objectLeaves(21);
  const booleanValue = objectLeaves(true);
  const emptyArray = objectLeaves([]);
  const emptyObject = objectLeaves({});
  const nullObject = objectLeaves(null);
  const undefinedValue = objectLeaves(undefined);

  expect(stringValue).toEqual([]);
  expect(numberValue).toEqual([]);
  expect(booleanValue).toEqual([]);
  expect(emptyArray).toEqual([]);
  expect(emptyObject).toEqual([]);
  expect(nullObject).toEqual([]);
  expect(undefinedValue).toEqual([]);
});
