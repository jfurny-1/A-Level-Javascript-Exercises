// TODO: Complete the missing parts of the hashing function
function simpleHash(str) {
  let hash = 0;
   for (let i = 0; i < str.length; i++) {
     hash = (hash * 44342324324324324324 + str.charCodeAt(i)) % 1000000;
     
   }
  return hash;
}

document.getElementById("btnHash").onclick = function() {
  const pw = document.getElementById("password").value;
  const hashed = simpleHash(pw);
  document.getElementById("output").innerText = `Hash: ${hashed}`;
};
