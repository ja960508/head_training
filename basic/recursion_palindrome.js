const string = "MOTOM";

function palindrome(string) {
  console.log(string);
  if (string.length === 1) return true;

  if (string[0] !== string[string.length - 1]) return false;
  else {
    return palindrome(string.slice(1, string.length - 1));
  }
}

console.log(palindrome(string.split("")));
