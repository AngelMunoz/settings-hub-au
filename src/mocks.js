
export const tileList = [
  {
    name: 'Boots',
    price: 15.50,
    description: 'Exclusive mega ultra cool boots for someone like you!',
    id: 1
  },
  {
    name: 'Fancy TV',
    price: 250.45,
    description: 'Some kind of Fancy tv, it must have wheels or something',
    id: 2
  },
  {
    name: 'Phone',
    price: 1000,
    description: 'A Clearly overpiced ohone that you will buy anyways!',
    id: 3
  },
  {
    name: 'Pizza',
    price: 10.50,
    description: 'Might not be the best, but sure you will want more!',
    id: 4
  },
  {
    name: 'Book',
    price: 20.23,
    description: 'It only has words, but that\'s the cool thing about it!',
    id: 5
  }
];


export async function mockService(resource, ms = 200) {
  await new Promise(resolve => setTimeout(() => resolve(), ms));
  switch (resource) {
    case 'tiles':
      return tileList;
  }
}

export async function mockGetTile(id, ms = 200) {
  await new Promise(resolve => setTimeout(() => resolve(), ms));
  return tileList.find(f => f.id === id);
}