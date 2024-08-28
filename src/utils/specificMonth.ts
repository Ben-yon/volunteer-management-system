export function getPreviousMonthName(): string {
    const date = new Date();
    date.setMonth(date.getMonth() - 1); // Move to the previous month
  
    const monthNames: string[] = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    return monthNames[date.getMonth()];
  }
  
export function getCurrentMonthName(): string {
    const date = new Date();
    date.setMonth(date.getMonth()); // Move to the previous month
  
    const monthNames: string[] = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    return monthNames[date.getMonth()];
  }
  
  
  