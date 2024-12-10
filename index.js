// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  function superbowlWin(record) {
    const win = record.find(game => game.result === "W"); // Find the first win
    return win ? win.year : undefined; // Return year if win exists, otherwise undefined
  }
  
  // Testing the function
  console.log(superbowlWin(record)); 
  