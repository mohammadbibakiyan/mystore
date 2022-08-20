export const changeObjectValueType=(obj,type,...fields)=>{
    Object.keys(obj).forEach(el => {
      if (fields.includes(el)) obj[el] = type(obj[el]);
    });
    return obj
};
