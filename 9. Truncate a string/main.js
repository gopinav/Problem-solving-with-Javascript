function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));