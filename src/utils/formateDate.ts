export const formatDate =(dateString:any)=>{
// Convert the ISO string to a Date object
const inputDate = new Date(dateString);

// Define options for formatting the output date
const options:any = { year: 'numeric', month: 'long', day: 'numeric' };

// Format the output date using the options
const outputDateString = inputDate.toLocaleDateString('en-US', options);

return outputDateString
}