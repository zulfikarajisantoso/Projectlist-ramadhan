const paginate = (followers) => {
  const itemperpage = 12;
  const numberofpage = Math.ceil(followers.length / itemperpage);

  const newfoll = Array.from({ length: numberofpage }, (_, index) => {
    const start = index * itemperpage;
    return followers.slice(start, start + itemperpage);
  });
  return newfoll;
};

export default paginate;
