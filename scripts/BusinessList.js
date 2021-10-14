import { getBusinesses } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const businessContentTarget = document.querySelector(".businesses");

const newYorkBusinessContentTarget = document.querySelector(".businessList--newYork");

const manufacturingBusinessContentTarget = document.querySelector(".businessList--manufacturing");

export const BusinessList = () => {

  // Get all businesses ---------------------------------------------------------------------------
  // const businessArray = getBusinesses();

  // businessContentTarget.innerHTML = "<h1>Active Businesses</h1>";

  // businessArray.forEach( businessObj => businessContentTarget.innerHTML += Business(businessObj) );
  // ----------------------------------------------------------------------------------------------

  // Get all businesses in New York ---------------------------------------------------------------
  // const newYorkBusinessArray = getBusinesses().filter(b => b.addressStateCode === 'NY');

  // newYorkBusinessContentTarget.innerHTML = "<h1>New York Businesses</h1>";

  // newYorkBusinessArray.forEach( businessObj => newYorkBusinessContentTarget.innerHTML += Business(businessObj) );
  // ----------------------------------------------------------------------------------------------

  // Get all manufacturing businesses -------------------------------------------------------------
  const manufacturingBusinessArray = getBusinesses().filter(b => b.companyIndustry === 'Manufacturing');

  manufacturingBusinessContentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>";

  manufacturingBusinessArray.forEach( businessObj => manufacturingBusinessContentTarget.innerHTML += Business(businessObj) );
  // ----------------------------------------------------------------------------------------------
}