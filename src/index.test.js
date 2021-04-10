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
