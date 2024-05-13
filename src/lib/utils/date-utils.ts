import NepaliDate from "nepali-date-converter";

/**
 * This function receives BS. dob as string in YYYY-MM-DD and return age
 * @param dob
 * @returns
 */
export function calculateAge(dob: string) {
  const [year, month, day] = dob.split("-");
  if (year.length != 4) {
    return 5;
  }

  let date = new NepaliDate(Number(year), Number(month), Number(day));
  let engDateObj = date.getAD();

  const birthYearAD = date.getAD().year;
  const today = new Date();

  let age = today.getFullYear() - birthYearAD;
  const monthDifference = today.getMonth() - engDateObj.month;
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < engDateObj.date)
  ) {
    age--;
  }
  return age;
}

export function getEnglishDate(nepaliDate: string) {
  const [year, month, day] = nepaliDate.split("-");
  let date = new NepaliDate(Number(year), Number(month), Number(day));
  const engYear = date.getAD().year;
  const engMonth = date.getAD().month;
  const engDay = date.getAD().date + 1;
  return getDateObject(`${engYear}-${engMonth}-${engDay}`);
}

export function getDateObject(value: string) {
  const hey = new Date(value).toISOString();
  return hey;
}
