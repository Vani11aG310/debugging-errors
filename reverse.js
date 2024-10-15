var input = process.argv[2];
const reverse = function(original)  {
  const reverseList = original.split("")
  return (reverseList.reverse().join(""));
}
if (input) {
  console.log(reverse(input));
}