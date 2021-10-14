export const Business = (businessObject) => {
  const { 
    companyName, 
    addressFullStreet,
    addressCity,
    addressStateCode,
    addressZipCode
  } = businessObject;

  return `
    <h2>${companyName}</h2>
    <div>${addressFullStreet}</div>
    <div>${addressCity}, ${addressStateCode} ${addressZipCode}</div>
  `;
}