export async function request(path) {
  const result = await fetch(`./data${path || ''}.json`);

  return await result.json();
}
