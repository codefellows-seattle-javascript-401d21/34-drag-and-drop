const validate = (data) => {
  if(!data) return false;
  let {id, timeStamp, name, amount} = data;
  if (!id || !timeStamp || (!name && !amount)) return false;
  return true;
};

const  renderIf = (item) => {
  let itemCheck = item; 
  if (Array.isArray(item)) itemCheck = item.length;
  if(!itemCheck) return;
  return item;
};

export {validate, renderIf};

