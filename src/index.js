module.exports = function check(string, bracketsConfiguration) {
   let i, l=string.length,  character,  last, stack=[];

  for(i=0; i<l; i++){
      character=string[i];
      if(character=="{" || character=="("){
          stack.push(character);
          last=character;
      }else if(character == '}' || character == ")"){
          if(last){
              if((character == '}' && last == "{") || (character == ')' && last == '('))
              {
                  stack.pop();
                  last = stack.length > 0 ? stack[stack.length - 1] : undefined;
              }
          }else{
              return false;
          }
      }
  }
  return stack.length==0;
}
