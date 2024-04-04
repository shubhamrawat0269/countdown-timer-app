const userDOB1 = "02/04/2000";
const userDOB2 = "03/06/1998";

// format should be --> MM/DD/YYYY or YYYY/MM/DD, Note:  DD/MM/YYYY format is not acceptable by Date consturctor
const userDate1 = new Date(userDOB1.split("/").reverse().join("/"));
const userDate2 = new Date(userDOB2.split("/").reverse().join("/"));

// console.log({ userDate1, userDate2 });

// console.log(userDate1.getTime());
// console.log(userDate2.getTime());

const result = userDate1.getTime() - userDate2.getTime();

if (result < 0) {
  console.log("User 1 is younger");
} else {
  console.log("User 2 is younger");
}
