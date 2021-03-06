const { ok, created } = require('huncwot/response');
const db = require('huncwot/db');

async function browse(request) {
  const results = await db('widgets');

  return ok(results);
}

async function read(request) {
  const { id } = request.params;

  const result = await db('widgets').where({ id });
  return ok(result);
}

async function edit(request) {
  const { id, name } = request.params;

  await db('widgets').where({ id }).update({ name });

  return ok({ status: `success: ${id} changed to ${name}` });
}

async function add(request) {
  const { name } = request.params;

  await db('widgets').insert({ name });

  return created({ status: `success: ${name} created` });
}

async function destroy(request) {
  const { id } = request.params;

  await db('widgets').where({ id }).del();

  return ok({ status: `success: ${id} destroyed` });
}

module.exports = { browse, read, edit, add, destroy }
