export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message}, (${res.status})`);

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getMultipleJSON = async function (urls) {
  const promises = urls.map(getJSON);
  const res = await Promise.all(promises);

  return res;
};
