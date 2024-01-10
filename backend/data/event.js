const fs = require('node:fs/promises');

const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');

async function readData() {
  const data = await fs.readFile('events.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('events.json', JSON.stringify(data));
}

async function getAll(type) {
  const storedData = await readData();
  let place
  type === 'students'? place = 0 : place = 1 
  if (!storedData[place][`${type}`]) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData[place][`${type}`];
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.students || storedData.students.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const student = storedData.students.find((ev) => ev.id === id);
  if (!student) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return student;
}

async function add(data) {
  const storedData = await readData();
  storedData[0]['students'].unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.students || storedData.students.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.students.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.students[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.students.filter((ev) => ev.id !== id);
  await writeData({students: updatedData});
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;