const returnTotalPrice = (a, b) => a * b;
const isInt = (n) => {
  return n % 1 === 0;
};
const fetchData = (url) => {
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res;
      }
      throw Error(res.status);
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export { returnTotalPrice, isInt, fetchData };
