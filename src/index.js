module.exports = function check(str, bracketsConfig) {
    let i, l=str.length,  char,  last, stack=[];

  for(i=0; i<l; i++){
      char=str[i];
      if(char=="{" || char=="("){
          stack.push(char);
          last=char;
      }else if(char == '}' || char == ")"){
          if(last){
              if((char == '}' && last == "{") || (char == ')' && last == '('))
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
