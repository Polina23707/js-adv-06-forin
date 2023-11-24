
export default function orderByProps(object, property) {
  let initialOrfer = [];
  let standardOrder = [];

  for (const item in property) {
    let newObject = {key: property[item] , value: object[property[item]]};      
    initialOrfer.push(newObject);  
  }

  for (const prop in object) {
    if (!property.includes(prop)) {
      let newObject = {key: prop , value: object[prop]};
      standardOrder.push(newObject);
    }
  }

  standardOrder.sort((a, b) => a.key > b.key ? 1 : -1);
  return [...initialOrfer, ...standardOrder];
}