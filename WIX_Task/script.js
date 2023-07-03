const END_POINT =
  "https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/sheets";
const data = {};
const sheetsContainer = document.getElementById("sheets");

const createSheet = (sheets) => {
  const div = document.createElement("div");
  div.classList.add("sheet-card");
  sheetsContainer.append(div);

  const sheetId = document.createElement("h1");
  sheetId.innerHTML = sheets.id;
  const sheetData = document.createElement("p");
  sheetData.innerHTML = sheets.data;


  div.append(sheetId, sheetData)

};

const fetchProducts = async () => {
  try {
    const response = await fetch(END_POINT);
    if (response.ok) {
      data.fetched = await response.json();
      data.fetched.sheets.forEach((sheet)=> createSheet(sheet));
    }
  } catch (error) {
    console.error(error);
  }
};

fetchProducts();



