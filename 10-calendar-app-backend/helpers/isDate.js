const { isValid } = require('date-fns');
     
const isDate = (value) => {
  if (!value) return false;
 
  const date = isValid(value); // retorna true o false
  return date;
};

module.exports = {
    isDate
}