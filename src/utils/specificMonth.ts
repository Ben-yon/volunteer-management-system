const monthNames: string[] = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function getPreviousMonthName(): string {
    const date = new Date();
    date.setMonth(date.getMonth() - 1); 
  
    return monthNames[date.getMonth()];
  }
  
export function getCurrentMonthName(): string {
    const date = new Date();
    date.setMonth(date.getMonth()); 
  
    return monthNames[date.getMonth()];
  }
  
  
  